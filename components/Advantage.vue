<template>
  <div id="advantage">
    <div class="main-title text-center">DHL的速度 EMS的價格</div>
      <el-row :gutter="20">
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" :offset="4">
          <div class="zone">
            <div class="advantage-title" style="margin-top: 139px">
              <span style="font-weight: 500">最快節省 25% 時間</span>
            </div>

            <el-row :gutter="20" class="progress-zone">
              <el-col :xs="8" :sm="8" :md="3" :lg="3" :xl="3">
                <div class="progress-title">
                  <img src="@/assets/images/GOLAGOLA.svg" alt="GOLAGOLA">
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <el-progress class="progress1" :stroke-width="30" :percentage="percentage1" status="success" color="#FFC000" />
              </el-col>
            </el-row>

            <el-row :gutter="20" class="progress-zone">
              <el-col :xs="8" :sm="8" :md="3" :lg="3" :xl="3">
                <div class="progress-title">
                  <img src="@/assets/images/DHL.png" alt="DHL" style="width: 80%">
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <el-progress class="progress2" :stroke-width="30" :percentage="percentage2" color="#E1E1E1" />
              </el-col>
            </el-row>
          </div>

          <div class="zone" style="margin-top: 82px">
            <div class="advantage-title">
              <span style="color: #EBAB2A">活動期間內『運費5折』</span>
              <span style="color: #CCCCCC; text-decoration:line-through; font-weight: normal">每單包裹能節省 80-500 元的運費</span>
            </div>

            <el-row :gutter="20" class="progress-zone">
              <el-col :xs="8" :sm="8" :md="3" :lg="3" :xl="3">
                <div class="progress-title">
                  <img src="@/assets/images/GOLAGOLA.svg" alt="GOLAGOLA">
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <el-progress class="progress3" :stroke-width="30" :percentage="percentage3" color="#FFC000" />
              </el-col>
            </el-row>

            <el-row :gutter="20" class="progress-zone">
              <el-col :xs="8" :sm="8" :md="3" :lg="3" :xl="3">
                <div class="progress-title">
                  <img src="@/assets/images/EMS.svg" alt="EMS" style="width: 80%">
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                <el-progress class="progress4" :stroke-width="30" :percentage="percentage4" color="#E1E1E1" />
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage1: 70,
      percentage2: 100,
      percentage3: 50,
      percentage4: 100
    }
  }
}
</script>
