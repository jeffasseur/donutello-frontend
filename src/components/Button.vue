<script setup>
    const props = defineProps({
    text: String,
    class: String,
    type: String
    })
</script>

<template>   
    <button :class="props.class" :type="props.type">{{ props.text }}</button>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';
</style>