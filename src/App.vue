<script setup>
import LeftNav from './components/app/LeftNav.vue';
import Player from './components/app/Player.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <div class="grid grid-cols-12 grid-rows-6 h-[100vh]">
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
