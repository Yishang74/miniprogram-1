Page({
  data: {
    routers :[
      {
        text: '门诊诊室',
        icon: 'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E9%97%A8%E8%AF%8A.png',
        url: '/pages/zhenshi/zhenshi',
      },
      {
        text: '抽血检查',
        icon: 'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E6%8A%BD%E8%A1%80%E6%A3%80%E6%9F%A5.jpg',
        url: '/pages/chouxue/chouxue',
      },
      {
        text: '彩超预约窗口',
        icon: 'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E6%88%91%E7%9A%84%E9%A2%84%E7%BA%A6.png',
        url: '/pages/caichaoyuyue/caichaoyuyue',
      },
      {
        text: '穿刺预约窗口',
        icon: 'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E6%88%91%E7%9A%84%E9%A2%84%E7%BA%A6.png',
        url: '/pages/chuanciyuyue/chuanciyuyue',
      },
      {
        text: '穿刺超声介入室',
        icon:  'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E7%A9%BF%E5%88%BA.png',
        url: '/pages/chuanci/chuanci',
      },
      {
        text: '彩超检查',
        icon:  'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E5%BD%A9%E8%B6%85.png',
        url: '/pages/ruyuan/ruyuan',
      }
    ],

    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: ""
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})