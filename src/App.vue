<template>
  <div id="app" :class="theme" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import '@/assets/style/global.css';
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