<template>
  <NavBar/>
  <EnterDestination/>
  <AddDataFS/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import EnterDestination from '@/components/EnterDestination.vue'
import AddDataFS from '@/components/AddDataFS.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        EnterDestination,
        AddDataFS,
    },
}
</script>

<style>

</style>