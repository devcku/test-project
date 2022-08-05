<script setup>
import RightNav from './components/app/RightNav.vue';
import LeftNav from './components/app/LeftNav.vue';
import Player from './components/app/Player.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <div class="grid grid-cols-12 grid-rows-6 h-[100vh]">
        <LeftNav :playlists="playlists"></LeftNav>
        <RouterView class=" col-span-8 row-span-5"></RouterView>
        <RightNav></RightNav>
        <Player></Player>
      </div>
    </template>
    <template #fallback>
      <div class="w-[100vw] h-[100vh] bg-red-500">

      </div>
    </template>
  </Suspense>
</template>
