<template>
    <div class="hidden sm:flex text-zinc-500 mr-4 z-10">
        <component v-for="icon in sideIcons" :is="icon" class="h-5 w-5 mx-2 cursor-pointer hover:text-zinc-300">
        </component>
    </div>
</template>
<script setup>
import { ViewListIcon, VolumeUpIcon, ArrowsExpandIcon, DesktopComputerIcon, } from '@heroicons/vue/solid'
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const sideIcons = [
    ViewListIcon, DesktopComputerIcon, VolumeUpIcon, ArrowsExpandIcon
]

</script>