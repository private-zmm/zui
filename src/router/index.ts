import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';


const basicRoutes = [
  {
    path: '/',
    name: 'Root',
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/sys/login/Login.vue'),
  }
];
export const hashRouter = createWebHashHistory();

// app router
const router = createRouter({
  history: hashRouter,
  routes: basicRoutes as RouteRecordRaw[],
  strict: true,
});



// config router
export function setupRouter(app: App<Element>) {
  app.use(router);

}

// router.onError((error) => {
//   console.error(error);
// });

export default router;
