<template>
    <div class="hidden sm:flex flex-col absolute justify-evenly h-full w-full">
        <div class="flex justify-center items-center">
            <AdjustmentsIcon class="h-5 w-5 cursor-pointer text-zinc-500 hover:text-zinc-200">
            </AdjustmentsIcon>
            <ChevronDoubleLeftIcon @click="prev" class="h-5 w-5 text-zinc-300 mx-3 cursor-pointer hover:text-zinc-100">
            </ChevronDoubleLeftIcon>
            <component :is="paused ? PlayIcon : PauseIcon" @click="TogglePlay()"
                class="h-12 w-12 text-zinc-200 cursor-pointer hover:text-zinc-50"></component>
            <ChevronDoubleRightIcon @click="next" class="h-5 w-5 cursor-pointer text-zinc-300 mx-3 hover:text-zinc-100">
            </ChevronDoubleRightIcon>
            <SwitchHorizontalIcon class="h-5 w-5 cursor-pointer text-zinc-500 hover:text-zinc-200">
            </SwitchHorizontalIcon>
        </div>
        <div class="flex justify-center items-center text-zinc-400 text-xs">
            <div>{{ formatTime(currentTime) }}</div>
            <input type="range" min="0" @change="seek" ref="input" :max="duration" :value="currentTime"
                class="w-5/12 h-1 mx-2 rounded-lg appearance-none cursor-pointer bg-zinc-700">
            <div>{{ formatTime(duration) }}</div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, PlayIcon, PauseIcon, SwitchHorizontalIcon, AdjustmentsIcon } from '@heroicons/vue/solid';
import { useStore } from 'vuex';
const store = useStore();
const input = ref(null)
let songindex = 0;
const songs = computed(() => store.getters.songs)
const audio = new Audio(songs.value[songindex].src);
const paused = ref(true)
const duration = ref()
const currentTime = ref()

audio.autoplay = true;
audio.onloadeddata = (e) => {
    duration.value = audio.duration
    currentTime.value = audio.currentTime
    console.log(currentTime.value, duration.value)
}
audio.onplay = (e) => {
    paused.value = false
}
audio.onpause = (e) => {
    paused.value = true
}

audio.ontimeupdate = (e) => {
    currentTime.value = audio.currentTime
}
audio.onended = (e) => {
    next()
}

const next = () => {
    songindex++;
    audio.src = songs.value[songindex].src;
    audio.load()
}
const prev = () => {
    songindex--;
    audio.src = songs.value[songindex].src;
    audio.load()
}
const TogglePlay = () => {
    if (audio.paused == true) {
        audio.play()
    } else {
        audio.pause()
    }
}
const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}
const seek = () => {
    audio.currentTime = input.value.value
}
</script>