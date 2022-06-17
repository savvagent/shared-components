<script>
	import Editor from '$lib/Editor/Editor.svelte';
	import Input from '$lib/Input.svelte';
	import Checkbox from '$lib/Checkbox.svelte';
	import Button from '$lib/Button.svelte';
  import { del, update } from '$stores/signs'

	export let disabled = false;
	export let selectedSign = {};
	export let embedded = false;

	const remove = () => {
    del(selectedSign)
	};

	$: if (embedded) {
		const thing = { ...selectedSign };
		delete thing.active;
    delete thing.show;
    update(thing)
	}
</script>

<Input
	placeholder="Description"
	bind:value={selectedSign.description}
	type="text"
	{disabled}
/>
<h2>Explanation</h2>
<Editor bind:content={selectedSign.detail} {disabled} />
<Input
	placeholder="Reference"
	bind:value={selectedSign.reference}
	type="text"
	{disabled}
/>
<h2>Fulfillment</h2>
<Editor bind:content={selectedSign.fulfillment} {disabled} />
<Checkbox bind:checked={selectedSign.fulfilled} {disabled}>Fulfilled</Checkbox>
{#if embedded}
  <Button click={remove} emphasis="danger">Delete</Button>
{/if}
