<script setup lang="ts">
    const {data} = defineProps(['data'])
    console.log(data)

</script>

<template>
    <LazyNuxtImg class="rounded-lg aspect-[4/5] object-cover" fit="cover" height="438px" width="350px" :src="data.toString()" :alt="data.toString()"/>
</template>