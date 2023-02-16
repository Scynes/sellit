<script>
	import { onMount } from 'svelte';

	const getExample = async () => {
		const response = await fetch('/api/account/register');

		const result = await response.json();

		console.log(result);
	};

	onMount(async () => {
		getExample();
	});
</script>
