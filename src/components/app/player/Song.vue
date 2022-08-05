<template>
    <div class="grid grid-cols-2 grid-rows-2 sm:block h-full w-full sm:h-auto sm:w-auto">
        <!-- div 1 -->
        <div class="flex mx-2 sm:mx-0 rounded-md items-center col-span-2 z-10">
            <img src="../../../assets/img6.jpg"
                class="cursor-pointer col-span-4 aspect-square bg-cover h-10 sm:h-20 object-cover rounded-sm" alt="">
            <div class="ml-4 text-zinc-100 font-semibold">
                <span class="cursor-pointer">For you</span>
                <br>
                <span class="text-zinc-400 text-xs cursor-pointer">Trevor Daniels</span>
            </div>
            <PlayIcon class="h-10 w-10 ml-auto sm:hidden text-zinc-200"></PlayIcon>
        </div>

        <!-- div 2 -->
        <div class="col-span-2 grid grid-cols-3 bg-zinc-900 sm:hidden justify-evenly items-center">
            <div v-for="icon in Icons">
                <center>
                    <component :is="icon" class="h-7 w-7 cursor-pointer text-zinc-500 hover:text-zinc-300">
                    </component>
                </center>
            </div>
        </div>
    </div>
</template>
<script setup>
import { HomeIcon, SearchIcon, CollectionIcon, PlayIcon} from '@heroicons/vue/solid'

const Icons = [
    HomeIcon, SearchIcon, CollectionIcon
]
</script>