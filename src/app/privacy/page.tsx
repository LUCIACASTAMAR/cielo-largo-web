import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacidad | Cielo Largo",
  description: "Información sobre el tratamiento de datos al solicitar una reserva en Cielo Largo."
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="privacy-shell">
        <a className="privacy-back" href="/">← Volver a Cielo Largo</a>
        <p className="privacy-eyebrow">CIELO LARGO · RESTAURANTE ASIÁTICO</p>
        <h1>Política de privacidad</h1>
        <p className="privacy-warning"><strong>Aviso:</strong> esta es una versión informativa provisional. Antes de publicar la web de forma definitiva, el titular debe completar y validar su identidad legal, NIF, dirección postal, correo de contacto y plazo de conservación.</p>
        <h2>1. Responsable del tratamiento</h2>
        <p>El responsable es el titular del restaurante Cielo Largo. Los datos identificativos y de contacto del responsable deben incorporarse aquí antes de la publicación definitiva.</p>
        <h2>2. Datos que se recogen</h2>
        <p>Cuando solicitas una reserva, el formulario recoge nombre y apellidos, teléfono, correo electrónico, fecha y hora solicitadas, número de comensales y observaciones que decidas incluir.</p>
        <h2>3. Finalidad y base jurídica</h2>
        <p>Los datos se utilizan para tramitar la solicitud, comprobar disponibilidad y contactar contigo para comunicar si el restaurante puede aceptarla. La solicitud no constituye una reserva confirmada. La base jurídica prevista es la adopción de medidas precontractuales a petición de la persona interesada y, cuando corresponda, el consentimiento para el tratamiento de los datos enviados.</p>
        <h2>4. Destinatarios y proveedores</h2>
        <p>La información de las solicitudes se almacena en Supabase. Si el restaurante configura notificaciones por correo, puede utilizarse Resend para enviar avisos al establecimiento. No se venden los datos personales. El responsable debe revisar los contratos, ubicaciones de tratamiento y garantías aplicables a estos proveedores.</p>
        <h2>5. Conservación</h2>
        <p>Los datos se conservarán durante el tiempo necesario para gestionar la solicitud y atender posibles responsabilidades. El responsable debe establecer y publicar un plazo concreto de conservación y los criterios para determinarlo.</p>
        <h2>6. Tus derechos</h2>
        <p>Puedes solicitar el acceso, rectificación, supresión, oposición, limitación del tratamiento y, cuando proceda, portabilidad de tus datos. Para ejercerlos, debe facilitarse un correo o dirección postal de contacto del responsable. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>
        <h2>7. Seguridad</h2>
        <p>El acceso de escritura a las solicitudes se realiza desde el servidor. No incluyas datos especialmente sensibles en el campo de observaciones.</p>
        <p className="privacy-updated">Última revisión: noviembre de 2026.</p>
      </div>
    </main>
  );
}
