<template>
    <section class="container-fluid">
        <div class="row">
            <the-parallax src="https://images.unsplash.com/photo-1504890231393-71b0d15a05f4?dpr=1&auto=format&fit=crop&w=1200&h=600&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" class="col-12">
                <div class="px-3 py-3">
                    <h1>
                        NUXT
                    </h1>
                    <h2>
                        Fluent bootstrap application
                    </h2>
                </div>
            </the-parallax>
            <div class="col-12">
                <div :class="['network',online ? 'online' : 'offline']">
                    <div class="circle"></div>
                    {{ online ? 'online' : 'offline' }}
                </div>
                <p>
                    A basic setup for nuxt using fluent bootstrap
                </p>
                <h4>Instalation</h4>
                <code class="d-block py-1 px-1">
                    vue init disjfa/nuxt-fluent-bootstrap
                </code>
                <br>
                <h4>Development</h4>
                <code class="d-block py-1 px-1">
                    npm install
                    npm run dev
                </code>
                <br>
                <h4>Test</h4>
                <code class="d-block py-1 px-1">
                    npm run lint
                </code>
                <br>
                <h4>Generate</h4>
                <code class="d-block py-1 px-1">
                    npm run generate
                </code>
                <br>
                <p>
                    Enjoy!
                </p>
                <div class="links">
                    <a href="https://nuxtjs.org/" target="_blank" class="btn btn-primary" rel="noopener">Documentation on nuxt</a>
                    <a href="https://github.com/disjfa/nuxt-fluent-bootstrap" target="_blank" class="btn btn-primary" rel="noopener">GitHub</a>
                </div>
                <br><br>
            </div>
        </div>
    </section>
</template>

<script>
  import TheParallax from '../components/TheParallax.vue';

  export default {
    components: {
      TheParallax,
    },
    data() {
      return {
        online: true,
      };
    },
    mounted() {
      if (!window.navigator) {
        this.online = false;
        return;
      }
      this.online = Boolean(window.navigator.onLine);
      window.addEventListener('offline', this.toggleNetworkStatus);
      window.addEventListener('online', this.toggleNetworkStatus);
    },
    methods: {
      toggleNetworkStatus({type}) {
        this.online = type === 'online';
      },
    },
    destroyed() {
      window.removeEventListener('offline', this.toggleNetworkStatus);
      window.removeEventListener('online', this.toggleNetworkStatus);
    },
  };
</script>
