<template>
    <div class=" pb-0 text-zinc-50 overflow-y-scroll bg-gradient-to-b from-blue-900 to-zinc-900">
        <header class="flex gap-4 sm:p-12 p-4">
            <img src="../assets/img/playlists/img3.jpg" alt=""
                class="h-40 shadow-2xl col-span-2 aspect-square bg-cover object-cover rounded-md">
            <div class="flex flex-col justify-between pt-4">
                <div class="text-xs uppercase font-bold">Playlist</div>
                <div class="text-8xl font-bold">Liked Songs</div>
                <div class="text-sm flex items-center">
                    <div class="h-6 w-6 mr-2 rounded-full flex justify-center items-center bg-blue-600">
                        <UserIcon class="h-4"></UserIcon>
                    </div>
                    <div><span class="font-bold">johndoe &sdot;</span> 6 songs</div>
                </div>
            </div>
        </header>
        <div class="bg-gradient-to-b from-zinc-900/50 to-zinc-900 sm:p-12 p-4">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <PlayIcon class="h-14 w-14 text-emerald-500"></PlayIcon>
                    <ArrowCircleDownIcon class="h-8 w-8 text-zinc-400 ml-4"></ArrowCircleDownIcon>
                </div>
                <div class="text-zinc-300 flex items-center">
                    <SearchIcon class="h-6 w-6 mr-4"></SearchIcon>
                    <select name="" class="bg-zinc-700 text-xs p-1 rounded-sm font-semibold outline-none">
                        <option>Date added</option>
                    </select>
                </div>
            </div>
            <div class="grid grid-cols-12 text-zinc-400 text-xs uppercase mt-2 font-semibold">
                <div class="col-span-1 text-sm">#</div>
                <div class="col-span-3">title</div>
                <div class="col-span-3">album</div>
                <div class="col-span-3">date added</div>
                <div class="col-span-2">
                    <ClockIcon class="h-5 w-5"></ClockIcon>
                </div>
            </div>
            <hr class="border-zinc-50/50 my-2">
        </div>
    </div>
</template>
<script setup>
import { UserIcon, PlayIcon, SearchIcon } from '@heroicons/vue/solid'
import { ArrowCircleDownIcon, ClockIcon } from '@heroicons/vue/outline'
</script>