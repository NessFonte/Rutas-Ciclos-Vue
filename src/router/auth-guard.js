const isAuthenticateGuard = async(to, from, next) => {
    return new Promise(() => {
        const random = Math.random() * 100

        if(random > 50) {
            console.log('Autenticado')
            next()
        }
        else {
            console.log('Bloquedo por el isAuthenticatedGuard', random)
            next({name: 'pokemon-home'})
        }
    })
}

export default isAuthenticateGuard