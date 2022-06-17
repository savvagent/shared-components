<script>
	import { isNotEmpty } from '$utils/empty';
	import Icon from '$lib/Icon.svelte';

	export let click = () => {};
	export let disabled = false;
	export let emphasis = 'normal';
	export let iconPosition = 'leading';
	export let klass = '';
	export let path = '';
	export let role = 'button';
	export let to = null;
	export let type = 'button';

	let css = '';

	$: if (emphasis === 'primary') {
		css = `text-white bg-red-600 hover:bg-red-500 text-sm cursor-pointer disabled:cursor-not-allowed`;
	} else if (emphasis === 'danger') {
		css = `bg-red-700 text-white hover:bg-red-500  text-sm cursor-pointer disabled:cursor-not-allowed`;
	} else if (emphasis === 'link') {
		css = `bg-transparent shadow-none underline text-red-500 text-sm cursor-pointer disabled:cursor-not-allowed`;
	} else if (emphasis === 'outline') {
		css = `bg-transparent text-red-800 border border-red-500 text-sm cursor-pointer disabled:cursor-not-allowed`;
	} else {
		css = `bg-gray-300 text-sm hover:bg-gray-200 cursor-pointer disabled:cursor-not-allowed`;
	}
</script>

{#if to}
	<div class="flex">
		<a
			href={to}
			class="shadow-lg px-2 py-1 md:px-4 md:py-2 {css} "
			{role}
			{type}
			on:click={click}
			{disabled}
		>
			{#if isNotEmpty(path) && iconPosition === 'leading'}
				<Icon {path} />
			{/if}
			<div class={path && iconPosition === 'leading' ? 'ml-1' : 'mr-1'}>
				<slot />
			</div>
			{#if isNotEmpty(path) && iconPosition !== 'leading'}
				<Icon {path} />
			{/if}
		</a>
	</div>
{:else}
	<button
		class="flex items-center gap-x-1 px-1 py-0.5 {css} {klass}"
		{role}
		{type}
		on:click={click}
		{disabled}
	>
		{#if isNotEmpty(path) && iconPosition === 'leading'}
			<Icon {path} />
		{/if}
		<div class={path && iconPosition === 'leading' ? 'ml-1' : 'mr-1'}>
			<slot />
		</div>
		{#if isNotEmpty(path) && iconPosition !== 'leading'}
			<Icon {path} />
		{/if}
	</button>
{/if}
