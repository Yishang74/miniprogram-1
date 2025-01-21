
Page({
  data: {
    routers :[
      {
        text: '地点引导',
        icon: 'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E5%9C%B0%E5%9D%80.png',
        url: '/pages/jiuyiliucheng/jiuyiliucheng',
      },
      {
        text: '就诊时间段',
        icon: 'http://sq33blnvo.hd-bkt.clouddn.com/%E5%9B%BE%E6%A0%87/%E6%B5%81%E7%A8%8B%E8%AF%B4%E6%98%8E.png',
        url: '/pages/shijianduan/shijianduan',
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
