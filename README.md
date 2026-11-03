# Cielo Largo — V2

Next.js website for Cielo Largo with a responsive editorial design and a reservation-request flow.

## Local development
1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in Supabase credentials.
4. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor.
5. Run `npm run dev`.

## Reservation workflow
The public form creates a `pending` request through `POST /api/reservations`. It does not confirm a table automatically. If Resend and the restaurant email are configured, an email notification is sent to the restaurant.

The owner must review each pending request and contact the customer to confirm or reject it. A dedicated authenticated admin dashboard and transactional customer status emails are a subsequent implementation step; do not describe those as live yet.

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

The current UI includes English and Spanish copy; the other language options are scaffolded and fall back to English until translations are completed. The cookie notice is a visual consent placeholder, not a certified CMP. Do not use analytics or non-essential tracking until a compliant consent manager is installed and configured.

## Deploy
Import this repository/branch into Vercel, set the environment variables above, and deploy. Run the Supabase SQL before enabling reservations. Configure the real domain after ownership and DNS access are confirmed.
