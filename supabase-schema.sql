-- Project 21 shared progress starter schema.
-- Apply only after reviewing. Do not allow anonymous unrestricted UPDATE access.
create table if not exists public.anniversary_sessions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  current_stage integer not null default 0 check (current_stage between 0 and 5),
  father_complete boolean not null default false,
  mother_complete boolean not null default false,
  is_revealed boolean not null default false
);
alter table public.anniversary_sessions enable row level security;

-- No public policies are added intentionally.
-- Production implementation should use Edge Functions that validate each
-- parent's session token, rate-limit attempts, store only hashes of answers,
-- and advance a stage only after BOTH parent contributions are received.
-- Never put a Supabase service_role key in index.html.
