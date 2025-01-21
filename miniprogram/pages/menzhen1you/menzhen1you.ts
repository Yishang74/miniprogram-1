const app = getApp()

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
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
