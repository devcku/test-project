<template>
    <div class="p-12 pb-0 text-zinc-50 overflow-y-scroll bg-gradient-to-b from-emerald-900 to-zinc-900">
        <header class="text-zinc-50 font-bold text-3xl mb-8">
            Good afternoon
        </header>

        <!-- cards -->
        <div class="grid grid-cols-2 grid-rows-2 gap-5">
            <div class="bg-zinc-700/25 hover:bg-zinc-700/75 cursor-pointer grid grid-cols-8 rounded-md items-center"
                v-for="playlist in playlists">
                <img :src="playlist.img" class=" col-span-2 aspect-square bg-cover object-cover h-16 rounded-l-md"
                    alt="">
                <div class="ml-5 col-span-4 text-zinc-100 font-bold">{{ playlist.title }}</div>
            </div>
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
            <div class="grid grid-cols-4 gap-5">
                <div class="bg-zinc-700/25 hover:bg-zinc-700/75 shadow-sm cursor-pointer p-4 rounded-md"
                    v-for="playlist in backin">
                    <img :src="playlist.img"
                        class=" shadow-lg col-span-2 aspect-square bg-cover object-cover rounded-l-md" alt="">
                    <div class="text-zinc-100 font-bold mt-2">{{ playlist.title }}</div>
                    <div class=" text-zinc-400 font-semibold text-sm">Lorem ipsum dolor sit amet elit.</div>
                </div>
            </div>
        </div>
        <footer class=" text-center text-xs mt-10 py-2 text-zinc-600">&copy;{{year}} Spotify inc. </footer>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
const store = useStore()
const playlists = computed(() => store.getters.playlists);
const backin = computed(() => store.getters.playlists.slice(0, 4));
const titles = [
    'Jump back in', 'Release radar', 'Just for you', 'Popular radios'
]
const year = new Date().getFullYear();
</script>