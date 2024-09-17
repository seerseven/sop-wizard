<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  let sopData = {};

  onMount(async () => {
    const response = await fetch(`/api/sop/${$page.params.id}`);
    sopData = await response.json();
  });
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">{sopData.title}</h1>
  <p><strong>Purpose:</strong> {sopData.purpose}</p>
  <p><strong>Scope:</strong> {sopData.scope}</p>
  <p><strong>Responsibilities:</strong> {sopData.responsibilities}</p>
  <p><strong>Procedure:</strong> {sopData.procedure}</p>
  
  <!-- Add edit and download buttons -->
  <div class="flex gap-4 mt-4">
    <button on:click={downloadSOP} class="bg-blue-500 text-white px-4 py-2 rounded">Download SOP</button>
    <button on:click={editSOP} class="bg-green-500 text-white px-4 py-2 rounded">Edit SOP</button>
  </div>
</div>

<script lang="ts">
  // Function to download the SOP
  async function downloadSOP() {
    const response = await fetch(`/api/sop/download/${$page.params.id}`);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${sopData.title}.docx`;
    link.click();
  }

  // Redirect to edit page
  function editSOP() {
    window.location.href = `/sop/edit/${$page.params.id}`;
  }
</script>