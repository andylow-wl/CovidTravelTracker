<template>
    <div class="container">
        <router-link to="/" class="logo"><b><i>Group L2-20</i></b></router-link>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/Comparison">Compare Destinations</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:'NavBar',
}
</script>

<style scoped>
    .container {
        width: 80%;
        display: inline-block;
        vertical-align: middle;
        padding: 0.2em;

    }

    .logo {
        float: left;
        font-size: 1.4em;
        text-decoration: none;
        padding-top: 0.2em;
        border: 0.1em;
        border-style: solid;
        border-color: black;
    }

    nav {
        float: right;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    
    nav li {
        font-weight:bold;
        color: #2c3e50;
        display: inline-block;
        margin-left: 2em;
        padding-top: 0.5em;
        position: relative;
    }

    nav a {
        text-decoration: none;
        text-transform: uppercase;
    }

    nav a.router-link-exact-active{
        content: '';
        display: block;
        height: 0.2em;
        width: 100%;
        background-color: #444;
    }

    nav a::before {
        content: '';
        display: block;
        height: 0.5em;
        background-color: #444;
        
        position: absolute;
        top: 0;
        width: 0%;
        transition: all ease-in-out 250ms;
    }

    nav a:hover {
        color: #F28C28;
    }

    nav a:hover::before {
        width:100%;
    }
</style>