// 报名意向与本地状态存储（演示用；正式环境接入后端/CRM）
const KEY_INQUIRIES = 'inquiries';
const KEY_OVERRIDES = 'tripStatusOverrides';

function getInquiries() {
  return wx.getStorageSync(KEY_INQUIRIES) || [];
}

function addInquiry(inquiry) {
  const list = getInquiries();
  const item = Object.assign({}, inquiry, {
    id: 'inq_' + Date.now(),
    createdAt: Date.now(),
    status: 'pending' // pending 待联系 / contacted 已联系 / booked 已报名
  });
  list.unshift(item);
  wx.setStorageSync(KEY_INQUIRIES, list);
  return item;
}

function updateInquiryStatus(id, status) {
  const list = getInquiries().map(i => (i.id === id ? Object.assign({}, i, { status }) : i));
  wx.setStorageSync(KEY_INQUIRIES, list);
  return list;
}

function getTripStatusOverrides() {
  return wx.getStorageSync(KEY_OVERRIDES) || {};
}

function setTripStatus(tripId, status) {
  const map = getTripStatusOverrides();
  map[tripId] = status;
  wx.setStorageSync(KEY_OVERRIDES, map);
}

module.exports = {
  getInquiries,
  addInquiry,
  updateInquiryStatus,
  getTripStatusOverrides,
  setTripStatus
};
