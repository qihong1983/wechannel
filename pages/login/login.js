// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    pass: null
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
    console.log('----@@----');
    wx.removeStorage({
      key: 'token',
      success: function (res) {
        console.log(res.data)
      }
    })
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

  },
  inputUser: function (e) {

    console.log(e, '-------');

    this.setData({ user: e.detail.value });

    console.log(this.data.user);
  },
  inputPass: function (e) {
    console.log(e, '+++');

    this.setData({ pass: e.detail.value });

    console.log(this.data.pass);
  },
  formSubmit: function (e) {
    console.log(e, 'submit');

    wx.request({
      url: 'http://127.0.0.1:3001/token', 
      // url: 'http://a1.easemob.com/management/token',

      method: "post",
      data: {
        password: e.detail.value.pass,
        username: e.detail.value.user
      },

      // data: {
      //   grant_type:"password",
      //   password: "a",
      //   username:"daviddong"
      // },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {

        console.log(res.data);

        if (res.data.status) {
          wx.setStorage({
            key: "token",
            data: res.data.token
          });

          wx.switchTab({
            url: '/pages/index/index'
          })
        }

        // res.data.


      }
    })
  }
})