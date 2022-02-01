<script lang="ts">
	export let id!: number;
	export let name!: string;
	export let status!: string;
	export let species!: string;
	export let gender!: string;
	export let url!: string;
</script>

<article class="w-64 bg-gray-800 p-2 m-2 flex flex-col">
	<img src={url} alt="{name} thumbnail" class="w-full h-64" />
	<h2 class="text-white font-bold text-xl text-center p-2">{name}</h2>
	<h2 class="text-white">species: {species}</h2>
	<h2 class="text-white">gender: {gender}</h2>
	<h2 class="text-white">status: {status}</h2>
	<a
		href="/character/{id}"
		class="transition bg-gray-900 border-2 border-purple-600 text-white p-2 rounded mt-2 text-center hover:bg-purple-600 flex-end">More</a
	>
</article>
