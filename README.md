# Rohit Verma Portfolio

A responsive React + Tailwind CSS portfolio inspired by the supplied dark/cyan reference design.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Main customization

- `src/data.js` — profile, about, expertise, projects, experience, process, testimonials
- `src/components/Hero.jsx` — hero copy, portrait and floating elements
- `src/components/Contact.jsx` — email/location and form
- `public/` — profile photo and CV

### Add your photo

The hero renders `/profile1.webp` (with `/profile1.png` as fallback) directly in `src/components/Hero.jsx`.
Drop a new portrait into `public/` and update those paths. The frame uses
`object-cover object-top`, so use a headshot where you're centered.

### Add your CV

The Download CV button links to `profile.resume` (`public/Resume.pdf`) and force-downloads the file.

To use your own resume: drop it into `public/` (keeping the filename `Resume.pdf` or updating `profile.resume` in `src/data.js`).

### Fill in your details

- `experience` in `src/data.js` — replace the placeholder company names with your real employers.
- `testimonials` in `src/data.js` — replace placeholder names/roles with real client feedback.
- `profile.email` and `profile.phone` — currently placeholders.

## Design

- Premium dark developer portfolio (light mode included)
- Near-black/navy background with subtle cyan gradients
- Restrained glassmorphism, large typography, generous whitespace
- Sections: Hero, About, Expertise, Projects, Experience, Process, Testimonials, Contact
- Subtle animations: scroll reveal, hero load, portrait float, cursor spotlight, project hover zoom


## Supabase Contact Form

The contact form is connected to Supabase and inserts submissions into:

`public.contact_messages`

### 1. Create the table

Open Supabase Dashboard -> SQL Editor and run:

`supabase-contact.sql`

The included Row Level Security policy allows anonymous visitors to INSERT messages but does not allow them to SELECT/read messages.

### 2. Add local environment variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Then add your Supabase project URL and anon/publishable key:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Restart Vite after changing `.env`.

### 3. Install and run

```bash
npm install
npm run dev
```

### 4. Production / Netlify

Add the same two variables under:

Netlify -> Site configuration -> Environment variables

Do NOT put the Supabase `service_role` key in the React app. The browser should only use the public anon/publishable key.

### Email notifications

The current implementation stores every message safely in Supabase. If you also want an email notification whenever a new message arrives, add a Supabase Edge Function + Resend (or another transactional email provider). This keeps email API secrets out of the browser.
