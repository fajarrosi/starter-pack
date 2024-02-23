<script setup lang="ts">
import { ref } from 'vue';
const typographys = ref([
  {
    label: 'Display XL - 32 (ty-display-xl)',
    class: 'display-xl',
  },
  {
    label: 'Display L - 28 (ty-display-l)',
    class: 'display-l',
  },
  {
    label: 'Display M - 24 (ty-display-m)',
    class: 'display-m',
  },
  {
    label: 'Display S - 20 (ty-display-s)',
    class: 'display-s',
  },
  {
    label: 'Text XL - 18 (ty-text-xl)',
    class: 'text-xl',
  },
  {
    label: 'Text L - 16 (ty-text-l)',
    class: 'text-l',
  },
  {
    label: 'Text M - 14 (ty-text-m)',
    class: 'text-m',
  },
  {
    label: 'Text S - 12 (ty-text-s)',
    class: 'text-s',
  },
  {
    label: 'Text XS - 10 (ty-text-xs)',
    class: 'text-xs',
  },
]);
</script>

<template>
  <q-page class="w-full p-6">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Typography</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="w-full flex flex-col gap-y-8">
          <div
            class="flex flex-col gap-y-4"
            v-for="(item, index) in typographys"
            :key="index"
          >
            <div class="ty-text-l">{{ item.label }}</div>
            <div class="flex gap-x-12">
              <div class="flex flex-col gap-y-2 item-flex">
                <div class="font-bold" :class="[`ty-${item.class}`]">Bold</div>
                <div class="font-medium ty-text-l">700</div>
              </div>
              <div class="flex flex-col gap-y-2 item-flex">
                <div class="font-semibold" :class="[`ty-${item.class}`]">
                  Semi Bold
                </div>
                <div class="font-medium ty-text-l">600</div>
              </div>
              <div class="flex flex-col gap-y-2 item-flex">
                <div class="font-medium" :class="[`ty-${item.class}`]">
                  Medium
                </div>
                <div class="font-medium ty-text-l">500</div>
              </div>
              <div class="flex flex-col gap-y-2 item-flex">
                <div class="" :class="[`ty-${item.class}`]">Regular</div>
                <div class="font-medium ty-text-l">400</div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
