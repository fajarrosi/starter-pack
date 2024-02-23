<script setup lang="ts">
import { computed } from 'vue';
import { ButtonProps } from './model';

interface BtnTextProps extends ButtonProps {
  iconPosition?: string;
}

const props = withDefaults(defineProps<BtnTextProps>(), {
  iconPosition: 'left',
});

const orderIcon = computed(() => {
  return props.iconPosition == 'left' ? 'order-first' : 'order-last';
});
</script>

<template>
  <button
    class="font-semibold ty-text-m rounded-[10px] cursor-pointer px-[14px] py-[10px]"
  >
    <div
      v-if="icon !== void 0 && label !== void 0"
      class="flex gap-x-1 items-center"
    >
      <d-icon
        :name="icon"
        bold
        :class="orderIcon"
        class="flex items-center text-[11px] p-1"
      ></d-icon>
      <div>{{ label }}</div>
    </div>
    <div v-else>
      {{ label }}
    </div>
  </button>
</template>
