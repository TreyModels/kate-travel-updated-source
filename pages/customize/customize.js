const { ADDONS } = require('../../utils/data');
const util = require('../../utils/util');

Page({
  data: {
    trip: null,
    addons: ADDONS,
    selected: []
  },

  onLoad(query) {
    if (query.tripId) {
      this.setData({ trip: util.getTripById(query.tripId) });
    }
  },

  toggle(e) {
    const id = e.currentTarget.dataset.id;
    const selected = this.data.selected.slice();
    const i = selected.indexOf(id);
    if (i >= 0) selected.splice(i, 1); else selected.push(id);
    this.setData({ selected });
  },

  goInquiry() {
    const names = this.data.selected
      .map(id => ADDONS.find(a => a.id === id).name)
      .join('、');
    const tripId = this.data.trip ? this.data.trip.id : '';
    wx.navigateTo({
      url: `/pages/inquiry/inquiry?tripId=${tripId}&date=${encodeURIComponent(names ? '意向升级：' + names : '')}`
    });
  }
});
