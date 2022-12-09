<script setup>
import { onMounted } from 'vue'
import Nav from './../components/Navigation.vue'

onMounted( () => {
    console.log('mounted')
})
</script>

<template>
    <Nav />
    <h1>Donut detail page</h1>
</template>