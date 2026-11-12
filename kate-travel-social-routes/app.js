// 凯特旅行 Kate Travel — 一个人出发，一群朋友回来
App({
  globalData: {
    brand: '凯特旅行',
    slogan: '一个人出发，一群朋友回来。',
    serviceWechat: 'KateTravel-Kate'
  },
  onLaunch() {
    // 本地演示数据存储在 wx storage；正式环境应接入后端与持牌旅行社系统
    if (!wx.getStorageSync('inquiries')) {
      wx.setStorageSync('inquiries', []);
    }
    if (!wx.getStorageSync('tripStatusOverrides')) {
      wx.setStorageSync('tripStatusOverrides', {});
    }
  }
});
