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

## Content still required before public launch
- Official restaurant logo and approved menu with descriptions/prices.
- Confirmed address, telephone, opening hours and social links.
- Licensed restaurant/food photography.
- Verified privacy notice and cookie-management platform/configuration.
- Complete human-reviewed translations for all eleven languages.

The language selector includes eleven options, but only Spanish and English have complete copy in this first scaffold; other languages currently fall back to English. The cookie notice only explains essential technical cookies; it is not a consent-management platform. No analytics or advertising scripts are installed.

## Deploy
Import branch `cielo-largo-v2` from this repository into a NEW Vercel project. Set the environment variables above, run the Supabase SQL, then deploy. Configure the real domain only after ownership and DNS access are confirmed.
