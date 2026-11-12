Component({
  properties: {
    trip: { type: Object, value: {} }
  },
  methods: {
    goDetail() {
      wx.navigateTo({ url: '/pages/detail/detail?id=' + this.data.trip.id });
    }
  }
});
