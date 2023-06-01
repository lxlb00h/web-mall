<template>
  <div class="user-detail">
    <div class="user-detail-top">基本信息</div>
    <div class="user-detail-group">
      <div class="user-icon">
        <span>头像</span>
        <img :src="userInfo.image" alt="">
      </div>
      <div class="user-item">
        <span>手机</span>
        <span>{{ userInfo.phone || '暂无' }}</span>
      </div>
      <div class="user-item">
        <span>账号</span>
        <span>{{ userInfo.user_id || '暂无' }}</span>
      </div>
      <div class="user-item">
        <span>昵称</span>
        <span>{{ userInfo.nickname || '暂无' }}</span>
      </div>
      <div class="user-item">
        <span>性别</span>
        <span>{{ userInfo.gender || '暂无' }}</span>
      </div>
      <div class="user-item">
        <span>电子邮箱</span>
        <span>{{ userInfo.email || '暂无' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
        ...mapState(["userInfo"])
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .user-detail
    width 70%
    height 100%
    margin 20px auto
    .user-detail-top
      width 100%
      height 60px
      line-height 60px
      padding-left 10px
      font-weight bold
    .user-detail-group
      .user-icon
        height 60px
        padding 0 10px
        background-color #fff
        border-bottom: 1px solid #e0e0e0
        display flex
        justify-content space-between
        align-items center
        img
          width 50px
          height 50px
          border-radius 50%
      .user-item
        height 50px
        padding 0 10px
        background-color #fff
        border-bottom: 1px solid #e0e0e0
        display flex
        justify-content space-between
        align-items center
    .right-title-color
      color #999
      font-size 14px
</style>

