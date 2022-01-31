<script lang="ts">
	import Card from '../components/Card/card.svelte';
	import { onMount } from 'svelte';
	import http from '../services/appService';

	let text = '';
	let timeout: NodeJS.Timeout;
	let characters = [];

	$: page = '';

	function onPageChange() {
		http.getWithUrl(page).then((data) => {
			characters = data.results;
			page = data.info.next;
		});
	}

	function onTimeout() {
		http.getByName(text).then((data) => {
			page = data.info.next;
			characters = data.results;
		});
	}

	onMount(() => {
		http.getAll<{ info: any; results: any[] }>().then((data) => {
			characters = data.results;
			page = data.info.next;
		});
	});

	function onChange(event) {
		clearTimeout(timeout);
		text = event.target.value;
		timeout = setTimeout(onTimeout, 500);
	}
</script>

<main class="bg-gray-900 h-full w-full min-h-screen flex flex-col">
	<header class="flex flex-row w-full bg-white p-5 items-center justify-center h-80">
		<h1 class="text-4xl sm:text-6xl md:text-8xl font-bold text-center bg-gray-900 text-white p-4">
			Rick And Morty Svelte
		</h1>
	</header>
	<section class="flex flex-row h-32 w-full p-4 items-center justify-center">
		<button
			disabled={page !== ''}
			class={` m-2 p-4 text-white rounded border-2 border-gray-800 transition focus:border-purple-600 outline-0 hover:border-purple-900 text-white ${
				page !== '' ? 'bg-gray-900 bg-gray-900' : 'bg-gray-800'
			}`}>Previous</button
		>
		<input
			on:input={onChange}
			placeholder="Search character"
			type="search"
			class="w-full sm:w-2/3 lg:w-1/2 p-3 text-2xl bg-gray-800 rounded border-2 border-gray-800 transition focus:border-purple-600 outline-0 hover:border-purple-900 text-purple-600"
		/>
		<button
			on:click={onPageChange}
			class="bg-gray-800 m-2 p-4 text-white rounded border-2 border-gray-800 transition focus:border-purple-600 outline-0 hover:border-purple-900 text-white "
			>Next</button
		>
	</section>
	{#if characters.length > 0}
		<section class="flex flex-wrap justify-center">
			{#each characters as character}
				<Card
					url={character.image}
					name={character.name}
					status={character.status}
					species={character.species}
					gender={character.species}
				/>
			{/each}
		</section>
	{/if}
</main>

<style scoped>
</style>
