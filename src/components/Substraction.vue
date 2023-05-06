<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandlerN">-N</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    btnHandler1 () {
      this.sub()
    },
    btnHandlerN () {
      this.subN(3)
    }
  }

}
</script>

<style>

</style>
