# Munduru Joana – Portfolio (Next.js + TypeScript + Tailwind)

## Run
    npm install
    npm run dev        # http://localhost:3000

## Edit your content
All text lives in `data/portfolio.ts`: profile, stack, projects, experience.
Replace the "Sample" projects and experience. Put your CV at `public/Munduru-Joana-CV.pdf`.

## Contact form
`POST /api/contact` validates input and sends email through Resend.
Copy `.env.example` to `.env.local`, add `RESEND_API_KEY`. Without it, messages are logged to the server console.

## Live chat
The optional live-chat widget uses Tawk.to. Create a free Tawk.to property and add its Property ID and Widget ID to `.env.local` as `NEXT_PUBLIC_TAWK_PROPERTY_ID` and `NEXT_PUBLIC_TAWK_WIDGET_ID`. Restart the dev server after changing environment variables. The widget is not shown until both IDs are set. Visitors who use live chat communicate through Tawk.to; the contact form remains available as an alternative.

## Deploy
Push to GitHub, import the repo on vercel.com, and add the environment variables there. Done.
