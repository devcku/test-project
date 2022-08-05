<template>
    <div class="row-span-1 col-span-12 bg-zinc-800 p-2">
        <div class="flex h-full justify-between items-center relative">
            <!-- div 1 -->
            <div class="cursor-pointer flex rounded-md items-center">
                <img src="../../assets/img6.jpg" class=" col-span-4 aspect-square bg-cover h-20 object-cover rounded-sm"
                    alt="">
                <div class="ml-4 text-zinc-100 font-semibold">
                    <span>For you</span>
                    <br>
                    <span class="text-zinc-400 text-xs">Trevor Daniels</span>
                </div>
            </div>
            <!-- div 2 -->
            <div class="flex flex-col absolute justify-evenly h-full w-full">
                <div class="flex justify-center items-center">
                    <AdjustmentsIcon class="h-5 w-5 cursor-pointer text-zinc-500 hover:text-zinc-200">
                    </AdjustmentsIcon>
                    <ChevronDoubleLeftIcon class="h-5 w-5 text-zinc-300 mx-3 cursor-pointer hover:text-zinc-100">
                    </ChevronDoubleLeftIcon>
                    <component :is="playing ? PauseIcon : PlayIcon" @click="playing = !playing"
                        class="h-12 w-12 text-zinc-200 cursor-pointer hover:text-zinc-50"></component>
                    <ChevronDoubleRightIcon class="h-5 w-5 cursor-pointer text-zinc-300 mx-3 hover:text-zinc-100">
                    </ChevronDoubleRightIcon>
                    <SwitchHorizontalIcon class="h-5 w-5 cursor-pointer text-zinc-500 hover:text-zinc-200">
                    </SwitchHorizontalIcon>
                </div>
                <div class="flex justify-center">
                    <input type="range" min="1" max="12" value="2"
                        class="w-1/2 h-1 rounded-lg appearance-none cursor-pointer bg-zinc-700 slider">
                </div>
            </div>

            <!-- div 3 -->
            <div class="flex text-zinc-500 mr-4">
                <component v-for="icon in sideIcons" :is="icon" class="h-6 w-6 mx-2 cursor-pointer hover:text-zinc-300">
                </component>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, PlayIcon, PauseIcon, ViewListIcon, VolumeUpIcon, ArrowsExpandIcon, DesktopComputerIcon, SwitchHorizontalIcon, AdjustmentsIcon } from '@heroicons/vue/solid'

const playing = ref(false);
const sideIcons = [
    ViewListIcon, DesktopComputerIcon, VolumeUpIcon, ArrowsExpandIcon
]
</script>
<style>
</style>