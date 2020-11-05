<template>
  <v-app>
    <div id="app">
      <Top></Top>
    </div>
  </v-app>
</template>

<script>
import Top from './components/Top.vue'

export default {
  components: {
    Top
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
