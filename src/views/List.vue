<template>
    <div class=" pb-0 text-zinc-50 overflow-y-scroll bg-gradient-to-b from-blue-900 to-zinc-900">
        <header class="flex gap-4 sm:p-12 p-4">
            <div v-if="route.params.id == 'liked'"
                class="h-24 w-24 sm:h-40 sm:w-40 rounded-md flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-700 shadow-xl">
                <HeartIcon class="h-10 sm:h-20"></HeartIcon>
            </div>
            <img src="../assets/img/playlists/img2.jpg" v-else alt=""
                class="h-24 sm:h-40 shadow-2xl col-span-2 aspect-square bg-cover object-cover rounded-md">
            <div class="flex flex-col justify-between pt-4">
                <div class="text-xs uppercase font-bold">Playlist</div>
                <div class="text-2xl sm:text-8xl font-bold">Liked Songs</div>
                <div class="text-sm flex items-center">
                    <div class="h-6 w-6 mr-2 hidden sm:flex rounded-full justify-center items-center bg-blue-600">
                        <UserIcon class="h-4"></UserIcon>
                    </div>
                    <div><span class="font-bold">{{ route.params.id }} &sdot;</span> {{ songs.length }} songs</div>
                </div>
            </div>
        </header>
        <div class="bg-gradient-to-b from-zinc-900/50 to-zinc-900 sm:p-12 p-4">
            <!-- play button and search -->
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <PlayIcon class="h-14 w-14 text-emerald-500"></PlayIcon>
                    <ArrowCircleDownIcon class="h-8 w-8 text-zinc-400 ml-4"></ArrowCircleDownIcon>
                </div>
                <div class="text-zinc-300 flex items-center">
                    <SearchIcon class="h-6 w-6 mr-4 hidexs"></SearchIcon>
                    <select name="" class="bg-zinc-700 text-xs p-1 rounded-sm font-semibold outline-none">
                        <option>Date added</option>
                    </select>
                </div>
            </div>
            <!-- table header-->
            <div class="grid-cols-12 text-zinc-400 text-xs uppercase py-2 px-4 font-semibold  hidden sm:grid">
                <div class="col-span-1 text-sm">#</div>
                <div class="col-span-3">title</div>
                <div class="col-span-3">album</div>
                <div class="col-span-3">date added</div>
                <div class="col-span-2">
                    <ClockIcon class="h-5 w-5"></ClockIcon>
                </div>
            </div>

            <hr class="border-zinc-50/50 my-2 hidexs">

            <!-- table contents -->
            <div @mouseenter="hover[i] = true" @mouseleave="hover[i] = false" v-if="songs" v-for=" (song, i) in songs"
                class="grid grid-cols-12 items-center rounded py-2 px-4 hover:bg-zinc-700/25 text-zinc-400 text-xs mt-2 font-semibold w-full">
                <div class="col-span-1 hidden md:block text-sm">
                    <PlayIcon v-if="hover[i]" class="h-8 w-8"></PlayIcon> <span class="pl-2" v-else>{{ i + 1 }}</span>
                </div>
                <div class="col-span-10 flex items-center">
                    <img :src="song.img" class="h-10 w-10 aspect-square bg-cover object-cover rounded-sm" alt="">
                    <div class="ml-2">
                        <span class="text-zinc-200">{{ song.title }}</span>
                        <br>
                        <span class="text-xs">{{ song.artist }}</span>
                    </div>
                </div>
                <div class="col-span-3 hidexs">{{ song.artist }}</div>
                <div class="col-span-3 hidexs">8/8/22</div>
                <div class="col-span-2 flex justify-self-end">
                    <HeartIcon class="h-5 w-5 mr-4 text-emerald-500"></HeartIcon>
                    <DotsHorizontalIcon class="h-5 w-5"></DotsHorizontalIcon> <span class=" hidexs">{{ times[i]
                    }}</span>
                </div>
            </div>
            <div class="" v-else> no songs</div>
        </div>
    </div>
</template>
<script setup>
import { UserIcon, PlayIcon, SearchIcon, HeartIcon } from '@heroicons/vue/solid'
import { ArrowCircleDownIcon, ClockIcon, DotsHorizontalIcon } from '@heroicons/vue/outline'
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const route = useRoute();

const store = useStore();

const hover = ref([]);

//get songs 
const songs = ref();
const prefetch = () => store.commit('fetchsongs', (route.params.id))
const fetchsongs = () => {
    if (route.params.id == 'liked') {
        songs.value = computed(() => store.state.songs).value;
    } else {
        prefetch()
        songs.value = computed(() => store.state.currentsongs).value;
    }
}
fetchsongs()

//songs length
const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}
let times = ref([]);
songs.value.forEach(song => {
    let audio = new Audio(song.src)
    audio.onloadedmetadata = (e) => {
        times.value.push(formatTime(audio.duration))
    }
});

//fetch songs on route change
watch(
    () => route.params.id,
    () => {
        fetchsongs()
    }
)
</script>