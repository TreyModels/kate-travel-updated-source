const { STORIES, TRUST_ITEMS } = require('../../utils/data');
const util = require('../../utils/util');

Page({
  data: {
    slogan: '一个人出发，一群朋友回来。',
    subSlogan: '为中国女生设计的社交小团：一个人报名，一路认识新朋友',
    featured: [],
    stories: [],
    trustItems: TRUST_ITEMS,
    wechat: getApp().globalData.serviceWechat,
    steps: [
      { icon: '🙋‍♀️', title: '一个人报名', desc: '一个人也可以报名，和新朋友一起探索' },
      { icon: '👯‍♀️', title: '小团出发', desc: '小团结伴出发，破冰晚餐、三五人活动与自由时间相结合' },
      { icon: '💌', title: '带朋友回家', desc: '一起做饭、散步、拍照，把新朋友带回日常' }
    ]
  },

  onLoad() {
    const trips = util.getTrips();
    this.setData({
      featured: ['mekong-friends', 'vietnam-cambodia', 'thai-gulf', 'italy-classic', 'spain-andalusia', 'bali-ubud'].map(id => trips.find(t => t.id === id)).filter(Boolean),
      stories: STORIES.slice(0, 2)
    });
  },

  onShow() {
    const tab = this.getTabBar && this.getTabBar();
    if (tab) tab.setData({ selected: 0 });
  },

  onShareAppMessage() {
    return {
      title: '凯特旅行｜一个人出发，一群朋友回来',
      path: '/pages/home/home'
    };
  },

  goTrips() {
    wx.switchTab({ url: '/pages/trips/trips' });
  },
  goCommunity() {
    wx.switchTab({ url: '/pages/community/community' });
  },
  goAbout() {
    wx.navigateTo({ url: '/pages/about/about' });
  },
  goCustomize() {
    wx.navigateTo({ url: '/pages/customize/customize' });
  },
  copyWechat() {
    wx.setClipboardData({
      data: getApp().globalData.serviceWechat,
      success: () => wx.showToast({ title: '已复制客服微信', icon: 'none' })
    });
  }
});
