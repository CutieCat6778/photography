<script setup lang="ts">
    const {data, index} = defineProps(['data', 'index'])
    console.log(data, index)

</script>

<template>
    <NuxtLink :to="`/albumn/${data.toString().split('/')[1]}`">
        <LazyNuxtImg class="rounded-lg aspect-[4/5] object-cover hover:opacity-45" fit="cover" height="438px" width="350px" :src="data.toString()" :alt="data.toString()"/>
    </NuxtLink>
</template>