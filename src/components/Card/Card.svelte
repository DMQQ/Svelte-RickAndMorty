<script lang="ts">
	export let name!: string;
	export let status!: string;
	export let species!: string;
	export let gender!: string;
	export let url!: string;
</script>

<article class="w-64 bg-gray-800 p-2 m-2 flex flex-col">
	<img src={url} alt="{name} thumbnail" class="w-full h-64" />
	<h2 class="text-white font-bold text-xl text-center p-2">{name}</h2>
	<h2 class="text-white">{species}</h2>
	<h2 class="text-white">{gender}</h2>
	<h2 class="text-white">{status}</h2>
</article>
