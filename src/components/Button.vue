<script setup>
    const props = defineProps({
    text: String,
    class: String
    })
</script>

<template>   
    <button :class="props.class">{{ props.text }}</button>
</template>