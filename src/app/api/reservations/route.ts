import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
 customer_name:z.string().trim().min(2).max(100),
 phone:z.string().trim().min(6).max(30),
 email:z.email(),
 reservation_date:z.iso.date(),
 reservation_time:z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
 guests:z.coerce.number().int().min(1).max(20),
 notes:z.string().max(1000).optional().default(""),
 locale:z.string().max(8).optional().default("es"),
 privacy_consent:z.string().optional()
});
export async function POST(req:Request){
 try{
  const body=await req.json(); const parsed=schema.safeParse(body);
  if(!parsed.success)return NextResponse.json({error:"Datos de reserva no válidos."},{status:400});
  if(!parsed.data.privacy_consent)return NextResponse.json({error:"Es necesario aceptar la política de privacidad."},{status:400});
  const dateTime=new Date(parsed.data.reservation_date+"T"+parsed.data.reservation_time+":00");
  if(Number.isNaN(dateTime.getTime())||dateTime.getTime()<Date.now())return NextResponse.json({error:"Selecciona una fecha y hora futuras."},{status:400});
  const url=process.env.SUPABASE_URL; const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!url||!key)return NextResponse.json({error:"El sistema de reservas aún no está configurado."},{status:503});
  const supabase=createClient(url,key,{auth:{persistSession:false}});
  const {data,error}=await supabase.from("reservations").insert({
   customer_name:parsed.data.customer_name,phone:parsed.data.phone,email:parsed.data.email,
   reservation_date:parsed.data.reservation_date,reservation_time:parsed.data.reservation_time,
   guests:parsed.data.guests,notes:parsed.data.notes,status:"pending",locale:parsed.data.locale
  }).select("id").single();
  if(error)throw error;
  if(process.env.RESEND_API_KEY&&process.env.RESTAURANT_RESERVATION_EMAIL){
   try {
    const resend=new Resend(process.env.RESEND_API_KEY);
    const sent=await resend.emails.send({from:process.env.RESEND_FROM_EMAIL||"Cielo Largo <reservas@resend.dev>",to:process.env.RESTAURANT_RESERVATION_EMAIL,subject:"Nueva solicitud de reserva · Cielo Largo",html:`<h2>Nueva solicitud de reserva</h2><p><b>Cliente:</b> ${escapeHtml(parsed.data.customer_name)}</p><p><b>Teléfono:</b> ${escapeHtml(parsed.data.phone)}</p><p><b>Fecha:</b> ${parsed.data.reservation_date} · ${parsed.data.reservation_time}</p><p><b>Personas:</b> ${parsed.data.guests}</p><p><b>Observaciones:</b> ${escapeHtml(parsed.data.notes)}</p><p>Estado: pendiente de confirmación. Ref: ${data.id}</p>`});
    if(sent.error)console.error("Reservation email failed",sent.error);
   } catch(emailError){console.error("Reservation email failed",emailError);}
  }
  return NextResponse.json({id:data.id,status:"pending"},{status:201});
 }catch(e){console.error("Reservation request failed",e);return NextResponse.json({error:"No se ha podido registrar la solicitud."},{status:500});}
}
function escapeHtml(value:string){return value.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));}
