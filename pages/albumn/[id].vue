<script setup lang="ts">
const route = useRoute();

const id = route.params.id;

const image_glob: Record<string, any> = import.meta.glob("/public/**/**.webp", {
	eager: true,
});

const images = Object.entries(image_glob)
	.map(([string]) => string.replace("/public", ""))
	.filter(
		(a) =>
			a.startsWith(`/${id}/`)
	);

function calculateGrid(name: string): string {
    console.log(name, name.includes("-p-"), name.includes("-pp-"))
    if(name.includes("-p-")) {
        return "grid-large"
    } else if (name.includes("-pp-")) {
        return "grid-large2"
    } else {
        return ""
    }
}

</script>

<template>
	<div class="m-10 grid gap-2  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
		<div :class="`rounded-lg ${calculateGrid(image)}`" v-for="(image, key) of images" :key="key">
			<NuxtImg :src="image" :alt="image" :class="`rounded-lg h-full object-cover`" :width="isWindowAvailable && windowWidth ? Math.round(windowWidth * 0.9) : '780px'"/>
		</div>
	</div>
    <div class="w-full justify-center items-center flex" >
        <NuxtLink to="/"><h2 class=" hover:opacity-25">Go Back</h2></NuxtLink>
    </div>
</template>

<script lang="ts">
export default {
	data() {
		const data: {
			windowWidth: number | null;
			windowHeight: number | null;
			isWindowAvailable: boolean;
		} = {
			windowWidth: null,
			windowHeight: null,
			isWindowAvailable: typeof window !== "undefined",
		};
		return data;
	},
	mounted() {
		if (this.isWindowAvailable) {
			this.handleResize();
		}
	},
	beforeDestroy() {
		if (this.isWindowAvailable) {
			window.removeEventListener("resize", this.handleResize);
		}
	},
	methods: {
		handleResize() {
			this.windowWidth = window.innerWidth;
			this.windowHeight = window.innerHeight;
		},
	},
};
</script>