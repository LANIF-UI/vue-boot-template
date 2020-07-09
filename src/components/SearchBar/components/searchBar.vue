<template>
  <le-form
    class="le-search-bar"
    :columns="scolumns"
    :submit-btn="submitBtn"
    :inline="inline"
    :label-width="labelWidth"
    inline-message
    v-bind="$attrs"
    v-on="$listeners"
  ></le-form>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'LeSearchBar',
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    noLabel: Boolean,
    mini: Boolean,
    columns: {
      type: Array,
      required: true
    },
    labelWidth: {
      type: String,
      default: 'auto'
    },
    group: String, // 条件分组，设置这个属性后，会在column.js中过滤有相同group值的项
    submitBtn: {
      type: String,
      default: '查询'
    } // 提交按钮文字，如果为slot则可自定义提交按钮区域
  },
  computed: {
    scolumns() {
      let searchItemColumns = this.columns
        .filter(col => col.searchItem)
        .map(col => ({ ...col, formItem: col.searchItem }))
      if (this.noLabel) {
        searchItemColumns = searchItemColumns.map(item => ({
          ..._.omit(item, ['title']),
          formItem: { ...item.formItem, placeholder: item.title }
        }))
      }
      console.log(searchItemColumns)
      if (this.group) {
        searchItemColumns = searchItemColumns.filter(col => col.searchItem.group === this.group)
      }

      return searchItemColumns
    }
  }
}
</script>

<style lang="scss">
.le-search-bar.el-form--inline {
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
