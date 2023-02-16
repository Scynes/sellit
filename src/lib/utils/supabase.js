import { createClient } from '@supabase/supabase-js';

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
