<script context="module">
	import { default as ModalBody } from './ModalBody.svelte';
	import { default as ModalHeader } from './ModalHeader.svelte';
	import { default as ModalFooter } from './ModalFooter.svelte';
	export { ModalBody, ModalHeader, ModalFooter };
</script>

<script>
	import { setContext } from 'svelte';
	export let overlayCss = '';
	export let modalCss = '';
	export let modal = null;
	export let showModal; // needs to be a store

	setContext('showModal', showModal);
</script>

{#if $showModal}
	<div
		class="fixed flex flex-col top-0 right-0 bottom-0 left-0 bg-gray-300/75 content-center justify-center z-10 {overlayCss}"
	>
		<div
			class="bg-white border-gray-300 w-full md:w-1/2 border px-2 py-1 overflow-y-auto md:p-2 rounded-md mx-auto z-20 bg-opacity-100 {modalCss}"
			role="dialog"
			aria-modal="true"
			bind:this={modal}
		>
			<slot />
		</div>
	</div>
{/if}
