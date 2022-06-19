<script>
  export let title = undefined;
  export let open = undefined;
  export let className = "";
</script>

<div on:click class={`border-gray-300 rounded-sm border bg-gray-50 py-1 md:py-2 px-3 cursor-pointer ${className}`}>
  <span>
    {#if open}
      <span>&#9660;</span>
    {:else}
      <span>&#9650;</span>
    {/if}
  </span>
  {title}
</div>