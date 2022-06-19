<script>
  export let type = 'normal'
</script>

{#if type === 'error'}
  <p class="text-red-500 leading-5 py-2"><slot></slot></p>
  {:else}
  <p class="text-gray-500 leading-5 py-2"><slot></slot></p>
{/if}