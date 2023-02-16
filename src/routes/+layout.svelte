<script>
  import "../app.css";
  import Sidebar from "$lib/components/base/Sidebar.svelte";
  import Nav from "$lib/components/base/Nav.svelte";
  import Content from "$lib/components/base/Content.svelte";

  import Auth from "../lib/components/Auth.svelte";
//   import { supabase } from "../utils/supabase";
  import { user } from "../lib/stores/authStore";
//   console.log(supabase)
//   user.set(supabase.auth.user())
//   supabase.auth.onAuthStateChange((_, session) => {
// 	user.set(session?.user)
// 	if(session?.user){
// 		console.log('we got this far')
// 	}
//   })
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
