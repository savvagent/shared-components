<script>
	import { mdiAlertCircle, mdiAlertDecagram, mdiInformation } from '@mdi/js';
	import Icon from '$components/Icon.svelte';

	export let icons = true;
	export let message = 'Hello World';
	export let show = false;
	export let type = 'info';

	let backgroundColor;
	let borderColor;
	let color;
	let css = '';

	switch (type) {
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
	// $: setTimeout(() => popoverStore.update((cur) => ({ ...cur, show: false })), timeout);
</script>

{#if show}
	<div class="flex border {css}">
		{#if icons && type === 'error'}
			<Icon css="h-6 w-6 mx-2 fill-current text-red-600" path={mdiAlertCircle} />
		{/if}
		{#if icons && type === 'info'}
			<Icon css="h-6 w-6 mx-2 fill-current text-blue-600" path={mdiInformation} />
		{/if}
		{#if icons && type === 'success'}
			<Icon css="h-6 w-6 mx-2 fill-current text-green-600" path={mdiAlertDecagram} />
		{/if}
		{#if icons && type === 'warning'}
			<Icon css="h-6 w-6 mx-2 fill-current text-yellow-600" path={mdiAlertDecagram} />
		{/if}
		<div class="flex-1 p-2">{message}</div>
	</div>
{/if}
