/*import PokemonAbout from '@/modules/pokemon/pages/PokemonAbout.vue'
import PokemonList from '@/modules/pokemon/pages/PokemonList.vue'
import Pokemon from '@/modules/pokemon/pages/Pokemon.vue'
import NotFound from '@/modules/shared/pages/NotFound.vue'*/

import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {path: '/', redirect: '/pokemons'},
    {path: '/pokemons', name: 'pokemons', component: () => import(/*webpackChunkName: "PokemonLayout"*/ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {path: 'home', name: 'pokemon-home',component: () => import(/*webpackChunkName: "PokemonList"*/ '@/modules/pokemon/pages/PokemonList.vue')},
            {path: 'about', name: 'pokemon-about', component: () => import(/*webpackChunkName: "PokemonAbout"*/ '@/modules/pokemon/pages/PokemonAbout.vue')},
            {path: 'pokemon/:id', name: 'pokemon-id',component: () => import(/*webpackChunkName: "Pokemon"*/ '@/modules/pokemon/pages/Pokemon.vue'),
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN(id) ? {id: 1} : {id}
                }
            },
            { path: '', redirect: {name: 'pokemon-home'}},
        ]
    },
    {path: '/:pathMatch(.*)*', component: () => import(/*webpackChunkName: "NotFound"*/ '@/modules/shared/pages/NotFound.vue')},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router