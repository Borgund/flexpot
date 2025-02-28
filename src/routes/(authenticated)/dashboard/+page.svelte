<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const { list } = data;
</script>

<h1>Dashboard</h1>

<pre>{JSON.stringify(list, null, 2)}</pre>

{#each list as item}
	<p>{new Date(item.timeStamp).toLocaleString()}</p>
	<p>{item.start ? '✅' : '❌'}</p>
{/each}
