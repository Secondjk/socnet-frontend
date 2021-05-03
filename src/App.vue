<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import '@/assets/style/global.css';
import '@/assets/style/constants.css';
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
import { GettersTypes } from '@/store/modules/theme';
import Sidebar from "@/components/Sidebar.vue";
import Section from "@/components/common/Section.vue";
import {Route} from "vue-router/types/router";

@Component({
  components: {
    Navbar,
    Sidebar,
    Section
  },
  computed: {
    ...mapGetters({ theme: GettersTypes.THEME })
  }
})
export default class App extends Vue {
  @Watch('$route', { immediate: true })
  changeTitle(to: Route) {
    document.title = to.meta.title ?? "Messenger";
  }
}
</script>

<template>
  <div class="min-h-screen min-w-100">
    <Navbar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div class="flex flex-row space-x-4 w-full">
          <Sidebar />
          <Section :name="$route.meta.name">
            <router-view #default />
          </Section>
        </div>
    </div>
  </div>
</template>
