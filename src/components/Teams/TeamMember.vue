<script setup>
import { defineProps } from "vue";

defineProps({
    name: String,
    email: String,
    status: String,
});


</script>
<template>
    <tr class="bg-gray-100">
        <td class="text-xl font-medium flex items-center gap-x-1 px-20 py-4">
            <img :src="`https://i.pravatar.cc/50?u=${email}`" class="rounded-xl" alt="" />
            {{ name }}
        </td>
        <td class="text-gray-500 px-20 py-4">{{ email }}</td>
        <td class="px-20 py-4">
            <button class="text-green-400 text-xl">{{ status }}</button>
        </td>
    </tr>
</template>
