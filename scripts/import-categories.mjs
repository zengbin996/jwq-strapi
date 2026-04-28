process.env.NO_PROXY = '*';
process.env.http_proxy = '';
process.env.HTTP_PROXY = '';

const API_URL = 'http://127.0.0.1:1337';
const TOKEN = 'ed74aa938647c6db84d2abc18750665c8ddcdd49223261f29f7f9dad140acdb358c0021ba85159e0e4d1cba9ff1400beac34182fa99668cbbd2b052317affd7de777807503ad6fee5c56a718b8e1b1a24b8d355db58f3f27d2706fc6eef33f090f79e2793448f9a6468344fdf17a325234e8114bbb9a1aa595eb6cf5ce7377ad';
const HEADERS = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${TOKEN}` };

const categories = [
  '风光', '日落', '日出', '星空', '云海',
  '大海', '山川', '湖泊', '沙漠', '森林',
  '城市', '建筑', '街拍', '夜景', '古镇',
  '人物', '动物', '花卉', '美食', '旅行',
];

console.log(`开始导入 ${categories.length} 个分类...\n`);
let success = 0;

for (const name of categories) {
  const res = await fetch(`${API_URL}/api/categories`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ data: { name } }),
  });
  const json = await res.json();
  if (!res.ok) {
    console.error(`❌ ${name}:`, JSON.stringify(json.error));
  } else {
    console.log(`✅ ${name}`);
    success++;
  }
}

console.log(`\n完成！成功导入 ${success}/${categories.length} 个`);
