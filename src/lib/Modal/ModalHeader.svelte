<script>
	import { getContext } from 'svelte';
	export let css = '';
	export let showCloseButton = true;

	const showModal = getContext('showModal');
</script>

{#if $showModal}
	<div class="relative leading-relaxed">
		<h2 class="text-lg md:text-2xl text-gray-700 {css}"><slot /></h2>
		{#if showCloseButton}
			<button on:click={() => showModal.set(false)} class="absolute -top-1 right-1 text-3xl"
				>&times;</button
			>
		{/if}
	</div>
{/if}
