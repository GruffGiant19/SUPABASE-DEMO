/* ─────────────────────────────────────────────────────────────────────────────
   🔑  SUPABASE CONFIG  — shared across all pages
   Paste your own values from:
     Supabase Dashboard → Your Project → Project Settings → API
───────────────────────────────────────────────────────────────────────────── */
const SUPABASE_URL = "https://qnymrddqjbvhpwcpvmdx.supabase.co"; // e.g. https://xyzcompany.supabase.co
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFueW1yZGRxamJ2aHB3Y3B2bWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MTc2ODksImV4cCI6MjA5ODM5MzY4OX0.z2tBnWrDf-nY7Rhh-Vm24Kr5Gozj2G4E9LaAOvEsIwE"; // the public "anon" key

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
