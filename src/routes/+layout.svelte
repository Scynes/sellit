<script>
	import '../app.css';
	import Sidebar from '$lib/components/base/Sidebar.svelte';
	import Nav from '$lib/components/base/Nav.svelte';
	import Content from '$lib/components/base/Content.svelte';
	import Auth from '../lib/components/Auth.svelte';
	import { user } from '../stores/authStore.js';
	import { supabase } from '../lib/utils/supabase';
	console.log(supabase.auth.user);
	// user.set(supabase.auth.user());
	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
		if (session?.user) {
		}
	});
</script>

<div
	id="page-container"
	class="grid h-full"
>
	<Nav />
	<Sidebar />
	<Content>
		<slot />
	</Content>
</div>
