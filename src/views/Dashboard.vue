<script setup>
import { onMounted } from 'vue'
import Nav from './../components/Navigation.vue'
import Btn from './../components/Button.vue'
import Donut from './../components/Donuts.vue'

onMounted( () => {
    if( localStorage.getItem('token') == null ) {
        window.location.href = '/login'
    }
} )

const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
}
</script>

<template>
    <Nav />
    <div class="dashboard__donuts">
        <Donut />
        <div class="logout">
            <Btn text="Uitloggen" class="btn btn--strawberry" type="submit" @click="logout" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.dashboard__donuts {
    margin-top: 9rem;
    min-height: calc(100vh - 9rem);
    padding: 0 2rem 2rem 2rem;
}
.logout {
    margin-top: 2rem;
}
</style>