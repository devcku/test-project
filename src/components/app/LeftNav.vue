<template>
    <nav class="hidden sm:block col-span-3 row-span-5 bg-black text-slate-300 p-6">
        <ul class="font-semibold">
            <router-link :to="link.to" v-for="link in links"
                class="mb-4 hover:text-slate-50 cursor-pointer flex items-center">
                <component :is="link.icon" class="h-7 w-7 mr-3"></component>
                <div>{{ link.title }}</div>
            </router-link>
        </ul>
        <ul class="font-semibold pt-8">
            <li v-for="(action, i) in actions">
                <router-link :to="action.to" class="mb-4 hover:text-slate-50 cursor-pointer flex items-center">
                    <div class="h-7 w-7 mr-3 rounded-sm flex items-center justify-center"
                        :class="i < 2 ? i < 1 ? 'bg-slate-500' : 'bg-blue-500' : 'bg-emerald-500'">

                        <component :is="action.icon" class="h-5 w-5"></component>
                    </div>
                    <div>{{ action.title }}</div>
                </router-link>
            </li>
        </ul>
        <hr class="border-slate-300/25 mb-4">
        <ul class="font-semibold overflow-y-scroll h-[25%]
        ">
            <li v-for="playlist in playlists">
                <router-link :to="playlist.to"
                    class="mb-2 text-sm text-slate-300/75 hover:text-slate-100 cursor-pointer flex items-center">

                    <div>{{ playlist.title }}</div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { HomeIcon, SearchIcon, CollectionIcon, PlusIcon, HeartIcon, BookmarkIcon } from '@heroicons/vue/solid'

const store = useStore();

const links = [
    { title: 'Home', icon: HomeIcon, to: '/' },
    { title: 'Search', icon: SearchIcon, to: '/' },
    { title: 'Your Library', icon: CollectionIcon, to: '/' }
]
const actions = [
    { title: 'Create Playlist', icon: PlusIcon, to: '/', },
    { title: 'Liked Songs', icon: HeartIcon, to: '/playlists/liked', },
    { title: 'Your Episodes', icon: BookmarkIcon, to: '/', }
]
const playlists = computed(() => store.state.playlists)
</script>