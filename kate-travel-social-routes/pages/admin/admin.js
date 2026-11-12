const { STORIES, EVENTS, STATUS_MAP } = require('../../utils/data');
const util = require('../../utils/util');
const store = require('../../utils/store');

const INQ_FLOW = ['pending', 'contacted', 'booked'];
const INQ_TEXT = { pending: '待联系', contacted: '已联系', booked: '已报名' };
const TRIP_FLOW = ['recruiting', 'confirmed', 'full', 'planning'];

Page({
  data: {
    tab: 'overview',
    stats: {},
    trips: [],
    inquiries: [],
    stories: STORIES,
    events: EVENTS,
    inqText: INQ_TEXT,
    statusText: {}
  },

  onLoad() {
    const statusText = {};
    Object.keys(STATUS_MAP).forEach(k => (statusText[k] = STATUS_MAP[k].text));
    this.setData({ statusText });
    this.refresh();
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const inquiries = store.getInquiries().map(i =>
      Object.assign({}, i, { createdText: util.formatDate(i.createdAt) })
    );
    const trips = util.getTrips();
    this.setData({
      trips,
      inquiries,
      stats: {
        tripCount: trips.length,
        recruiting: trips.filter(t => t.status === 'recruiting').length,
        inquiryCount: inquiries.length,
        pending: inquiries.filter(i => i.status === 'pending').length,
        booked: inquiries.filter(i => i.status === 'booked').length,
        storyCount: STORIES.length
      }
    });
  },

  switchTab(e) {
    this.setData({ tab: e.currentTarget.dataset.tab });
  },

  // 咨询状态流转：待联系 → 已联系 → 已报名
  advanceInquiry(e) {
    const { id, status } = e.currentTarget.dataset;
    const next = INQ_FLOW[(INQ_FLOW.indexOf(status) + 1) % INQ_FLOW.length];
    store.updateInquiryStatus(id, next);
    this.refresh();
    wx.showToast({ title: '已更新为「' + INQ_TEXT[next] + '」', icon: 'none' });
  },

  // 行程状态流转（演示管理员改团状态）
  cycleTripStatus(e) {
    const { id, status } = e.currentTarget.dataset;
    const next = TRIP_FLOW[(TRIP_FLOW.indexOf(status) + 1) % TRIP_FLOW.length];
    store.setTripStatus(id, next);
    this.refresh();
  },

  copyInquiryWechat(e) {
    wx.setClipboardData({ data: e.currentTarget.dataset.wechat });
  }
});
