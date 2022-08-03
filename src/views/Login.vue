<template>
    
        <div class="max-w-lg mx-auto py-12 px-4">
            <label for="email" class="font-medium text-gray-800 ml-1 mb-1">
                Email
            </label>
            <input name="email" type="text"
                class="bg-gray-100 w-full mb-2 p-2 rounded placeholder:text-gray-500 text-gray-800 outline-gray-400 "
                placeholder="Example@email.com">
            <label for="email" class="font-medium text-gray-800 ml-1 mb-1">
                Password
            </label>
            <input name="email" type="text"
                class="bg-gray-100 w-full mb-2 p-2 rounded placeholder:text-gray-500 text-gray-800 outline-gray-400 "
                placeholder="********">
            <div class="flex justify-start">
                <button
                    class="py-2 px-4 mx-1 mt-4 w-1/2 transition-all duration-200 bg-gray-900 hover:bg-gray-800 text-gray-50 rounded uppercase ">login</button>
            </div>
            <div class="flex justify-center my-4 font-medium">
                OR
            </div>
            <div class="flex flex-col md:flex-row justify-between">
                <button
                    class="py-2 px-4 mb-4 w-full md:mx-2 border-gray-900 border-2 font-medium text-gray-900 rounded uppercase hover:bg-gray-200 transition-all duration-200">Google</button>
                <button
                    class="py-2 px-4 w-full md:mx-2 mb-4 border-gray-900 border-2 font-medium text-gray-900 rounded uppercase hover:bg-gray-200 transition-all duration-200">Facebook</button>
            </div>
            <div class="flex justify-center text-gray-600 my-4 font-medium">
                Don't have an account? <router-link to="/" class="text-gray-900 ml-1 font-semibold underline"> sign up
                </router-link>
            </div>

        </div>
</template>