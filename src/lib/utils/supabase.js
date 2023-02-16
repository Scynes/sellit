import { createClient } from '@supabase/supabase-js';
// import dotenv from "dotenv";
// dotenv.config();

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// const supabaseUrl = process.env.DATABASE_URL
// const supabaseAnonKey = process.env.DATABASE_PUBLIC_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
