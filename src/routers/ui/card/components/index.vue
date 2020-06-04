<template>
  <le-container class="demo" padding>
    <le-main>
      <el-row :gutter="24">
        <el-col :span="24">
          <le-panel header="卡片">
            <code v-text="'<le-card></le-card>'"></code>
            适合在小尺寸界面中展现内容
          </le-panel>
        </el-col>
        <el-col :span="12">
          <le-panel header="全属性">
            <le-card>
              <template slot="header">
                卡片标题一
                <el-tag type="danger" size="small">标签</el-tag>
              </template>
              <template slot="append">
                <span class="el-icon-date" style="margin-right: 10px">2020/3/30 14:29:20</span>
                <el-avatar
                  size="small"
                  shape="square"
                  src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
                ></el-avatar>
              </template>
              <template slot="footer">
                <el-button type="text" icon="el-icon-eleme">查看</el-button>
                <el-button type="text" icon="el-icon-plus">新建</el-button>
              </template>
              <template slot="footerAppend">
                <el-rate
                  :value="3.7"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="3.7"
                ></el-rate>
              </template>
              <div>
                <code>:empty</code>
                是一个css的伪类选择器，用于选择页面中为空的元素。
                如果元素没有任何子元素（节点）或文本内容，则该元素计为空。
                注释和处理指令不会影响元素是否为空。选择空元素对于隐藏这些元素很有用，
                因为如果它们有填充，它们可能是奇怪的垂直和/或水平空白区域的原因。
                它对于在不再需要或有用空元素的动态环境中删除空元素也很有用。
              </div>
            </le-card>
          </le-panel>
        </el-col>
        <el-col :span="12">
          <le-panel header="多种类型">
            <le-card type="success">
              <template slot="header">
                卡片标题一
                <el-tag type="danger" size="small">标签</el-tag>
              </template>
              <div>
                <code>:empty</code>
                是一个css的伪类选择器，用于选择页面中为空的元素。
                如果元素没有任何子元素（节点）或文本内容，则该元素计为空。
              </div>
            </le-card>
            <le-card type="info">
              <template slot="header">
                卡片标题一
                <el-tag type="danger" size="small">标签</el-tag>
              </template>
              <div>
                <code>:empty</code>
                是一个css的伪类选择器，用于选择页面中为空的元素。
                如果元素没有任何子元素（节点）或文本内容，则该元素计为空。
              </div>
            </le-card>
            <le-card type="danger">
              <template slot="header">
                卡片标题一
                <el-tag type="danger" size="small">标签</el-tag>
              </template>
              <div>
                <code>:empty</code>
                是一个css的伪类选择器，用于选择页面中为空的元素。
                如果元素没有任何子元素（节点）或文本内容，则该元素计为空。
              </div>
            </le-card>
            <le-card type="warning">
              <template slot="header">
                卡片标题一
                <el-tag type="danger" size="small">标签</el-tag>
              </template>
              <div>
                <code>:empty</code>
                是一个css的伪类选择器，用于选择页面中为空的元素。
                如果元素没有任何子元素（节点）或文本内容，则该元素计为空。
              </div>
            </le-card>
          </le-panel>
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  margin-bottom: 24px;
}
</style>
