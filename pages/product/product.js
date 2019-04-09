// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    display_image: [{
      "describe": "三的SD-JR02绞肉机家用电动小型绞馅切菜打碎肉机蒜蓉蒜泥搅拌机",
      "product_price": "69", "product_image": "../../image/产品图/1.png",
      "image1": "../../image/产品图/组13@2x.png", "image2": "../../image/产品图/组14@2x.png"
    },
    {
      "describe": "三的SD-JR09D绞肉机家用电动碎肉机不锈钢搅拌机小型绞馅打蒜蓉",
      "product_price": "99", "product_image": "../../image/产品图/2.png",
      "image1": "../../image/产品图/组13@2x.png", "image2": "../../image/产品图/组14@2x.png"
    },
    {
      "describe": "三的SD-JR10家用绞肉机全自动人容量商用碎肉机碎菜绞馅切丝切片",
      "product_price": "299", "product_image": "../../image/产品图/3.png",
      "image1": "../../image/产品图/组13@2x.png", "image2": "../../image/产品图/组14@2x.png"
    },
    {
      "describe": "三的SD-JR303绞肉机家用电动小型绞馅切菜打碎肉机蒜蓉蒜泥搅拌机",
      "product_price": "239", "product_image": "../../image/产品图/4.png",
      "image1": "../../image/产品图/组13@2x.png", "image2": "../../image/产品图/组14@2x.png"
    }]
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
  switchNav: function (e) {
    var id = e.currentTarget.id;
    console.log(id);
    this.setData({ currentTab: id });
  },
  loadproduct: function (e) {
    var id = e.currentTarget.id;
    wx: wx.navigateTo({
      url: '../describe/describe?id=' + id
    })
  }
})