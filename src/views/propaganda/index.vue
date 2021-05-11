<template>
  <div style="background-color: #FFFFFF;overflow-y: scroll;">
    <div class="content">
      <div class="div_youqing">
        <img src="@/assets/友情链接.png" class="img1">
      </div>
      <div class="div_center">
        <div class="div_wenmei" @click="See('http://wmjb.youjiankang.top:8087/szgmjk/schoolinfection/report')">
          <img src="@/assets/蚊媒举报.png" class="img2">
        </div>
        <div class="div_xiaoyou">
        <wx-open-launch-weapp
          id="launch-btn"
          username="gh_0d92e1f8211b"
          path="pages/index/index.html"
          @error="handleErrorFn"
          @launch="handleLaunchFn"
        >
          <script type="text/wxtag-template">
            <style>
              /*.img3 {*/
              /*  height: 124.5px;*/
              /*  width: 253.5px;*/
              /*}*/

            </style>
            <image :src="imgBase64" class="img3"/>
          </script>
        </wx-open-launch-weapp>
        </div>
        <div class="div_kongbai">
          <img src="@/assets/空白.png" class="img3">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk';
import {imgBase64} from '../../utils/base64'
const {getWxConfig} = require("../../service/SyncRequest");
export default {
  name: "index",
  components: {},
  data() {
    return {
      imgBase64
    }
  },
 async mounted() {
    let url = window.location.href.split('#')[0];
    const res = await getWxConfig(url);
    console.log(333,res);
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: res.appId, // 必填，公众号的唯一标识
      timestamp: res.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.nonceStr, // 必填，生成签名的随机串
      signature: res.signature,// 必填，签名
      jsApiList: [
        'wx-open-launch-weapp',
      ],
      openTagList: ['wx-open-launch-weapp'] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
    });
    // 通过ready接口处理成功验证
    wx.ready(function () {
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中
    });
    // 通过error接口处理失败验证
    wx.error(function (res) {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名
    });

  },
  methods: {
    See(url) {
      window.location.href = url
    },
    handleErrorFn(e) {

    },
    handleLaunchFn(e) {

    }

  }
}
</script>
<style scoped lang="less">
.content {
  margin: 10px 15px 0 15px;
  background-color: #CEF1E9;
  height: 100%;
  position: relative;
  height: calc(100vh - 20px)
}
.div_xiaoyou {
  width: 100%;
  margin-top: 33.5px;
  display: flex;
 flex-direction: column;
 align-items: flex-end !important;

}
.div_youqing {
  width: 325px;
  height: calc(100vh - 80px);
  border: 1px dashed #83CEBD;
  border-radius: 5px;
  position: absolute;
  top: 15px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end !important;
}

.div_center {
  width: 305px;
  height: calc(100vh - 120px);
  border: 1px solid #83CEBD;
  position: absolute;
  top: 71px;
  left: 20px;
}

.div_wenmei {
  margin-top: 22px;
}
.div_kongbai {
  margin-top: 34px;
}

.img1 {
  height: 40px;
  width: 241px;
}

.img2 {
  height: 124.5px;
  width: 268.5px;
}

</style>
