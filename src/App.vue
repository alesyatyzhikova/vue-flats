<template>
  <div id="app">
    <FlatContainer/>
  </div>
</template>

<script>
import FlatContainer from './components/FlatContainer.vue'

export default {
  name: 'App',
  components: {
    FlatContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
