---
name: supabase-auth-demo
description: Build a simple Supabase-authenticated signup/login demo web app with a personalized confetti welcome screen. Use this whenever the user wants to learn Supabase auth, asks for a "signup/login demo", wants to test/verify a Supabase connection, or wants a minimal starter app wired up to Supabase auth. Always use this skill (instead of improvising a generic auth UI) for these requests, even if the user doesn't mention design or styling explicitly — the skill defines the exact visual design system to use.
---

# Supabase Auth Demo

A small learning project: a single-purpose demo app whose entire job is to prove a working Supabase auth connection. It is NOT a production app — keep it simple, readable, and easy for someone new to Supabase to follow.

## What to build

Three screens, plain HTML/CSS (Tailwind via CDN)/vanilla JS:

1. **Sign up** — fields: Name, Email, Password. On submit, create the Supabase user with `name` stored in `user_metadata`, then sign the user in and route to Welcome.
2. **Log in** — fields: Email, Password. On submit, sign in and route to Welcome.
3. **Welcome** (shown only after a successful auth session exists):
   - Big heading: `Hello, [name]`
   - Subtext: `Your app has been successfully connected to Supabase.` then `Welcome to Supabase` on its own line/emphasis
   - Trigger a confetti burst on page load (via `canvas-confetti` from CDN)
   - A simple "Log out" button that clears the session and returns to Login

Pull `name` from `user.user_metadata.name` (set at signup). If it's ever missing (e.g. user record predates this field), fall back to the email's local part before `@`.

## Tech stack

- Plain HTML files (`index.html` / `login.html` / `signup.html` / `welcome.html`, or a single-page app with JS-driven view switching — single-page is preferred to avoid duplicating the shell/header across files)
- Tailwind CSS via CDN script tag (no build step)
- Supabase JS client via CDN: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`
- `canvas-confetti` via CDN: `https://cdn.jsdelivr.net/npm/canvas-confetti@1`
- No backend server, no bundler — everything runs client-side against Supabase directly

## Supabase setup

- Initialize the client with `SUPABASE_URL` and `SUPABASE_ANON_KEY`. Put these as clearly-labeled constants near the top of the main JS file with a comment telling the user exactly where to paste their own project values (Supabase dashboard → Project Settings → API).
- Use `supabase.auth.signUp({ email, password, options: { data: { name } } })` for signup.
- Use `supabase.auth.signInWithPassword({ email, password })` for login.
- Use `supabase.auth.getSession()` / `onAuthStateChange` to decide which screen to show on load and after auth actions.
- Use `supabase.auth.signOut()` for logout.
- Surface Supabase error messages directly to the user in a small inline error area — don't swallow them, since seeing real errors is part of the learning value here.

## Design system (follow exactly — do not deviate)

This is the part most likely to drift between builds, so be precise:

- **No gradients anywhere.** Flat colors only — no `bg-gradient-*` Tailwind classes, no CSS gradients of any kind.
- **Palette:**
  - Near-white — page background, the dominant surface (e.g. `#FAFAF9`, not pure `#FFFFFF`)
  - Light charcoal grey — card/surface backgrounds that sit on the near-white page, subtle dividers (e.g. `#E7E5E4` / Tailwind `stone-200`-ish)
  - Dark charcoal grey — primary text and headings, for strong contrast against the light background (e.g. `#27272A` / Tailwind `zinc-800`)
  - Orange — the single accent color, used for primary buttons, links, focus rings, and the confetti palette (e.g. `#F97316` / Tailwind `orange-500`)
- **Layout:** near-white page background with a centered card in light charcoal grey (or white with a light charcoal border) sitting on top of it, so the card and orange accents pop against the light backdrop. Generous padding, rounded corners (`rounded-xl` or `rounded-2xl`), subtle border or soft shadow for depth instead of gradients.
- **Typography:** clean sans-serif (system font stack or a single Google Font like Inter), dark charcoal grey for headings/body text, confident heading weight, comfortable line height, no more than two font sizes per screen beyond the heading.
- **Buttons:** solid orange fill with near-white text for primary actions; ghost/outline style (light charcoal border, dark charcoal text) for secondary actions like "switch to login/signup."
- **Inputs:** white or near-white background, light charcoal border, orange focus ring, dark charcoal text with a muted grey placeholder.
- **Confetti colors:** use the same orange plus dark charcoal grey and a lighter charcoal grey for particle colors, so it matches the theme rather than defaulting to rainbow confetti.
- **Things to avoid:** generic purple/blue SaaS-template look, glassmorphism, drop shadows that look like glows, any gradient buttons or gradient text, emoji-heavy copy.

## Build steps

1. Confirm with the user whether they want a single `index.html` with JS-driven view-swapping (default/preferred) or separate HTML files per screen.
2. Scaffold the file with the Tailwind CDN, Supabase CDN, and canvas-confetti CDN script tags.
3. Add the constants block for `SUPABASE_URL` / `SUPABASE_ANON_KEY` with clear placeholder values and a comment on where to find them.
4. Build the three views per the design system above, with JS view-switching logic and auth state handling.
5. Wire up signup, login, logout, and the welcome screen's confetti trigger + dynamic name.
6. Add inline error display for failed auth attempts.
7. Do a final pass to check: no gradients used anywhere, only the four palette colors appear, copy on the welcome screen matches exactly (`Hello, [name]`, `Your app has been successfully connected to Supabase.`, `Welcome to Supabase`).

## Output

Save the file(s) to `/mnt/user-data/outputs/` and present them with `present_files`. Mention to the user that they need to paste in their own `SUPABASE_URL` and `SUPABASE_ANON_KEY`, and that they may need to disable "Confirm email" in their Supabase Auth settings if they want signup to log the user in immediately without email verification (otherwise the welcome screen won't show until they confirm).
