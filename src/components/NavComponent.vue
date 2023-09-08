<script setup lang="ts">
import LogoComponent from './LogoComponent.vue'
  var menuItems = [
    {id: 1, display: 'aaaa', href: ''},
    {id: 2, display: 'bbbb', href: ''},
    {id: 3, display: 'cccc', href: ''},
    {id: 4, display: 'And the Last thing!', href: ''}
  ]
</script>

<template>
  <v-app-bar :elevation="1" display="block">      
    <logo-component/>
    <v-app-bar-nav-icon :to="'/form'">Form Demo</v-app-bar-nav-icon>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="tertiary" v-bind="props">what we do</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" >
          <v-list-item-title>{{ item.display }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="tertiary" v-bind="props">who we are</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" >
          <v-list-item-title>{{ item.display }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn color="tertiary" v-bind="props">evolv with us</v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index" >
          <v-list-item-title>{{ item.display }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-col class="text-right">
      <v-btn rounded="l" variant="elevated" color="primary">join us</v-btn>
      <v-btn rounded="l" variant="elevated" color="primary">connect</v-btn>
    </v-col>
  </v-app-bar>

</template>

<style>
.v-btn{
  width: fit-content !important;
  margin-left: 1%;
}
.v-app-bar{
  padding-left: 3%;
}
</style>