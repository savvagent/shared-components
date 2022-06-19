<script context="module">
	export const TREE = {};
</script>

<script>
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import Header from './TreeHeader.svelte';

	export let css = '';
	export let disabled = false;
	export let item;
	export let key;
	export let onChange = () => {};
	export let open = false;
	export let title = undefined;

	$: key = key || title;

	const { handleChange, selected } = getContext(TREE);
	//get selected value from context
	$: open = $selected === key;
</script>

<li class={`${css}`}>
	<Header on:click={handleChange.bind(null, key)} {title} {open} {disabled} {onChange} {item} value={item?.name} />
	{#if open}
		<div transition:slide>
			<slot />
		</div>
	{/if}
</li>
