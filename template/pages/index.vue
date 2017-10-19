<template>
    <section class="container-fluid">
        <div>
            <h1>
                NUXT
            </h1>
            <h2>
                Fluent bootstrap application
            </h2>
            <div :class="['network',online ? 'online' : 'offline']">
                <div class="circle"></div>
                {{ online ? 'online' : 'offline' }}
            </div>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="btn btn-primary" rel="noopener">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="btn btn-primary" rel="noopener">GitHub</a>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
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
