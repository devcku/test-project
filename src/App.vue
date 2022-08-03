<script setup>
import RightNav from './components/Home/RightNav.vue';
import LeftNav from './components/Home/LeftNav.vue';
import Player from './components/Home/Player.vue';

</script>

<template>
  <div class="grid grid-cols-12 grid-rows-6 h-[100vh]">

    <LeftNav :playlists="playlists"></LeftNav>
    <RouterView class=" col-span-8 row-span-5 bg-gradient-to-b from-emerald-900 to-zinc-900"></RouterView>
    <RightNav></RightNav>
    <Player></Player>
  </div>
</template>

<style>
</style>
