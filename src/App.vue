<template>
  <login msg=" "/>
  <Router-view/>
</template>

<script>
import login from './components/login.vue'

export default {
  name: "App",
  components: {
    login,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
} */
</style>
