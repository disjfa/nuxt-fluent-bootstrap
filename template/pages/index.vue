<template>
  <section class="container-fluid">
    <div class="row">
      <parallax class="col-12">
        <img src="//images.unsplash.com/photo-1504890231393-71b0d15a05f4?dpr=1&auto=format&fit=crop&w=1200&h=600&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="">
      </parallax>
    </div>
    <div class="row">
      <div class="col-12 py-3">
        <h1>
          NUXT
        </h1>
        <h2>
          Fluent bootstrap application
        </h2>
      </div>
      <div class="col-12">
        <div :class="['network',online ? 'online' : 'offline']">
          <div class="circle"/>
          \{{ online ? 'online' : 'offline' }}
        </div>
        <p>
          A basic setup for nuxt using fluent bootstrap
        </p>
        <h4>Instalation</h4>
        <code class="bg-dark text-secondary d-block py-1 px-1">
          $ npm install -g @vue/cli @vue/cli-init<br>
          $ vue init disjfa/nuxt-fluent-bootstrap my-project<br>
          $ cd my-project<br>
          # install dependencies<br>
          $ npm install # Or yarn install
        </code>
        <br>
        <h4>Development</h4>
        <code class="bg-dark text-secondary d-block py-1 px-1">
          # serve with hot reloading at localhost:3000<br>
          $ npm run dev
        </code>
        <br>
        <h4>Test</h4>
        <code class="bg-dark text-secondary d-block py-1 px-1">
          $ npm run lint
        </code>
        <br>
        <h4>Generate</h4>
        <code class="bg-dark text-secondary d-block py-1 px-1">
          $ npm run generate
        </code>
        <br>
        <p>
          Enjoy!
        </p>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="btn btn-primary"
            rel="noopener">Documentation on nuxt</a>
          <a
            href="https://github.com/disjfa/nuxt-fluent-bootstrap"
            target="_blank"
            class="btn btn-primary"
            rel="noopener">GitHub</a>
        </div>
        <br><br>
      </div>
    </div>
  </section>
</template>

<script>
import Parallax from "vue-parallaxy"

export default {
  components: {
    Parallax
  },
  data() {
    return {
      online: true
    }
  },
  mounted() {
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener("offline", this.toggleNetworkStatus)
    window.addEventListener("online", this.toggleNetworkStatus)
  },
  destroyed() {
    window.removeEventListener("offline", this.toggleNetworkStatus)
    window.removeEventListener("online", this.toggleNetworkStatus)
  },
  methods: {
    toggleNetworkStatus({ type }) {
      this.online = type === "online"
    }
  }
}
</script>
