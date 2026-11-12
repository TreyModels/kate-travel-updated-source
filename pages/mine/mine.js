const store = require('../../utils/store');
const util = require('../../utils/util');

const INQ_STATUS = {
  pending: { text: '待联系', cls: 'badge-planning' },
  contacted: { text: '顾问已联系', cls: 'badge-recruiting' },
  booked: { text: '已报名', cls: 'badge-confirmed' }
};

Page({
  data: {
    inquiries: [],
    inqStatus: INQ_STATUS,
    wechat: ''
  },

  onShow() {
    const tab = this.getTabBar && this.getTabBar();
    if (tab) tab.setData({ selected: 3 });
    const inquiries = store.getInquiries().map(i =>
      Object.assign({}, i, { createdText: util.formatDate(i.createdAt) })
    );
    this.setData({
      inquiries,
      wechat: getApp().globalData.serviceWechat
    });
  },

  goTrip(e) {
    const id = e.currentTarget.dataset.id;
    if (id) wx.navigateTo({ url: '/pages/detail/detail?id=' + id });
  },

  goAbout() {
    wx.navigateTo({ url: '/pages/about/about' });
  },

  goAdmin() {
    wx.navigateTo({ url: '/pages/admin/admin' });
  },

  copyWechat() {
    wx.setClipboardData({
      data: this.data.wechat,
      success: () => wx.showToast({ title: '已复制客服微信', icon: 'none' })
    });
  },

  showService() {
    wx.showModal({
      title: '联系客服',
      content: '微信搜索 ' + this.data.wechat + ' 添加 Kate，服务时间 10:00-22:00，紧急行程问题 24 小时响应。',
      confirmText: '复制微信号',
      success: (res) => {
        if (res.confirm) wx.setClipboardData({ data: this.data.wechat });
      }
    });
  }
});
