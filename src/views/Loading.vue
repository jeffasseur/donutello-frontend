<script setup>
// import navigation
import Navigation from './../components/Navigation.vue'
import "@lottiefiles/lottie-player";

const startVideo = async () => {
  const loadingIcon = document.querySelector('#loadingIcon');

  try {
      await loadingIcon.play();

      video.setAttribute('autoplay', true);

      console.log('video started playing successfully');
  } catch (err) {
    console.log(err, 'video play error');
    // do stuff in case your video is unavailable to play/autoplay
  }
}

setTimeout(startVideo, 500);
</script>

<template>
    <Navigation />
    <body>
        <!--insert lottie animation-->

    <lottie-player id="loadingIcon" src="https://lottie.host/3cab8f75-ee6c-4e54-9b68-00e0bd5817bb/TpeJy1Q59f.json" background="transparent" speed="1" style="width: 500px; height: 300px;" ></lottie-player>    </body>

</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

body{
    background-color: $heaven;
}

lottie-player{
    margin: 0 auto;
    display: block;
    width: 300px;
    height: 300px;
    // no repeat
    animation-iteration-count: 1;
    background-color: $heaven;


}

</style>