<template>
    <div id="nav">
        <router-link to="/home">Home</router-link> |
    </div>
</template>

<script>
export default {
    name:'NavBar',
}
</script>

<style scoped>
    #nav {
        padding: 30px;
        text-align: center;
    }

    #nav a{
        font-weight:bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active{
        color: #42b983;
    }
</style>