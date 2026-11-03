# Cielo Largo — V2

Next.js website for Cielo Largo with a responsive editorial design and a reservation-request API.

## Local development
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in Supabase credentials.
4. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor.
5. Run `npm run dev`.

## Reservation workflow
The public form creates a `pending` request through `POST /api/reservations`. It does not confirm a table automatically. If Resend and the restaurant email are configured, an email notification is sent to the restaurant.

The owner must review each pending request and contact the customer to confirm or reject it. A dedicated authenticated admin dashboard and customer status emails are not implemented yet.

## Required deployment environment variables
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side only; never prefix with NEXT_PUBLIC)
- `RESTAURANT_RESERVATION_EMAIL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

## Content and launch checklist
- Add the official restaurant logo and approved menu with descriptions/prices.
- Confirm the address, telephone, opening hours and social links.
- Replace illustrative stock photography with licensed restaurant photography.
- Complete and legally validate the privacy notice with the controller's legal identity, contact details and retention period.
- Configure a compliant cookie/consent solution if analytics, advertising or other non-essential technologies are added.
- Review the translations with a native speaker before launch.

## Current implementation notes
- The language selector has interface translations for Spanish, English, French, German, Italian, Portuguese, Dutch, Russian, Polish, Swedish and Traditional Chinese.
- The menu intentionally displays a preparation notice rather than invented dishes or prices.
- The cookie banner is a local-storage notice, not a cookie-consent management platform. No analytics or advertising scripts are installed.
- The privacy page is an informative draft and must be completed with the restaurant operator's legal details before launch.
- The reservation request is stored as pending. There is no authenticated admin dashboard or automated customer confirmation yet.

## Deploy
Use the dedicated `cielo-largo-v2` branch. Set the environment variables above and run the Supabase SQL before enabling live reservations. Configure the real domain only after ownership and DNS access are confirmed.
