
Page({
  data: {
    routers :[
      {
        text: '入院前门诊（无我院检查）',
        icon: '/icon/',
        url: '/pages/menzhen1/menzhen1',
      },
      {
        text: '入院前门诊（有我院彩超及甲功相关检查——未做穿刺）',
        icon: '/icon/',
        url: '/pages/menzhen2/menzhen2',
      },
      {
        text: '入院前门诊（穿刺后有病理报告）',
        icon: '/icon/',
        url: '/pages/menzhen3/menzhen3',
      },
      {
        text: '住院期间（手术前）',
        icon: '/icon/',
        url: '/pages/zhuyuan1/zhuyuan1',
      },
      {
        text: '住院期间（手术后）',
        icon: '/icon/',
        url: '/pages/zhuyuan2/zhuyuan2',
      },
      {
        text: '出院后门诊（术后1个月随访）',
        icon: '/icon/',
        url: '/pages/chuyuan1/chuyuan1',
      },
      {
        text: '出院后门诊（术后3个月随访）',
        icon: '/icon/',
        url: '/pages/chuyuan2/chuyuan2',
      },
      {
        text: '出院后门诊（术后3个月随访）',
        icon: '/icon/',
        url: '/pages/chuyuan3/chuyuan3',
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
