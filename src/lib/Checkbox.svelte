<script>
	export let checked;
	export let click = () => {};
	export let disabled = false;
</script>

<div class="flex items-center h-10 pl-2">
	<input on:click={click} type="checkbox" bind:checked {disabled} />
	<span class="ml-2"><slot /></span>
</div>
