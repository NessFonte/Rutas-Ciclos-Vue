import PokemonAbout from '@/modules/pokemon/pages/PokemonAbout.vue'
import PokemonList from '@/modules/pokemon/pages/PokemonList.vue'
import Pokemon from '@/modules/pokemon/pages/Pokemon.vue'

import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { path: '/', component: PokemonList },
    { path: '/about', component: PokemonAbout },
    { path: '/id', component: Pokemon },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router