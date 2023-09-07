<script setup lang="ts">

const company = 'evolv Consulting LLC'
var showEmployees = true
var employees =  [
  {id: 1, first_name: "John", last_name: "Doe", title: "asdf"},
  {id: 2, first_name: "Jane", last_name: "Doe", title: "asdf"},
  {id: 3, first_name: "Brandon", last_name: "Guyton", title: "bsdf"}
]

</script>

<template>
  <div class="full">
    <v-carousel height="100vh">
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
    <h2>{{ company }}</h2>
  </div>

<!--     
    <div v-if="showEmployees">
      <ul>
        <li v-for="e in employees" :key="e.id">
          <p>{{ e.first_name }} {{ e.last_name }}</p>
          <p>{{ e.title  }}</p>
        </li>
      </ul>
    </div> -->

</template>

<style>
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




<!-- <WelcomeItem>
  <template #icon>
    <DocumentationIcon />
  </template>
  <template #heading>Documentation</template>

  Vue’s
  <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
  provides you with all information you need to get started.
</WelcomeItem>

<WelcomeItem>
  <template #icon>
    <ToolingIcon />
  </template>
  <template #heading>Tooling</template>

  This project is served and bundled with
  <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
  recommended IDE setup is
  <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
  <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
  you need to test your components and web pages, check out
  <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
  <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

  <br />

  More instructions are available in <code>README.md</code>.
</WelcomeItem>

<WelcomeItem>
  <template #icon>
    <EcosystemIcon />
  </template>
  <template #heading>Ecosystem</template>

  Get official tools and libraries for your project:
  <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
  <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
  <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
  <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
  you need more resources, we suggest paying
  <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
  a visit.
</WelcomeItem>

<WelcomeItem>
  <template #icon>
    <CommunityIcon />
  </template>
  <template #heading>Community</template>

  Got stuck? Ask your question on
  <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
  Discord server, or
  <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
    >StackOverflow</a
  >. You should also subscribe to
  <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
  the official
  <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
  twitter account for latest news in the Vue world.
</WelcomeItem>

<WelcomeItem>
  <template #icon>
    <SupportIcon />
  </template>
  <template #heading>Support Vue</template>

  As an independent project, Vue relies on community backing for its sustainability. You can help
  us by
  <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
</WelcomeItem> -->