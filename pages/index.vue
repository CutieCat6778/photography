<script setup lang="ts">
import GridItemBanner from "../components/GridItemBanner.vue";

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

const background_glob: Record<string, any> = import.meta.glob(
	"/public/bg/*.webp",
	{
		eager: true,
	}
);

const grid_glob: Record<string, any> = import.meta.glob("/public/**/banner*.*", {
	eager: true,
});

const background_images = Object.entries(background_glob).map(([string]) =>
	string.replace("/public", "")
);

const grid_images = Object.entries(grid_glob).map(([string]) =>
	string.replace("/public", "")
);
</script>

<template>
	<header class="h-screen w-full flex justify-center items-center flex-col">
		<div class="z-10 text-center">
			<h1 class="z-10 text-white text-5xl sm:text-7xl font-bold">
				Thinh Nguyen
			</h1>
			<h2 class="text-1xl sm:text-3xl text-[#e0e0e0] mt-3">
				Vietnamese Photographer
			</h2>
			<span class="absolute bottom-0 left-0 right-0 text-white mb-5"
				>Scroll down</span
			>
		</div>

		<NuxtImg
			:src="
				background_images[
					Math.round(Math.random() * (background_images.length - 1))
				]
			"
			alt="A background image"
			class="absolute -z-10 h-screen w-screen object-cover"
			:height="
				isWindowAvailable && windowHeight ? windowHeight : undefined
			"
			:width="isWindowAvailable && windowWidth ? windowWidth : undefined"
			fit="cover"
			quality="100"
		/>
	</header>
	<section class="w-full flex items-center flex-col p-4 lg:p-10">
		<div class="w-full xl:w-1/2 lg:w-4/5">
			<h1 class="w-full text-left">About Me</h1>
			<p class="text-xl mt-4">
				Hey, I'm Thinh Nguyen! When I was 12, I got into two cool
				things: photography and programming. I love taking pictures and
				messing around with computer stuff. I was born in Vietnam, grew
				up in Bulgaria, and now I live in Germany. It's pretty cool
				getting to experience different places. Whether I'm snapping
				pics or coding away, I'm always excited about what I'm doing.
				It's awesome to see how much I can learn and create!
				<br />
				<br />

				I also enjoy exploring new places and meeting people from
				different backgrounds. It's fascinating to see how cultures and
				experiences shape the world around us. Being in Germany now, I'm
				always eager to learn about its history and traditions while
				also adding my own unique perspective to the mix. Whether I'm
				out with my camera or tinkering with code, every day brings a
				new adventure and opportunity for growth.
			</p>
			<img
				class="mt-10 rounded-lg object-cover"
				src="/section/final-1-2.webp"
				alt="My friend and me"
				height="960px"
				width="1280px"
				fit="cover"
			/>
			<h2 class="my-10">Showcase</h2>
			<div class="grid gap-2 lg:gap-4 grid-cols-3">
				<div v-for="(images, key) of grid_images" :key="key">
					<GridItemBanner :data="images" :index="key" />
				</div>
			</div>
		</div>
	</section>
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
