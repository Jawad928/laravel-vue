<script setup>
import TeamMembers from "./Teams/TeamMembers.vue";
import TeamHeader from "./Teams/TeamHeader.vue";
import TeamFooter from "./Teams/TeamFooter.vue";
// import Team from "@/team.json";
import { useTeamStore } from "@/stores/teamstore.js"
let Team = useTeamStore();
Team.fill();
setTimeout(() => {
    Team.grow(15);
}, 2000);


</script>



<template>

    <TeamHeader> </TeamHeader>

    <div class="flex justify-center items-center w-full">
        <TeamMembers> </TeamMembers>
    </div>


    <TeamFooter></TeamFooter>


</template>
