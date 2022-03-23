<template>
  <NavBar/>
  <EnterDestination/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import EnterDestination from '@/components/EnterDestination.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        EnterDestination,
    },
}
</script>

<style>

</style>