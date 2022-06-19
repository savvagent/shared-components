<script>
	export let id = '';
	export let placeholder = '';
	export let required = false;
	export let rows = 3;
	export let value = '';
</script>

<div class="w-full relative h-24 mt-3 mb-5">
	<textarea
		class="absolute w-full p-2 outline-none border border-green-600"
		{id}
		{placeholder}
		{required}
		{rows}
		bind:value
	/>
	{#if placeholder}
		<label class="absolute -top-3" for={id}>
			<span class="ml-4 px-1 bg-white text-green-800">
				{placeholder}
				{#if required}<span class="text-red-500">*</span>{/if}
			</span>
		</label>
	{/if}
</div>
