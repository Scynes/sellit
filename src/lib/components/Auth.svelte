<script>
    import {supabase} from '../utils/supabase.js'

    let loading = false
    let email;
    import { Card, Checkbox, Button, Label, Input, Modal, ButtonGroup, InputAddon, ToolbarButton } from 'flowbite-svelte';
    let show = false;
    let formModal = false;

    const handleLogin = async () => {
    try {
      loading = true
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>
