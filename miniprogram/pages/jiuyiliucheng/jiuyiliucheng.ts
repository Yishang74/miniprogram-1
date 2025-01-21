
Page({
  data: {
    routers :[
      {
        text: '门诊引导',
        icon: 'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E9%97%A8%E8%AF%8A.png',
        url: '/pages/menzhen/menzhen',
      },
      {
        text: '住院部引导',
        icon: 'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E4%BD%8F%E9%99%A2%E9%83%A8.png',
        url: '/pages/',
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
})
