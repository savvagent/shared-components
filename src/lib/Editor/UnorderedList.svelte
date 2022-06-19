<script>
	export let action = () => {};
	export let disabled;
</script>

<button
	class="bg-gray-200 px-1 py-1 hover:bg-gray-100 inline-flex items-center"
	{disabled}
	on:click={action}
>
	<svg width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
		<g id="ulist" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<rect
				id="Rectangle-6"
				fill="#000000"
				x="12.1322314"
				y="4.98181818"
				width="15.2727273"
				height="4.8"
			/>
			<rect
				id="Rectangle-6-Copy"
				fill="#000000"
				x="12.1322314"
				y="22.4363636"
				width="15.2727273"
				height="4.8"
			/>
			<rect
				id="Rectangle-6-Copy-2"
				fill="#000000"
				x="12.1322314"
				y="13.7090909"
				width="15.2727273"
				height="4.8"
			/>
			<rect
				id="Rectangle-6-Copy-5"
				fill="#000000"
				x="4.49586777"
				y="4.98181818"
				width="4.36363636"
				height="4.8"
			/>
			<rect
				id="Rectangle-6-Copy-4"
				fill="#000000"
				x="4.49586777"
				y="22.4363636"
				width="4.36363636"
				height="4.8"
			/>
			<rect
				id="Rectangle-6-Copy-3"
				fill="#000000"
				x="4.49586777"
				y="13.7090909"
				width="4.36363636"
				height="4.8"
			/>
		</g>
	</svg>
</button>
