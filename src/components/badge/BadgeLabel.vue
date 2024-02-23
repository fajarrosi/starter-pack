<script setup lang="ts">
import { BadgeProps } from './model';
import { computed } from 'vue';

interface BadgeLabelProps extends BadgeProps {
  size?: string;
}

const props = withDefaults(defineProps<BadgeLabelProps>(), {
  size: 'small',
});

const designLabel = (color: string | undefined) => {
  switch (color) {
    case 'black':
      return `text-${color}-600 `;
    default:
      return `text-${color}-700 `;
  }
};

const classes = computed(() => {
  return (
    (props.size == 'medium' ? 'ty-text-m rounded-lg py-1 px-[10px] ' : '') +
    (props.size == 'small' ? 'ty-text-s rounded-md py-[2px] px-2 ' : '') +
    `bg-${props.color}-100`
  );
});
</script>

<template>
  <div :class="[classes, designLabel(color)]">
    {{ label }}
  </div>
</template>
