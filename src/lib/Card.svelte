<script>
	export let css = '';
	export let to = null;
</script>

<section class="w-full p-3 drop-shadow-sm {css}">
	{#if to}
		<a href={to}>
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</section>
