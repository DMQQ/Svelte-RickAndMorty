<script>
	export let disabled = false;
	export let onClick = (event) => {};
</script>

<button
	on:click={onClick}
	class={`m-2 p-4 text-white rounded border-2 border-gray-800 transition focus:border-purple-600 outline-0 hover:border-purple-900 text-white ${
		disabled ? 'bg-gray-900' : 'bg-gray-800'
	}`}
>
	<slot />
</button>
