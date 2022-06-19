<script>
	import Bold from './Bold.svelte';
	import Italic from './Italic.svelte';
	import Link from './Link.svelte';
	import StrikeThrough from './StrikeThrough.svelte';
	import OrderedList from './OrderedList.svelte';
	import UnorderedList from './UnorderedList.svelte';

	export let actions;
</script>

<div class="flex items-center gap-x-1">
	<Bold action={actions.bold} />
	<Italic action={actions.italic} />
	<StrikeThrough action={actions.strikeThrough} />
	<Link action={actions.link} />
	<OrderedList action={actions.olist} />
	<UnorderedList action={actions.ulist} />
</div>
