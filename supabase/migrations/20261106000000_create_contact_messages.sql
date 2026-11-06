create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  subject text not null check (char_length(trim(subject)) between 1 and 150),
  message text not null check (char_length(trim(message)) between 1 and 5000),
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

revoke all on public.contact_messages from anon, authenticated;
grant all on public.contact_messages to service_role;

grant insert (name, email, subject, message)
  on public.contact_messages to anon, authenticated;

drop policy if exists "Allow public contact message submission"
  on public.contact_messages;
create policy "Allow public contact message submission"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);
