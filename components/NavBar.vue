<template>
  <div id="nav-bar">
    <scrollactive class="my-nav">
      <fixed-header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <!-- <a class="navbar-brand" href="/" /> -->
            <router-link v-scroll-to="'body'" style="font-size: 2.8rem" to="/">MineCode</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" />
            </button>
            <div id="navbarText" class="collapse navbar-collapse">
              <!-- <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul> -->
              <span class="navbar-text">
                <div class="navbar-nav">
                  <router-link class="nav-item nav-link scrollactive-item" to="/#advantage" @click="handleNavToggle">我們的優勢</router-link>
                  <router-link class="nav-item nav-link scrollactive-item" to="/#service" @click="handleNavToggle">服務簡介</router-link>
                  <router-link class="nav-item nav-link scrollactive-item" to="/#calculation" @click="handleNavToggle">運費試算</router-link>
                  <router-link class="nav-item nav-link scrollactive-item" to="/#transmit" tabindex="-1" aria-disabled="true" @click="handleNavToggle">我想寄件</router-link>
                </div>
              </span>
            </div>
          </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand scrollactive-item" href="#nav-bar">
              <!-- <img src="@/assets/images/logo.svg" alt=""> -->
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" />
            </button>
            <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
              <div class="navbar-nav">
                <a class="nav-item nav-link scrollactive-item" href="#advantage">我們的優勢</a>
                <a class="nav-item nav-link scrollactive-item" href="#service">服務簡介</a>
                <a class="nav-item nav-link scrollactive-item" href="#calculation">運費試算</a>
                <a class="nav-item nav-link scrollactive-item" href="#transmit" tabindex="-1" aria-disabled="true">我想寄件</a>
              </div>
            </div>
          </div>
        </nav>
      </fixed-header>
    </scrollactive>
  </div>
</template>

<script>
import FixedHeader from 'vue-fixed-header'

export default {
  components: {
    FixedHeader
  },
  methods: {
    handleNavToggle() {
      const toggle = document.querySelector('.navbar-toggler')
      toggle.click()
    }
  }
}
</script>
<style lang="scss" scoped>
#nav-bar {
  color: #fff;
}
</style>
