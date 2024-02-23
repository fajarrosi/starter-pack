<script setup lang="ts">
import { BadgeProps } from './model';

defineProps<BadgeProps>();

const getDesign = (color: string | undefined) => {
  switch (color) {
    case 'black':
      return `bg-${color}-800`;
    default:
      return `bg-${color}-700`;
  }
};
</script>

<template>
  <div
    class="ty-text-xs rounded-full py-[2px] px-[6px] text-white"
    :class="[getDesign(color)]"
  >
    {{ label }}
  </div>
</template>
