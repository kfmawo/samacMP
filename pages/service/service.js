// pages/service/service.js
Page({

  /**
   * Page initial data
   */
  data: {
    swiperList: [],
  },

  getSwiperLst(){
    wx.request({
      url: 'https://samac.com.cn/MP/service.json',
      method: 'GET',
      success: (res) => {
        // console.log(res.data[0].image)
        // console.log(res.data)
        this.setData({
          swiperList: res.data,
          
        })
        // console.log(swiperList)
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getSwiperLst()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})