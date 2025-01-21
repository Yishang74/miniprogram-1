Page({
  data: {
    routers :[
      {
        text: '喉镜、心电图及DR胸部检查',
        url: '/pages/xiaorongjiancha/xiaorongjiancha',
      },
      {
        text: '甲功八项',
        url: '/pages/jiagong8/jiagong8',
      },
      {
        text: '甲状旁腺功能测定',
        url: '/pages/pangxiangongneng/pangxiangongneng',
      },
      {
        text: '血液检查及血型匹配',
        url: '/pages/xueyejianchaxuexing/xueyejianchaxuexing',
      },
      {
        text: '生化1+生化4',
        url: '/pages/shenghua1+4/shenghua1+4',
      },
      {
        text: '甲状腺及颈部淋巴结彩超',
        url: '/pages/jzxcc1/jzxcc1',
      },
      {
        text: '肿瘤标志物测定',
        url: '/pages/zhongliubiaozhiwu/zhongliubiaozhiwu',
      },
      {
        text: '甲状腺彩超声学造影',
        url: '/pages/CCZY1/CCZY1',
      }
    ],
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
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
