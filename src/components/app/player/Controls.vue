<template>
    <div class="hidden sm:flex flex-col absolute justify-evenly h-full w-full">
        <div class="flex justify-center items-center">
            <AdjustmentsIcon class="h-5 w-5 cursor-pointer text-zinc-500 hover:text-zinc-200">
            </AdjustmentsIcon>
            <ChevronDoubleLeftIcon class="h-5 w-5 text-zinc-300 mx-3 cursor-pointer hover:text-zinc-100">
            </ChevronDoubleLeftIcon>
            <component :is="paused ? PlayIcon : PauseIcon" @click="TogglePlay()"
                class="h-12 w-12 text-zinc-200 cursor-pointer hover:text-zinc-50"></component>
            <ChevronDoubleRightIcon class="h-5 w-5 cursor-pointer text-zinc-300 mx-3 hover:text-zinc-100">
            </ChevronDoubleRightIcon>
            <SwitchHorizontalIcon class="h-5 w-5 cursor-pointer text-zinc-500 hover:text-zinc-200">
            </SwitchHorizontalIcon>
        </div>
        <div class="flex justify-center items-center text-zinc-400 text-xs">
            <input type="range" min="1" max="12" value="2"
                class="w-5/12 h-1 mx-2 rounded-lg appearance-none cursor-pointer bg-zinc-700">
            <div>2:15</div>
        </div>
        <audio controls>
            <source :src="songs[1].src" type="audio/mpeg">
        </audio>
            <div>{{audio.paused}}</div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, PlayIcon, PauseIcon, SwitchHorizontalIcon, AdjustmentsIcon } from '@heroicons/vue/solid';
import { useStore } from 'vuex';
const store = useStore();
const audio = document.getElementsByTagName('audio');
const paused = ref(audio.paused);

console.log(paused.value)
const TogglePlay =()=>{
    console.log(audio,audio.length, audio.paused)
    if(paused.value==true){
        // audio.play()
    }else{
        // audio.pause()
    }
}
const songs = computed(() => store.getters.songs)
</script>