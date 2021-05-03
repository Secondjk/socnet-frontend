<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Section extends Vue {
  @Prop({ required: true }) private readonly name: string;
}
</script>

<template>
  <main class="flex flex-col space-y-4 w-full">
    <h1 v-if="name" class="font-bold text-2xl tracking-wide bg-gray-100 rounded-md py-2 px-4">{{ name }}</h1>
    <div class="w-full h-full">
      <slot name="default" />
    </div>
  </main>
</template>