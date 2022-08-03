<template>
    <nav class="flex p-2 bg-slate-50  justify-between content-center">
        <router-link to="/">
            <h1 class="font-bold text-gray-800 ml-2 my-2 text-lg hover:text-gray-700 cursor-pointer">Team 7</h1>
        </router-link>
        <div class="flex capitalize font-semibold">
            <router-link v-for="link in links" :key="link" class="link hidden md:block" :to="'/' + link">
                {{ link }}
            </router-link>
            <div class="border-l-2 mx-1 hidden md:block"></div>
            <router-link to="/login" class="link p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </router-link>
        </div>
    </nav>
</template>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .link {
        @apply py-2 px-4 ml-1 rounded cursor-pointer first-of-type:ml-0 text-gray-500 hover:bg-slate-100;
    }

    .router-link-exact-active {
        @apply font-bold text-gray-600
    }
}
</style>
<script>
export default {
    data() {
        return {
            links: [
                'home',
                'blog',
                'contact',
            ]
        }
    }
}
</script>