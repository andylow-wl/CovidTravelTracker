<template>
  <NavBar/>
  <EnterDestination/>
  <AddDataFS/>
  <Charts/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import EnterDestination from '@/components/EnterDestination.vue'
import AddDataFS from '@/components/AddDataFS.vue'
import Charts from '@/components/Charts.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        EnterDestination,
        AddDataFS,
        Charts,
    },
}
</script>

<style>

</style>