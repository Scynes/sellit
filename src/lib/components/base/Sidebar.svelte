<script>
	import '../app.css';
	import {
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Heading,
		Secondary,
		P,
		Mark,
	} from 'flowbite-svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap w-auto';
	let asideClass = 'w-auto';
</script>

<div>
	<SidebarWrapper class="h-full left-0 rounded-none">
		<SidebarGroup>
			<SidebarItem label="Home">
				<svelte:fragment slot="icon">
					<iconify-icon
						icon="material-symbols:home-outline-rounded"
						height="24"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem
				href="/create"
				label="Add Item"
			>
				<svelte:fragment slot="icon">
					<iconify-icon
						icon="material-symbols:add-box-outline"
						height="24"
					/>
				</svelte:fragment>
			</SidebarItem>
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
					<iconify-icon
						icon="ic:baseline-attach-money"
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
		</SidebarGroup>
		<SidebarGroup border>
			<SidebarItem
				label="Your SubSellits"
				class="text-lg"
			>
				<svelte:fragment slot="icon">
					<iconify-icon
						icon="la:piggy-bank"
						height="28"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="SubSellit 2">
				<svelte:fragment slot="icon">
					<iconify-icon
						icon="tabler:square-rounded-letter-s"
						height="24"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="SubSellit 1">
				<svelte:fragment slot="icon">
					<iconify-icon
						icon="tabler:square-rounded-letter-s"
						height="24"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="SubSellit 3">
				<svelte:fragment slot="icon">
					<iconify-icon
						icon="tabler:square-rounded-letter-s"
						height="24"
					/>
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
	</SidebarWrapper>
</div>
