<template>
  <le-container full border>
    <le-header>
      header
    </le-header>
    <le-main>
      <le-container style="background: green">
        <le-header>
          header
        </le-header>
        <le-main>
          content1
        </le-main>
      </le-container>
    </le-main>
  </le-container>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped></style>
