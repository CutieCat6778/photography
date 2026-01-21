<script setup lang="ts">
const { width, height } = useWindowSize();

// Dynamically load all banner images from album folders
const grid_glob: Record<string, any> = import.meta.glob("/public/**/banner*.webp", {
	eager: true,
});

// Extract and sort album paths (latest/biggest number first)
const grid_images = Object.keys(grid_glob)
	.map((path) => path.replace("/public", ""))
	.sort((a, b) => {
		const numA = parseInt(a.split("/")[1]);
		const numB = parseInt(b.split("/")[1]);
		return numB - numA;
	});
</script>

<template>
	<header class="relative h-screen w-full flex justify-center items-center flex-col overflow-hidden">
		<div class="z-10 text-center px-4">
			<h1 class="text-white text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
				Thinh Nguyen
			</h1>
			<h2 class="text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-4 font-light tracking-wide">
				Vietnamese Photographer
			</h2>
		</div>

		<div class="absolute bottom-8 left-0 right-0 flex flex-col items-center text-white/80 animate-bounce">
			<span class="text-sm tracking-widest uppercase mb-2">Scroll</span>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</div>

		<div class="absolute inset-0 bg-black/40 -z-[5]" />
		<NuxtImg
			src="/bg/final-6.webp"
			alt="Hero background"
			class="absolute inset-0 -z-10 h-full w-full object-cover"
			:height="height"
			:width="width"
			fit="cover"
			quality="90"
			loading="eager"
		/>
	</header>

	<section class="w-full flex items-center flex-col py-16 px-4 lg:px-10">
		<div class="w-full max-w-5xl">
			<div class="mb-16">
				<h1 class="text-4xl sm:text-5xl lg:text-6xl mb-8">About Me</h1>
				<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					<div>
						<p class="text-lg text-gray-300 leading-relaxed">
							Hey, I'm Thinh Nguyen! When I was 12, I got into two cool
							things: photography and programming. I love taking pictures and
							messing around with computer stuff. I was born in Vietnam, grew
							up in Bulgaria, and now I live in Germany. It's pretty cool
							getting to experience different places.
						</p>
						<p class="text-lg text-gray-300 leading-relaxed mt-4">
							I also enjoy exploring new places and meeting people from
							different backgrounds. It's fascinating to see how cultures and
							experiences shape the world around us. Whether I'm out with my
							camera or tinkering with code, every day brings a new adventure.
						</p>
					</div>
					<LazyNuxtImg
						class="rounded-2xl object-cover aspect-[4/3] w-full shadow-2xl"
						src="/section/final-1-2.webp"
						alt="My friend and me"
						width="640"
						height="480"
						fit="cover"
						quality="80"
					/>
				</div>
			</div>

			<div>
				<h2 class="text-3xl sm:text-4xl lg:text-5xl mb-8">Showcase</h2>
				<div class="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
					<NuxtLink
						v-for="(image, index) in grid_images"
						:key="index"
						:to="`/albumn/${image.split('/')[1]}`"
						class="group relative overflow-hidden rounded-xl aspect-[3/4]"
					>
						<LazyNuxtImg
							:src="image"
							:alt="`Album ${image.split('/')[1]}`"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							format="webp"
							quality="70"
							fit="cover"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						<span class="absolute bottom-4 left-4 text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							Album {{ image.split('/')[1] }}
						</span>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>

	<footer class="py-8 text-center text-gray-500 text-sm">
		<p>&copy; {{ new Date().getFullYear() }} Thinh Nguyen. All rights reserved.</p>
	</footer>
</template>
