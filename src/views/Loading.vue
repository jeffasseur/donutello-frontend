<script setup>
// import navigation
import Navigation from './../components/Navigation.vue'
import "@lottiefiles/lottie-player";</script>

<template>
    <Navigation />
    <body>
        <!--insert lottie animation-->

<lottie-player src="https://lottie.host/3cab8f75-ee6c-4e54-9b68-00e0bd5817bb/TpeJy1Q59f.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>    </body>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

body{
    background-color: $heaven;
}
</style>