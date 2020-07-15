<template>
  <div id="transmit">
    <div class="container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-top: 50px;">
            <div class="main-title">我想寄件</div>
            <div class="desc">如果您對我們的寄件服務有興趣的話，<br>歡迎留下您的基本資料及聯絡方式，我們會盡快與您聯繫，謝謝。</div>
            <img class="mt-5" src="@/assets/images/transmit-1.svg" alt="">
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-form ref="dataForm" :label-position="labelPosition" :model="temp" :rules="rules">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="temp.name" maxlength="10" placeholder="輸入姓名" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item label="寄件身份" prop="identity">
                  <div>
                    <el-radio v-model="temp.identity" label="person">個人</el-radio>
                    <el-radio v-model="temp.identity" label="company">公司</el-radio>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="聯絡電話" prop="phone">
                  <el-input v-model="temp.phone" maxlength="10" placeholder="輸入電話" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="信箱" prop="email">
                  <el-input v-model="temp.email" maxlength="30" placeholder="輸入信箱" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="寄件頻率" prop="sendFrequency">
                  <el-select v-model="temp.sendFrequency" placeholder="選擇寄件頻率" :no-data-text="noDataText">
                    <el-option v-for="item in sendFrequencyOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-form-item label="想要提問" prop="question">
                  <el-input v-model="temp.question" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="請輸入內容" />
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-button class="btn-block" type="warning" @click="send()">確認送出</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      temp: {
        name: '',
        identity: 'person',
        phone: '',
        email: '',
        sendFrequency: '',
        question: ''
      },
      labelPosition: 'top',
      noDataText: '沒資料',
      sendFrequencyOptions: [
        {
          value: '就這 1 次',
          label: '就這 1 次'
        },
        {
          value: '每日 / 1次',
          label: '每日 / 1次'
        },
        {
          value: '每週 / 1次',
          label: '每週 / 1次'
        },
        {
          value: '每月 / 1次',
          label: '每月 / 1次'
        }
      ],
      rules: {
        name: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],
        identity: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],
        phone: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],
        email: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          },
          {
            type: 'email',
            message: '請輸入正確的信箱',
            trigger: 'blur'
          }
        ],
        sendFrequency: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],
        question: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(['sendEmailResult'])
  },
  methods: {
    ...mapActions(['sendEmail']),
    resetTemp() {
      this.temp = {
        name: '',
        identity: 'person',
        phone: '',
        email: '',
        sendFrequency: '',
        question: ''
      }
    },
    send() {
      this.$refs.dataForm.validate((valid) => {
        if (valid) {
          this.sendEmail(this.temp).then(() => {
            this.$gtm.trackEvent({
              event: 'send',
              category: 'send',
              action: 'submit',
              name: this.temp.name,
              identity: this.temp.identity,
              phone: this.temp.phone,
              email: this.temp.email,
              sendFrequency: this.temp.sendFrequency,
              question: this.temp.question
            })

            this.resetTemp()
            this.$nextTick(() => {
              this.$refs.dataForm.clearValidate()
            })

            this.$swal({
              title: this.sendEmailResult.message,
              type: this.sendEmailResult.status,
              showConfirmButton: false,
              timer: 2000
            })
          })
        }
      })
    }
  }
}
</script>
