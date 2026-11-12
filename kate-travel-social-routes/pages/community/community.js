const { STORIES, EVENTS } = require('../../utils/data');

Page({
  data: {
    stories: STORIES,
    events: EVENTS,
    expanded: {},
    liked: {}
  },

  onShow() {
    const tab = this.getTabBar && this.getTabBar();
    if (tab) tab.setData({ selected: 2 });
  },

  onShareAppMessage() {
    return { title: '凯特旅行 · 旅友故事', path: '/pages/community/community' };
  },

  toggleExpand(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({ ['expanded.' + id]: !this.data.expanded[id] });
  },

  like(e) {
    const id = e.currentTarget.dataset.id;
    if (this.data.liked[id]) return;
    const stories = this.data.stories.map(s =>
      s.id === id ? Object.assign({}, s, { likes: s.likes + 1 }) : s
    );
    this.setData({ stories, ['liked.' + id]: true });
    wx.showToast({ title: '已点赞 ❤️', icon: 'none' });
  },

  joinEvent(e) {
    const ev = e.currentTarget.dataset.ev;
    wx.showModal({
      title: '预约活动',
      content: `「${ev.title}」名额有限，报名请添加 Kate 微信：${getApp().globalData.serviceWechat}`,
      confirmText: '复制微信号',
      success: (res) => {
        if (res.confirm) {
          wx.setClipboardData({ data: getApp().globalData.serviceWechat });
        }
      }
    });
  }
});
