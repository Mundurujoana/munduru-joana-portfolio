# Munduru Joana – Portfolio

This Next.js portfolio includes a database-backed contact form and a protected
administrator inbox. Contact messages are stored in Supabase; the Supabase
service-role key is only used by server-side code.

## Run locally

```sh
npm install
npm run dev
```

The app runs at http://localhost:3000.

Edit `data/portfolio.ts` to update the profile, projects, and experience. Add your CV at `public/Munduru-Joana-CV.pdf`.

## Contact inbox setup

1. Create a Supabase project and copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`,
   `SUPABASE_SERVICE_ROLE_KEY`, and `SUPABASE_ADMIN_EMAIL`. The publishable
   key is safe to use in the browser; the service-role key must never use a
   `NEXT_PUBLIC_` prefix. `NEXT_PUBLIC_SUPABASE_ANON_KEY` is also accepted
   for projects that still use the legacy key name.
3. Run both SQL migrations in `supabase/migrations` in the Supabase SQL Editor.
4. In Supabase Authentication, disable public sign-ups and create or invite the
   administrator account whose email matches `SUPABASE_ADMIN_EMAIL`.
5. Restart the Next.js server after setting environment variables.

The admin inbox is at `/admin/messages`; sign in at `/admin/login`. Only the
configured administrator email can view or manage enquiries. The form endpoint
validates inputs server-side, rejects cross-origin requests, and uses a hidden
honeypot field as basic spam protection. The public database role is limited
to inserting message fields; reading, updating, and deleting messages remain
restricted to server-side admin operations.

## Optional integrations

- **Email notifications:** Create a Resend account, verify a sender domain, and
  set `RESEND_API_KEY`, `CONTACT_NOTIFICATION_TO`, and
  `CONTACT_NOTIFICATION_FROM`. A failed notification is logged server-side;
  it does not discard an already-saved enquiry.
- **Live chat:** Create a Tawk.to property and set
  `NEXT_PUBLIC_TAWK_PROPERTY_ID` (and optionally
  `NEXT_PUBLIC_TAWK_WIDGET_ID`). The widget is loaded separately from the
  WhatsApp button.

`.env.local` is ignored by Git; keep all environment-specific credentials there
and never commit it. Without the Supabase environment variables and migrations, the contact form
returns an availability error and the inbox cannot be used. Do not deploy the
service-role key to client-side code.
