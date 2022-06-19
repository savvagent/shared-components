<script>
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { ACCORDION } from './AccordionSection.svelte';
	export let value = undefined;
	export let css = '';
	const dispatch = createEventDispatcher();
	$: isControlled = typeof value !== 'undefined';
	const selected = writable(null);
	$: if (isControlled) {
		selected.set(value);
	}
	const handleChange = function (newValue) {
		if (!isControlled) {
			if (newValue === $selected) {
				selected.set(null);
			} else {
				selected.set(newValue);
			}
		}
		dispatch('change', newValue);
	};
	setContext(ACCORDION, {
		handleChange,
		selected
	});
</script>

<ul class={`list-none ${css}`}>
	<slot />
</ul>
