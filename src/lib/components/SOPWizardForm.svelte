<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient'; // Supabase connection


  // Declare form field variables
  let title = '';
  let purpose = '';
  let scope = '';
  let responsibilities = '';
  let procedure = '';
  let healthSafety = '';
  let toolsEquipment = '';
  let qualityControl = '';
  let recordKeeping = '';
  let successMessage = '';  // For displaying success message

  const submitForm = async () => {
    const { data, error } = await supabase.from('sops').insert([{
      title,
      purpose,
      scope,
      responsibilities,
      procedure,
      health_safety: healthSafety,
      tools_equipment: toolsEquipment,
      quality_control: qualityControl,
      record_keeping: recordKeeping,
    }]);

    if (error) {
      console.error('Error inserting SOP:', error.message);
    } else {
      // Clear form fields on successful submit
      title = '';
      purpose = '';
      scope = '';
      responsibilities = '';
      procedure = '';
      healthSafety = '';
      toolsEquipment = '';
      qualityControl = '';
      recordKeeping = '';

      // Show success message
      successMessage = 'New SOP Created';

      // Automatically hide success message after 3 seconds
      setTimeout(() => successMessage = '', 3000);

      console.log('SOP saved:', data);
    }
  };
</script>

<!-- Form -->
<form on:submit|preventDefault={submitForm} class="">
  <!-- Title -->
  <div class="mb-4">
    <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
    <input id="title" bind:value={title} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="Enter SOP title" required />
  </div>

  <!-- Purpose -->
  <div class="mb-4">
    <label for="purpose" class="block text-gray-700 text-sm font-bold mb-2">Purpose:</label>
    <textarea id="purpose" bind:value={purpose} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter SOP purpose" required></textarea>
  </div>

  <!-- Scope -->
  <div class="mb-4">
    <label for="scope" class="block text-gray-700 text-sm font-bold mb-2">Scope:</label>
    <textarea id="scope" bind:value={scope} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter SOP scope" required></textarea>
  </div>

  <!-- Responsibilities -->
  <div class="mb-4">
    <label for="responsibilities" class="block text-gray-700 text-sm font-bold mb-2">Responsibilities:</label>
    <textarea id="responsibilities" bind:value={responsibilities} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter Responsibilities" required></textarea>
  </div>

  <!-- Procedure -->
  <div class="mb-4">
    <label for="procedure" class="block text-gray-700 text-sm font-bold mb-2">Procedure:</label>
    <textarea id="procedure" bind:value={procedure} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter Procedure" required></textarea>
  </div>

  <!-- Health & Safety Considerations -->
  <div class="mb-4">
    <label for="healthSafety" class="block text-gray-700 text-sm font-bold mb-2">Health & Safety Considerations:</label>
    <textarea id="healthSafety" bind:value={healthSafety} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter Health & Safety Considerations" required></textarea>
  </div>

  <!-- Tools/Equipment Needed -->
  <div class="mb-4">
    <label for="toolsEquipment" class="block text-gray-700 text-sm font-bold mb-2">Tools/Equipment Needed:</label>
    <textarea id="toolsEquipment" bind:value={toolsEquipment} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter Tools/Equipment Needed" required></textarea>
  </div>

  <!-- Quality Control -->
  <div class="mb-4">
    <label for="qualityControl" class="block text-gray-700 text-sm font-bold mb-2">Quality Control:</label>
    <textarea id="qualityControl" bind:value={qualityControl} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter Quality Control" required></textarea>
  </div>

  <!-- Record Keeping -->
  <div class="mb-4">
    <label for="recordKeeping" class="block text-gray-700 text-sm font-bold mb-2">Record Keeping:</label>
    <textarea id="recordKeeping" bind:value={recordKeeping} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="Enter Record Keeping Procedures" required></textarea>
  </div>

  <!-- Submit Button -->
  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
</form>

<!-- Popup message for success -->
{#if successMessage}
  <div class="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
    {successMessage}
  </div>

  <!-- Automatically hide the message after 3 seconds -->
  <script>
    setTimeout(() => successMessage = '', 3000);
  </script>
{/if}