<script>
  import uniqueId from '../utils/uniqueId';

  export let id = uniqueId();
  export let checked = false;
  export let name = '';
  export let selected;
  export let value = '';

// $: console.log(`checked`, checked)
// $: console.log(`selected`, selected)
</script>

<div class="flex items-center">
  <input 
    bind:group={selected}
    checked={checked} 
    class="border-gray-300 h-4 w-4 bg-white outline-none mr-2 content-center" 
    id={id} 
    name={name} 
    type="radio" 
    value={value}
  />
  <label for={id}><slot /></label>
</div>