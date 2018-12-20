//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
 
  navigateBtn1: function () {
    wx.navigateTo({
      url: '../qu/qu',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) { },
      conplete: function () { }

    })
  },
  navigateBtn2: function () {
    wx.navigateTo({
      url: '../song/song',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) { },
      conplete: function () { }

    })
  },
  navigateBtn3: function () {
    wx.navigateTo({
      url: '../mai/mai',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) { },
      conplete: function () { }

    })
  },
  navigateBtn4: function () {
    wx.navigateTo({
      url: '../zuo/zuo',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) { },
      conplete: function () { }

    })
  },
})
