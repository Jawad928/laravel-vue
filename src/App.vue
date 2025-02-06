<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-gray-500 text-white p-3">
      <h2 class="text-xl font-bold mb-4">Team View</h2>
      <ul>
        <li>
          <RouterLink to="/" class="block px-4 py-2 mb-2 bg-gray-700 hover:bg-gray-600 rounded">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/profile" class="block px-4 py-2 mb-2 bg-gray-700 hover:bg-gray-600 rounded">Profile
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/settings" class="block px-4 py-2 mb-2 bg-gray-700 hover:bg-gray-600 rounded">Settings
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/Team" class="block px-4 py-2 mb-2 bg-gray-700 hover:bg-gray-600 rounded">Team
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Main Content (Dynamic Component) -->
    <div class="flex-1 p-6">
      <RouterView />
    </div>
  </div>
</template>
