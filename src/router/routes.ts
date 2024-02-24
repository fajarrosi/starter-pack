import { RouteRecordRaw } from 'vue-router';
import colorPalette from './docs/colorPalette';
import gettingStarted from './docs/gettingStarted';
import typographyRoute from './docs/typographyRoute';
import iconsRoute from './docs/iconsRoute';
import badgeRoute from './docs/badgeRoute';
import buttonRoute from './docs/buttonRoute';
import menuRoute from './docs/menuRoute';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/docs',
    component: () => import('layouts/DocsLayout.vue'),
    redirect:{name : 'Getting Started'},
    children: [
      colorPalette,
      gettingStarted,
      typographyRoute,
      iconsRoute,
      badgeRoute,
      buttonRoute,
      menuRoute
    ],

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
