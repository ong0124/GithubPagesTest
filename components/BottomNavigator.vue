<script setup lang="ts"></script>

<template>
    <footer class="border-b absolute inset-x-0 bottom-0 bg-white">
        <div class="flex justify-between">
            <button class=" flex flex-col text-black  text-xl mx-auto ">
                <Icon name="material-symbols-directions-car" class="h-10 w-10"/> 接駁
            </button>
            <button class=" flex flex-col text-black text-xl mx-auto ">
                <Icon name="mdi-bus" class="h-10 w-10" /> 包車
            </button>
            <button class=" flex flex-col text-black text-xl mx-auto ">
                <Icon name="mdi-car-search-outline" class="h-10 w-10"/> 接送
            </button>
            <button class=" flex flex-col text-black text-xl mx-auto ">
                <Icon name="material-symbols-person-2-outline" class="h-10 w-10"/> 我的
            </button>
        </div>
    </footer>
</template>