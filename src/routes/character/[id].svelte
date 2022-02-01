<script context="module" lang="ts">
	export async function load({ params, fetch, session, stuff }) {
		const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);

		const data = await res.json();

		if (res.ok) {
			return {
				props: {
					article: data
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load `)
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	export let article!: any;
	export let episodes = [];

	onMount(async () => {
		const list = article.episode.splice(0, 5).map((episode: string) => axios.get(episode));

		Promise.all(list)
			.then((list) => {
				return list.map(({ data }) => data);
			})
			.then((valid) => {
				console.log(valid);
				episodes = valid;
			});
	});
</script>

<svelte:head>
	<title>{article.name}</title>
</svelte:head>

<main class="w-full min-h-screen bg-gray-900 flex justify-center">
	<section class="w-full p-2  lg:w-2/3 mt-5">
		<section class="flex flex-row flex-wrap w-full">
			<img src={article.image} alt="{article.name} thumbnail" class="p-5" />
			<article>
				<p class="text-white p-5 text-3xl">
					Name: <strong>{article.name}</strong>
				</p>
				<p class="text-white p-5 text-3xl">
					Gender: <strong>{article.gender}</strong>
				</p>
				<p class="text-white p-5 text-3xl">
					Status: <strong>{article.status}</strong>
				</p>
				{#if article.type !== ''}
					<p class="text-white p-5 text-3xl">
						Type: <strong>{article.type}</strong>
					</p>
				{/if}
			</article>
		</section>
		<section class="flex flex-row flex-wrap w-full">
			<h2 class="text-white text-6xl font-bold m-5 w-full">Episodes {article.episode.length}</h2>
			{#each episodes as { air_date, episode, name }}
				<article class="p-3 text-white bg-gray-800 m-2 rounded w-full">
					<h2 class="text-3xl ">{name} [{episode}]</h2>
					<h3 class="text-medium text-white py-2">{air_date}</h3>
				</article>
			{/each}
		</section>
	</section>
</main>
