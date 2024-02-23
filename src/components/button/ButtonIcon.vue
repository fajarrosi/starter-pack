<script setup lang="ts">
import { ButtonProps } from './model';
import { computed } from 'vue';
interface BtnIconProps extends ButtonProps {
  size: string;
}
const props = withDefaults(defineProps<BtnIconProps>(), {
  size: 'small',
});
const paddingBtn = computed(() => {
  return props.size === 'small' ? 'p-[6px]' : 'p-[10px]';
});
</script>

<template>
  <button
    class="font-semibold ty-text-m rounded-[10px] cursor-pointer"
    :class="[paddingBtn]"
  >
    <d-icon
      :name="icon"
      bold
      class="flex items-center text-[11px] p-1"
    ></d-icon>
  </button>
</template>
