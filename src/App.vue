<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <v-app>
    <NavComponent></NavComponent>
    <RouterView class="content"/>
  </v-app>
</template>

<style>
.content{
  margin-top: 65px;
}
.v-btn{
  text-transform: none !important;
}
</style>
