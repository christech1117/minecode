<template>
  <div id="calculation">
    <div class="container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <mq-layout :mq="['md', 'lg']">
            <div class="main-title">運費試算</div>
          </mq-layout>
          <mq-layout :mq="['sm']">
            <div class="main-title">運費試算</div>
          </mq-layout>

          <el-form ref="dataForm" :label-position="labelPosition" :model="temp" :rules="rules" style="margin-top: 3rem">
            <el-row :gutter="20">
              <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                <el-form-item label="寄件地" prop="sendPlace">
                  <el-select v-model="temp.sendPlace" placeholder="選擇寄件地區" :no-data-text="noDataText">
                    <el-option v-for="item in sendPlaceOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="text-center" style="margin-top: 4.5rem">
                <img src="@/assets/images/arrow-right.svg" alt="arrow-right">
              </el-col>
              <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                <el-form-item label="收件地" prop="receivePlace">
                  <el-select v-model="temp.receivePlace" placeholder="選擇收件地區" :no-data-text="noDataText">
                    <el-option v-for="item in receivePlaceOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="12" :sm="12" :md="16" :lg="16" :xl="16">
                <el-form-item label="寄件類型" prop="sendType">
                  <el-select v-model="temp.sendType" placeholder="選擇寄件類型" :no-data-text="noDataText">
                    <el-option v-for="item in sendTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
                <el-form-item label="數量" prop="amount">
                  <el-select v-model="temp.amount" placeholder="選擇數量" :no-data-text="noDataText">
                    <el-option v-for="item in amountOptions" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                <el-form-item label="長度" prop="length">
                  <el-input v-model="temp.length" type="number" oninput="if(value.length>4)value=value.slice(0,4)">
                    <div slot="suffix" class="mt-1 mr-2">cm
                    </div>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                <el-form-item label="寬度" prop="width">
                  <el-input v-model="temp.width" type="number" oninput="if(value.length>4)value=value.slice(0,4)">
                    <div slot="suffix" class="mt-1 mr-2">cm
                    </div>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                <el-form-item label="高度" prop="height">
                  <el-input v-model="temp.height" type="number" oninput="if(value.length>4)value=value.slice(0,4)">
                    <div slot="suffix" class="mt-1 mr-2">cm
                    </div>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                <el-form-item label="重量" prop="weight">
                  <el-input v-model="temp.weight" type="number" oninput="if(value.length>4)value=value.slice(0,4)">
                    <div slot="suffix" class="mt-1 mr-2">kg
                    </div>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-alert v-show="alertSize" title="體積上限為 54 * 35 * 30cm，暫不支援這麼大的貨物。" type="warning" show-icon :closable="false" />
                <el-alert v-show="alertWeight" title="重量上限為 20kg，暫不支援這麼重的貨物。" type="warning" show-icon :closable="false" />
                <el-button v-loading.fullscreen.lock="fullscreenLoading" class="btn-block" type="warning" style="margin-top: 5.5rem" @click="calculateResult()">取得運費</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <mq-layout :mq="['md', 'lg']">
            <div class="text-center">
              <img src="@/assets/images/calculation-1.svg" alt="calculation">
              <div v-if="calResult" class="cal-result" style="margin-top: 5rem">
                <div class="info">
                  <span class="text-left day">送達天數</span>
                  <span class="result-day">
                    <!-- <countTo :start-val="0" :end-val="parseInt(calResult.data.day)" :duration="1500" />天 -->
                  </span>
                </div>

                <div class="info">
                  <span class="price">原價運費</span>
                  <span class="result-price" style="text-decoration:line-through; color: #CCCCCC">NT$
                    <!-- <countTo :start-val="0" :end-val="parseInt(calResult.data.price)" :duration="1500" /> -->
                  </span>
                </div>

                <div class="info">
                  <span class="price">運費五折</span>
                  <span class="result-price" style="color: #EBAB2A">NT$
                    <!-- <countTo :start-val="0" :end-val="parseInt(calResult.data.price) * 0.5" :duration="1500" /> -->
                  </span>
                </div>
              </div>
            </div>
          </mq-layout>

          <mq-layout :mq="['sm']">
            <div class="text-center" style="margin-top: 40px">
              <el-row :gutter="20" class="m-cal-result">
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                  <img src="@/assets/images/calculation-1.svg" alt="calculation" style="width: 90%">
                </el-col>
                <template v-if="calResult">
                  <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" class="text-right" style="margin: 0 1rem">
                    <div class="day">送達天數</div>
                    <div class="result-day">
                      <countTo :start-val="0" :end-val="parseInt(calResult.data.day)" :duration="3000" />天
                    </div>
                    <div class="price">原價運費</div>
                    <div class="result-price" style="text-decoration:line-through; color: #CCCCCC">NT$
                      <countTo :start-val="0" :end-val="parseInt(calResult.data.price)" :duration="3000" />
                    </div>
                    <div class="price">運費五折</div>
                    <div class="result-price" style="color: #EBAB2A">NT$
                      <countTo :start-val="0" :end-val="parseInt(calResult.data.price) * 0.5" :duration="3000" />
                    </div>
                  </el-col>
                </template>
              </el-row>
            </div>
          </mq-layout>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import countTo from 'vue-count-to'

