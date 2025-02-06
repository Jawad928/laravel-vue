<script setup>
// import { defineProps } from 'vue';
// defineProps({
//     Team: Object
// });
import { useTeamStore } from "@/stores/teamstore.js"
let Team = useTeamStore();
</script>
<template>
    <footer class="mt-12 bg-gray-100 text-center py-4">{{ Team.name }} - {{ Team.spots }} Member Team</footer>

</template>