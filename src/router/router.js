import {createRouter, createWebHashHistory} from 'vue-router'

import ListPage from '@/modules/pokemon/pages/ListPage'
import AboutPage from '@/modules/pokemon/pages/AboutPage'
import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
import NoPageFound from '@/modules/shared/pages/NoPageFound'

const routes = [
    {path: '/', component: ListPage},
    {path: '/about', component: AboutPage},
    {path: '/id', component: PokemonPage},
    {path: '/:pathMatch(.*)*', component: NoPageFound}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  export default router