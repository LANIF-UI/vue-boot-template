<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="setName({ name: 'sususu' })"
    >
      Button
    </el-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('dashboard')
const { name } = mapState(['name'])
const { setName } = mapActions(['setName'])

export default {
  name: 'Dashboard',
  computed: {
    name
  },
  methods: {
    setName
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
