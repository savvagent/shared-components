<script>
	import { goto } from '$app/navigation';
	import Icon from '$components/Icon.svelte';
	import supabase from '$utils/supabaseInit';
	export let icon;
	export let provider;
	export let text = '';

	const clickHandler = async () => {
		const { user, session, error } = await supabase.auth.signIn({
			provider: provider
		});
	};
</script>

<button
	on:click={clickHandler}
	class="cursor-pointer flex items-center justify-center uppercase h-12 mt-3 text-white w-full rounded bg-black "
>
	<Icon css="h-6 w-6 mr-2 fill-current text-white" path={icon} />
	{text}
</button>
