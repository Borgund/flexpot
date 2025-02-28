<script lang="ts">
	import type { PageData } from './$types';
	import { dev } from '$app/environment';

	const { data }: { data: PageData } = $props();
	const { user, userAvatar, settings } = data;
	let autoApplyLunch = $state(settings.autoApplyLunch);
	let daysInWeek = $state(settings.daysInWeek);
	let lunchMinutes = $state(settings.lunchMinutes);
</script>

<h1>Settings</h1>

<aside>
	<h2>Profile</h2>
	<p>Logged in as {user.name} ({user.email})</p>
	{#if userAvatar}
		<img src={userAvatar} alt="Avatar" />
	{/if}
</aside>

<form action="?/updateSettings" method="post">
	<legend>Preferences</legend>
	<input type="hidden" name="id" value={settings.id} />
	<label>
		Auto Apply Lunch Break:
		<input name="autoApplyLunch" type="checkbox" bind:checked={autoApplyLunch} />
	</label>

	<label>
		Workdays per week:
		<input name="daysInWeek" type="number" bind:value={daysInWeek} min="1" max="7" required />
	</label>

	<label>
		Lunch Break (Minutes):
		<input name="lunchMinutes" type="number" bind:value={lunchMinutes} min="0" required />
	</label>
	<button type="submit">Update settings</button>
</form>

{#if dev}
	<pre>{JSON.stringify({ user, userAvatar, settings }, null, 2)}</pre>
{/if}
