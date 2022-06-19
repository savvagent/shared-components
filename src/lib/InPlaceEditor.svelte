<script>
	import { mdiPencil } from '@mdi/js';
	import IconButton from '$components/IconButton.svelte';

	export let disabled = false;
	export let edit = false;
	export let onChange = () => {};
	export let label = 'Label';
	export let value = '';

	let inputRef;

	const keydownHandler = (e) => {
		const { key } = e;
		if (key === 'Enter' || key === 'Escape') {
			edit = false;
		}
	};

	const changeHandler = (e) => {
		onChange(e);
	};
</script>

<div class="flex flex-1 items-start">
	{#if edit}
		<div class="flex-1 cursor-default">
			<input
				bind:this={inputRef}
				class="w-full md:w-1/2 border border-gray-300 p-2"
				type="text"
				{value}
				on:blur={() => (edit = false)}
				on:change={changeHandler}
				on:keydown={keydownHandler}
			/>
		</div>
	{:else if disabled}
		<span class="cursor-default">{label}</span>
	{:else}
		<IconButton
			css="h-4 w-4 ml-2 cursor-pointer"
			path={mdiPencil}
			click={() => (edit = true)}
			{label}
			labelLeft={false}
			labelAsText
		/>
	{/if}
</div>
