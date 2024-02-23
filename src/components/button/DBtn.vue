<script setup lang="ts">
import ButtonText from './ButtonText.vue';
import ButtonIcon from './ButtonIcon.vue';
import ButtonLink from './ButtonLink.vue';
import { computed } from 'vue';
import { ButtonProps } from './model';

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  secondary: false,
  tertiary: false,
  link: false,
});

const showComponent = computed(() => {
  if (props.icon !== void 0 && props.label === void 0) return ButtonIcon;
  if (props.link === true) return ButtonLink;
  return ButtonText;
});

const designLabel = (color: string | undefined) => {
  switch (color) {
    case 'black':
      return ['black-500', 'black-600'];
    case 'green':
      return ['green-800', 'green-900'];
    case 'white':
      return ['whites', 'black-300'];
    default:
      return [`${color}-700`, `${color}-800`];
  }
};

const classes = computed(() => {
  if (props.link === false) {
    if (props.secondary === true)
      return `text-${designLabel(props.color)[0]} bg-${
        props.color
      }-100 hover:bg-${props.color}-300 `;
    if (props.tertiary === true)
      return `text-${designLabel(props.color)[0]} border border-${
        designLabel(props.color)[0]
      } bg-whites hover:bg-${props.color}-100 `;
    return `text-white bg-${designLabel(props.color)[0]} hover:bg-${
      designLabel(props.color)[1]
    } `;
  }
  return `text-${designLabel(props.color)[0]} hover:text-${
    designLabel(props.color)[1]
  }`;
});
</script>
<template>
  <component :is="showComponent" v-bind="$props" :class="[classes]" />
</template>
