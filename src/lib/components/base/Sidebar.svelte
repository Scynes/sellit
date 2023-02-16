<script>
	import '../../../app.css';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Button,
		Heading,
		Secondary,
		P,
		Mark,
		Drawer,
		CloseButton,
		SidebarBrand,
		SidebarCta,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
	} from 'flowbite-svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap w-auto';
	let asideClass = 'w-auto';
	import { sineIn } from 'svelte/easing';
	let hidden2 = true;
	//   let spanClass = 'flex-1 ml-3 whitespace-nowrap';
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn,
	};
</script>

<div class="text-center">
	<Button on:click={() => (hidden2 = false)}
		><iconify-icon
			icon="charm:menu-hamburger"
			height="36"
		/></Button
	>
</div>
<Drawer
	transitionType="fly"
	{transitionParams}
	bind:hidden={hidden2}
	id="sidebar2"
>
	<div class="flex items-center">
		<h5
			id="drawer-navigation-label-3"
			class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
		>
			Menu
		</h5>
		<CloseButton
			on:click={() => (hidden2 = true)}
			class="mb-4 dark:text-white"
		/>
	</div>
	<Sidebar>
		<SidebarWrapper
			divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800"
		>
			<SidebarGroup>
				<SidebarItem
					label="Home"
					href="/"
				>
					<svelte:fragment slot="icon">
						<iconify-icon
							icon="ic:baseline-cabin"
							height="24"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					label="Add Item"
					href="/create"
				>
					<svelte:fragment slot="icon">
						<iconify-icon
							icon="basil:add-outline"
							height="24"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Your Items">
					<svelte:fragment slot="icon">
						<iconify-icon
							icon="fluent:stack-32-filled"
							height="24"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					label="Inbox"
					{spanClass}
				>
					<svelte:fragment slot="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
							/></svg
						>
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarDropdownWrapper label="SubSellits">
					<svelte:fragment slot="icon">
						<iconify-icon
							icon="material-symbols:store-outline-rounded"
							height="24"
						/>
					</svelte:fragment>
					<SidebarDropdownItem
						label="PC/Hardware"
						href="/communities"
					/>
					<SidebarDropdownItem
						label="Sneakers"
						href="/communities"
					/>
					<SidebarDropdownItem
						label="Cameras/Gear"
						href="/communities"
					/>
				</SidebarDropdownWrapper>

				<SidebarItem label="Sign In">
					<svelte:fragment slot="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
							/></svg
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign Up">
					<svelte:fragment slot="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
							/></svg
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					label="About"
					href="/about"
				>
					<svelte:fragment slot="icon">
						<iconify-icon
							icon="flat-color-icons:about"
							height="24"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>
