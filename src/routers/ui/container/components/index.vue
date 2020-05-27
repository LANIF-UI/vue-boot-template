<template>
  <le-container full border>
    <el-header>
      header
    </el-header>
    <el-main>
      content
      <le-container style="background: green">
        <el-header>
          header
        </el-header>
        <el-main>
          content
        </el-main>
      </le-container>
    </el-main>
  </le-container>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped></style>
