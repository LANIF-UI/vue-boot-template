<template>
  <le-container class="permission" padding>
    <le-main>
      <el-row :gutter="24">
        <el-col>
          <el-alert
            :title="`当前用户角色：[${currentRoles}]`"
            type="success"
            effect="dark"
          ></el-alert>
        </el-col>
        <el-col>
          <le-panel header="权限 Permission">
            在路由中配置meta属性
            <code>roles: ['admin']</code>
            ，实现跳由权限。 其它如按钮等权限可以用指令
            <code>v-permission="['admin','editor']"</code>
            实现
          </le-panel>
        </el-col>
        <el-col>
          <le-panel header="指令权限">
            <el-checkbox-group v-model="currentRoles" size="small">
              <el-checkbox-button label="admin">Admin角色</el-checkbox-button>
              <el-checkbox-button label="editor">Editor角色</el-checkbox-button>
            </el-checkbox-group>

            <div class="content">
              <el-tag type="primary" effect="dark" v-permission="['admin']">
                admin角色能看到
              </el-tag>
              <el-tag type="success" effect="dark" v-permission="['editor']">
                editor角色能看到
              </el-tag>
              <el-tag type="danger" effect="dark" v-permission="['admin', 'editor']">
                admin,editor都能看到
              </el-tag>
            </div>
          </le-panel>
        </el-col>
        <el-col>
          <le-panel header="路由权限">
            <el-link type="primary">
              <router-link to="/ui/panel">只有Admin角色才可以访问</router-link>
            </el-link>
          </le-panel>
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
export default {
  name: 'Permission',
  data() {
    return {
      currentRoles: this.$store.getters.roles
    }
  },
  watch: {
    currentRoles(newValue, oldValue) {
      this.$store.dispatch('user/changeRoles', { roles: newValue })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  margin-bottom: 24px;
}
.content {
  margin-top: 20px;
}
</style>
