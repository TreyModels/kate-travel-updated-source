const { STORIES, TRUST_ITEMS } = require('../../utils/data');
const util = require('../../utils/util');

Page({
  data: {
    slogan: '一个人出发，一群朋友回来。',
    subSlogan: '为 23-35 岁中国女生设计的小团社交旅行',
    featured: [],
    stories: [],
    trustItems: TRUST_ITEMS,
    wechat: getApp().globalData.serviceWechat,
    steps: [
      { icon: '🙋‍♀️', title: '一个人报名', desc: '一个人也可以报名，和新朋友一起探索' },
      { icon: '👯‍♀️', title: '小团出发', desc: '8-10 人同龄人小团，领队带你破冰熟络' },
      { icon: '💌', title: '带朋友回家', desc: '旅行结束，微信群不散，约定下一次同行' }
    ]
  },

  onLoad() {
    const trips = util.getTrips();
    this.setData({
      featured: ['dn-ha-6', 'bali-ubud', 'italy-classic', 'spain-andalusia'].map(id => trips.find(t => t.id === id)).filter(Boolean),
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
