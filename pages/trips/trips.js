const { COUNTRIES, STYLES } = require('../../utils/data');
const util = require('../../utils/util');

Page({
  data: {
    countries: COUNTRIES,
    styles: STYLES,
    country: 'all',
    style: 'all',
    list: [],
    total: 0
  },

  onLoad() {
    this.all = util.getTrips();
    this.applyFilter();
  },

  onShow() {
    const tab = this.getTabBar && this.getTabBar();
    if (tab) tab.setData({ selected: 1 });
    // 管理端可能改过状态，刷新
    this.all = util.getTrips();
    this.applyFilter();
  },

  pickCountry(e) {
    this.setData({ country: e.currentTarget.dataset.id }, () => this.applyFilter());
  },
  pickStyle(e) {
    this.setData({ style: e.currentTarget.dataset.id }, () => this.applyFilter());
  },

  applyFilter() {
    const { country, style } = this.data;
    const list = this.all.filter(t =>
      (country === 'all' || t.country === country) &&
      (style === 'all' || t.styles.indexOf(style) >= 0)
    );
    this.setData({ list, total: list.length });
  }
});
