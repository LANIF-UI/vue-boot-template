<template>
  <div>
    <el-upload
      class="le-upload"
      :file-list="fileList"
      :on-change="onChange"
      :on-remove="onChange"
      v-bind="$attrs"
      v-on="$listeners"
      :disabled="isDisabled"
    >
      <slot />
    </el-upload>
    <slot name="tip" />
  </div>
</template>

<script>
import Emitter from 'element-ui/src/mixins/emitter'
import { isArray } from '@/utils'

export default {
  name: 'LeFormUpload',
  mixins: [Emitter],
  props: ['value', 'disabled'],
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data() {
    return {
      fileList: this.value
    }
  },
  computed: {
    isDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    }
  },
  watch: {
    value(value) {
      this.fileList = isArray(value) && value.every(item => !!item) ? value : []
      this.dispatch('ElFormItem', 'el.form.change', value)
    }
  },
  methods: {
    onChange(file, fileList) {
      this.$emit('input', fileList)
      this.$emit('on-change', file, fileList)
    }
  }
}
</script>

<style lang="scss" scoped></style>
