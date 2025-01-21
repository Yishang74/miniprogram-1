const app = getApp()

Page({
  data: {
    routers :[
      {
        text: '优甲乐',
        icon: '/icon/OIP-C.jpg',
        url: '/pages/youjiale/youjiale',
      },
      {
        text: '甲状腺片',
        icon: '/icon/甲状腺片.jpg',
        url: '/pages/jzxsp/jzxsp',
      },
      {
        text: '血清促甲状腺激素测定（TSH）',
        url: '/pages/TSH/TSH',
      },
      {
        text: '血清游离三碘甲状原氨酸测定（FT3）',
        url: '/pages/FT3/FT3',
      },
      {
        text: '血清游离甲状腺素测定（FT4）',
        url: '/pages/FT4/FT4',
      },
      {
        text: '抗甲状腺球蛋白抗体测定（TGAb）',
        url: '/pages/TGAb/TGAb',
      },
      {
        text: '抗甲状腺过氧化物酶抗体测定（A-TPO）',
        url: '/pages/ATPO/ATPO',
      },
      {
        text: '血清三碘甲状原氨酸测定（T3）',
        url: '/pages/T3/T3',
      },
      {
        text: '血清甲状腺素测定（T4）',
        url: '/pages/T4/T4',
      },
      {
        text: '降钙素测定',
        url: '/pages/JGS/JGS',
      },
      {
        text: '癌胚抗原测定（CEA）',
        url: '/pages/CEA/CEA',
      },
      {
        text: '术前甲状腺球蛋白测定（TG）',
        url: '/pages/TG/TG',
      },
      {
        text: '促甲状腺素受体抗体测定（TRAb）',
        url: '/pages/TRAb/TRAb',
      },
      {
        text: '甲状旁腺激素测定（PTH）',
        url: '/pages/PTH/PTH',
      },
      {
        text: '钙镁磷',
        url: '/pages/GML/GML',
      },
      {
        text: '25羟维生素D测定',
        url: '/pages/D/D',
      },
      {
        text: '血清骨型碱性磷酸酶质量测定（B-ALP）驰',
        url: '/pages/BALP/BALP',
      },
      {
        text: '骨钙素N端中分子片段测定（N-MID）',
        url: '/pages/NMID/NMID',
      },
      {
        text: 'β-胶原降解产物测定（β-CTX）',
        url: '/pages/βCTX/βCTX',
      },
      {
        text: '彩超引导下淋巴结细针穿刺活检（含淋巴结洗脱液）',
        url: '/pages/Lchuan/Lchuan',
      },
      {
        text: '术后甲状腺球蛋白（TG）测定',
        url: '/pages/TG2/TG2',
      },
      {
        text: 'ABO血型+Rh血型',
        url: '/pages/ABO/ABO',
      },
      {
        text: 'hTg淋巴结穿刺液',
        url: '/pages/HTG/HTG',
      },
      {
        text: 'hCT淋巴结穿刺液',
        url: '/pages/HCT/HCT',
      },
      {
        text: '彩超引导下甲状腺细针穿刺',
        url: '/pages/JZXchuan/JZXchuan',
      },
      {
        text: '输血前全套',
        url: '/pages/shuxue/shuxue',
      },
      {
        text: '红血细胞分类（五分类）',
        url: '/pages/xuexibao/xuexibao',
      },
      {
        text: '生化1',
        url: '/pages/shenghua1/shenghua1',
      },
      {
        text: '生化4',
        url: '/pages/shenghua4/shenghua4',
      },
      {
        text: '凝血常规（PT、INR、APPT、FIB、TT）',
        url: '/pages/ningxue/ningxue',
      },
      {
        text: '甲状腺及颈部淋巴结彩超',
        icon: '/icon/甲状腺超声.jpg',
        url: '/pages/jzxcc/jzxcc',
      },
      {
        text: '甲状腺彩超专科检查（甲状腺、甲状腺动脉、颈部淋巴结）',
        url: '/pages/jzxcczk/jzxcczk',
      },
      {
        text: 'CT颈部平扫+增强扫描',
        url: '/pages/CTjing/CTjing',
      },
      {
        text: 'CT胸部平扫+增强扫描',
        url: '/pages/CTxiong/CTxiong',
      },
      {
        text: '12导同步心电图检查',
        url: '/pages/xindiantu/xindiantu',
      },
      {
        text: 'DR胸部正侧位摄影',
        url: '/pages/DR/DR',
      },
      {
        text: '达己苏',
        url: '/pages/djs/djs',
      },
      {
        text: '喉镜动态检查',
        url: '/pages/houjing/houjing',
      },
      {
        text: '胸腔彩超（胸水定位）',
        url: '/pages/xiongshui/xiongshui',
      },
      {
        text: '普通超声心动图',
        url: '/pages/xindian/xindian',
      },
      {
        text: '全套肺功能检查',
        url: '/pages/feigongneng/feigongneng',
      },
      {
        text: '促肾上腺皮质激素（ACTH）',
        url: '/pages/ACTH/ACTH',
      },
      {
        text: '生长激素+类胰岛素样生长因子',
        url: '/pages/SZJS/SZJS',
      },
      {
        text: '甲状腺彩超声学造影',
        url: '/pages/CCZY/CCZY',
      },
      {
        text: 'SPECT甲状腺显像',
        url: '/pages/st/st',
      },
      {
        text: 'SPECT甲状旁腺融合显像',
        url: '/pages/spt/spt',
      },
      {
        text: '进食6小时后普食',
        url: '/pages/6hour/6hour',
      },
      {
        text: '血浆管引流护理',
        url: '/pages/xuejiang/xuejiang',
      },
      {
        text: '记录24小时引流量',
        url: '/pages/24yinliu/24yinliu',
      },
      {
        text: '雾化吸入',
        url: '/pages/wuhua/wuhua',
      },
      {
        text: '心电监护',
        url: '/pages/xindian1/xindian1',
      },
      {
        text: '持续氧气吸入（一天）',
        url: '/pages/xiyang/xiyang',
      },
      {
        text: '葡萄糖氯化钠注射液（500ml，5%）',
        url: '/pages/nacl/nacl',
      },
      {
        text: '葡萄糖注射液（5%100ml青山软袋）',
        url: '/pages/putaotang/putaotang',
      },
      {
        text: '葡萄糖酸钙注射液（10ml，1g）',
        url: '/pages/gai/gai',
      },
      {
        text: '氯化钠注射液（0.9%100ml）',
        url: '/pages/09nacl/09nacl',
      },
      {
        text: '地塞米松磷酸钠注射液（5mg/1ml）',
        url: '/pages/dsms/dsms',
      },
      {
        text: '富露施（3ml；0.3g）',
        url: '/pages/fulushi/fulushi',
      },
      {
        text: '甲钴胺片（0.5mgx90片）',
        url: '/pages/jga/jga',
      },
      {
        text: '雷替斯',
        url: '/pages/lts/lts',
      }
    ],
    imgUrls: [
      '/images/甲状腺图片.jpg',
      '/images/甲状腺1.webp',
      '/images/甲状腺2.webp',
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
