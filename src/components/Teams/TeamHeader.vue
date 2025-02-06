<script setup>
// import { defineProps } from 'vue';
// defineProps({
//     Team: Object
// });
import { useTeamStore } from "@/stores/teamstore.js"
let Team = useTeamStore();
</script>
<template>
    <header class="flex justify-between">
        <div>
            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                :disabled="!Team.spotsRemainings">
                Add Members ({{ Team.spotsRemainings }} spots left)
            </button>
        </div>
        <h3 class="inline-flex text-3xl relative">
            <img src="/happy.png" style="width: 50px; height: 50px" class="mr-2" />
            Smiley Team
            <div
                class="absolute bg-green-400 w-5 h-5 rounded-full flex justify-center items-center text-xs -right-4 -top-2">
                {{ Team.spots }}
            </div>
        </h3>
    </header>
</template>