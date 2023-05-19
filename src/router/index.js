/*import PokemonAbout from '@/modules/pokemon/pages/PokemonAbout.vue'
import PokemonList from '@/modules/pokemon/pages/PokemonList.vue'
import Pokemon from '@/modules/pokemon/pages/Pokemon.vue'
import NotFound from '@/modules/shared/pages/NotFound.vue'*/

import {createRouter, createWebHashHistory} from 'vue-router'
import isAuthenticateGuard from './auth-guard'

const routes = [
    // Redireccionado principal
    {path: '/', redirect: '/pokemons'},

    // Pokemon Layout
    {path: '/pokemons', name: 'pokemons', component: () => import(/*webpackChunkName: "PokemonLayout"*/ '@/modules/pokemon/layouts/PokemonLayout.vue'),
        children: [
            {path: 'home', name: 'pokemon-home', component: () => import(/*webpackChunkName: "PokemonList"*/ '@/modules/pokemon/pages/PokemonList.vue')},
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

    // Dragon Ball Z Layout
    {path: '/dbz', name: 'dbz',beforeEnter: [isAuthenticateGuard], component: () => import(/*webpackChunkName: "DBZLayout"*/ '@/modules/dbz/layouts/DragonBallLayout.vue'),
        children: [
            {path: 'home', name: 'dbz-home', component: () => import(/*webpackChunkName: "CharacterList"*/ '@/modules/dbz/pages/CharacterList.vue')},
            {path: 'about', name: 'dbz-about', component: () => import(/*webpackChunkName: "DBZAbout"*/ '@/modules/dbz/pages/CharacterAbout.vue')},
            { path: '', redirect: {name: 'dbz-home'}},
        ]
    },

    // Error de página
    {path: '/:pathMatch(.*)*', component: () => import(/*webpackChunkName: "NotFound"*/ '@/modules/shared/pages/NotFound.vue')},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Guard Global - Sincrono
/*router.beforeEach((to, from, next) => {
    console.log({to, from, next})
    next()
})*/

/*const canAccess = () => {
    return new Promise( resolve => {

        const random =Math.random() * 100
        if(random > 50) {
            console.log('Autenticado - canAccess')
            resolve(true)
        }
        else {
            console.log(random, 'Bloqueado por el beforeEach Guard - canAccess')
            resolve(false)
        }
    })
}

router.beforeEach( async(to, from, next) => {
    const authorized = await canAccess()
    authorized ? next() : next({name: 'pokemon-home'})
})*/

export default router