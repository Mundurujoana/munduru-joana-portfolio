grant insert (name, email, subject, message)
  on table public.contact_messages to anon, authenticated;

drop policy if exists "Allow public contact message submission"
  on public.contact_messages;

create policy "Allow public contact message submission"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);
