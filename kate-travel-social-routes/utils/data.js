// 凯特旅行 演示数据层
// 说明：当前为本地演示数据。正式环境的团期、余位、价格应以持牌合作旅行社的实时数据为准。

const COUNTRIES = [
  { id: 'all', name: '全部' },
  { id: 'mekong', name: '跨国路线' },
  { id: 'vietnam', name: '越南' },
  { id: 'cambodia', name: '柬埔寨' },
  { id: 'thailand', name: '泰国 · 预告' },
  { id: 'bali', name: '巴厘岛 · 预告' },
  { id: 'italy', name: '意大利' },
  { id: 'spain', name: '西班牙' }
];

const STYLES = [
  { id: 'all', name: '全部风格' },
  { id: 'island', name: '海岛度假' },
  { id: 'culture', name: '人文探索' },
  { id: 'food', name: '美食之旅' },
  { id: 'photo', name: '旅拍出片' }
];

const STATUS_MAP = {
  recruiting: { text: '招募中', cls: 'badge-recruiting' },
  confirmed: { text: '已成团', cls: 'badge-confirmed' },
  full: { text: '已满员', cls: 'badge-full' },
  planning: { text: '规划中', cls: 'badge-planning' }
};

const TRIPS = [
  {
    id: 'dn-ha-6',
    title: '岘港 · 会安古城慢旅行',
    country: 'vietnam',
    countryName: '越南',
    cities: ['岘港', '会安'],
    days: 6,
    nights: 5,
    price: 4699,
    priceNote: '不含国际往返机票',
    groupSize: '8-10 人小团',
    ageRange: '23-35 岁女生',
    status: 'recruiting',
    styles: ['island', 'culture', 'photo'],
    coverTheme: 'sea',
    coverEmoji: '🌊',
    tagline: '半山半海之间，把日子过成电影',
    highlights: ['美溪海滩日出', '会安古城灯笼夜', '巴拿山金桥', '迦南岛簸箕船'],
    departures: [
      { date: '2026-12-05', status: 'recruiting', left: 6 },
      { date: '2026-12-19', status: 'confirmed', left: 2 },
      { date: '2027-01-09', status: 'recruiting', left: 8 }
    ],
    itinerary: [
      { day: 1, title: '抵达岘港 · 欢迎晚宴', desc: '各地飞抵岘港，专车接机入住海边精品酒店。晚上在海景餐厅举办欢迎晚宴，破冰游戏认识彼此。', meals: '晚餐', hotel: '岘港海边精品酒店' },
      { day: 2, title: '美溪海滩 · 山茶半岛', desc: '清晨美溪海滩散步看日出，上午山茶半岛灵应寺俯瞰海岸线，下午自由活动或咖啡馆发呆。', meals: '早餐', hotel: '岘港海边精品酒店' },
      { day: 3, title: '巴拿山 · 金桥', desc: '搭乘世界最长缆车之一登巴拿山，漫步网红金桥与法国村，傍晚返回市区自由觅食。', meals: '早餐', hotel: '岘港海边精品酒店' },
      { day: 4, title: '会安古城 · 灯笼之夜', desc: '前往世界文化遗产会安古城，白天逛老街、定制奥黛，入夜灯笼亮起，放一盏河灯许愿。', meals: '早餐/晚餐', hotel: '会安古镇特色民宿' },
      { day: 5, title: '迦南岛 · 簸箕船体验', desc: '乘簸箕船穿梭水椰林，学做越南春卷，下午沙滩躺平或 optional 旅拍，晚上姐妹谈心局。', meals: '早餐/午餐', hotel: '会安古镇特色民宿' },
      { day: 6, title: '告别 · 送机', desc: '睡到自然醒，领队根据航班安排送机。群里相约下一站。', meals: '早餐', hotel: '—' }
    ],
    hotels: [
      { name: '岘港海边精品酒店', desc: '步行 3 分钟到美溪海滩，顶楼无边泳池，含双早' },
      { name: '会安古镇特色民宿', desc: '古城核心地段法式小楼，露台可看灯笼街景' }
    ],
    includes: ['5 晚精品住宿（双人标间）', '行程内所列餐食', '全程专车与接送机', '所列景点门票与体验', '中文领队全程陪同', '境外旅游保险'],
    excludes: ['国际往返机票', '越南签证费用', '个人消费与自选升级项目', '单房差'],
    upgrades: [
      { id: 'room', name: '单房升级', price: 1200, desc: '全程独立大床房' },
      { id: 'photo', name: '专业旅拍', price: 899, desc: '半天跟拍，精修 30 张' },
      { id: 'spa', name: '越式 SPA', price: 399, desc: '90 分钟热石按摩' }
    ],
    host: { name: 'Kate', initial: 'K', bio: '品牌主理人，走过 20+ 国的旅行策划人' }
  },
  {
    id: 'pq-7',
    title: '富国岛 · 海岛躺平计划',
    country: 'vietnam',
    countryName: '越南',
    cities: ['富国岛'],
    days: 7,
    nights: 6,
    price: 5299,
    priceNote: '不含国际往返机票',
    groupSize: '8-10 人小团',
    ageRange: '23-35 岁女生',
    status: 'recruiting',
    styles: ['island', 'photo'],
    coverTheme: 'sunset',
    coverEmoji: '🌅',
    tagline: '免签海岛，把时间浪费在美好的事上',
    highlights: ['星星沙滩', '跳岛浮潜', '日落小镇', '跨海缆车'],
    departures: [
      { date: '2026-12-12', status: 'recruiting', left: 7 },
      { date: '2027-01-16', status: 'recruiting', left: 9 }
    ],
    itinerary: [
      { day: 1, title: '抵达富国岛', desc: '免签入境，接机入住度假村。泳池边欢迎饮品会，认识未来一周的姐妹。', meals: '晚餐', hotel: '海边度假酒店' },
      { day: 2, title: '星星沙滩 · 日落小镇', desc: '上午星星沙滩拍照玩水，傍晚去日落小镇看粉紫色晚霞，夜市海鲜大餐。', meals: '早餐/晚餐', hotel: '海边度假酒店' },
      { day: 3, title: '跳岛浮潜一日游', desc: '快艇出海跳岛，浮潜看珊瑚，海上午餐，下午海钓体验。', meals: '早餐/午餐', hotel: '海边度假酒店' },
      { day: 4, title: '自由日 · 度假村时光', desc: '睡到自然醒，泡泳池、做 SPA（可选升级），或结伴去珍珠乐园。', meals: '早餐', hotel: '海边度假酒店' },
      { day: 5, title: '跨海缆车 · 香岛', desc: '乘坐世界最长跨海缆车前往香岛，水上乐园与水屋沙滩自由玩。', meals: '早餐', hotel: '海边度假酒店' },
      { day: 6, title: '沙滩早午餐 · 告别晚宴', desc: '慵懒沙滩早午餐，下午自由活动，晚上沙滩烛光告别晚宴，交换联系方式。', meals: '早餐/晚餐', hotel: '海边度假酒店' },
      { day: 7, title: '送机返程', desc: '根据航班安排送机，带着一手机美照和一群新朋友回家。', meals: '早餐', hotel: '—' }
    ],
    hotels: [
      { name: '海边度假酒店', desc: '私人沙滩、无边泳池、海景阳台，含双早' }
    ],
    includes: ['6 晚度假酒店（双人标间）', '行程内所列餐食', '全程用车与接送机', '跳岛一日游与缆车门票', '中文领队全程陪同', '境外旅游保险'],
    excludes: ['国际往返机票', '个人消费与自选升级项目', '单房差'],
    upgrades: [
      { id: 'room', name: '单房升级', price: 1500, desc: '全程海景大床房' },
      { id: 'photo', name: '专业旅拍', price: 899, desc: '沙滩半天跟拍，精修 30 张' },
      { id: 'spa', name: '海景 SPA', price: 459, desc: '90 分钟精油按摩' },
      { id: 'boat', name: '私人游艇日落巡航', price: 599, desc: '2 小时包船香槟巡航' }
    ],
    host: { name: 'Kate', initial: 'K', bio: '品牌主理人，走过 20+ 国的旅行策划人' }
  },
  {
    id: 'sr-6',
    title: '暹粒 · 吴哥窟人文之旅',
    country: 'cambodia',
    countryName: '柬埔寨',
    cities: ['暹粒'],
    days: 6,
    nights: 5,
    price: 4999,
    priceNote: '不含国际往返机票',
    groupSize: '8-10 人小团',
    ageRange: '23-35 岁女生',
    status: 'confirmed',
    styles: ['culture', 'photo'],
    coverTheme: 'temple',
    coverEmoji: '🛕',
    tagline: '在千年微笑里，遇见更从容的自己',
    highlights: ['吴哥窟日出', '巴戎寺高棉微笑', '洞里萨湖日落', '丛林树屋晚餐'],
    departures: [
      { date: '2026-12-03', status: 'confirmed', left: 3 },
      { date: '2026-12-27', status: 'recruiting', left: 8 }
    ],
    itinerary: [
      { day: 1, title: '抵达暹粒 · 欢迎晚宴', desc: '接机入住泳池度假酒店，晚上高棉风味欢迎晚宴，领队讲解安全须知与行程。', meals: '晚餐', hotel: '暹粒泳池度假酒店' },
      { day: 2, title: '吴哥窟日出 · 小圈精华', desc: '清晨进入吴哥窟看日出，随后游览巴戎寺、巴方寺、战象台阶，傍晚巴肯山日落。', meals: '早餐/午餐', hotel: '暹粒泳池度假酒店' },
      { day: 3, title: '大圈探秘 · 塔布隆寺', desc: '探访《古墓丽影》取景地塔布隆寺，圣剑寺、龙蟠水池，晚上老市场自由活动。', meals: '早餐/午餐', hotel: '暹粒泳池度假酒店' },
      { day: 4, title: '女王宫 · 洞里萨湖', desc: '上午“吴哥艺术之钻”女王宫，下午洞里萨湖水上人家，船上看日落。', meals: '早餐/晚餐', hotel: '暹粒泳池度假酒店' },
      { day: 5, title: '自由日 · 可选体验', desc: '睡到自然醒，可选烹饪课、SPA 或旅拍（升级项），晚上丛林树屋告别晚宴。', meals: '早餐/晚餐', hotel: '暹粒泳池度假酒店' },
      { day: 6, title: '送机返程', desc: '根据航班送机，吴哥的故事留到群里继续讲。', meals: '早餐', hotel: '—' }
    ],
    hotels: [
      { name: '暹粒泳池度假酒店', desc: '闹中取静的法式殖民风酒店，盐水泳池，含双早' }
    ],
    includes: ['5 晚度假酒店（双人标间）', '行程内所列餐食', '全程专车与接送机', '吴哥三日通票及所列门票', '中文领队与当地持证向导', '境外旅游保险'],
    excludes: ['国际往返机票', '柬埔寨签证费用', '个人消费与自选升级项目', '单房差'],
    upgrades: [
      { id: 'room', name: '单房升级', price: 1100, desc: '全程独立大床房' },
      { id: 'photo', name: '吴哥旅拍', price: 999, desc: '吴哥窟半天跟拍，精修 30 张' },
      { id: 'food', name: '高棉烹饪课', price: 299, desc: '学做 3 道经典高棉菜' },
      { id: 'spa', name: '柬式 SPA', price: 359, desc: '90 分钟古法按摩' }
    ],
    host: { name: 'Kate', initial: 'K', bio: '品牌主理人，走过 20+ 国的旅行策划人' }
  },
  {
    id: 'pp-kp-7',
    title: '金边 · 贡布慢调柬埔寨',
    country: 'cambodia',
    countryName: '柬埔寨',
    cities: ['金边', '贡布'],
    days: 7,
    nights: 6,
    price: 5399,
    priceNote: '不含国际往返机票',
    groupSize: '8-10 人小团',
    ageRange: '23-35 岁女生',
    status: 'recruiting',
    styles: ['culture', 'food'],
    coverTheme: 'river',
    coverEmoji: '🛶',
    tagline: '从首都烟火到河畔山城，看见真实的柬埔寨',
    highlights: ['金边皇宫', '中央市场美食', '贡布胡椒庄园', '波哥山法式遗迹'],
    departures: [
      { date: '2027-01-06', status: 'recruiting', left: 9 }
    ],
    itinerary: [
      { day: 1, title: '抵达金边', desc: '接机入住河畔精品酒店，晚上湄公河边欢迎晚宴。', meals: '晚餐', hotel: '金边河畔精品酒店' },
      { day: 2, title: '金边皇城一日', desc: '大皇宫、银塔、国家博物馆，下午中央市场淘宝，傍晚湄公河游船看日落。', meals: '早餐/午餐', hotel: '金边河畔精品酒店' },
      { day: 3, title: '金边 → 贡布', desc: '专车南下贡布，途经乡村风光，入住河边殖民风民宿，河畔晚餐。', meals: '早餐/晚餐', hotel: '贡布河畔民宿' },
      { day: 4, title: '胡椒庄园 · 榴莲农场', desc: '探访世界闻名的贡布胡椒庄园，学做胡椒料理，下午农场采摘（应季）。', meals: '早餐/午餐', hotel: '贡布河畔民宿' },
      { day: 5, title: '波哥山 · 法式遗迹', desc: '登波哥山国家公园，看废弃法式赌场与教堂，云海日落。', meals: '早餐/晚餐', hotel: '贡布河畔民宿' },
      { day: 6, title: '贡布 → 金边', desc: '睡到自然醒，返程金边，晚上告别晚宴与旅行分享会。', meals: '早餐/晚餐', hotel: '金边河畔精品酒店' },
      { day: 7, title: '送机返程', desc: '根据航班送机。', meals: '早餐', hotel: '—' }
    ],
    hotels: [
      { name: '金边河畔精品酒店', desc: '湄公河畔，屋顶酒吧看河景，含双早' },
      { name: '贡布河畔民宿', desc: '法式殖民老宅改造，吊床与河景露台' }
    ],
    includes: ['6 晚精品住宿（双人标间）', '行程内所列餐食', '全程专车与接送机', '所列门票与庄园体验', '中文领队与当地持证向导', '境外旅游保险'],
    excludes: ['国际往返机票', '柬埔寨签证费用', '个人消费与自选升级项目', '单房差'],
    upgrades: [
      { id: 'room', name: '单房升级', price: 1300, desc: '全程独立大床房' },
      { id: 'food', name: '高棉美食探店团', price: 399, desc: '本地人带路 8 家小吃' }
    ],
    host: { name: '在地领队合作中', initial: '柬', bio: '由 Kate 与柬埔寨持证地接团队联合带队' }
  },
  {
    id: 'hcm-dn-8',
    title: '南越双城 · 胡志明+岘港',
    country: 'vietnam',
    countryName: '越南',
    cities: ['胡志明市', '岘港'],
    days: 8,
    nights: 7,
    price: 5999,
    priceNote: '不含国际往返机票',
    groupSize: '8-10 人小团',
    ageRange: '23-35 岁女生',
    status: 'full',
    styles: ['culture', 'food', 'island'],
    coverTheme: 'city',
    coverEmoji: '🏙️',
    tagline: '法式风情与海岸慢生活，一次收齐',
    highlights: ['西贡邮局', '咖啡公寓', '湄公河三角洲', '会安灯笼'],
    departures: [
      { date: '2026-11-28', status: 'full', left: 0 },
      { date: '2027-02-13', status: 'recruiting', left: 10 }
    ],
    itinerary: [
      { day: 1, title: '抵达胡志明市', desc: '接机入住第一郡精品酒店，晚上范五老街附近欢迎晚宴。', meals: '晚餐', hotel: '胡志明精品酒店' },
      { day: 2, title: '西贡经典一日', desc: '中央邮局、圣母教堂、统一宫，下午咖啡公寓打卡，晚上法式晚餐。', meals: '早餐/晚餐', hotel: '胡志明精品酒店' },
      { day: 3, title: '湄公河三角洲', desc: '一日船游湄公河，椰子糖作坊、水上人家、果园午餐。', meals: '早餐/午餐', hotel: '胡志明精品酒店' },
      { day: 4, title: '飞岘港 · 海边时光', desc: '内陆航班前往岘港，下午美溪海滩自由活动，海边晚餐。', meals: '早餐/晚餐', hotel: '岘港海边精品酒店' },
      { day: 5, title: '巴拿山金桥', desc: '缆车登巴拿山，金桥与法国村一日。', meals: '早餐', hotel: '岘港海边精品酒店' },
      { day: 6, title: '会安古城', desc: '古城漫游，定制奥黛体验，灯笼夜景。', meals: '早餐/晚餐', hotel: '会安古镇特色民宿' },
      { day: 7, title: '自由日 · 可选旅拍', desc: '沙滩、SPA 或旅拍（升级项），晚上告别晚宴。', meals: '早餐/晚餐', hotel: '会安古镇特色民宿' },
      { day: 8, title: '送机返程', desc: '根据航班送机。', meals: '早餐', hotel: '—' }
    ],
    hotels: [
      { name: '胡志明精品酒店', desc: '第一郡核心位置，步行到主要景点' },
      { name: '岘港海边精品酒店', desc: '美溪海滩旁，顶楼泳池' },
      { name: '会安古镇特色民宿', desc: '古城内法式小楼' }
    ],
    includes: ['7 晚精品住宿（双人标间）', '行程内所列餐食', '内陆段机票（胡志明-岘港）', '全程用车与接送机', '所列门票与体验', '中文领队全程陪同', '境外旅游保险'],
    excludes: ['国际往返机票', '越南签证费用', '个人消费与自选升级项目', '单房差'],
    upgrades: [
      { id: 'room', name: '单房升级', price: 1800, desc: '全程独立大床房' },
      { id: 'photo', name: '双城旅拍', price: 1299, desc: '两次半天跟拍，精修 50 张' },
      { id: 'night', name: '西贡夜生活体验', price: 299, desc: '天台酒吧+livehouse 一晚' }
    ],
    host: { name: 'Kate', initial: 'K', bio: '品牌主理人，走过 20+ 国的旅行策划人' }
  },
  {
    id: 'cm-th-6',
    title: '清迈 · 泰北玫瑰预告',
    country: 'thailand',
    countryName: '泰国',
    cities: ['清迈'],
    days: 6,
    nights: 5,
    price: 4499,
    priceNote: '不含国际往返机票',
    groupSize: '8-10 人小团',
    ageRange: '23-35 岁女生',
    status: 'planning',
    styles: ['culture', 'food', 'photo'],
    coverTheme: 'forest',
    coverEmoji: '🌿',
    tagline: '古城、夜市与咖啡馆，正在筹备中',
    highlights: ['古城寺庙', '周末夜市', '大象保护营', '咖啡馆巡礼'],
    departures: [
      { date: '待定（2027 春季）', status: 'planning', left: 10 }
    ],
    itinerary: [
      { day: 1, title: '行程筹备中', desc: '我们正在打磨清迈线路的细节，预约咨询可优先获得成团通知与早鸟价。', meals: '—', hotel: '—' }
    ],
    hotels: [
      { name: '筹备中', desc: '正在甄选古城内精品住宿' }
    ],
    includes: ['行程筹备中，权益以最终发布为准'],
    excludes: ['国际往返机票'],
    upgrades: [],
    host: { name: 'Kate', initial: 'K', bio: '品牌主理人，走过 20+ 国的旅行策划人' }
  },
{
  "id": "italy-classic",
  "title": "意大利 · 罗马到佛罗伦萨",
  "country": "italy",
  "countryName": "意大利",
  "cities": [
    "罗马",
    "佛罗伦萨"
  ],
  "days": 8,
  "nights": 7,
  "price": null,
  "priceNote": "价格与团期待确认",
  "groupSize": "小团人数待定",
  "ageRange": "同行伙伴",
  "status": "planning",
  "styles": [
    "culture",
    "photo"
  ],
  "coverTheme": "sunset",
  "coverEmoji": "🍋",
  "tagline": "古城、艺术与托斯卡纳的慢时光",
  "highlights": [
    "罗马古迹",
    "佛罗伦萨艺术",
    "托斯卡纳小镇",
    "意式美食"
  ],
  "departures": [
    {
      "date": "团期待定",
      "status": "planning",
      "left": 0
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "抵达罗马",
      "desc": "自由抵达并入住；傍晚相聚，认识同行伙伴。",
      "meals": "待确认",
      "hotel": "罗马"
    },
    {
      "day": 2,
      "title": "古罗马与街巷",
      "desc": "外观斗兽场及古罗马广场，下午漫步历史中心；具体入内项目视预约而定。",
      "meals": "待确认",
      "hotel": "罗马"
    },
    {
      "day": 3,
      "title": "梵蒂冈与自由时光",
      "desc": "可预约梵蒂冈博物馆；下午留给咖啡馆、博物馆或自由探索。",
      "meals": "待确认",
      "hotel": "罗马"
    },
    {
      "day": 4,
      "title": "罗马 → 佛罗伦萨",
      "desc": "乘火车北上，入住后步行探索老桥与市中心。",
      "meals": "待确认",
      "hotel": "佛罗伦萨"
    },
    {
      "day": 5,
      "title": "佛罗伦萨艺术日",
      "desc": "安排一处美术馆或博物馆，三五人结伴逛街拍照，傍晚欣赏城市景色。",
      "meals": "待确认",
      "hotel": "佛罗伦萨"
    },
    {
      "day": 6,
      "title": "托斯卡纳乡间",
      "desc": "包车或当地交通探访锡耶纳及附近小镇，具体路线依交通与季节确认。",
      "meals": "待确认",
      "hotel": "佛罗伦萨"
    },
    {
      "day": 7,
      "title": "自由探索与告别晚餐",
      "desc": "三五人自由选择意面课、手作或购物；晚上共进告别晚餐。",
      "meals": "待确认",
      "hotel": "佛罗伦萨"
    },
    {
      "day": 8,
      "title": "返程",
      "desc": "早餐后按各自航班或火车时间返程。",
      "meals": "待确认",
      "hotel": "—"
    }
  ],
  "hotels": [
    {
      "name": "住宿待确认",
      "desc": "住宿标准与具体酒店将在行程确认后公布。"
    }
  ],
  "includes": [
    "具体包含项目、交通与餐食待确认"
  ],
  "excludes": [
    "费用范围待确认"
  ],
  "upgrades": [],
  "host": {
    "name": "Kate",
    "initial": "K",
    "bio": "行程策划与同行体验"
  }
},
{
  "id": "spain-andalusia",
  "title": "西班牙 · 安达卢西亚阳光之旅",
  "country": "spain",
  "countryName": "西班牙",
  "cities": [
    "塞维利亚",
    "格拉纳达",
    "马拉加"
  ],
  "days": 8,
  "nights": 7,
  "price": null,
  "priceNote": "价格与团期待确认",
  "groupSize": "小团人数待定",
  "ageRange": "同行伙伴",
  "status": "planning",
  "styles": [
    "culture",
    "photo"
  ],
  "coverTheme": "sunset",
  "coverEmoji": "☀️",
  "tagline": "白色小镇、弗拉门戈与地中海",
  "highlights": [
    "塞维利亚老城",
    "弗拉门戈",
    "阿尔罕布拉宫",
    "地中海海岸"
  ],
  "departures": [
    {
      "date": "团期待定",
      "status": "planning",
      "left": 0
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "抵达塞维利亚",
      "desc": "入住后在老城集合，轻松欢迎晚餐。",
      "meals": "待确认",
      "hotel": "塞维利亚"
    },
    {
      "day": 2,
      "title": "塞维利亚老城",
      "desc": "漫步西班牙广场与圣十字区；晚间可欣赏弗拉门戈。",
      "meals": "待确认",
      "hotel": "塞维利亚"
    },
    {
      "day": 3,
      "title": "科尔多瓦一日往返",
      "desc": "乘火车前往科尔多瓦，参观清真寺大教堂和老城，再返回塞维利亚。",
      "meals": "待确认",
      "hotel": "塞维利亚"
    },
    {
      "day": 4,
      "title": "塞维利亚 → 格拉纳达",
      "desc": "前往格拉纳达，下午探索阿尔拜辛街区与观景台。",
      "meals": "待确认",
      "hotel": "格拉纳达"
    },
    {
      "day": 5,
      "title": "阿尔罕布拉宫",
      "desc": "预留半日参观，门票需提前预约；其余时间自由安排。",
      "meals": "待确认",
      "hotel": "格拉纳达"
    },
    {
      "day": 6,
      "title": "格拉纳达 → 马拉加",
      "desc": "前往海滨城市马拉加，傍晚沿海散步。",
      "meals": "待确认",
      "hotel": "马拉加"
    },
    {
      "day": 7,
      "title": "地中海慢生活",
      "desc": "探索老城和市场，或自由选择海边活动；共进告别晚餐。",
      "meals": "待确认",
      "hotel": "马拉加"
    },
    {
      "day": 8,
      "title": "返程",
      "desc": "根据航班安排离开马拉加。",
      "meals": "待确认",
      "hotel": "—"
    }
  ],
  "hotels": [
    {
      "name": "住宿待确认",
      "desc": "住宿标准与具体酒店将在行程确认后公布。"
    }
  ],
  "includes": [
    "具体包含项目、交通与餐食待确认"
  ],
  "excludes": [
    "费用范围待确认"
  ],
  "upgrades": [],
  "host": {
    "name": "Kate",
    "initial": "K",
    "bio": "行程策划与同行体验"
  }
},
{
  "id": "bali-ubud",
  "title": "巴厘岛 · 乌布与海边慢生活",
  "country": "bali",
  "countryName": "印度尼西亚",
  "cities": [
    "乌布",
    "沙努尔"
  ],
  "days": 7,
  "nights": 6,
  "price": null,
  "priceNote": "价格与团期待确认",
  "groupSize": "小团人数待定",
  "ageRange": "同行伙伴",
  "status": "planning",
  "styles": [
    "island",
    "photo"
  ],
  "coverTheme": "sea",
  "coverEmoji": "🌴",
  "tagline": "稻田、手作与海风中的自由时间",
  "highlights": [
    "乌布稻田",
    "巴厘岛手作",
    "海边日落",
    "自由探索"
  ],
  "departures": [
    {
      "date": "团期待定",
      "status": "planning",
      "left": 0
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "抵达巴厘岛",
      "desc": "接机安排待确认，入住乌布后轻松集合。",
      "meals": "待确认",
      "hotel": "乌布"
    },
    {
      "day": 2,
      "title": "乌布与稻田",
      "desc": "逛当地市场、稻田步道，下午自由休息。",
      "meals": "待确认",
      "hotel": "乌布"
    },
    {
      "day": 3,
      "title": "文化与手作",
      "desc": "体验当地烹饪或手工课程，尊重寺庙着装习俗。",
      "meals": "待确认",
      "hotel": "乌布"
    },
    {
      "day": 4,
      "title": "乌布 → 沙努尔",
      "desc": "前往海边入住，下午留给泳池或海滨散步。",
      "meals": "待确认",
      "hotel": "沙努尔"
    },
    {
      "day": 5,
      "title": "海岛自由日",
      "desc": "可自愿参加海边瑜伽、手作或水上活动；出海视天气与安全条件安排。",
      "meals": "待确认",
      "hotel": "沙努尔"
    },
    {
      "day": 6,
      "title": "海边慢生活",
      "desc": "自由探索咖啡馆与海滩，晚上告别晚餐。",
      "meals": "待确认",
      "hotel": "沙努尔"
    },
    {
      "day": 7,
      "title": "返程",
      "desc": "预留交通时间前往机场，依航班返程。",
      "meals": "待确认",
      "hotel": "—"
    }
  ],
  "hotels": [
    {
      "name": "住宿待确认",
      "desc": "住宿标准与具体酒店将在行程确认后公布。"
    }
  ],
  "includes": [
    "具体包含项目、交通与餐食待确认"
  ],
  "excludes": [
    "费用范围待确认"
  ],
  "upgrades": [],
  "host": {
    "name": "Kate",
    "initial": "K",
    "bio": "行程策划与同行体验"
  }
},
{
  "id": "thailand-chiangmai",
  "title": "清迈 · 古城与山间慢旅行",
  "country": "thailand",
  "countryName": "泰国",
  "cities": [
    "清迈"
  ],
  "days": 6,
  "nights": 5,
  "price": null,
  "priceNote": "价格与团期待确认",
  "groupSize": "小团人数待定",
  "ageRange": "同行伙伴",
  "status": "planning",
  "styles": [
    "food",
    "photo"
  ],
  "coverTheme": "forest",
  "coverEmoji": "🌿",
  "tagline": "在古城、山景和咖啡香里认识新朋友",
  "highlights": [
    "古城寺庙",
    "泰北美食",
    "山景咖啡",
    "手作体验"
  ],
  "departures": [
    {
      "date": "团期待定",
      "status": "planning",
      "left": 0
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "抵达清迈",
      "desc": "入住古城附近，晚上欢迎晚餐。",
      "meals": "待确认",
      "hotel": "清迈"
    },
    {
      "day": 2,
      "title": "古城与泰北味道",
      "desc": "步行探索古城寺庙，品尝泰北料理；下午自由活动。",
      "meals": "待确认",
      "hotel": "清迈"
    },
    {
      "day": 3,
      "title": "山间一日",
      "desc": "前往素贴山和周边，天气及交通适合时安排山景咖啡。",
      "meals": "待确认",
      "hotel": "清迈"
    },
    {
      "day": 4,
      "title": "做一顿泰餐",
      "desc": "参加烹饪或手作课程，下午自由探索。",
      "meals": "待确认",
      "hotel": "清迈"
    },
    {
      "day": 5,
      "title": "自由日与夜市",
      "desc": "自由选择按摩、咖啡馆或休息；按开放日期安排夜市。",
      "meals": "待确认",
      "hotel": "清迈"
    },
    {
      "day": 6,
      "title": "返程",
      "desc": "根据航班时间送机安排待确认。",
      "meals": "待确认",
      "hotel": "—"
    }
  ],
  "hotels": [
    {
      "name": "住宿待确认",
      "desc": "住宿标准与具体酒店将在行程确认后公布。"
    }
  ],
  "includes": [
    "具体包含项目、交通与餐食待确认"
  ],
  "excludes": [
    "费用范围待确认"
  ],
  "upgrades": [],
  "host": {
    "name": "Kate",
    "initial": "K",
    "bio": "行程策划与同行体验"
  }
},
{
  "id": "mekong-friends",
  "title": "泰老慢游 · 火车与湄公河",
  "country": "mekong",
  "countryName": "泰国 · 老挝",
  "cities": [
    "曼谷",
    "清迈",
    "清莱",
    "琅勃拉邦",
    "万象"
  ],
  "days": 14,
  "nights": 13,
  "price": null,
  "priceNote": "价格与团期待确认",
  "groupSize": "建议 8–10 人",
  "ageRange": "女生社交小团",
  "status": "planning",
  "styles": [
    "culture",
    "photo"
  ],
  "coverTheme": "sea",
  "coverEmoji": "🚂",
  "tagline": "一个人出发，和新朋友一起探索",
  "highlights": [
    "夜火车",
    "湄公河慢船",
    "琅勃拉邦",
    "旅友破冰"
  ],
  "departures": [
    {
      "date": "团期待定",
      "status": "planning",
      "left": 0
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "曼谷集合",
      "desc": "酒店集合，欢迎晚餐和轻松破冰。",
      "meals": "待确认",
      "hotel": "曼谷"
    },
    {
      "day": 2,
      "title": "曼谷探索",
      "desc": "分组逛市场、品尝小吃；傍晚乘夜火车前往清迈，车票与铺位待确认。",
      "meals": "待确认",
      "hotel": "夜火车"
    },
    {
      "day": 3,
      "title": "抵达清迈",
      "desc": "慢节奏入住、咖啡馆与古城散步，给夜车后留休息时间。",
      "meals": "待确认",
      "hotel": "清迈"
    },
    {
      "day": 4,
      "title": "清迈相伴",
      "desc": "三五人一起参加泰餐课或手作，晚上逛夜市。",
      "meals": "待确认",
      "hotel": "清迈"
    },
    {
      "day": 5,
      "title": "清迈 → 清莱",
      "desc": "前往清莱，参观寺庙并留自由时间。",
      "meals": "待确认",
      "hotel": "清莱"
    },
    {
      "day": 6,
      "title": "清莱 → 清孔 → 会晒",
      "desc": "前往清孔经友谊桥办理出入境，抵达老挝会晒；边境及签证手续出发前核实。",
      "meals": "待确认",
      "hotel": "会晒"
    },
    {
      "day": 7,
      "title": "湄公河慢船第一天",
      "desc": "从会晒乘船至巴奔；船期、船只与水位需确认。",
      "meals": "待确认",
      "hotel": "巴奔"
    },
    {
      "day": 8,
      "title": "湄公河慢船第二天",
      "desc": "继续下行至琅勃拉邦，晚上自由休息。",
      "meals": "待确认",
      "hotel": "琅勃拉邦"
    },
    {
      "day": 9,
      "title": "琅勃拉邦老城",
      "desc": "探索古城和夜市，安排小组咖啡时光。",
      "meals": "待确认",
      "hotel": "琅勃拉邦"
    },
    {
      "day": 10,
      "title": "瀑布与慢生活",
      "desc": "前往光西瀑布，活动视天气开放情况调整。",
      "meals": "待确认",
      "hotel": "琅勃拉邦"
    },
    {
      "day": 11,
      "title": "自由探索",
      "desc": "可选瑜伽、手作或休息，大家一起分享旅途照片。",
      "meals": "待确认",
      "hotel": "琅勃拉邦"
    },
    {
      "day": 12,
      "title": "前往万象",
      "desc": "乘老中铁路赴万象，列车及车票视实际确认。",
      "meals": "待确认",
      "hotel": "万象"
    },
    {
      "day": 13,
      "title": "万象与告别",
      "desc": "漫步河滨、品尝当地美食，举办告别晚餐。",
      "meals": "待确认",
      "hotel": "万象"
    },
    {
      "day": 14,
      "title": "万象返程",
      "desc": "按航班时间前往机场，各自返程。",
      "meals": "待确认",
      "hotel": "—"
    }
  ],
  "hotels": [
    {
      "name": "住宿待确认",
      "desc": "酒店、房型和交通均以最终方案为准。"
    }
  ],
  "includes": [
    "具体行程、交通和活动费用待确认"
  ],
  "excludes": [
    "费用范围待确认"
  ],
  "upgrades": [],
  "host": {
    "name": "Kate",
    "initial": "K",
    "bio": "行程策划与同行体验"
  }
},
{
  "id": "vietnam-cambodia",
  "title": "越柬纵游 · 从下龙湾到吴哥",
  "country": "mekong",
  "countryName": "越南 · 柬埔寨",
  "cities": [
    "河内",
    "下龙湾",
    "岘港",
    "会安",
    "胡志明市",
    "金边",
    "暹粒"
  ],
  "days": 17,
  "nights": 16,
  "price": null,
  "priceNote": "价格与团期待确认",
  "groupSize": "建议 8–10 人",
  "ageRange": "女生社交小团",
  "status": "planning",
  "styles": [
    "culture",
    "photo"
  ],
  "coverTheme": "sea",
  "coverEmoji": "🛶",
  "tagline": "一个人出发，和新朋友一起探索",
  "highlights": [
    "下龙湾",
    "会安灯笼",
    "西贡美食",
    "吴哥日出"
  ],
  "departures": [
    {
      "date": "团期待定",
      "status": "planning",
      "left": 0
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "河内集合",
      "desc": "欢迎晚餐与旅友破冰。",
      "meals": "待确认",
      "hotel": "河内"
    },
    {
      "day": 2,
      "title": "河内老城",
      "desc": "三五人结伴咖啡与街头美食探索。",
      "meals": "待确认",
      "hotel": "河内"
    },
    {
      "day": 3,
      "title": "河内 → 下龙湾",
      "desc": "前往海湾，视天气与供应安排游船过夜。",
      "meals": "待确认",
      "hotel": "下龙湾"
    },
    {
      "day": 4,
      "title": "返回河内",
      "desc": "游船结束后返回河内，下午自由休息。",
      "meals": "待确认",
      "hotel": "河内"
    },
    {
      "day": 5,
      "title": "飞往岘港 · 会安",
      "desc": "乘航班前往岘港，转车至会安；航班待确认。",
      "meals": "待确认",
      "hotel": "会安"
    },
    {
      "day": 6,
      "title": "会安古城",
      "desc": "古城散步，三五人一起做灯笼或烹饪。",
      "meals": "待确认",
      "hotel": "会安"
    },
    {
      "day": 7,
      "title": "会安自由日",
      "desc": "瑜伽、海边或咖啡馆任选，晚上自由结伴。",
      "meals": "待确认",
      "hotel": "会安"
    },
    {
      "day": 8,
      "title": "岘港 → 胡志明市",
      "desc": "返回岘港搭机南下，晚间轻松晚餐。",
      "meals": "待确认",
      "hotel": "胡志明市"
    },
    {
      "day": 9,
      "title": "西贡城市日",
      "desc": "建筑、咖啡馆与美食，保留自由时间。",
      "meals": "待确认",
      "hotel": "胡志明市"
    },
    {
      "day": 10,
      "title": "西贡自由探索",
      "desc": "可选当地体验或休息，避免连续赶路。",
      "meals": "待确认",
      "hotel": "胡志明市"
    },
    {
      "day": 11,
      "title": "前往金边",
      "desc": "跨境交通及入境手续待核实；抵达后休息。",
      "meals": "待确认",
      "hotel": "金边"
    },
    {
      "day": 12,
      "title": "金边人文",
      "desc": "参观当地文化场所，安排有引导的历史学习。",
      "meals": "待确认",
      "hotel": "金边"
    },
    {
      "day": 13,
      "title": "金边 → 暹粒",
      "desc": "陆路或航班前往暹粒，具体安排待定。",
      "meals": "待确认",
      "hotel": "暹粒"
    },
    {
      "day": 14,
      "title": "吴哥探索",
      "desc": "早起参观吴哥古迹，午间避暑休息。",
      "meals": "待确认",
      "hotel": "暹粒"
    },
    {
      "day": 15,
      "title": "暹粒慢生活",
      "desc": "可选手作、市场或咖啡馆，小组分享旅途。",
      "meals": "待确认",
      "hotel": "暹粒"
    },
    {
      "day": 16,
      "title": "自由日与告别",
      "desc": "自由选择体验，晚上告别晚餐。",
      "meals": "待确认",
      "hotel": "暹粒"
    },
    {
      "day": 17,
      "title": "暹粒返程",
      "desc": "按航班时间前往机场返程。",
      "meals": "待确认",
      "hotel": "—"
    }
  ],
  "hotels": [
    {
      "name": "住宿待确认",
      "desc": "酒店、房型和交通均以最终方案为准。"
    }
  ],
  "includes": [
    "具体行程、交通和活动费用待确认"
  ],
  "excludes": [
    "费用范围待确认"
  ],
  "upgrades": [],
  "host": {
    "name": "Kate",
    "initial": "K",
    "bio": "行程策划与同行体验"
  }
},
{
  "id": "thai-gulf",
  "title": "泰国海岸 · 苏梅岛与涛岛",
  "country": "thailand",
  "countryName": "泰国",
  "cities": [
    "曼谷",
    "苏梅岛",
    "涛岛"
  ],
  "days": 10,
  "nights": 9,
  "price": null,
  "priceNote": "价格与团期待确认",
  "groupSize": "建议 8–10 人",
  "ageRange": "女生社交小团",
  "status": "planning",
  "styles": [
    "culture",
    "photo"
  ],
  "coverTheme": "sea",
  "coverEmoji": "🌊",
  "tagline": "一个人出发，和新朋友一起探索",
  "highlights": [
    "海边瑜伽",
    "涛岛浮潜",
    "苏梅岛日落",
    "姐妹晚餐"
  ],
  "departures": [
    {
      "date": "团期待定",
      "status": "planning",
      "left": 0
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "曼谷集合",
      "desc": "欢迎晚餐和旅友破冰。",
      "meals": "待确认",
      "hotel": "曼谷"
    },
    {
      "day": 2,
      "title": "曼谷城市日",
      "desc": "结伴逛市场或参加泰餐课，晚上自由探索。",
      "meals": "待确认",
      "hotel": "曼谷"
    },
    {
      "day": 3,
      "title": "前往苏梅岛",
      "desc": "搭乘航班或其他交通赴苏梅岛；交通方式待确认。",
      "meals": "待确认",
      "hotel": "苏梅岛"
    },
    {
      "day": 4,
      "title": "海边慢生活",
      "desc": "自愿参加晨间瑜伽，三五人组队咖啡或海滩散步。",
      "meals": "待确认",
      "hotel": "苏梅岛"
    },
    {
      "day": 5,
      "title": "海岛体验",
      "desc": "可选烹饪或船游，海况不佳改为陆上活动。",
      "meals": "待确认",
      "hotel": "苏梅岛"
    },
    {
      "day": 6,
      "title": "苏梅岛 → 涛岛",
      "desc": "乘船前往涛岛，视海况调整船期。",
      "meals": "待确认",
      "hotel": "涛岛"
    },
    {
      "day": 7,
      "title": "涛岛海湾",
      "desc": "自愿参加持牌供应商浮潜体验，不下水可选择海滩休息。",
      "meals": "待确认",
      "hotel": "涛岛"
    },
    {
      "day": 8,
      "title": "自由探索",
      "desc": "小组拍照、咖啡馆或自由休息。",
      "meals": "待确认",
      "hotel": "涛岛"
    },
    {
      "day": 9,
      "title": "返回苏梅岛",
      "desc": "乘船返回苏梅岛，预留转运缓冲，告别晚餐。",
      "meals": "待确认",
      "hotel": "苏梅岛"
    },
    {
      "day": 10,
      "title": "返程",
      "desc": "按航班安排返程；具体航线待确认。",
      "meals": "待确认",
      "hotel": "—"
    }
  ],
  "hotels": [
    {
      "name": "住宿待确认",
      "desc": "酒店、房型和交通均以最终方案为准。"
    }
  ],
  "includes": [
    "具体行程、交通和活动费用待确认"
  ],
  "excludes": [
    "费用范围待确认"
  ],
  "upgrades": [],
  "host": {
    "name": "Kate",
    "initial": "K",
    "bio": "行程策划与同行体验"
  }
}
];

