<script>
	const noop = () => {};

	export let click = noop;
	export let css = '';
	export let disabled = false;
	export let iconRef = null;
	export let img = null;
	export let label = null;
	export let mouseout = noop;
	export let mouseover = noop;
	export let path = null;
</script>

<i
	aria-hidden="true"
	aria-label={label}
	class:disabled
	aria-disabled={disabled}
	class="flex items-center justify-center {css}"
>
	{#if path}
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<svg
			class={css}
			viewBox="0 0 24 24"
			bind:this={iconRef}
			on:click={click}
			on:mouseover={mouseover}
			on:mouseout={mouseout}
		>
			<path d={path}>
				{#if label}
					<title>{label}</title>
				{/if}
			</path>
		</svg>
	{:else if img}
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<img
			class="rounded-full hover:cursor-pointer"
			on:click={click}
			on:mouseover={mouseover}
			on:mouseout={mouseout}
			src={img}
		/>
	{/if}
</i>
