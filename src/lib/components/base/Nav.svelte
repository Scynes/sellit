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
	import Login from '../base/Login.svelte';
	import Signup from '../base/Signup.svelte';
	import { supabase } from '../../utils/supabase.js';
	
	let user = null
	let isLoggedIn = false;
  	let error;

  	async function session() {
    const {data, error} = await supabase.auth.getSession()
	if (error) {
      console.log(error.message);
    } else {
      isLoggedIn = true;
      user = data;
    }
  }
	session();
  	

	async function handleLogout() {
    const { error } = await supabase.auth.signOut();
	const { data, err } = await supabase.auth.refreshSession()
    if (error) {
      console.error(error);
    } else {
      alert('You have been logged out');
	  console.log(data)
	  isLoggedIn = false;
	  user = null;
    }
  }

</script>

<Navbar
	let:hidden
	let:toggle
	class="col-span-2 bg-dk-green flex-nowrap"
>
	<NavBrand href="/">
		<img
			src="/images/sellit-logo.png"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span
			class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
		>
			SELLIT
		</span>
	</NavBrand>
	<div class="flex w-3/5">
		<label
			for="search-dropdown"
			class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
			>Your Email</label
		>
		<button
			id="dropdown-button"
			data-dropdown-toggle="dropdown"
			class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
			type="button"
			>SubSellits
			<iconify-icon
				icon="material-symbols:keyboard-arrow-down-rounded"
				height="22"
			/></button
		>
		<div
			id="dropdown"
			class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
		>
			<ul
				class="py-2 text-sm text-gray-700 dark:text-gray-200"
				aria-labelledby="dropdown-button"
			>
				<li>
					<button
						type="button"
						class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>Clothing</button
					>
				</li>
				<li>
					<button
						type="button"
						class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>Shoes</button
					>
				</li>
				<li>
					<button
						type="button"
						class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>Gaming</button
					>
				</li>
				<li>
					<button
						type="button"
						class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>Graphics</button
					>
				</li>
			</ul>
		</div>
		<div class="relative md:w-80 lg:w-4/6 xl:w-5/6 ">
			<input
				type="search"
				id="search-dropdown"
				class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
				placeholder="Search Mockups, Logos, Design Templates..."
				required
			/>
			<button
				type="submit"
				class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				<iconify-icon icon="majesticons:search-line" />
				<span class="sr-only">Search</span>
			</button>
		</div>
	</div>
	<div class="flex md:order-2">
		{#if !isLoggedIn}
		<Login />
		<Signup />
		{:else}
		<Button
				color="green"
				class="mx-2 bg-dk-green text-white"
				size="sm"
				on:click={handleLogout}>
				Log Out
			</Button>
		{/if}
	</div>
</Navbar>
