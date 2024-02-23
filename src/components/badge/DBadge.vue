<script setup lang="ts">
import BadgeLabel from './BadgeLabel.vue';
import BadgeNotification from './BadgeNotification.vue';
import BadgeIcon from './BadgeIcon.vue';
import { BadgeProps } from './model';
import { computed } from 'vue';

interface BadgeMainProps extends BadgeProps {
  notification?: boolean;
}
const props = withDefaults(defineProps<BadgeMainProps>(), {
  color: 'primary',
});
const showComponent = computed(() => {
  if (props.notification === true) return BadgeNotification;
  if (props.label !== void 0) return BadgeLabel;
  return BadgeIcon;
});
</script>

<template>
  <component class="d-badge" :is="showComponent" v-bind="$props" />
</template>

<style lang="scss">
@import './badge.scss';
</style>
