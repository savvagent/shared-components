<script>
	export let css = '';
</script>

<div class="fixed flex flex-col top-0 right-0 bottom-0 left-0 items-center justify-end z-10">
	<div
		class="flex items-center gap-2 bottom-10 p-4 border-0 rounded-lg relative mb-4 transition-all duration-300 {css}"
	>
		<slot />
	</div>
</div>