export default {
  components: {
    // countTo
  },
  data() {
    return {
      price: 0,
      fullscreenLoading: false,
      temp: {
        sendPlace: '台北市',
        receivePlace: '',
        sendType: '',
        amount: '1',
        length: '',
        width: '',
        height: '',
        weight: ''
      },
      labelPosition: 'top',
      noDataText: '沒資料',
      alertSize: false,
      alertWeight: false,
      // 寄件類型
      sendTypeOptions: [
        {
          value: 'document',
          label: '文件'
        },
        {
          value: 'package',
          label: '包裹'
        }
      ],
      // 數量
      amountOptions: [
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
        {
          value: '4',
          label: '4'
        },
        {
          value: '5',
          label: '5'
        },
        {
          value: '6',
          label: '6'
        },
        {
          value: '7',
          label: '7'
        },
        {
          value: '8',
          label: '8'
        },
        {
          value: '9',
          label: '9'
        },
        {
          value: '10',
          label: '10'
        }
      ],
      // 寄件地
      sendPlaceOptions: [
        {
          value: '台北市',
          label: '台北市'
        }
      ],
      // 收件地
      receivePlaceOptions: [
        {
          value: '北海道',
          label: '北海道'
        },
        {
          value: '北東北 (青森)',
          label: '北東北 (青森)'
        },
        {
          value: '北東北 (秋田)',
          label: '北東北 (秋田)'
        },

        {
          value: '北東北 (岩手)',
          label: '北東北 (岩手)'
        },
        {
          value: '南東北 (宮城)',
          label: '南東北 (宮城)'
        },
        {
          value: '南東北 (山形)',
          label: '南東北 (山形)'
        },
        {
          value: '南東北 (福島)',
          label: '南東北 (福島)'
        },
        {
          value: '関東 (東京)',
          label: '関東 (東京)'
        },
        {
          value: '関東 (茨城)',
          label: '関東 (茨城)'
        },

        {
          value: '関東 (栃木)',
          label: '関東 (栃木)'
        },
        {
          value: '関東 (群馬)',
          label: '関東 (群馬)'
        },
        {
          value: '関東 (埼玉)',
          label: '関東 (埼玉)'
        },

        {
          value: '関東 (千葉)',
          label: '関東 (千葉)'
        },
        {
          value: '関東 (神奈川)',
          label: '関東 (神奈川)'
        },
        {
          value: '関東 (山梨)',
          label: '関東 (山梨)'
        },
        {
          value: '信越 (長野)',
          label: '信越 (長野)'
        },
        {
          value: '信越 (新潟)',
          label: '信越 (新潟)'
        },
        {
          value: '北陸 (富山)',
          label: '北陸 (富山)'
        },
        {
          value: '北陸 (石川)',
          label: '北陸 (石川)'
        },
        {
          value: '北陸 (福井)',
          label: '北陸 (福井)'
        },
        {
          value: '中部 (静岡)',
          label: '中部 (静岡)'
        },
        {
          value: '中部 (愛知)',
          label: '中部 (愛知)'
        },
        {
          value: '中部 (岐阜)',
          label: '中部 (岐阜)'
        },
        {
          value: '中部 (三重)',
          label: '中部 (三重)'
        },
        {
          value: '関西 (京都)',
          label: '関西 (京都)'
        },
        {
          value: '関西 (滋賀)',
          label: '関西 (滋賀)'
        },
        {
          value: '関西 (奈良)',
          label: '関西 (奈良)'
        },
        {
          value: '関西 (和歌山)',
          label: '関西 (和歌山)'
        },
        {
          value: '関西 (大阪)',
          label: '関西 (大阪)'
        },
        {
          value: '関西 (兵庫)',
          label: '関西 (兵庫)'
        },
        {
          value: '中国 (岡山)',
          label: '中国 (岡山)'
        },
        {
          value: '中国 (広島)',
          label: '中国 (広島)'
        },
        {
          value: '中国 (山口)',
          label: '中国 (山口)'
        },
        {
          value: '中国 (鳥取)',
          label: '中国 (鳥取)'
        },
        {
          value: '中国 (島根)',
          label: '中国 (島根)'
        },
        {
          value: '四国 (香川)',
          label: '四国 (香川)'
        },
        {
          value: '四国 (徳島)',
          label: '四国 (徳島)'
        },
        {
          value: '四国 (高知)',
          label: '四国 (高知)'
        },
        {
          value: '四国 (愛媛)',
          label: '四国 (愛媛)'
        },
        {
          value: '九州 (福岡)',
          label: '九州 (福岡)'
        },
        {
          value: '九州 (佐賀)',
          label: '九州 (佐賀)'
        },
        {
          value: '九州 (長崎)',
          label: '九州 (長崎)'
        },
        {
          value: '九州 (熊本)',
          label: '九州 (熊本)'
        },
        {
          value: '九州 (大分)',
          label: '九州 (大分)'
        },
        {
          value: '九州 (宮崎)',
          label: '九州 (宮崎)'
        },
        {
          value: '九州 (鹿児島)',
          label: '九州 (鹿児島)'
        },
        {
          value: '沖縄',
          label: '沖縄'
        }
      ],
      rules: {
        sendPlace: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],

        receivePlace: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],

        sendType: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],

        amount: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],

        length: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],

        width: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],

        height: [
          {
            required: true,
            message: '* 必須輸入',
            trigger: 'change'
          }
        ],

        weight: [
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
    ...mapState(['calResult'])
  },
  created() {
    // this.fetchData();
  },
  methods: {
    ...mapActions(['getCalculateResult']),
    calculateResult() {
      this.$refs.dataForm.validate((valid) => {
        if (
          this.temp.length > 54 ||
          this.temp.width > 35 ||
          this.temp.height > 30
        ) {
          this.alertSize = true
        } else {
          this.alertSize = false
        }
        if (this.temp.weight > 20) {
          this.alertWeight = true
        } else {
          this.alertWeight = false
        }

        if (valid && !this.alertSize && !this.alertWeight) {
          const loading = this.$loading({
            lock: true,
            text: '計算中',
            // spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          this.getCalculateResult(this.temp)

          setTimeout(() => {
            loading.close()
            this.$gtm.trackEvent({
              event: 'calculation',
              category: 'calculation',
              action: 'getCalculation',
              amount: this.temp.amount,
              height: this.temp.height,
              length: this.temp.length,
              receivePlace: this.temp.receivePlace,
              sendPlace: this.temp.sendPlace,
              sendType: this.temp.sendType,
              weight: this.temp.weight,
              width: this.temp.width,
              originalPrice: this.calResult.data.price,
              discountPrice: this.calResult.data.price * 0.5
            })
          }, 1000)
        }
      })
    }
  }
}
</script>
