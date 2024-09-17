<script lang="ts">
	import { Button, Modal, Heading } from 'flowbite-svelte';
	let open = false;
	let color;
	import SOPWizardForm from './SOPWizardForm.svelte'; // Import the SOPWizardForm component

	let isCreateModalOpen = false; // Control the state of the modal
</script>

<div class=" text-white px-8 flex justify-between items-center">
	<!-- Left section: Library Link -->
	<div>
		<Heading class="p-8" tag="h1" customSize="text-3xl">Standard Operating Procedures</Heading>
	</div>

	<!-- Right section: Create Button -->
	<div>
		<Button on:click={() => (isCreateModalOpen = true)} color="green">Create</Button>
	</div>
</div>

<!-- Modal for Create SOP Wizard -->
<Modal title="Create New SOP" bind:open={isCreateModalOpen} autoclose outsideclose>
	<!-- SOP Wizard Form inside modal -->
	<SOPWizardForm />
</Modal>
