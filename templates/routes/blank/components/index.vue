<template>
  <le-container class="<%= name %>" padding>
    <le-main>
      <%= name %>
    </le-main>
  </le-container>
</template>

<script>
export default {
  name: '<%= capitalize(name) %>',
}
</script>

<style lang="scss" scoped>
.<%= name %> {
}
</style>
