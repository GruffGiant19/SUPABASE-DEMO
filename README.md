# Supabase Auth Demo

A minimal signup/login demo app that proves a working Supabase auth connection, with a personalized confetti welcome screen.

## Pages

- `index.html` — entry point
- `signup.html` — Name, Email, Password → creates a Supabase user
- `login.html` — Email, Password → signs in an existing user
- `welcome.html` — shown after a successful auth session; greets the user by name and fires a confetti burst

## Tech stack

- Plain HTML/CSS (Tailwind via CDN) and vanilla JS — no build step
- [Supabase JS client](https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2) via CDN
- [canvas-confetti](https://cdn.jsdelivr.net/npm/canvas-confetti@1) via CDN

## Setup

1. Create a project at [supabase.com](https://supabase.com).
2. In `supabase-config.js`, paste your own `SUPABASE_URL` and `SUPABASE_ANON_KEY` from **Project Settings → API**.
3. Open `index.html` in a browser (no server required).

## Notes

This is a learning project, not a production app — it runs entirely client-side against Supabase with no backend server.
