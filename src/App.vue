<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import '@/assets/style/global.css';
import '@/assets/style/constants.css';
import Navbar from '@/components/Navbar.vue';
import { mapGetters } from 'vuex';
import { GettersTypes } from '@/store/modules/theme';

@Component({
  components: {
    Navbar
  },
  computed: {
    ...mapGetters({ theme: GettersTypes.THEME })
  }
})
export default class App extends Vue {}
</script>

<template>
  <div id="app" :class="theme">
    <Navbar />
  </div>
</template>

<style>
#app {
  font-family: 'Inter', sans-serif;
}
</style>
