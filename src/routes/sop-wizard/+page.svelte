<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient'; // Supabase connection
  let title: string = '';
  let purpose: string = '';
  let scope: string = '';
  let responsibilities: string = '';
  let procedure: string = '';

  const submitForm = async () => {
    const { data, error } = await supabase.from('sops').insert([{ title, purpose, scope, responsibilities, procedure }]);
    if (error) {
      console.error('Error inserting SOP:', error.message);
    } else {
      console.log('SOP saved:', data);
    }
  };
</script>

<form on:submit|preventDefault={submitForm} class="w-full max-w-lg">
  <div class="mb-4">
    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
    <input id="title" bind:value={title} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Enter SOP title" required />
  </div>

  <div class="mb-4">
    <label for="purpose" class="block text-gray-700 text-sm font-bold mb-2">Purpose:</label>
    <textarea id="purpose" bind:value={purpose} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter SOP purpose" required></textarea>
  </div>

  <div class="mb-4">
    <label for="scope" class="block text-gray-700 text-sm font-bold mb-2">Scope:</label>
    <textarea id="scope" bind:value={scope} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter SOP scope" required></textarea>
  </div>

  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
</form>

