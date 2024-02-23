<script setup lang="ts">
import { computed } from 'vue';
import { ButtonProps } from './model';
interface BtnLinkProps extends ButtonProps {
  iconPosition?: string;
}

const props = withDefaults(defineProps<BtnLinkProps>(), {
  iconPosition: 'left',
});
const orderIcon = computed(() => {
  return props.iconPosition == 'left' ? 'order-first' : 'order-last';
});
</script>
<template>
  <div
    class="flex gap-x-1 items-center text-bold"
    v-if="icon !== void 0 && label !== void 0"
  >
    <d-icon
      :name="icon"
      bold
      :class="orderIcon"
      class="flex items-center text-[11px] p-1"
    ></d-icon>
    <a
      href="http://"
      target="_blank"
      rel="noopener noreferrer"
      class="ty-text-m underline"
    >
      {{ label }}</a
    >
  </div>
  <a
    href="http://"
    target="_blank"
    rel="noopener noreferrer"
    class="text-bold ty-text-m underline"
    v-else
  >
    {{ label }}</a
  >
</template>
