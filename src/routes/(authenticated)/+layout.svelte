<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData } from './dashboard/$types';
	import Header from '$lib/components/Header.svelte';
	import '@picocss/pico';

	let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<Header user={data.user} userAvatar={data.userAvatar} />

<main>
	{@render children()}
</main>

<style>
	main {
		margin: 0 auto;
		max-width: 90rem;
		padding: 1rem;
	}
</style>
