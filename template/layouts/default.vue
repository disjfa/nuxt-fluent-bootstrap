<template>

    <div class="page">
        <div class="page-sidebar">
            <the-sidebar></the-sidebar>
        </div>

        <div class="page-body">
            <div class="page-main-bg">
                <nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
  import TheSidebar from '~/components/TheSidebar.vue';

  export default {
    components: { TheSidebar },
    mounted() {
//      console.log(this.$router);
    },
  };
</script>
