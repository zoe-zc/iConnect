<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.onresize = () => {
      this.setWidth(document.documentElement.clientWidth)
      this.setHeight(document.documentElement.clientHeight)
    }
  },
  methods: {}
}
</script>

<style></style>
