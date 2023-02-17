<script>
	import { Card, Button, Rating, Badge } from 'flowbite-svelte';
</script>

<div
	id="communities-list"
	class="h-full"
>
	<Card
		padding="none"
		class="mx-4"
	>
		<a href="/">
			<img
				class="p-8 rounded-lg"
				src="/images/tj.jpg"
				alt="product 1"
			/>
		</a>
		<div class="px-5 pb-5">
			<a href="/item">
				<h5
					class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
				>
					Salsa Timberjack - Medium
				</h5>
				<p
					class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
				>
					Best aluminum hardtail for trail riding and bike-camping. You won't
					regret ...
				</p>
			</a>
			<div class="flex justify-between items-center">
				<span class="text-3xl font-bold text-gray-900 dark:text-white"
					>$1800</span
				>
				<Button href="/">Contact Seller</Button>
			</div>
		</div>
	</Card>
	<Card padding="none">
		<a href="/">
			<img
				class="p-8 rounded-t-lg"
				src="/images/fb.jpg"
				alt="product 1"
			/>
		</a>
		<div class="px-5 pb-5">
			<a href="/">
				<h5
					class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
				>
					Fujifilm X-T4
				</h5>
				<p
					class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight"
				>
					Nice camera. Very nice. Buy it now. Extra shit included. Can get ...
				</p>
			</a>
			<div class="flex justify-between items-center">
				<span class="text-3xl font-bold text-gray-900 dark:text-white"
					>$1350</span
				>
				<Button href="/">Contact Seller</Button>
			</div>
		</div>
	</Card>
</div>

<style>
	#communities-list {
		border-radius: 15px;
		display: flex;
		flex-direction: row;
	}
</style>
