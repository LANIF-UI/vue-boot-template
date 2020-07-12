<template>
  <le-form
    ref="leForm"
    class="le-search-bar"
    :class="{ 'le-search-bar--mini': mini, 'le-search-bar--nolabel': noLabel }"
    :columns="scolumns"
    :submit-btn="submitBtn"
    :inline="inline"
    :label-width="labelWidth"
    inline-message
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-button
      slot="submitBtn"
      :type="mini ? 'default' : 'primary'"
      icon="el-icon-search"
      @click="submitForm"
      native-type="submit"
      :title="submitBtn"
    >
      {{ submitBtn }}
    </el-button>
  </le-form>
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
      if (this.noLabel || this.mini) {
        searchItemColumns = searchItemColumns.map(item => ({
          ..._.omit(item, ['title']),
          formItem: { ...item.formItem, placeholder: item.title }
        }))
      }
      if (this.group) {
        searchItemColumns = searchItemColumns.filter(col => col.searchItem.group === this.group)
      }

      return searchItemColumns
    }
  },
  methods: {
    submitForm() {
      this.$refs.leForm.submitForm();
    }
  },
}
</script>

<style lang="scss">
.le-search-bar.el-form--inline {
  display: table;
  word-spacing: -1em;
  .el-form-item {
    margin-bottom: 0;
  }
  &.le-search-bar--mini {
    .el-form-item {
      margin-right: 0;
      &:hover,
      &:focus,
      .el-input__inner:focus,
      .is-focus {
        position: relative;
        z-index: 1;
      }
      .el-input__suffix {
        z-index: 2;
      }
    }
    .el-form-item:first-child {
      .el-input__inner {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
    }
    .el-form-item:not(:first-child) {
      margin-left: -1px;
      .el-input__inner {
        border-radius: 0;
      }
    }
    .form-btns {
      button {
        padding: 11px 14px;
        font-size: 16px;
        margin: 0;
      }
      button:not(:last-child) {
        border-radius: 0;
      }
      button:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      .el-button [class*='el-icon-'] + span {
        display: none;
      }
    }
  }
}
</style>
