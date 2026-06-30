/* ─────────────────────────────────────────────────────────────────────────────
   🔑  SUPABASE CONFIG  — shared across all pages
   Paste your own values from:
     Supabase Dashboard → Your Project → Project Settings → API
───────────────────────────────────────────────────────────────────────────── */
const SUPABASE_URL      = 'YOUR_SUPABASE_URL';       // e.g. https://xyzcompany.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';  // the public "anon" key

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
