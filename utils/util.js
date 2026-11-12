const { STATUS_MAP, TRIPS } = require('./data');
const store = require('./store');

// 应用管理员覆盖后的行程状态
function effectiveTrip(trip) {
  const overrides = store.getTripStatusOverrides();
  const status = overrides[trip.id] || trip.status;
  return Object.assign({}, trip, {
    status,
    statusText: STATUS_MAP[status].text,
    statusCls: STATUS_MAP[status].cls
  });
}

function getTrips() {
  return TRIPS.map(effectiveTrip);
}

function getTripById(id) {
  const t = TRIPS.find(t => t.id === id);
  return t ? effectiveTrip(t) : null;
}

function formatPrice(n) {
  return '¥' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatDate(ts) {
  const d = new Date(ts);
  const p = x => (x < 10 ? '0' + x : '' + x);
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

module.exports = { getTrips, getTripById, formatPrice, formatDate };
