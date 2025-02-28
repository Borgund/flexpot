<script lang="ts">
	const {
		style = 'regular',
		name,
		hoverStyleSwap = true
	} = $props<{
		style?: 'regular' | 'solid';
		name: string;
		hoverStyleSwap?: boolean;
	}>();

	let styleClass = $state(style);

	function toggleStyle() {
		if (!hoverStyleSwap) return;
		styleClass = styleClass === 'regular' ? 'solid' : 'regular';
	}
</script>

<i
	class={`icon fa-${styleClass} fa-${name}`}
	role="img"
	aria-label={name}
	onmouseenter={toggleStyle}
	onmouseleave={toggleStyle}
></i>
