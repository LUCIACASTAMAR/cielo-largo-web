create type public.reservation_status as enum ('pending','confirmed','rejected','cancelled');
create table public.reservations (
 id uuid primary key default gen_random_uuid(),
 customer_name text not null,
 phone text not null,
 email text not null,
 reservation_date date not null,
 reservation_time time not null,
 guests integer not null check (guests between 1 and 20),
 notes text not null default '',
 locale text not null default 'es',
 status public.reservation_status not null default 'pending',
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create index reservations_date_idx on public.reservations(reservation_date);
create index reservations_status_idx on public.reservations(status);
alter table public.reservations enable row level security;
-- No public table policies: all writes are performed by the server API using
-- the service-role key, which must never be exposed to the browser.
