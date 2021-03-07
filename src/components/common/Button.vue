<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: 'filled' }) readonly type!:
    | 'filled'
    | 'border'
    | 'flat'
    | 'icon';
  @Prop({ default: 'primary' }) readonly color!: 'primary' | 'success' | 'info';
  @Prop({ default: false }) readonly disabled!: boolean;
  @Prop({ default: false }) readonly loading!: boolean;
  @Prop({}) readonly icon?: string;

  colorClasses = {
    primary: 'blue',
    success: 'green',
    info: 'purple'
  };

  currentIcon?: string = this.loading ? 'IconInfo' : this.icon;
  textIncluded = Boolean(this.$slots.default);

  get IconComponent() {
    return () => import('@/components/icons/' + this.icon + '.vue');
  }

  public onClick(ev: Event) {
    if (!this.disabled && !this.loading) this.$emit('click', ev);
  }
}
</script>

<template>
  <button
    @click="onClick"
    class="focus:outline-none text-white text-sm py-2.5 rounded-md"
    :class="[
      `bg-${colorClasses[color]}-${disabled ? '300' : '500'}`,
      disabled ? '' : `hover:bg-${colorClasses[color]}-600 hover:shadow-lg`,
      currentIcon ? 'flex items-center' : '',
      textIncluded ? 'px-5' : 'px-2.5'
    ]"
  >
    <component
      v-if="currentIcon"
      :is="IconComponent"
      class="w-4 h-4"
      :class="{
        'mr-2': textIncluded
      }"
    />
    <slot />
  </button>
</template>
