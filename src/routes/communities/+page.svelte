<script>
	import NextPrev from '../../lib/components/pagination/NextPrev.svelte';
	import CommunitySearch from '../../lib/components/search/CommunitySearch.svelte';
	import TrendingCommunities from '../../lib/components/widget/TrendingCommunities.svelte';
	import CommunitiesList from './CommunitiesList.svelte';
</script>

<div
	id="communities-container"
	class="grid gap-4 h-full"
>
	<div>
		<CommunitySearch />
	</div>
	<div id="trending-items">
		<TrendingCommunities />
	</div>
	<div id="communities">
		<CommunitiesList />
	</div>
	<div id="communities-page">
		<NextPrev />
	</div>
</div>

<style>
	#communities-container {
		grid-template-rows: auto auto 1fr auto;
	}
</style>
