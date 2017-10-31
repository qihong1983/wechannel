// pages/kpireport/kpireport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token: null,
    dataArr: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;


    wx.getStorage({
      key: 'token',
      success: function (res) {
        console.log(res.data);
        that.setData({ token: res.data });
      },
      complete: function (res) {
        if (that.data.token != null) {
          wx.request({
            url: 'http://127.0.0.1:3001/user_kpireport_list', //仅为示例，并非真实的接口地址
            method: 'POST',
            data: {
              appCode: 24,
              secondParam: "yourOtherValue"
            },
            header: {
              'content-type': 'application/json', // 默认值
              'Authorization': 'Bearer ' + that.data.token
            },
            success: function (res) {

              if (res.data.status) {
                that.setData({ dataArr: res.data.data });
              } else {
                wx.switchTab({
                  url: '/pages/login/login'
                })
              }
              
              console.log(res.data)
            },
            complete:function (res) {
              console.log(that.data.dataArr, 'res.data');
            }
          })
        } else {

          wx.switchTab({
            url: '/pages/login/login'
          })
        }
      }
    })
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