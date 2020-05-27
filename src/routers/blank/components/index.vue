<template>
  <div>
    Blank
    <le-panel>111</le-panel>
    <le-container direction="horizontal" hh="aaa">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </le-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Blank',
  computed: {
    ...mapGetters(['name'])
  }
}
</script>

<style lang="scss" scoped></style>
