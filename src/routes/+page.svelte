<script>
	import { faStamp } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<main>
	<div class="container">
		<h1>Welcome to FlexPot <Fa icon={faStamp} size="lg" /></h1>
		<p>
			Please <a href="/login">login</a> to continue.
		</p>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1rem;
	}
</style>
