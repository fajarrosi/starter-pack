<script setup lang="ts">
import colors from 'src/colors';
</script>

<template>
  <q-page class="w-full p-6">
    <q-card flat bordered>
      <q-card-section>
        <div class="text-primary-800 text-bold">Color Palette</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="flex gap-2">
          <div
            class="flex flex-col item-flex gap-2"
            v-for="(item, index) in Object.keys(colors)"
            :key="index"
          >
            <div
              v-if="typeof colors[item as keyof typeof colors] === 'object'"
              class="flex gap-2"
            >
              <div
                class="rounded p-2 item-flex flex flex-center"
                v-for="(child, childindex) in Object.keys(colors[item as keyof typeof colors])"
                :key="childindex"
                :class="[
                  `bg-${item}-${child} text-${
                    parseInt(child) > 500 ? 'white' : 'black'
                  }`,
                ]"
              >
                {{ item }}-{{ child }}
              </div>
            </div>
            <div v-else :class="[`bg-${item} text-black rounded p-2`]">
              {{ item }}
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
