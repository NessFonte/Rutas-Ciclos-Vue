<template>
    <div>
        <router-link :to="{name: 'pokemon-home'}">Pokemon list</router-link>
        <router-link :to="{name: 'pokemon-id', params: {id: 1}}">Pokemon for id</router-link>
        <router-link :to="{name: 'pokemon-about'}">Pokemon about</router-link>
    </div>
</template>

<style scoped>

div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

div .router-link-exact-active {
    color: #42b983;
}

</style>