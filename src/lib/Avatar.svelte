<script>
	import atSize from '$utils/atSize';
	import { breakpoint } from '$stores/breakpoint';

	export let css = '';
	export let size = 48;
	export let src;

	$: size = atSize($breakpoint, { default: 20, md: 36 });
</script>

<div class="mr-2 {css}">
	{#if src}
		<img class="rounded-full" {src} alt="avatar" height={size} width={size} />
	{:else}
		<svg height={size} width={size} viewBox="0 0 12.7 12.7"
			><path
				style="fill:#000;stroke-width:1.35931"
				d="M24 1A23 23 0 0 0 1 24a23 23 0 0 0 23 23 23 23 0 0 0 23-23A23 23 0 0 0 24 1zm-.006 8.174a7.68 9.42 0 0 1 7.682 9.42 7.68 9.42 0 0 1-2.53 6.976 18.328 13.687 0 0 1 12.522 9.52 21.48 21.48 0 0 1-17.674 9.277 21.48 21.48 0 0 1-17.662-9.26A18.328 13.687 0 0 1 18.84 25.57a7.68 9.42 0 0 1-2.527-6.976 7.68 9.42 0 0 1 7.681-9.42z"
				transform="scale(.26458)"
			/></svg
		>
	{/if}
</div>
