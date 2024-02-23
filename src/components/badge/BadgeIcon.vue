<script setup lang="ts">
import { BadgeProps } from './model';
import { computed } from 'vue';

interface BadgeIconProps extends BadgeProps {
  size?: string;
  icon?: string;
  opacity?: boolean;
}

const props = withDefaults(defineProps<BadgeIconProps>(), {
  size: 'small',
  opacity: false,
});

const designLabel = (color: string | undefined) => {
  switch (color) {
    case 'black':
      return '500';
    default:
      return '700';
  }
};

const classes = computed(() => {
  return (
    'rounded-full leading-3 ' +
    (props.size == 'large' ? 'ty-display-m p-[13px] ' : '') +
    (props.size == 'medium' ? 'ty-display-m p-[11px] ' : '') +
    (props.size == 'small' ? 'ty-display-s p-[10px] ' : '') +
    (props.opacity === true
      ? `text-${props.color}-${designLabel(props.color)} bg-${props.color}-200`
      : `text-white bg-${props.color}-${designLabel(props.color)}`)
  );
});
</script>

<template>
  <div :class="[classes]">
    <d-icon :name="icon" solid></d-icon>
  </div>
</template>
