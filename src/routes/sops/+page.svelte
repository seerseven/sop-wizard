<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import NavBar from '../../lib/components/NavBar.svelte';
	import { onMount } from 'svelte';
	let sops = [];

	// Fetch the list of SOPs from the API on component mount
	onMount(async () => {
		const response = await fetch('/api/sops');
		if (response.ok) {
			sops = await response.json();
		} else {
			console.error('Failed to fetch SOPs');
		}
	});

	const params = { delay: 250, duration: 500, easing: quintOut };
</script>

<NavBar />
<!-- <div class="grid grid-cols-6 gap-8 p-4">
<a href="../sop/[id]">
	<div
	class="flex flex-col items-center justify-center p-4 text-white rounded-lg max-w-[200px] max-h-[200px] w-full h-full"
>
	<ImagePlaceholder imgOnly class="w-40 h-36" />
</div>
</a>
</div> -->
<div class="container mx-auto p-4">
	<h1 class="text-2xl text-white font-bold mb-4">List of SOPs</h1>

	{#if sops.length > 0}
		<ul class="space-y-4">
			{#each sops as sop}
				<li class="bg-gray-100 p-4 rounded shadow">
					<h2 class="text-xl font-semibold">{sop.title}</h2>
					<p><strong>Purpose:</strong> {sop.purpose}</p>
					<a href={`/sop/${sop.id}`} class="text-blue-500 hover:underline"> View SOP </a>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No SOPs found in the database.</p>
	{/if}
</div>
