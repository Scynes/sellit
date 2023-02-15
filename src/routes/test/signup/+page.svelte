<!-- Login.svelte -->
<script>
    import { getSupabaseConnection } from "/src/utils/supabase.js";

    let email = "";
    let password = "";

    async function handleSubmit(event) {
        event.preventDefault();

        const { user, error } = await getSupabaseConnection.get().auth.signIn({
            email,
            password,
        });

        if (error) {

            console.error(error);

        } else {

            console.log(user);
        }
    }
</script>

<form on:submit={handleSubmit}>
    <label>
        Email:
        <input type="email" bind:value={email} required />
    </label>
    <label>
        Password:
        <input type="password" bind:value={password} required />
    </label>
    <button type="submit">Log in</button>
</form>





