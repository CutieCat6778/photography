<script setup lang="ts">
	const glob: Record<string, any> = import.meta.glob("/public/bg/*.jpg", { eager: true });
	const images = Object.entries(glob).map(([string]) => string.replace("/public", ""));
	console.log(images)
</script>

<template>
	<header class="h-screen w-screen flex justify-center items-center flex-col">
		<div class="z-10 text-center">
			<h1 class="z-10 text-white text-7xl font-bold" >Thinh Nguyen</h1>
			<h2 class="text-3xl text-[#e0e0e0] mt-3">Vietnamese Photographer</h2>
			<span class="absolute bottom-0 left-0 right-0 text-white mb-5" >Scroll down</span>
		</div>
		
		<img :src="images[Math.round(Math.random() * (images.length - 1))]" alt="A background image" class="absolute -z-10 h-screen w-screen object-cover" />
	</header>
</template>
