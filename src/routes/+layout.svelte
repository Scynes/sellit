<script>
  import "../app.css";
  import Sidebar from "$lib/components/base/Sidebar.svelte";
  import Nav from "$lib/components/base/Nav.svelte";
  import Content from "$lib/components/base/Content.svelte";
  import { onMount } from "svelte";
  import supabase from "../utils/supabase";

  onMount(async () => {
    const { user, error } = await supabase.auth.signUp({
      email: "user@example.com",
      password: "password",
    });

    if (error) {
      console.error(error);
    } else {
      console.log(user);
    }
  });
</script>

<div id="page-container" class="grid h-full">
  <Nav />
  <Sidebar />
  <Content>
    <slot />
  </Content>
</div>
