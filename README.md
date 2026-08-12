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

- `src/data.js` — name, role, skills, projects and stats
- `src/components/Hero.jsx` — hero copy and profile image area
- `src/components/Contact.jsx` — email/phone/location and form
- `public/` — profile photo and CV (placeholder files are included so nothing 404s)

### Add your photo

The hero already renders `public/profile.jpeg`, which now holds your real photo:

```jsx
<img
  src="/profile.jpeg"
  alt={profile.name}
  className="absolute inset-0 h-full w-full object-cover object-top"
/>
```

The frame is a tall portrait (305×425), so a square photo is cropped left/right
to fill it. Use a headshot where you're centered, or swap `object-cover` for
`object-contain` to show the whole photo (with empty space top/bottom).

### Add your CV

A placeholder PDF is already at:

`public/Rohit-Verma-Resume.pdf`

The Download CV button points to that path. Replace the file with your real resume.

## Design

- Dark navy background
- Cyan/blue glow accents
- Glassmorphism cards
- Responsive mobile navigation
- Hero, About, Skills, Projects, Process, Testimonials and Contact sections
- No external image dependency


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
