<script setup>
    import { onMounted } from 'vue'
    import * as Three from 'three'
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


    onMounted( () => {
        let container = document.querySelector('.three-donut');

        const camera = new Three.PerspectiveCamera(70, container.innerWidth/container.innerHeight, 0.01, 10);
        camera.position.z = 1;

        const scene = new Three.Scene();

        let light = new Three.AmbientLight(0xffffff, 0.8);
        scene.add(light);

        // const donutLoader = new GLTFLoader();
        // donutLoader.load('/assets/donut.glb', (donut) => {
        //     scene.add(donut.scene);
        // });

        const renderer = new Three.WebGLRenderer();
        renderer.setSize(container.innerWidth, container.innerHeight);
        container.appendChild(renderer.domElement);        
    })

</script>

<template>
  <div class="three-donut"></div>
</template>


<style scoped>
.three-donut {
    width: 80vw !important;
    height: 80vh !important;
}

.three-donut canvas {
    width: 100% !important;
    height: 100% !important;
}
</style>
