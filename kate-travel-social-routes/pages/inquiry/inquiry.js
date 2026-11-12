const util = require('../../utils/util');
const store = require('../../utils/store');

Page({
  data: {
    trip: null,
    date: '',
    form: { name: '', wechat: '', phone: '', city: '', people: 1, note: '' },
    peopleOptions: ['1 人', '2 人', '3 人', '4 人及以上'],
    peopleIndex: 0,
    submitted: false,
    serviceWechat: ''
  },

  onLoad(query) {
    const trip = util.getTripById(query.tripId);
    this.setData({
      trip,
      date: query.date ? decodeURIComponent(query.date) : '',
      serviceWechat: getApp().globalData.serviceWechat
    });
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({ ['form.' + field]: e.detail.value });
  },

  onPeopleChange(e) {
    this.setData({ peopleIndex: Number(e.detail.value) });
  },

  pickDate(e) {
    this.setData({ date: e.currentTarget.dataset.date });
  },

  submit() {
    const { form, trip, date, peopleIndex, peopleOptions } = this.data;
    if (!form.name.trim()) {
      wx.showToast({ title: '请填写称呼', icon: 'none' });
      return;
    }
    if (!form.wechat.trim()) {
      wx.showToast({ title: '请留下微信号', icon: 'none' });
      return;
    }
    store.addInquiry({
      tripId: trip ? trip.id : '',
      tripTitle: trip ? trip.title : '未指定行程',
      date: date || '时间待定',
      name: form.name.trim(),
      wechat: form.wechat.trim(),
      phone: form.phone.trim(),
      city: form.city.trim(),
      people: peopleOptions[peopleIndex],
      note: form.note.trim()
    });
    this.setData({ submitted: true });
  },

  copyWechat() {
    wx.setClipboardData({
      data: this.data.serviceWechat,
      success: () => wx.showToast({ title: '已复制微信号', icon: 'none' })
    });
  },

  goMine() {
    wx.switchTab({ url: '/pages/mine/mine' });
  }
});
