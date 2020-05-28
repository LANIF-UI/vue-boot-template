<template>
  <el-row :gutter="24">
    <el-col :span="12">
      <le-panel header="ttt">
        <div slot="header">header</div>
        content
      </le-panel>
    </el-col>
    <el-col :span="12">
      <le-panel header="ttt">
        <div slot="header">header</div>
        content
      </le-panel>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style lang="scss" scoped></style>