// 可选升级服务（通用目录；具体可用性与价格以运营方确认为准）
const ADDONS = [
  { id: 'room', name: '单房升级', icon: '🛏️', priceFrom: 1100, desc: '不想拼房？全程独享大床房，睡个好觉。' },
  { id: 'photo', name: '专业旅拍', icon: '📷', priceFrom: 899, desc: '驻地摄影师半天跟拍，精修成片直接发小红书。' },
  { id: 'spa', name: 'SPA 与疗愈', icon: '💆', priceFrom: 359, desc: '目的地特色 SPA，把疲惫留在按摩床上。' },
  { id: 'food', name: '美食探店 / 烹饪课', icon: '🍜', priceFrom: 299, desc: '本地人带路的小馆子，或亲手做一道当地菜。' },
  { id: 'boat', name: '出海跳岛', icon: '⛵', priceFrom: 459, desc: '快艇或游艇出海，浮潜、海钓、日落巡航。' },
  { id: 'night', name: '夜生活体验', icon: '🌙', priceFrom: 199, desc: '天台酒吧、livehouse，和姐妹们的微醺之夜。' },
  { id: 'transfer', name: '专车接送机', icon: '🚗', priceFrom: 150, desc: '航班时间不合适？单独安排专车接送。' }
];

// 旅友故事（示例内容，正式发布前需获得本人授权并替换为真实反馈）
const STORIES = [
  {
    id: 's1', name: '阿May', city: '广州', trip: '岘港 · 会安古城慢旅行',
    title: '一个人报的名，回来时多了 9 个姐妹',
    content: '本来只是年假没人陪，硬着头皮一个人报名。第一天欢迎晚宴还很拘谨，第三天在会安放河灯的时候已经手拉手拍照了。现在我们的群每天都在聊天，已经开始约下一趟富国岛。',
    tags: ['独自报名', '交到朋友'],
    likes: 326
  },
  {
    id: 's2', name: '小卷', city: '上海', trip: '暹粒 · 吴哥窟人文之旅',
    title: '吴哥窟的日出，值得凌晨四点起床',
    content: '去之前妈妈很担心柬埔寨的安全问题，实际全程领队和地接都安排得很细，酒店也很棒。看日出的那一刻全团安静了三分钟，然后一起哭了哈哈哈。旅拍的照片是我今年头像。',
    tags: ['安全感', '旅拍大片'],
    likes: 289
  },
  {
    id: 's3', name: 'Lena', city: '深圳', trip: '富国岛 · 海岛躺平计划',
    title: '工作第三年，第一次真正意义的度假',
    content: '以前自由行做攻略做到崩溃，跟团又被拉去购物。这次什么都不用想，白天躺沙滩，晚上和姐妹们喝酒聊天。原来旅行可以这么轻松。',
    tags: ['懒人友好', '海岛'],
    likes: 241
  },
  {
    id: 's4', name: '桃桃', city: '杭州', trip: '南越双城 · 胡志明+岘港',
    title: '在咖啡公寓认识了同月同日生的她',
    content: '世界上真的有缘分这件事。旅行中发现团里有个姐妹和我同一天生日，领队知道后偷偷准备了蛋糕。回国后我们成了彼此城市里最好的朋友。',
    tags: ['神仙缘分', '姐妹'],
    likes: 198
  }
];

