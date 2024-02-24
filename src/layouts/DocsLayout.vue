<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round @click="toggleLeftDrawer">
          <i class="fi fi-rr-menu-burger"></i>
        </q-btn>

        <q-toolbar-title> Documentation </q-toolbar-title>

        <div>Starter Pack v{{ version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-separator inset />
        <q-item-label header> Components </q-item-label>
        <EssentialLink
          v-for="link in componentsLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Getting Started',
    link: '/docs/getting-started',
  },
  {
    title: 'Color Palette',
    link: '/docs/color-palette',
  },
  {
    title: 'Typography',
    link: '/docs/typography',
  },
  {
    title: 'Icon',
    link: '/docs/icon',
  },
];

const componentsLinks: EssentialLinkProps[] = [
  {
    title: 'Badge',
    link: '/docs/badge',
  },
  {
    title: 'Button',
    link: '/docs/button',
  },
  {
    title: 'Menu',
    link: '/docs/menu',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const version = ref('0.1');
</script>
