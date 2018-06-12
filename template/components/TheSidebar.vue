<template>
  <nav 
    :class="sidebarClass" 
    class="sidebar">
    <a 
      class="sidebar-title px-3 py-3 d-block" 
      href="#" 
      @click.prevent="toggleSidebar()">
      <i class="fa fa-fw fa-bars"/>
    </a>

    <ul class="sidebar-menu">
      <li>
        <router-link 
          :to="{name: 'index'}" 
          class="sidebar-link" 
          active-class="active">
          <i class="fa fa-fw fa-home"/>
          <span class="sidebar-title">
            Index
          </span>
        </router-link>
        <router-link 
          :to="{name: 'form'}" 
          class="sidebar-link" 
          active-class="active">
          <i class="fa fa-fw fa-check-square"/>
          <span class="sidebar-title">
            Form
          </span>
        </router-link>
        <router-link 
          :to="{name: 'typography'}" 
          class="sidebar-link" 
          active-class="active">
          <i class="fa fa-fw fa-font"/>
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
      opened: false
    }
  },
  computed: {
    sidebarClass() {
      return this.opened ? "show" : ""
    }
  },
  watch: {
    $route() {
      if (this.opened) {
        this.toggleSidebar()
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.opened = !this.opened
    }
  }
}
</script>
