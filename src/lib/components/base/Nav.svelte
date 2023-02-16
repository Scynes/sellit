<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Input,
	} from 'flowbite-svelte';
</script>

<Navbar
	let:hidden
	let:toggle
	class="col-span-2"
>
	<NavBrand href="/">
		<img
			src="public/img/sellit-logo.png"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span
			class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
		>
			SELLIT
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm">Get started</Button>
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl
		{hidden}
		class="order-1"
	>
		<NavLi
			href="/"
			active={true}>Home</NavLi
		>
		<NavLi href="/communities">Communities</NavLi>
		<NavLi href="/about">About</NavLi>
	</NavUl>
</Navbar>
