<script setup>
import Nav from './../components/Navigation.vue'
import Button from './../components/Button.vue'
import Donut from './../components/Donuts.vue'
</script>

<template>
    <Nav />
    <div class="dashboard__donuts">
        <Donut />
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.dashboard__donuts {
    margin-top: 9rem;
    min-height: calc(100vh - 9rem);
    padding: 0 2rem 2rem 2rem;
}
</style>