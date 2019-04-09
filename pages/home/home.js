//list.js
//获取应用实例
const app = getApp()

Page(
  { 
    data: {
      ticket_top_image: ['../../image/组-4@2x.png', '../../image/组-4-副本@2x.png', '../../image/组-4-副本-2@2x.png', '../../image/111111@2x.png'],
      zhazhiji: "../../image/产品图/图层18@2x.png",
      jiaorouji: "../../image/产品图/细节15@2x.png",
      pobiji: "../../image/产品图/图层17@2x.png",
      pobiliao: "../../image/产品图/图层19@2x.png",

      descripe_text1: 'SD - JR09D绞肉机',
      descripe_text2: '双层4维4刀技术',
      descripe_text3: "耐用",
      descripe_text4: "时尚",
      descripe_text5: "方便",

      price: "199",

      baokuanimage1: "../../image/产品图/1.png",
      baokuanimage2: "../../image/产品图/2.png",
      baokuanimage3: "../../image/产品图/3.png",
      baokuanimage4: "../../image/产品图/4.png",
      baokuanimage5: "../../image/产品图/5.png",
      baokuanimage6: "../../image/产品图/6.png",
      baokuanimage7: "../../image/产品图/7.png",
      baokuanimage8: "../../image/产品图/8.png",

      baokuanimage: [
        [{ image: "../../image/产品图/1.png", price: "￥299.00" },
          { image: "../../image/产品图/2.png", price: "￥139.00" }],
        [{ image: "../../image/产品图/3.png", price: "￥119.00" },
          { image: "../../image/产品图/4.png", price: "￥699.00" }],
        [{ image: "../../image/产品图/5.png", price: "￥479.00" },
          { image: "../../image/产品图/6.png", price: "￥398.00" }],
        [{ image: "../../image/产品图/7.png", price: "￥99.00" },
          { image: "../../image/产品图/8.png", price: "￥79.00" }]],  

    },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})