process.env.NO_PROXY = '*';
process.env.no_proxy = '*';
process.env.http_proxy = '';
process.env.HTTP_PROXY = '';

const API_URL = 'http://127.0.0.1:1337';
const TOKEN = 'ed74aa938647c6db84d2abc18750665c8ddcdd49223261f29f7f9dad140acdb358c0021ba85159e0e4d1cba9ff1400beac34182fa99668cbbd2b052317affd7de777807503ad6fee5c56a718b8e1b1a24b8d355db58f3f27d2706fc6eef33f090f79e2793448f9a6468344fdf17a325234e8114bbb9a1aa595eb6cf5ce7377ad';
const HEADERS = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}` };

const data = [
  { lat: 33.38912742572459,  lng: 109.77851267033144, name: '商洛市',         city: '商洛',   country: '中国', year: 1999 },
  { lat: 34.265088968502866, lng: 108.95024945477402, name: '西安市',         city: '西安',   country: '中国', year: 2011 },
  { lat: 34.6096480104217,   lng: 108.48723804025089, name: '咸阳市',         city: '咸阳',   country: '中国', year: 2017 },
  { lat: 30.608439333764853, lng: 104.07191888366381, name: '成都市',         city: '成都',   country: '中国', year: 2018 },
  { lat: 36.62606210846314,  lng: 101.78997595640057, name: '西宁市',         city: '西宁',   country: '中国', year: 2019 },
  { lat: 36.91342612743801,  lng: 100.09243860466682, name: '青海湖',         city: '共和',   country: '中国', year: 2019 },
  { lat: 34.75231283443789,  lng: 106.50461274792572, name: '宝鸡市',         city: '宝鸡',   country: '中国', year: 2019 },
  { lat: 33.11517652657251,  lng: 107.06296612985867, name: '汉中市',         city: '汉中',   country: '中国', year: 2020 },
  { lat: 22.81804671389275,  lng: 108.36411157462854, name: '南宁市',         city: '南宁',   country: '中国', year: 2022 },
  { lat: 21.455419963427268, lng: 109.1304633189505,  name: '北海市',         city: '北海',   country: '中国', year: 2022 },
  { lat: 22.81975309557381,  lng: 106.82197859551223, name: '崇左市',         city: '崇左',   country: '中国', year: 2022 },
  { lat: 36.071273927765375, lng: 120.37562258224959, name: '青岛市',         city: '青岛',   country: '中国', year: 2023 },
  { lat: 24.510927756330577, lng: 117.65377366577064, name: '漳州市',         city: '漳州',   country: '中国', year: 2023 },
  { lat: 26.072603428811814, lng: 119.29949096240252, name: '福州市',         city: '福州',   country: '中国', year: 2023 },
  { lat: 24.494326102214718, lng: 118.13967444423031, name: '厦门市',         city: '厦门',   country: '中国', year: 2023 },
  { lat: 23.687177337241792, lng: 117.43557011619761, name: '东山岛',         city: '漳州',   country: '中国', year: 2023 },
  { lat: 30.142162418139925, lng: 118.17532735830969, name: '黄山市',         city: '黄山',   country: '中国', year: 2023 },
  { lat: 22.32851658753095,  lng: 114.17575248396336, name: '香港特别行政区', city: '香港',   country: '中国', year: 2023 },
  { lat: 22.196944412030653, lng: 113.54105162106022, name: '澳门特别行政区', city: '澳门',   country: '中国', year: 2023 },
  { lat: 31.110815569285716, lng: 102.90325641348434, name: '四姑娘山',       city: '小金',   country: '中国', year: 2024 },
  { lat: 30.033013581829877, lng: 101.9629193468851,  name: '木格措',         city: '康定',   country: '中国', year: 2024 },
  { lat: 30.009466813648647, lng: 103.04416636409177, name: '雅安市',         city: '雅安',   country: '中国', year: 2024 },
  { lat: 36.919410544027315, lng: 121.53716624090671, name: '乳山市',         city: '乳山',   country: '中国', year: 2024 },
  { lat: 37.51989232507069,  lng: 122.11106477078646, name: '威海市',         city: '威海',   country: '中国', year: 2024 },
  { lat: 37.45932668985068,  lng: 121.45094555609734, name: '烟台市',         city: '烟台',   country: '中国', year: 2024 },
  { lat: 43.828123127470654, lng: 87.62111409309944,  name: '乌鲁木齐市',     city: '乌鲁木齐', country: '中国', year: 2024 },
  { lat: 44.37451021659652,  lng: 84.30455275210899,  name: '乌苏市',         city: '乌苏',   country: '中国', year: 2024 },
  { lat: 44.60632540263776,  lng: 81.3141822184842,   name: '赛里木湖',       city: '博乐',   country: '中国', year: 2024 },
  { lat: 43.90957167943459,  lng: 81.27708645535601,  name: '伊宁市',         city: '伊宁',   country: '中国', year: 2024 },
  { lat: 43.296820219101306, lng: 84.23052379664968,  name: '那拉提',         city: '新源',   country: '中国', year: 2024 },
  { lat: 37.557685602850796, lng: 126.98442713920417, name: '首尔市',         city: '首尔',   country: '韩国', year: 2024 },
  { lat: 35.18278033722124,  lng: 129.0707283203815,  name: '釜山市',         city: '釜山',   country: '韩国', year: 2024 },
  { lat: 29.65982937275121,  lng: 91.1343352335305,   name: '拉萨市',         city: '拉萨',   country: '中国', year: 2025 },
  { lat: 29.65140657577963,  lng: 94.42049102820424,  name: '林芝市',         city: '林芝',   country: '中国', year: 2025 },
  { lat: 30.73020860821244,  lng: 90.66478509108275,  name: '纳木错',         city: '那曲',   country: '中国', year: 2025 },
  { lat: 30.007222171223457, lng: 93.91370995734012,  name: '巴松措',         city: '林芝',   country: '中国', year: 2025 },
  { lat: 29.61669037355501,  lng: 94.95108055049327,  name: '雅鲁藏布大峡谷', city: '林芝',   country: '中国', year: 2025 },
  { lat: 38.969572506315664, lng: 113.60474325244523, name: '五台山',         city: '忻州',   country: '中国', year: 2025 },
  { lat: 39.181481129763895, lng: 112.83399428740974, name: '雁门关',         city: '忻州',   country: '中国', year: 2025 },
  { lat: 37.37391788589756,  lng: 112.7785241263228,  name: '平遥古城',       city: '晋中',   country: '中国', year: 2025 },
  { lat: 20.04547273820169,  lng: 110.197330933251,   name: '海口市',         city: '海口',   country: '中国', year: 2025 },
  { lat: 19.538837177926258, lng: 110.79832188906887, name: '文昌市',         city: '文昌',   country: '中国', year: 2025 },
  { lat: 18.794279133699312, lng: 110.38895237776002, name: '万宁市',         city: '万宁',   country: '中国', year: 2025 },
  { lat: 18.259724303447776, lng: 109.50717220998865, name: '三亚市',         city: '三亚',   country: '中国', year: 2025 },
  { lat: 39.61126458838505,  lng: 109.77115986345035, name: '鄂尔多斯市',     city: '鄂尔多斯', country: '中国', year: 2025 },
  { lat: 46.07213257176879,  lng: 122.09551528943904, name: '乌兰浩特市',     city: '乌兰浩特', country: '中国', year: 2025 },
  { lat: 47.28412015541581,  lng: 120.42260543002739, name: '阿尔山市',       city: '阿尔山', country: '中国', year: 2025 },
  { lat: 49.59482280579526,  lng: 117.38222156320363, name: '满洲里市',       city: '满洲里', country: '中国', year: 2025 },
  { lat: 49.22323271243972,  lng: 119.97967598358481, name: '呼伦贝尔市',     city: '呼伦贝尔', country: '中国', year: 2025 },
  { lat: 34.66938229659487,  lng: 135.5080069427568,  name: '大阪市',         city: '大阪',   country: '日本', year: 2025 },
  { lat: 35.012647626044576, lng: 135.77310170265764, name: '京都市',         city: '京都',   country: '日本', year: 2025 },
  { lat: 34.68141969702377,  lng: 135.870542076273,   name: '奈良市',         city: '奈良',   country: '日本', year: 2025 },
  { lat: 38.48877129210227,  lng: 106.23572083764707, name: '银川市',         city: '银川',   country: '中国', year: 2025 },
  { lat: 38.85346748923762,  lng: 105.72688020855894, name: '阿拉善盟',       city: '阿拉善', country: '中国', year: 2025 },
  { lat: 29.869677956517364, lng: 121.54860105647032, name: '宁波市',         city: '宁波',   country: '中国', year: 2026 },
  { lat: 29.98422927190979,  lng: 122.22619046126216, name: '舟山市',         city: '舟山',   country: '中国', year: 2026 },
];

console.log(`开始导入 ${data.length} 条数据...\n`);
let success = 0;

for (const item of data) {
  const res = await fetch(`${API_URL}/api/footprints`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      data: {
        name: item.name,
        city: item.city,
        country: item.country,
        latitude: item.lat,
        longitude: item.lng,
        visitedAt: `${item.year}-01-01`,
      },
    }),
  });
  const json = await res.json();
  if (!res.ok) {
    console.error(`❌ ${item.name}:`, JSON.stringify(json.error));
  } else {
    console.log(`✅ ${item.name}`);
    success++;
  }
}

console.log(`\n完成！成功导入 ${success}/${data.length} 条`);
