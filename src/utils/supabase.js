import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public'

export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY)

class SupabaseConnection {

    #SUPABASE_CONNECTION = null;

    constructor(url, secretKey) {

        // Create the supabase instance on construction
        this.#SUPABASE_CONNECTION = createClient(url, secretKey);
    }

    get = () => {
        return this.#SUPABASE_CONNECTION;
    }
}

let CONNECTION = null;

export const instantiate = (url, secretKey) => {
    CONNECTION = new SupabaseConnection(url, secretKey);
}

/**
 * Getter for the {@SupabaseConnection} instance.
 *  
 * @returns @CONNECTION
 */
export const getSupabaseConnection = () => {

    return CONNECTION;
}



