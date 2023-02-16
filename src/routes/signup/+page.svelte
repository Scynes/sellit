<script>
  import { Card, Checkbox, Button, Label, Input, Modal, ButtonGroup, InputAddon, ToolbarButton } from 'flowbite-svelte';
  import { supabase } from '../../lib/utils/supabase';
  let show = false;
  let formModal = false;
  
  let data;
  let error;

  async function session() {
    const response = await supabase.auth.getSession();
    data = response.data;
    error = response.error;
  }

  session();
</script>


<main>
        {#if data}
            <p>Welcome, {data}</p>
            <h1>hi</h1>
            <form action="/logout" method="POST" >
                <button type="submit" class="btn btn-primary">Logout</button>
            </form>
        {:else}
    <Button on:click={() => formModal = true}>Sign Up</Button>
    <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign Up</h3>
        <form action="?/signup" method="POST" class="auth-form flex flex-col space-y-6">
            <Label class="space-y-2">
                <Input type="email" placeholder="name@flowbite.com" size="md">
                    <svg slot="right" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </Input>
            </Label>
            <div>
                <Label for="show-password" class="mb-2">Your password</Label>
                <Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" size="lg">
                    <button slot="right" on:click={() => (show = !show)} class="pointer-events-auto">
                        {#if show}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
                        {/if}
                    </button>
                </Input>
            </div>
            
            <Button type="submit" class="w-full">Sign Up!</Button>
        </form>
    </Modal>
    {/if}
</main>
