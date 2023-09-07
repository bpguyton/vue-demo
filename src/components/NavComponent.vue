<script setup lang="ts">
  var menuItems = [
    {id: 1, display: 'aaaa', href: ''},
    {id: 2, display: 'bbbb', href: ''},
    {id: 3, display: 'cccc', href: ''},
    {id: 4, display: 'And the Last thing!', href: ''}
  ]
</script>

<template>
  <v-app-bar :elevation="1" display="block">      
    <v-app-bar-nav-icon :width="140" :height="40" class="logo" :to="'/'">
      <img alt="evolv logo" src="https://evolv.consulting/wp-content/uploads/2020/09/logo.png"/>
    </v-app-bar-nav-icon>  
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
      <v-btn color="primary" class="bsdf" >join us</v-btn>
      <v-btn color="primary" class="bsdf">connect</v-btn>
    </v-col>
  </v-app-bar>

</template>

<style>
.v-btn{
  width: fit-content !important;
}

.logo {
  padding-right: 5% !important;
}
</style>