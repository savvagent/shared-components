<script>
	import { isEmpty } from '$utils/empty';
	import Icon from '$lib/Icon.svelte';

	export let autocomplete = '';
	export let css = '';
	export let error = null;
	export let id = '';
	export let keyup = () => {};
	export let max = null;
	export let maxLength = null;
	export let min = null;
	export let name = '';
	export let onChange = () => {};
	export let onFocus = () => {};
	export let onInput = () => {};
	export let path = null;
	export let placeholder = '';
	export let required = false;
	export let success = '';
	export let type = 'text';
	export let value = '';

	$: remaining = maxLength ? maxLength - value.length : null;
</script>

<div class:hidden={type === 'hidden'} class="w-full relative h-11 text-sm {css}">
	{#if type === 'text'}
		<input
			{autocomplete}
			class="absolute w-full p-2 outline-none border text-sm border-red-400"
			{id}
			{max}
			{maxLength}
			{min}
			{name}
			on:change={onChange}
			on:input={onInput}
			on:focus={onFocus}
			on:keyup={keyup}
			{placeholder}
			{required}
			type="text"
			bind:value
		/>
	{:else if type === 'email'}
		<input
			{autocomplete}
			class="absolute w-full p-2 outline-none border text-sm border-red-400"
			{id}
			{max}
			{maxLength}
			{min}
			{name}
			on:change={onChange}
			on:input={onInput}
			on:focus={onFocus}
			on:keyup={keyup}
			{placeholder}
			{required}
			type="email"
			bind:value
		/>
	{:else if type === 'date'}
		<input
			{autocomplete}
			class="absolute w-full p-2 outline-none border text-sm border-red-400"
			{id}
			{max}
			{maxLength}
			{min}
			{name}
			on:change={onChange}
			on:input={onInput}
			on:focus={onFocus}
			on:keyup={keyup}
			{placeholder}
			{required}
			type="date"
			bind:value
		/>
	{:else if type === 'password'}
		<input
			{autocomplete}
			class="absolute w-full p-2 outline-none border text-sm border-red-400"
			{id}
			{max}
			{maxLength}
			{min}
			{name}
			on:change={onChange}
			on:input={onInput}
			on:focus={onFocus}
			on:keyup={keyup}
			{placeholder}
			{required}
			type="password"
			bind:value
		/>
	{:else if type === 'number'}
		<input
			{autocomplete}
			class="absolute w-full p-2 outline-none border text-sm border-red-400"
			{id}
			{max}
			{maxLength}
			{min}
			{name}
			on:change={onChange}
			on:input={onInput}
			on:focus={onFocus}
			on:keyup={keyup}
			{placeholder}
			{required}
			type="number"
			bind:value
		/>
	{:else if type === 'hidden'}
		<input {autocomplete} {id} type="hidden" bind:value />
	{/if}
	{#if placeholder && !isEmpty(value)}
		<label class="absolute -top-3" for={id}>
			<span class="ml-4 px-1 bg-white text-red-600">
				{placeholder}
				{#if required}<span class="text-red-500">*</span>{/if}
			</span>
		</label>
	{/if}
	{#if error}
		<span class="block mt-1 text-xs text-red-500">{error}</span>
	{/if}
	{#if success}
		<span class="block mt-1 text-xs text-blue-400">{success}</span>
	{/if}
	{#if maxLength}
		<span class="text-xs absolute top-3 right-1">{remaining}</span>
	{/if}
	{#if path}
		<Icon {path} css="absolute top-1 right-1 h-6 w-6" />
	{/if}
</div>

<style>
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		border: 1px solid blue;
		-webkit-text-fill-color: #333;
		-webkit-box-shadow: 0 0 0px 1000px #fff inset;
		box-shadow: 0 0 0px 1000px #fff inset;
		transition: background-color 5000s ease-in-out 0s;
	}
</style>
