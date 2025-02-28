<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	//import '@picocss/pico';
	import '@picocss/pico/css/pico.amber.css';
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

{@render children()}
