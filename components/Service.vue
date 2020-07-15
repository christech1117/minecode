<template>
  <div id="service">
    <div class="container">
      <!-- section1 -->
      <b-row class="justify-content-center">
        <b-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="main-title text-center">我們怎麼做到的?</div>
        </b-col>
        <b-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-center">
          <img src="@/assets/images/service-1.png" alt="banner" style="width: 80%; margin: 76px auto 42px auto">
        </b-col>
        <b-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="sub-title text-center">每天,台灣出境到日本的人數有1.3萬人*</div>
          <div class="ps text-center" style="color: #cccccc; margin-bottom: 7rem">*日本政府觀光局統計2018年1月～12月止，台灣訪日人數475.7萬人次。</div>
        </b-col>
      </b-row>

      <b-row class="zone" type="flex" justify="center">
        <!-- section2 -->
        <b-col cols="6">
          <img src="@/assets/images/service-2.png" alt="banner">
        </b-col>
        <b-col cols="6">
          <div class="content height-380">GOLAGOLA會將包您的包裹<br>包裝。</div>
        </b-col>
        <!-- section3 -->
        <b-col cols="6">
          <div class="content height-380">透過每天出境到日本的1.3萬<br>名旅客，隨身攜往日本。</div>
        </b-col>
        <b-col cols="6">
          <img src="@/assets/images/service-3.png" alt="banner">
        </b-col>
        <!-- section4 -->
        <b-col cols="6">
          <img src="@/assets/images/service-4.png" alt="banner">
        </b-col>
        <b-col cols="6">
          <div class="content height-380">到達日本後，包裹將由當地<br>宅配運送到收件人手上。</div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
