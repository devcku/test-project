<template>
    <div class="row-span-1 col-span-12 bg-zinc-800 sm:p-2">
        <div class="flex h-full justify-between items-center relative">

            <!-- div 1 -->
            <Song></Song>

            <!-- div 2 -->
            <Controls></Controls>

            <!-- div 3 -->
            <MusicIcons></MusicIcons>
        </div>
    </div>
</template>
<script setup>
import Song from './player/Song.vue';
import Controls from './player/Controls.vue';
import MusicIcons from './player/MusicIcons.vue';
</script>
<style>
</style>