<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';

	export let columns = [];
	export let items = [];

	const flipDurationMs = 300;
	const handleDndConsider = (e) => {
		items = e.detail.items;
	};
	const handleDndFinalize = (e) => {
		items = e.detail.items;
	};
</script>

<div class="flex">
	{#each columns as column}
		<div>{column.label}</div>
	{/each}
</div>

<div
	class="flex"
	use:dndzone={{ items, flipDurationMs }}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
>
	{#each items as item (item.id)}
		<div animate:flip={{ duration: flipDurationMs }}>{item.name}</div>
	{/each}
</div>
