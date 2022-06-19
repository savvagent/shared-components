<script>
	import clickOutside from '$utils/clickOutside';
	export let value;
	export let css = '';
	export let baseCss = '';
	export let isSelected = false;
	export let isOpen = false;
	export let options = [];

	const clickOutsideHandler = (e) => {
		if (isOpen) isOpen = false;
	};
</script>

<div key={value} class={css} on:mousedown={(e) => {}} on:click={(e) => {}} role="option" aria-selected={isSelected ? 'true' : 'false'} use:clickOutside on:click_outside={clickOutsideHandler}>
	{#if isOpen}
		{#each options as option}
			<div class={`${baseCss}-group`} key={option.name} role="listbox" tabIndex="-1">
				<div class={`${baseCss}-title`}>{option.name}</div>
			</div>
		{/each}
	{/if}
</div>
