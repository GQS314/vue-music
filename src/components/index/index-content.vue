<template>
  <section class="index-content">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: "index-content"
  }
</script>

<style lang="scss" scoped>
  .index-content{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
