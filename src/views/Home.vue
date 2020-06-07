<template>
   <div>
       <button class="add" @click="$store.dispatch('add')">自增</button>
       <h2>我是 Home组件-----{{ count }}</h2>
   </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: {

  },
  computed:{
    count () {
        return this.$store.state.count
    }
  },
  components:{
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style scoped lang='scss'>
.add {
    margin: 20px;
}
</style>