<script>
	import InPlaceEditor from '$components/InPlaceEditor.svelte';

	export let disabled = false;
	export let onChange = () => {};
	export let open = undefined;
	export let title = undefined;
	export let value = '';
	export let item;

	export let css = '';

	const changeHandler = (e) => {
		onChange(e.target.value, item);
	};
</script>

<div class={`bg-gray-50 py-1 md:py-2 px-3 ${css}`}>
	<span class="flex items-center">
		{#if open}
			<span on:click class="mr-1 cursor-pointer">&#9660;</span>
			<InPlaceEditor label={title} onChange={changeHandler} {value} {disabled} />
		{:else}
			<span on:click class="mr-1 cursor-pointer">&#9650;</span>
			<InPlaceEditor label={title} onChange={changeHandler} {value} {disabled} />
		{/if}
	</span>
</div>
