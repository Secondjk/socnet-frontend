<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import IconHome from "@/components/icons/IconHome.vue";
import IconChat from "@/components/icons/IconChat.vue";
import IconSmile from "@/components/icons/IconSmile.vue";

@Component({
  components: {
    IconHome,
    IconChat
  }
})
export default class Sidebar extends Vue {
  public navigationBars = [
    {name: "Моя страница", icon: IconHome, route: "my-page"},
    {name: "Друзья", icon: IconSmile, route: "friends"},
    {name: "Мессенджер", icon: IconChat, route: "chat"}
  ]
}
</script>

<template>
  <nav aria-label="sidebar" class="w-64">
    <div class="space-y-1">
      <router-link :to="item.route" v-for="item in navigationBars" :key="item.name"
                   :class="[item.route === $route.name ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium rounded-md']">
        <component :is="item.icon"
                   :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                   aria-hidden="true"/>
        <span class="truncate">
          {{ item.name }}
        </span>
      </router-link>
    </div>
  </nav>
</template>