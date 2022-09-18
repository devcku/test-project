<script setup>
import { ref, watch } from 'vue'
import LeftNav from './components/app/LeftNav.vue';
import Player from './components/app/Player.vue';

const height = ref(outerHeight);

onresize = () => {
  height.value = outerHeight
}
</script>

<template>
  <Suspense>
    <template #default>
      <div class="grid grid-cols-12 grid-rows-6" :style="'height:'+height+'px'">
        <LeftNav></LeftNav>
        <RouterView class=" col-span-12 sm:col-span-9 row-span-5"></RouterView>
        <Player></Player>
      </div>
    </template>
    <template #fallback>
      <div class="w-[100vw] h-[100vh] bg-red-500">

      </div>
    </template>
  </Suspense>
</template>
