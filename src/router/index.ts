import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import YouTube from '../views/YouTube.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../App.vue')
  },
  {
    path: '/king',
    children: [
      {
        path: '1',
        component: YouTube,
        meta: {
          videoId: 'lgqprhm0n2I'
        }
      },
      {
        path: '2',
        component: YouTube,
        meta: {
          videoId: 'A5aL1Fsv3kg'
        }
      },
      {
        path: '3',
        component: YouTube,
        meta: {
          videoId: 'fpeV3PEORnw'
        }
      },
      {
        path: '4',
        component: YouTube,
        meta: {
          videoId: 'nz__2XqUcMQ'
        }
      },
      {
        path: '5',
        component: YouTube,
        meta: {
          videoId: '-9lIlxWa1i4'
        }
      },
      {
        path: '6',
        component: YouTube,
        meta: {
          videoId: 'Amaks5m-fQg'
        }
      },
      {
        path: '7',
        component: YouTube,
        meta: {
          videoId: 'SyB5YqbABKI'
        }
      },
      {
        path: '8',
        component: YouTube,
        meta: {
          videoId: 'R8vqh1__5IQ'
        }
      },
      {
        path: '9',
        component: YouTube,
        meta: {
          videoId: 'UW5Hz_4HqWk'
        }
      },
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
