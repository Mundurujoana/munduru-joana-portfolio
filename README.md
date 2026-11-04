# Munduru Joana – Portfolio (Next.js + TypeScript + Tailwind)

## Run
    npm install
    npm run dev        # http://localhost:3000

## Edit your content
All text lives in `data/portfolio.ts`: profile, stack, projects, experience.
Replace the "Sample" projects and experience. Put your CV at `public/Munduru-Joana-CV.pdf`.

## Contact form
`POST /api/contact` validates input and sends email through Nodemailer over Gmail SMTP.
For Gmail, enable 2-Step Verification and create an App Password in your Google Account. Copy `.env.example` to `.env.local`, then set `SMTP_USER` to the sending Gmail address and `SMTP_PASS` to its App Password. Set `CONTACT_TO` to the inbox that should receive messages. Never use your normal Gmail password or commit `.env.local`.

## Live chat
The optional live-chat widget uses Tawk.to. Create a free Tawk.to property and add its Property ID and Widget ID to `.env.local` as `NEXT_PUBLIC_TAWK_PROPERTY_ID` and `NEXT_PUBLIC_TAWK_WIDGET_ID`. Restart the dev server after changing environment variables. The widget is not shown until both IDs are set. Visitors who use live chat communicate through Tawk.to; the contact form remains available as an alternative.

## Deploy with Docker on Render
The included `Dockerfile` builds Next.js in standalone mode. In Render, create a **Web Service**, connect this repository, and select **Docker** as the runtime. Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_TO` under the service's environment variables. Use `smtp.gmail.com`, `465`, and `true` for the first three values. Deploy; Render builds and runs the container from the Dockerfile. Do not add a separate start command.

For local Docker testing, build and run:

```sh
docker build -t munduru-joana-portfolio .
docker run --env-file .env.local -p 3000:3000 munduru-joana-portfolio
```
