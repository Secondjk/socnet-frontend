<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class IconBase extends Vue {
  @Prop({ default: '0 0 24 24' }) readonly viewBox!: string;
  @Prop({ default: 24 }) readonly width!: number;
  @Prop({ default: 24 }) readonly height!: number;
  @Prop({ default: 'currentColor' }) readonly iconColor!: string;
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="this.viewBox"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
