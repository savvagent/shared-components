<script context="module">
	import { writable } from 'svelte/store';
	const popoverStore = writable({
		icons: true,
		message: 'Hello World!',
		show: false,
		timeout: 4000,
		type: 'info'
	});
	export { popoverStore };
</script>

<script>
	import { mdiAlertCircle, mdiAlertDecagram, mdiInformation } from '@mdi/js';
	import Icon from '$components/Icon.svelte';

	let backgroundColor;
	let borderColor;
	let color;
	let css = '';

	switch ($popoverStore.type) {
		case 'info':
			backgroundColor = 'bg-blue-100';
			borderColor = 'border-blue-500';
			color = 'text-blue-900';
			break;
		case 'success':
			backgroundColor = 'bg-green-100';
			borderColor = 'border-green-500';
			color = 'textr-green-900';
			break;
		case 'warning':
			backgroundColor = 'bg-yellow-100';
			borderColor = 'border-yellow-500';
			color = 'text-yellow-900';
			break;
		case 'error':
			backgroundColor = 'bg-red-100';
			borderColor = 'border-red-500';
			color = 'text-red-900';
			break;
		default:
			backgroundColor = 'bg-white';
			borderColor = 'border-gray-300';
			color = 'text-gray-700';
	}

	$: css = `${backgroundColor} ${borderColor} ${color}`;
	// $: setTimeout(() => popoverStore.update((cur) => ({ ...cur, show: false })), 4000);
</script>

{#if $popoverStore.show}
	<div class="flex border w-full z-50 {css}">
		{#if $popoverStore.icons && $popoverStore.type === 'error'}
			<Icon css="h-6 w-6 mx-2 fill-current text-red-600" path={mdiAlertCircle} />
		{/if}
		{#if $popoverStore.icons && $popoverStore.type === 'info'}
			<Icon css="h-6 w-6 mx-2 fill-current text-blue-600" path={mdiInformation} />
		{/if}
		{#if $popoverStore.icons && $popoverStore.type === 'success'}
			<Icon css="h-6 w-6 mx-2 fill-current text-green-600" path={mdiAlertDecagram} />
		{/if}
		{#if $popoverStore.icons && $popoverStore.type === 'warning'}
			<Icon css="h-6 w-6 mx-2 fill-current text-yellow-600" path={mdiAlertDecagram} />
		{/if}
		<div class="flex-1 p-2">{$popoverStore.message}</div>
	</div>
{/if}
