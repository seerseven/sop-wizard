<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let sopData = {};

	onMount(async () => {
		const response = await fetch(`/api/sop/${$page.params.id}`);
		sopData = await response.json();
	});

	async function saveSOP() {
		const response = await fetch(`/api/sop/edit/${$page.params.id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(sopData)
		});

		if (response.ok) {
			alert('SOP saved successfully!');
		}
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="text-2xl font-bold mb-4">Edit {sopData.title}</h1>

	<label>Title:</label>
	<input type="text" bind:value={sopData.title} class="border p-2 w-full mb-4" />

	<label>Purpose:</label>
	<textarea bind:value={sopData.purpose} class="border p-2 w-full mb-4"></textarea>

	<label>Scope:</label>
	<textarea bind:value={sopData.scope} class="border p-2 w-full mb-4"></textarea>

	<label>Responsibilities:</label>
	<textarea bind:value={sopData.responsibilities} class="border p-2 w-full mb-4"></textarea>

	<label>Procedure:</label>
	<textarea bind:value={sopData.procedure} class="border p-2 w-full mb-4"></textarea>

	<button on:click={saveSOP} class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
</div>
