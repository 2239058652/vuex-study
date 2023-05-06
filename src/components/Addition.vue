<template>
  <div>
    <!-- {{ $store.state.count }}  -->
    <h3>{{showNum}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler3">+1 Async</button>
    <button @click="addNAsync(9)">+N Async</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapActions(['addNAsync']),
    btnHandler1 () {
      this.$store.commit('add')
    },
    // commit专门触发mutation
    btnHandler2 () {
      this.$store.commit('addN', 3)
    },
    btnHandler3 () {
      // dispatch专门触发action
      this.$store.dispatch('addAsync')
    },
    btnHandler4 () {
      // this.$store.dispatch('addNAsync', 7 )
      this.addNAsync(7)
    }
}
}
</script>

<style>

</style>
