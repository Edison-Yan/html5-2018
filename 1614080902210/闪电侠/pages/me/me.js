// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  doUpload: function () {
    wx.navigateTo({
      url: '../login/login',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) { },
      conplete: function () { }

    })
  },
})