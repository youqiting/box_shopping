// import ApiList from  '../../config/api';
// import request from '../../utils/request.js';
//获取应用实例  
var app = getApp();
Page({
  data: {
    currType: 0,
    // 当前类型
    types: [
      { id: '1', name: '生1' },
      { id: '2', name: '生活2' },
      { id: '3', name: '生活用2' },
      { id: '4', name: '生活用品4' }
    ],
    typeTree: [
      { src: '/image/图层17@2x.png', name: '生1' },
      { src: '/image/图层18@2x.png', name: '生活2' },
      { src: '/image/图层19@2x.png', name: '生活用3' },
      { src: '/image/图层17@2x.png', name: '生活用品4' }
    ],
  },

  onLoad: function (option) {
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Category/index',
      method: 'post',
      data: {},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //--init data 
        var status = res.data.status;
        if (status == 1) {
          var list = res.data.list;
          var catList = res.data.catList;
          var firstId = res.data.list[
            0
          ].id;
          that.setData({
            currType: firstId,
            types: list,
            typeTree: catList,
          });
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 2000,
          });
        }
      },
      error: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000,
        });
      }
    });
  },
  tapType: function (e) {
    var that = this;
    const currType = e.currentTarget.dataset.typeId;
    that.setData({
      currType: currType
    });
    console.log(currType);
    wx.request({
      url: app.d.ceshiUrl + '/Api/Category/getcat',
      method: 'post',
      data: {
        cat_id: currType
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var status = res.data.status;
        if (status == 1) {
          var catList = res.data.catList;
          that.setData({
            typeTree: catList,
          });
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 2000,
          });
        }
      },
      error: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000,
        });
      }
    });
  },
  // 加载品牌、二级类目数据
  getTypeTree(currType) {
    const me = this, _data = me.data;
    if (!_data.typeTree[currType
    ]) {
      request({
        url: ApiList.goodsTypeTree,
        data: {
          typeId: +currType
        },
        success: function (res) {
          _data.typeTree[currType
          ] = res.data.data;
          me.setData({
            typeTree: _data.typeTree
          });
        }
      });
    }
  }
})