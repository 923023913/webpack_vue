<template>
  <div id="app">
    <h1>Hello World</h1>
    <div class="router">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  props: {

  },
  computed: {
  },
  components: {
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
.router {
   a {
      color: #000;
      &.router-link-exact-active {
         color:rgb(0, 182, 121);
      }
   }
}
</style>