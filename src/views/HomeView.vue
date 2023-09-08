<script setup lang="ts">
</script>

<template>
  <main>
    <div class="full">
      <v-carousel>
        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
    </div>
  </main>
</template>

<style>
  .v-carousel{
    height: calc(100vh - 65px) !important;
  }
  .full{
    position: relative;
    width: 100vw;
  }
  .v-carousel{
    width: 100%;
  }
  h2{
    position: absolute;
    top: 70px;
    left: 25px;
  }
</style>