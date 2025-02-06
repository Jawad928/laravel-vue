import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../components/HomeComponent.vue";
import ProfileComponent from "../components/ProfileComponent.vue";
import SettingsComponent from "../components/SettingsComponent.vue";
import Team from "@/components/TeamComponent.vue"

const routes = [
  { path: "/", component: HomeComponent }, // Default route
  { path: "/profile", component: ProfileComponent },
  { path: "/settings", component: SettingsComponent },
  { path: "/Team", component: Team },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
