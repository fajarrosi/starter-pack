<script setup lang="ts">
import { computed } from 'vue';

interface DIconProps {
  name?: string;
  regular?: boolean;
  solid?: boolean;
  bold?: boolean;
}

const props = defineProps<DIconProps>();
const classes = computed(() => {
  return (
    'fi-' +
    (props.regular === true ? 'rr' : '') +
    (props.solid === true ? 'sr' : '') +
    (props.bold === true ? 'br' : '') +
    `-${props.name}`
  );
});
</script>

<template>
  <i class="fi" :class="[classes]">
    <slot></slot>
  </i>
</template>
