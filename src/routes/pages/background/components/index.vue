<template>
  <le-container full>
    <le-main>
      <div class="background">
        <div class="content">
          <el-upload action="#" :before-upload="beforeUpload" :show-file-list="false">
            <el-button>传个图片试试</el-button>
          </el-upload>
        </div>
        <div class="background__mask"></div>
        <div class="background__image" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
      </div>
    </le-main>
  </le-container>
</template>

<script>
export default {
  name: 'Background',
  data() {
    return {
      imageUrl: ''
    }
  },
  methods: {
    beforeUpload(file) {
      this.imageUrl = URL.createObjectURL(file)
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixin.scss';

.background {
  background-color: #292a2b;
  height: 100%;
  &__mask {
    @include abs-full;
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color 0.5s ease-out;
    z-index: 2;
  }
  &__image {
    @include abs-full;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(65px);
    background-color: #969696;
    opacity: 0.6;
    transform: translateZ(0);
  }
}
.content {
  @include abs-full;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
</style>
