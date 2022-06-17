<script>
	import { getContext } from 'svelte';
	export let css = '';

	const showModal = getContext('showModal');
</script>

{#if $showModal}
	<div class="pt-2 {css}"><slot /></div>
{/if}
