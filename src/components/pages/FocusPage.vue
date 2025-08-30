<script setup>
import { RouterView } from 'vue-router'
import TimerClock from '../TimerClock.vue';
import RotatingZenHeader from '../RotatingZenHeader.vue';

</script>

<template>
  <div id="MainVBox" class="v-box">
    <RotatingZenHeader/>
    <TimerClock/>
    <RouterView/>
  </div>
</template>



<style>
#MainVBox {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem ;
  box-sizing: border-box;
}
</style>
