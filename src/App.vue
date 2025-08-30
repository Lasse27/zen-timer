<script setup>
import NavigationBar from './components/NavigationBar.vue'

</script>

<template>
  <div id="MainVBox" class="v-box">
    <NavigationBar msg="Welcome to Your Vue.js App"/>
  </div>
</template>



<style>
#MainVBox {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
</style>
