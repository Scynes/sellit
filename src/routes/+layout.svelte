<script>
	import '../app.css';
	import Sidebar from '../lib/Sidebar.svelte';
	import Nav from '../lib/Nav.svelte';
	import Content from '../lib/Content.svelte';
</script>

<div id="page-container" class="grid h-full">
	<Nav />
	<Sidebar />
	<Content>
		<slot />
	</Content>
</div>
