// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrls: [
      "/绞肉机/主图2@2x.png",
      '/绞肉机/主图2@2x.png',
      '/绞肉机/主图2@2x.png',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    slider: [
      { picUrl: '/绞肉机/椭圆1@2x.png' },
      { picUrl: '/绞肉机/椭圆1拷贝@2x.png' },
      { picUrl: '/绞肉机/椭圆1拷贝@2x.png' },
    ],
    test_othet: [
      { text1: "运费", text2: "免运费", img: "  " },
      { text1: "选择", text2: "规格属性", img: "/绞肉机/右拷贝@2x.png" },
      { text1: "产品参数", text2: "   ", img: "/绞肉机/右拷贝@2x.png" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})