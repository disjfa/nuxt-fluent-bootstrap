<template>
    <nav class="sidebar" :class="sidebarClass">
        <a class="sidebar-title px-3 py-3 d-block" href="#" @click.prevent="toggleSidebar()">
            <i class="fa fa-fw fa-bars"></i>
        </a>

        <ul class="sidebar-menu">
            <li>
                <router-link :to="{name: 'index'}" class="sidebar-link" active-class="active">
                    <i class="fa fa-fw fa-home"></i>
                    <span class="sidebar-title">
                        Index
                    </span>
                </router-link>
                <router-link :to="{name: 'form'}" class="sidebar-link" active-class="active">
                    <i class="fa fa-fw fa-check-square"></i>
                    <span class="sidebar-title">
                        Form
                    </span>
                </router-link>
                <router-link :to="{name: 'typography'}" class="sidebar-link" active-class="active">
                    <i class="fa fa-fw fa-font"></i>
                    <span class="sidebar-title">
                        Basic typography
                    </span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
  export default {
    data() {
      return {
        opened: false,
      };
    },
    computed: {
      sidebarClass() {
        return this.opened ? 'show' : '';
      },
    },
    methods: {
      toggleSidebar() {
        this.opened = !this.opened;
      },
    },
    watch: {
      $route(val) {
        if (this.opened) {
          this.toggleSidebar();
        }
      },
    },
  };
</script>