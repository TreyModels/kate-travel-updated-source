const util = require('../../utils/util');
const { STATUS_MAP } = require('../../utils/data');

Page({
  data: {
    trip: null,
    statusMap: STATUS_MAP
  },

  onLoad(query) {
    const trip = util.getTripById(query.id);
    if (!trip) {
      wx.showToast({ title: '行程不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 800);
      return;
    }
    wx.setNavigationBarTitle({ title: trip.countryName + ' · ' + trip.cities.join(' ') });
    this.setData({ trip });
  },

  onShareAppMessage() {
    const t = this.data.trip;
    return { title: `凯特旅行｜${t.title}`, path: '/pages/detail/detail?id=' + t.id };
  },

  goInquiry(e) {
    const date = e.currentTarget.dataset.date || '';
    wx.navigateTo({ url: `/pages/inquiry/inquiry?tripId=${this.data.trip.id}&date=${encodeURIComponent(date)}` });
  },

  goCustomize() {
    wx.navigateTo({ url: '/pages/customize/customize?tripId=' + this.data.trip.id });
  },

  copyWechat() {
    wx.setClipboardData({
      data: getApp().globalData.serviceWechat,
      success: () => wx.showToast({ title: '已复制客服微信', icon: 'none' })
    });
  }
});
