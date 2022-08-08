<template>
    <div class="sm:p-12 p-4 pb-0 text-zinc-50 overflow-y-scroll bg-gradient-to-b from-emerald-900 to-zinc-900">
        <header class="text-zinc-50 font-bold text-3xl mb-8">
            Good {{ greeting }}
        </header>

        <!-- cards -->
        <div class="grid grid-cols-2 grid-rows-2 gap-5">
            <router-link :to="playlist.to"
                class="bg-zinc-700/25 hover:bg-zinc-700/75 cursor-pointer grid grid-cols-8 rounded-md items-center"
                v-for="(playlist, i) in playlists" @mouseenter="hover[i] = true" @mouseleave="hover[i] = false">
                <img :src="playlist.img"
                    class=" sm:col-span-2 col-span-3 aspect-square bg-cover object-cover h-16 rounded-l-md" alt="">
                <div class="ml-2 col-span-4 text-zinc-100 text-sm font-bold">{{ playlist.title }}</div>
                <div class="self-right pr-2 flex justify-end col-span-2">
                    <transition name="fade">
                        <play-icon v-if="hover[i]" class="h-10 w-10 hidexs text-emerald-600">
                        </play-icon>
                    </transition>
                </div>
            </router-link>
        </div>

        <!-- section -->
        <div v-for="title in titles">
            <!-- header -->
            <header class="flex justify-between items-baseline mt-6 mb-4">
                <h1 class="font-bold text-2xl">{{ title }}</h1>
                <button class=" uppercase text-zinc-400 hover:text-zinc-200 text-sm font-semibold">see
                    all</button>
            </header>

            <!-- cards -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-5">
                <div class="bg-zinc-700/25 hover:bg-zinc-700/75 shadow-sm p-4 rounded-md"
                    v-for="(playlist, i) in backin" @mouseenter="hover[i] = true" @mouseleave="hover[i] = false">
                    <div class="relative ">
                        <transition name="fade">
                            <play-icon v-if="hover[i]"
                                class="absolute hidexs h-12 w-12 bottom-2 right-2 text-emerald-600">
                            </play-icon>
                        </transition>
                        <router-link :to="playlist.to">
                            <img :src="playlist.img"
                                class=" shadow-lg col-span-2 aspect-square bg-cover object-cover rounded-md" alt="">
                        </router-link>
                    </div>
                    <div class="text-zinc-100 font-bold mt-2 cursor-pointer">{{ playlist.title }}</div>
                    <div class=" text-zinc-400 font-semibold text-sm">Lorem ipsum dolor sit amet elit.</div>

                </div>
            </div>
        </div>
        <footer class=" text-center text-xs sm:mt-10 py-2 text-zinc-600"> &copy;{{ year }} Spotofy inc. </footer>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { PlayIcon } from '@heroicons/vue/solid';

const store = useStore()
let playlists;
let backin;
const hover = ref([])
if (screen.width < 640) {
    playlists = computed(() => store.state.playlists.slice(0, 4));
    backin = computed(() => store.state.playlists.slice(0, 2));
} else {
    playlists = computed(() => store.state.playlists);
    backin = computed(() => store.state.playlists.slice(0, 4));
}
const titles = [
    'Jump back in', 'Release radar', 'Popular radios'
]
const date = new Date();
const year = date.getFullYear();
const time = date.getHours();
let greeting = null;

if (time < 12) {
    greeting = 'Morning'
} else if (time > 12 && time < 16) {
    greeting = 'Afternoon'
} else {
    greeting = 'Evening'

}
</script>

<style>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>