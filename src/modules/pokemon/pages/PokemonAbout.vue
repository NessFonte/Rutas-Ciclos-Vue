<template>
    <h2>About Pokemon Page</h2>
    <hr>
    <h3>{{ name }}</h3>
    <button @click="changeName">Cambiar nombre</button>
</template>

<script>
export default {
    data() {
        return {
            name: 'Fernando'
        }
    },

    methods: {
        changeName() {
            this.name = 'Neisser'
        },
    },

    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
        // Peticiones HTTP
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    },
}
</script>