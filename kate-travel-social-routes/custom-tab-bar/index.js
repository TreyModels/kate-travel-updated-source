Component({
  data: {
    selected: 0,
    list: [
      { path: '/pages/home/home', text: '首页', icon: 'home' },
      { path: '/pages/trips/trips', text: '探索行程', icon: 'compass' },
      { path: '/pages/community/community', text: '旅友故事', icon: 'heart' },
      { path: '/pages/mine/mine', text: '我的', icon: 'user' }
    ]
  },
  methods: {
    switchTab(e) {
      const { path, index } = e.currentTarget.dataset;
      if (index === this.data.selected) return;
      wx.switchTab({ url: path });
    }
  }
});
