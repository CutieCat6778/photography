<script setup lang="ts">
const route = useRoute();

useHead({
	link: [
		{
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossorigin: "anonymous",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Anton&display=swap",
			crossorigin: "",
		},
	],
});

const id = route.params.id;

const image_glob: Record<string, any> = import.meta.glob("/public/**/**.*", {
	eager: true,
});

const images = Object.entries(image_glob)
	.map(([string]) => string.replace("/public", ""))
	.filter(
		(a) =>
			(a.endsWith("jpg") || a.endsWith("png")) && a.startsWith(`/${id}`)
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
		<div :class="`rounded-lg ${calculateGrid(image)} flex justify-center items-center`" v-for="(image, key) of images" :key="key">
			<NuxtImg :src="image" :alt="image" :class="`rounded-lg h-[500px] object-cover`" height="1000px"/>
		</div>
	</div>
    <div class="w-screen justify-center items-center flex" >
        <NuxtLink to="/"><h2 class=" hover:opacity-25">Go Back</h2></NuxtLink>
    </div>
</template>
