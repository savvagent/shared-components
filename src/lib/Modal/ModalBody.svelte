<script>
	import { getContext } from 'svelte';
	export let css = '';

	const showModal = getContext('showModal');
</script>

{#if $showModal}
	<div class="py-2 {css}"><slot /></div>
{/if}
