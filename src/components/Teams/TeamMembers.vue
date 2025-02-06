<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
// import { defineProps } from "vue";
// defineProps({
//     Team: Object
// });
import { useTeamStore } from "@/stores/teamstore.js"
let Team = useTeamStore();
</script>
<template>
    <div class="w-250 overflow-hidden">
        <table class="table-fixed border-spacing-x-2 border-separate border-spacing-y-1 w-full">
            <thead>
                <tr>
                    <th class="text-left px-6 py-2">Name</th>
                    <th class="text-left px-6 py-2">Email</th>
                    <th class="text-left px-6 py-2">Status</th>
                </tr>
            </thead>
        </table>

        <!-- Scrollable table body -->
        <div class="overflow-y-auto max-h-[440px]">
            <table class="table-fixed border-spacing-x-2 border-separate border-spacing-y-1 w-full">
                <tbody>


                    <TeamMember v-for="member in Team.members" :name="member.name" :email="member.email"
                        :status="member.status"></TeamMember>

                </tbody>
            </table>
        </div>
        <p class="text-right text-gray-600 italic" v-show="!Team.spotsRemainings">
            There are no remaining team spot, Upgrade to add more.
        </p>
    </div>
</template>