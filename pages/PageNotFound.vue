<template>
  <div id="page-not-found">
    <div class="text-center">
      <img srcset="@/assets/images/404.png 1x, @/assets/images/404@2x.png 2x" alt="404">
      <div class="main-title">呃...此路不通！回前一頁找路?</div>
      <router-link to="/">
        <el-button class="btn" type="warning">回前一頁</el-button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#page-not-found {
  padding: 0 30px;
  body {
    overflow-y: hidden;
    overflow-x: hidden;
  }
  img {
    margin-top: 3rem;
    max-width: 100%;
  }

  .btn {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    width: 26rem;
    height: 6rem;
    background-color: #bf9926;
    border-color: #bf9926;
    border-radius: 3rem;
    margin: 1.7rem 0;
    padding: 1.5rem;

    &:hover,
    &:focus,
    &:active {
      background-color: #bf9926;
      border-color: #bf9926;
    }
  }
}
</style>
