import { writable } from 'svelte/store';
import { getSupabaseConnection } from "./src/utils/supabase.js";

export const user = writable(null);

export const session = getSupabaseConnection().get().auth.session();

export const login = async (email, password) => {

    const { error } = await getSupabaseConnection().get().auth.signIn({
        email,
        password,
    });

    if (error) throw error;
};

export const logout = async () => {

    const { error } = await getSupabaseConnection().get().auth.signOut();

    if (error) throw error;
};

getSupabaseConnection().get().auth.onAuthStateChange((event, session) => {

    if (event === 'SIGNED_IN') {
        
        user.set(session.user);

        } else {
            
        user.set(null);
    }
});
