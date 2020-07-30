<template>
  <le-container class="blank" padding>
    <le-main>
      <h1>{{ name }}</h1>
      <el-button type="primary" @click="setName({ name: 'click vuex!' })">
        Button
      </el-button>
    </le-main>
  </le-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('blank')
const { name } = mapState(['name'])
const { setName } = mapActions(['setName'])

export default {
  name: 'Blank',
  computed: {
    name
  },
  methods: {
    setName
  }
}
</script>

<style lang="scss" scoped></style>
