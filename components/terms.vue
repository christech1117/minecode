<template>
  <section class="container terms-section" :class="{ 'in-app': inApp }">
    <div class="terms">
      <div class="title">
        <span v-show="!inApp">
          {{ content.title }}
        </span>
      </div>
      <div v-for="(rule, index) in content.rules" :key="index" class="rules">
        <div v-if="rule.title" class="rule-title">{{ rule.title }}</div>
        <div v-for="(subtitle, s) in rule.subtitle" :key="s" class="rule-subtitle">
          <p>{{ subtitle }}</p>
        </div>
        <div v-if="typeof rule.content === 'string'" class="rule-content" v-html="html(rule.content)" />
        <div v-else>
          <ul v-if="rule.content.type === 'ul'" class="rule-content">
            <li v-for="(li, i) in rule.content.list" :key="i" v-html="html(li)" />
          </ul>
          <ol v-if="rule.content.type === 'ol'" class="rule-content">
            <li v-for="(li, i) in rule.content.list" :key="i" v-html="html(li)" />
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    inApp() {
      return this.$route.query.inApp
    }
  },
  methods: {
    html(content) {
      // add underline to specific keyword
      return content.replace('第三方註冊資訊', '<u>第三方註冊資訊</u>').replace(/\n|\r\n/g, '<br>')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_flex.scss';
section.terms-section {
  .terms {
    box-sizing: border-box;
    // padding: 5% 5%;
    margin: 0 auto;
    // height: 100%;
    // width: 100%;
    @extend %flexbox;
    @include flex-direction(column);
    @include justify-content(center);
    @include align-items(center);
    .title {
      // color: $primary-text-color;
      font-size: 40px;
      font-weight: 700;
      padding-bottom: 20px;
    }
    @media screen and (min-width: 600px) {
      .title {
        padding-bottom: 60px;
      }
    }
    .rules {
      width: 100%;
      text-align: left;
      padding: 18px 0;
      color: #555;
      .rule-title {
        line-height: 2.2;
        font-size: 18px;
        font-weight: 700;
      }
      .rule-subtitle,
      .rule-content {
        line-height: 2;
        font-size: 16px;
      }
      ul, ol {
        padding-left: 16px;
      }
      ul {
        list-style-type: none;
        li {
          position: relative;
          &:before {
            position: absolute;
            content: '‧ ';
            right: 100%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .terms {
      padding: 5% 0;
    }
  }
}
</style>
