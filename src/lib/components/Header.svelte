<script>
	import Fa from 'svelte-fa';
	import { faUser, faIgloo, faGear, faStamp } from '@fortawesome/free-solid-svg-icons';
	import {} from '@fortawesome/free-regular-svg-icons';

	const { user, userAvatar } = $props();
</script>

<header>
	<nav>
		<ul>
			<li><a href="/dashboard" class="contrast"><Fa class="icon" icon={faIgloo} />Dashboard</a></li>
		</ul>
		<ul>
			<li>
				<a href="/" class="contrast">
					<strong>FlexPot</strong>
					<Fa icon={faStamp} size="lg" />
				</a>
			</li>
		</ul>
		{#if user}
			<form action="/login?/logout" method="post">
				<ul>
					<li>
						<details class="dropdown">
							<!-- svelte-ignore a11y_no_redundant_roles -->
							<summary role="button" class="outline contrast">
								{#if userAvatar}
									<img src={userAvatar} alt="User avatar" />
								{:else}
									<Fa class="icon" icon={faUser} />
								{/if}
								{user.name ?? user.email}
							</summary>
							<ul>
								<li>
									<a href="/settings" class="contrast"><Fa class="icon" icon={faGear} /> Settings</a
									>
								</li>

								<li>
									<button
										formaction="/login?/logout"
										formmethod="post"
										class="outline"
										data-tooltip="Log out of the service"
										data-placement="left"
									>
										Log out
									</button>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</form>
		{/if}
	</nav>
</header>

<style>
	header {
		background-color: var(--pico-secondary-background);

		nav {
			max-width: 90rem;
			margin: 0 auto;
			ul {
				margin: 0 1rem;
			}
			summary {
				img {
					border-radius: 50%;
					width: 1.5rem;
					height: 1.5rem;
				}
			}
		}
		ul li a {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}
	}
</style>
