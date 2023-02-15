<script>
  import "../app.css";
  import Sidebar from "../lib/Sidebar.svelte";
  import Nav from "../lib/Nav.svelte";
  import Content from "../lib/Content.svelte";
  import { onMount } from "svelte";
  import { supabaseClient } from '../utils/supabase.js'
  import { invalidate } from '$app/navigation'

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
		invalidateAll()
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<div id="page-container" class="grid h-full">
  <Nav />
  <Sidebar />
  <Content>
    <slot />
  </Content>
</div>
