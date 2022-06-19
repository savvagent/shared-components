<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import ActionBar from './ActionBar.svelte';
	import ButtonBar from './ButtonBar.svelte';
	import { SelectionManager } from './SelectionManager';
	import Actions from './Actions';

	export let content = '';

	const exec = (commandName, value = null, showDefaultUi = false) => {
		let result;
		try {
			result = document.execCommand(commandName, showDefaultUi, value);
		} catch (err) {
			result = err;
		}
		return result;
	};

	let caretPos = 0;
	let editor;
	let selection;
	let sm;
	let initialContent = content;

	let actions = {};

	onMount(() => {
		sm = new SelectionManager(editor);
		actions = new Actions(editor);
	});

	const inputHandler = (e) => {
		content = e.target.innerHTML;
		selection = sm.saveSelection();
		const { caretOffset } = sm.captureSelectionData(editor);
		caretPos = caretOffset;
	};

	export let disabled;
</script>

<div class="bg-white border border-gray-200">
	<ButtonBar {actions} />
	<div
		id="editor"
		bind:this={editor}
		class="min-h-max max-h-64 p-2 border border-gray-200 overflow-y-auto outline-none"
		contenteditable={!disabled}
		{disabled}
		readonly={disabled}
		on:input={inputHandler}
	>
		{@html initialContent}
	</div>
</div>

<style>
	#editor {
	}
</style>
