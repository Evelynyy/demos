// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var logs = wx.getStorageSync('callogs');
    this.setData({ logs: logs });
  }
})