<template>
  <div id="banner">
    <div class="container">
      <b-row>
        <b-col cols="12" class="left-area">
          <div class="main-banner-title">客戶獲得最高品質的程式</div>
          <div class="main-banner-title">工程師獲得成長的機會</div>

          <scrollactive class="my-nav">
            <a id="calculationBtn" class="btn-banner scrollactive-item round" href="#calculation">運費試算</a>
          </scrollactive>
        </b-col>

        <b-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="ps bottom">{{ msg }}</div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String
  },
  data() {
    return {
      msg: '*即日起，使用本網頁透過 GOLAGOLA 寄往日本之快遞，皆享運費5折優惠。(請至下方運費試算計算；貨物重量上限 20kg，體積上限為 54 * 35 * 30 cm)，本公司保留活動內容解釋及修改之權利'
    }
  }
}
</script>

<style lang="scss" scoped>
#banner {
  // background: url('../assets/images/banner.png') no-repeat center top;
  background-color: #264d80;
  padding-bottom: 5rem;
  img {
    width: 100%;
  }
  .logo {
    width: 130%;
    // margin-left: 120px;
  }
  .title {
    font-size: 50px;
    color: #fff;
  }
  .btn-tag {
    color: #bf9926;
    padding: 10px 16px;
    border: 1px solid #fff;
  }

  .left-area {
    margin-top: 150px;
  }
  .right-area {
    margin-top: 100px;
  }
  .bottom {
    margin-top: 120px;
  }
}

#m-banner {
  // background: url('../assets/images/m-banner.png') no-repeat center top;
  background-color: #ffc000;
  height: 100vh;

  img {
    width: 100%;
  }

  .title {
    font-size: 40px;
    color: #fff;
  }
  .btn-tag {
    font-size: 1.2rem;
    color: #bf9926;
    border: 1px solid #fff;
    width: 30%;
    margin-top: 12rem;
  }
  .el-button {
    padding: 1.2rem 0;
  }

  .btn-banner {
    margin: 5rem auto;
  }
}
</style>
