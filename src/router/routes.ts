import { RouteRecordRaw } from 'vue-router'

export const routes = (): RouteRecordRaw[] => {
  return [{ path: '/', component: () => import('../pages/Home.vue') }]
}
