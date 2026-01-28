<script setup lang="ts">
const route = useRoute();
const { width } = useWindowSize();

const id = route.params.id;

// Dynamically load all images from the album folder
const image_glob: Record<string, any> = import.meta.glob("/public/**/**", {
	eager: true,
});

// Filter and sort images for this album
const images = Object.keys(image_glob)
	.map((path) => path.replace("/public", ""))
	.filter((path) => path.startsWith(`/${id}/`))
	.sort((a, b) => {
		const numA = parseInt(a.match(/\d+/)?.[0] || "0");
		const numB = parseInt(b.match(/\d+/)?.[0] || "0");
		return numA - numB;
	});

// Store image orientations: 'landscape' | 'portrait' | 'loading'
const imageOrientations = ref<Record<string, string>>({});

// Detect image orientation by loading dimensions
const detectOrientation = (src: string): Promise<string> => {
	return new Promise((resolve) => {
		const img = new Image();
		img.onload = () => {
			resolve(img.width > img.height ? "landscape" : "portrait");
		};
		img.onerror = () => resolve("portrait");
		img.src = src;
	});
};

// Load all image orientations on mount
onMounted(async () => {
	const orientations: Record<string, string> = {};
	await Promise.all(
		images.map(async (src) => {
			orientations[src] = await detectOrientation(src);
		})
	);
	imageOrientations.value = orientations;
});

// Determine grid class based on orientation or naming convention
const getGridClass = (name: string): string => {
	// Check naming convention first (manual override)
	if (name.includes("-pp-")) return "col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 aspect-[4/3]";
	if (name.includes("-p-")) return "col-span-1 sm:col-span-2 aspect-[3/4]";

	// Use detected orientation
	const orientation = imageOrientations.value[name];
	if (orientation === "landscape") {
		return "col-span-1 sm:col-span-2 lg:col-span-3 row-span-1 aspect-[4/3]";
	}
	return "aspect-[3/4]";
};

// Calculate optimal image width based on viewport
const imageWidth = computed(() => Math.min(width.value * 0.9, 1200));
</script>

<template>
	<div class="min-h-screen">
		<header class="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
			<div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
				<NuxtLink to="/" class="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					<span class="text-sm font-medium">Back to Gallery</span>
				</NuxtLink>
				<h1 class="text-xl sm:text-2xl">Album {{ id }}</h1>
			</div>
		</header>

		<main class="max-w-7xl mx-auto px-4 py-8">
			<div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
				<div
					v-for="(image, index) in images"
					:key="index"
					:class="['group relative overflow-hidden rounded-xl', getGridClass(image)]"
				>
					<LazyNuxtImg
						:src="image"
						:alt="`Photo ${index + 1} from album ${id}`"
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						:width="imageWidth"
						format="webp"
						quality="85"
						fit="cover"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
				</div>
			</div>

			<div v-if="images.length === 0" class="text-center py-20">
				<p class="text-gray-400 text-lg">No images found in this album.</p>
			</div>
		</main>

		<footer class="py-8 text-center">
			<NuxtLink
				to="/"
				class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
				<span>Back to Gallery</span>
			</NuxtLink>
		</footer>
	</div>
</template>