// 线下活动（示例）
const EVENTS = [
  { id: 'e1', city: '广州', title: '旅友线下见面会 · 珠江夜谈', date: '2026-11-22', desc: '老团友和新朋友围炉聊天，分享旅途照片，Kate 现场答疑东南亚线路。', quota: 20 },
  { id: 'e2', city: '上海', title: '旅行摄影分享会', date: '2026-12-06', desc: '驻地摄影师教你用手机拍出旅拍大片，附送修图小技巧。', quota: 15 },
  { id: 'e3', city: '深圳', title: '新线路剧透局', date: '2026-12-20', desc: '清迈、巴厘岛新线路首次公开，到场可优先锁定早鸟名额。', quota: 25 }
];

// 常见问题 / 信任与安全
const TRUST_ITEMS = [
  { icon: '📜', title: '持牌旅行社合作', desc: '所有出境游合同、收款与操作均由具备出境游资质的持牌旅行社完成，签署正规旅游合同。' },
  { icon: '🛡️', title: '全程保险', desc: '每位团员均投保境外旅游意外险，出行前可查看保单信息。' },
  { icon: '👩‍✈️', title: '全程中文领队', desc: '领队全程陪同协调，当地搭配持证向导与正规运营车辆。' },
  { icon: '🏨', title: '真实可查的住宿', desc: '出行前提供具体酒店名称与地址，可自行在平台查验评价。' },
  { icon: '💰', title: '透明的退改政策', desc: '报名时明确告知取消与退款规则，无隐形消费、无购物点。' },
  { icon: '📞', title: '紧急情况联系', desc: '行程中提供 24 小时紧急联系人，家人可随时联系到团队。' }
];

module.exports = { COUNTRIES, STYLES, STATUS_MAP, TRIPS, ADDONS, STORIES, EVENTS, TRUST_ITEMS };
