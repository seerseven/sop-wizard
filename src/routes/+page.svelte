<script lang="ts">
	import { Img, Heading, P } from 'flowbite-svelte';
	import { ImagePlaceholder } from 'flowbite-svelte';
	import { Skeleton } from 'flowbite-svelte';
	import { TextPlaceholder } from 'flowbite-svelte';
	import { CardPlaceholder } from 'flowbite-svelte';
	import { WidgetPlaceholder } from 'flowbite-svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Banner } from 'flowbite-svelte';
	import { BullhornSolid } from 'flowbite-svelte-icons';
	import { DeviceMockup } from 'flowbite-svelte';

	const params = { delay: 250, duration: 500, easing: quintOut };
</script>

<Heading class="p-8" tag="h1" customSize="text-3xl">Dashboard</Heading>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />
