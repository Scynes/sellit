import { createClient } from '@supabase/auth-helpers-sveltekit';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY


export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Table reference mappings.
 */
export const TABLE = {
    items: supabase.from('items')
}
