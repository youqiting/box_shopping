//pages/cart/cart.js
//初始化数据
Page({

  data: {
    hidden: null,
    hiddenEmpty: true,
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    carts: [
      {
        id: 1,
        pic: "../../imageshop/主图2@2x.png",
        ppzy: "../../imageshop/组4@2x.png",
        name: "三的 SD-JR02绞肉机"+"\n"+"机家用电动小型搅馅切菜打碎...",
        character:"颜色：绿色    规格：...",
        price: "69",
        isSelect: false,
        // 数据设定
        count: 1
      },
      {
        id: 2,
        pic: "../../imageshop/主图2@2x.png",
        ppzy:"../../imageshop/组4@2x.png",
        name: "三的 SD-JR09D绞肉机" + "\n" +"压力锅全能烹饪智能安全锁...",
        character: "颜色：银色    规格：...",
        price: "99",
        isSelect: false,
        // 数据设定
        count: 1
      },
    ]
  },
  //勾选事件处理函数  
  switchSelect: function (e) {    // 获取item项的id，和数组的下标值  
    var Allprice = 0, i = 0; let id = e.target.dataset.id,

      index = parseInt(e.target.dataset.index); this.data.carts[index].isSelect = !this.data.carts[index].isSelect;    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + (this.data.carts[index].price * this.data.carts[index].count);
    } else {
      this.data.totalMoney = this.data.totalMoney - (this.data.carts[index].price * this.data.carts[index].count);
    }    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + (this.data.carts[index].price * this.data.carts[index].count);
    } if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    } else {
      this.data.isAllSelect = false;
    } this.setData({
      carts: this.data.carts, totalMoney: this.data.totalMoney, isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {    //处理全选逻辑
    let i = 0; if (!this.data.isAllSelect) {
      this.data.totalMoney = 0; for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true; this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count);

      }
    } else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      } this.data.totalMoney = 0;
    } this.setData({
      carts: this.data.carts, isAllSelect: !this.data.isAllSelect, totalMoney: this.data.totalMoney,
    })
  },
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    }); this.setData({
      showDialog: !this.data.showDialog
    });
  },
  /* 减数 */
  delCount: function (e) {
    var index = e.target.dataset.index; console.log("刚刚您点击了加一"); var count = this.data.carts[index].count;    // 商品总数量-1
    if (count > 1) {
      this.data.carts[index].count--;
    }    // 将数值与状态写回  
    this.setData({
      carts: this.data.carts
    }); console.log("carts:" + this.data.carts); this.priceCount();
  },
  /* 加数 */
  addCount: function (e) {
    var index = e.target.dataset.index; console.log("刚刚您点击了加+"); var count = this.data.carts[index].count;    // 商品总数量+1  
    if (count < 10) {
      this.data.carts[index].count++;
    }    // 将数值与状态写回  
    this.setData({
      carts: this.data.carts
    }); console.log("carts:" + this.data.carts); this.priceCount();
  },

  priceCount: function (e) {
    this.data.totalMoney = 0; for (var i = 0; i < this.data.carts.length; i++) {
      if (this.data.carts[i].isSelect == true) {
        this.data.totalMoney = this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count);
      }

    } this.setData({
      totalMoney: this.data.totalMoney,
    })
  }
})
