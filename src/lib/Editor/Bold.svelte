<script>
	export let disabled;
	export let action;
</script>

<button class="bg-gray-200 px-3 py-1 hover:bg-gray-100" {disabled} on:click={action}>B</button>
