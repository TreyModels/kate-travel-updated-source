Page({
  data: {
    milestones: [
      { year: '2016', text: '第一次独自出国，在清迈的青旅认识了来自 5 个国家的女生' },
      { year: '2018', text: '背包走遍越南、柬埔寨、老挝，爱上东南亚的烟火气' },
      { year: '2021', text: 'gap year 旅居欧洲半年，受 WeRoad 启发，想做中国版的社交旅行' },
      { year: '2024', text: '辞职创业，开始设计第一条「岘港+会安」线路' },
      { year: '2026', text: '凯特旅行上线，第一批姐妹出发' }
    ],
    wechat: getApp().globalData.serviceWechat
  },
  copyWechat() {
    wx.setClipboardData({
      data: this.data.wechat,
      success: () => wx.showToast({ title: '已复制微信号', icon: 'none' })
    });
  }
});
