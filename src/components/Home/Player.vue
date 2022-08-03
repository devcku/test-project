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
            <div class="flex flex-col text-zinc-500 absolute justify-around h-full w-full">
                <div class="flex h-full justify-center items-center">
                    <ChevronDoubleLeftIcon class="h-8 w-8 cursor-pointer"></ChevronDoubleLeftIcon>
                    <PlayIcon class="h-10 w-10 text-zinc-200 cursor-pointer"></PlayIcon>
                    <ChevronDoubleRightIcon class="h-8 w-8 cursor-pointer"></ChevronDoubleRightIcon>
                </div>
                <div class="flex justify-center">
                    <input type="range" name=""
                        class="w-1/2 h-1 rounded-lg appearance-none cursor-pointer bg-zinc-700 slider">
                </div>
            </div>

            <!-- div 3 -->
            <div class="">hello</div>
        </div>
    </div>
</template>
<script setup>
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, PlayIcon } from '@heroicons/vue/solid'
</script>
<style>

</style>