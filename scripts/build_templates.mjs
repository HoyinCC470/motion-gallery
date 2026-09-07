import fs from 'fs';
import path from 'path';

const OUT = '/workspace/motion-gallery/data/templates.json';

const SHOTCRAFT_CAT_MAP = {
  camera: ['镜头运镜'],
  data: ['数据可视化'],
  effects: ['背景与纹理', '文字动效'],
  interaction: ['UI场景'],
  opening: ['产品发布', '文字动效'],
  outro: ['产品发布', '文字动效'],
  rhythm: ['音画卡点'],
  transition: ['转场'],
  typography: ['文字动效'],
  'ui-entrance': ['UI场景'],
};

const HYPERFRAMES = [
  { id: 'hf-heygen-stripe', dir: 'HF-heygen-stripe', title: 'HeyGen × Stripe 产品发布', titleEn: 'HF HeyGen × Stripe', categories: ['产品发布'], tags: ['launch', 'product', 'stripe'], description: 'HeyGen 与 Stripe 联合产品发布影片，4K 全 HyperFrames 制作。', preview: 'https://hyperframes.dev/viewer/d6f7d40f-1e32-4b73-a551-af47cc19e8a2', previewType: 'external' },
  { id: 'hf-hyperframes-launch', dir: 'hyperframes-launch', title: 'HyperFrames 框架发布片', titleEn: 'HyperFrames launch', categories: ['产品发布'], tags: ['launch', 'framework'], description: 'HyperFrames 框架自身的发布影片，含完整源码。', preview: 'https://hyperframes.dev/viewer/9ab8d480-7507-4905-9222-ae6ea4b2fb5a', previewType: 'external' },
  { id: 'hf-website-to-hyperframes', dir: 'website-to-hyperframes', title: '网站转宣传片', titleEn: 'Website → HyperFrames', categories: ['产品发布', '工作流集成'], tags: ['website', 'promo'], description: '将线上站点转化为宣传片的演示项目。', preview: 'https://hyperframes.dev/viewer/85d2d8d5-bf5b-4d04-901d-7c3ae157a30a', previewType: 'external' },
  { id: 'hf-spacex-launch', dir: 'spacex-launch', title: 'SpaceX 数据解说', titleEn: 'SpaceX explainer', categories: ['数据可视化', '产品发布'], tags: ['data', 'explainer', 'spacex'], description: '大规模数据与运动结合的 SpaceX 解说片。', preview: 'https://hyperframes.dev/viewer/58d80c88-37fe-4527-a803-1b29c35373b7', previewType: 'external' },
  { id: 'hf-timeline-launch', dir: 'timeline-launch', title: '时间线编辑器演示', titleEn: 'Timeline editor launch', categories: ['UI场景', '工作流集成'], tags: ['timeline', 'studio'], description: '展示 HyperFrames Studio 时间线编辑能力。', preview: 'https://hyperframes.dev/viewer/105200be-ebda-4209-a225-a2edf01cf1b7', previewType: 'external' },
  { id: 'hf-inspector-launch', dir: 'inspector-launch', title: '画布 Inspector 演示', titleEn: 'Studio inspector launch', categories: ['UI场景', '工作流集成'], tags: ['inspector', 'canvas'], description: '在画布上编辑与检查元素的功能演示。', preview: 'https://hyperframes.dev/viewer/87889a4c-cc67-4e4a-b576-b57dd892fee3', previewType: 'external' },
  { id: 'hf-variables-launch', dir: 'variables-launch', title: '变量模板多版本', titleEn: 'Variables launch', categories: ['工作流集成', '产品发布'], tags: ['variables', 'templating'], description: '同一构图通过变量生成多版本输出。', preview: 'https://hyperframes.dev/viewer/6387d7c2-3819-4e60-916c-e346a3598b67', previewType: 'external' },
  { id: 'hf-cloud-render-launch', dir: 'cloud-render-launch', title: '云端渲染发布', titleEn: 'Cloud rendering launch', categories: ['工作流集成'], tags: ['cloud', 'render'], description: '演示在 HeyGen 云端渲染 HyperFrames 项目。', preview: 'https://hyperframes.dev/viewer/4259dc01-157a-4966-9c58-4e97faa2548e', previewType: 'external' },
  { id: 'hf-sfx-music-launch', dir: 'sfx-music-launch', title: '音效与音乐 CLI', titleEn: 'Sound & music launch', categories: ['音画卡点'], tags: ['sfx', 'music', 'audio'], description: '用 CLI 为影片加入 SFX 与音乐的演示。', preview: 'https://hyperframes.dev/viewer/1adcf040-9df5-46b9-ab56-8e33795b5f84', previewType: 'external' },
  { id: 'hf-pr-to-video-launch', dir: 'pr-to-video-launch', title: 'PR 转视频', titleEn: 'PR to video launch', categories: ['工作流集成', '产品发布'], tags: ['github', 'pr', 'workflow'], description: '将 GitHub PR 变为功能揭示影片。', preview: 'https://hyperframes.dev/viewer/72c9b502-0c96-4bde-9a78-9a178267c475', previewType: 'external' },
  { id: 'hf-figma-launch', dir: 'figma-launch', title: 'Figma 转 HyperFrames', titleEn: 'Figma → HyperFrames', categories: ['工作流集成', 'UI场景'], tags: ['figma', 'design'], description: '把 Figma 设计稿带入运动影片。', preview: 'https://hyperframes.dev/viewer/58fdce81-6ef0-4860-899d-d6b3da692a54', previewType: 'external' },
  { id: 'hf-frame-md-launch-storyboard', dir: 'frame-md-launch-storyboard', title: 'FRAME.md 分镜驱动', titleEn: 'FRAME.md storyboard', categories: ['工作流集成', '产品发布'], tags: ['storyboard', 'brief'], description: '以 FRAME.md 简报驱动分镜与方向的发布片。', preview: 'https://hyperframes.dev/viewer/c5198458-4eaa-4933-a4e8-029c8010a845', previewType: 'external' },
  { id: 'hf-texture-launch-video', dir: 'texture-launch-video', title: '纹理运动设计', titleEn: 'Texture launch', categories: ['背景与纹理'], tags: ['texture', 'motion-design'], description: '以纹理与质感为核心的运动设计影片。', preview: 'https://hyperframes.dev/viewer/b92c24b4-5143-4bce-85ce-408be4c3c4ec', previewType: 'external' },
  { id: 'hf-vfx-heygen-combined', dir: 'vfx-heygen-combined', title: 'VFX 特效合集', titleEn: 'VFX reel', categories: ['背景与纹理', '转场'], tags: ['vfx', 'shaders'], description: '着色器与视觉特效合集卷轴。', preview: 'https://hyperframes.dev/viewer/3c3669b8-65d0-4f1f-8cdb-e608c1a58ff9', previewType: 'external' },
  { id: 'hf-k3-promo', dir: 'k3-promo', title: 'Kimi K3 产品短片', titleEn: 'K3 promo', categories: ['产品发布'], tags: ['promo', 'product'], description: 'Kimi K3 短产品宣传片。', preview: 'https://github.com/heygen-com/hyperframes-launches/blob/main/k3-promo/k3-promo.mp4', previewType: 'external' },
  { id: 'hf-claude-paper-launch', dir: 'claude-paper-launch', title: 'Claude Paper 发布', titleEn: 'Claude paper launch', categories: ['产品发布', '文字动效'], tags: ['claude', 'paper'], description: 'Claude paper 主题发布影片。', preview: 'https://hyperframes.dev/viewer/659498ab-d77e-48a8-a719-dd97adbbd3e5', previewType: 'external' },
  { id: 'hf-claude-design-send', dir: 'claude-design-send-hyperframes-launch', title: 'Send to HyperFrames', titleEn: 'Claude Design → HyperFrames', categories: ['工作流集成'], tags: ['claude', 'design'], description: '从设计草稿发送到 HyperFrames 的工作流演示。', preview: 'https://github.com/heygen-com/hyperframes-launches/tree/main/claude-design-send-hyperframes-launch', previewType: 'link' },
  { id: 'hf-codex-replica', dir: 'codex-five-hour-limit-replica', title: 'Codex 五小时限制复刻', titleEn: 'Codex five-hour-limit replica', categories: ['产品发布', '文字动效'], tags: ['codex', 'replica'], description: '复刻 Codex 五小时限制主题影片。', preview: 'https://github.com/heygen-com/hyperframes-launches/blob/main/codex-five-hour-limit-replica/codex-five-hour-limit-replica.mp4', previewType: 'external' },
  { id: 'hf-heygen-apple-motion', dir: 'heygen-apple-motion', title: '可换品牌发布模板 ×4', titleEn: 'Re-brandable launch templates', categories: ['产品发布', '工作流集成'], tags: ['template', 'brand'], description: '四套可换品牌的发布模板。', preview: 'https://github.com/heygen-com/hyperframes-launches/tree/main/heygen-apple-motion', previewType: 'link' },
  { id: 'hf-liquid-brand-refraction', dir: 'liquid-brand-refraction', title: '液体品牌折射', titleEn: 'Liquid brand refraction', categories: ['背景与纹理', '产品发布'], tags: ['liquid', 'brand', 'refraction'], description: '液体折射风格的品牌运动片。', preview: 'https://github.com/heygen-com/hyperframes-launches/tree/main/liquid-brand-refraction', previewType: 'link' },
];

const REMOCN_KEYWORD_CATS = [
  [['chart', 'bar', 'line', 'graph', 'counter', 'odometer', 'gauge', 'stats', 'data'], ['数据可视化']],
  [['blur', 'letter', 'word', 'type', 'text', 'title', 'caption', 'typography', 'handwrite', 'marquee', 'sheen', 'scale-in', 'fade', 'rise', 'slide'], ['文字动效']],
  [['transition', 'wipe', 'dissolve', 'cut', 'morph', 'glitch', 'iris', 'fade-through'], ['转场']],
  [['camera', 'lens', 'focus', 'dolly', 'pan', 'zoom', 'parallax', 'orbit'], ['镜头运镜']],
  [['ui', 'button', 'card', 'chat', 'dashboard', 'bento', 'mockup', 'browser', 'phone', 'device', 'layout', 'checklist', 'cursor'], ['UI场景']],
  [['music', 'beat', 'audio', 'sound', 'sync', 'confetti'], ['音画卡点']],
  [['texture', 'grain', 'noise', 'gradient', 'background', 'fog', 'aurora', 'particle', 'halftone', 'dither', 'crt', 'hologram'], ['背景与纹理']],
  [['github', 'workflow', 'demo', 'product', 'sponsor', 'stars'], ['产品发布', '工作流集成']],
];

function remocnCategories(name, title, desc) {
  const blob = `${name} ${title} ${desc}`.toLowerCase();
  const cats = [];
  for (const [keys, mapped] of REMOCN_KEYWORD_CATS) {
    if (keys.some((k) => blob.includes(k))) {
      for (const c of mapped) if (!cats.includes(c)) cats.push(c);
    }
  }
  return (cats.length ? cats : ['UI场景']).slice(0, 3);
}

function titleCaseFromSlug(slug) {
  return slug.replace(/_/g, '-').split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const templates = [];

for (const h of HYPERFRAMES) {
  templates.push({
    id: h.id,
    title: h.title,
    titleEn: h.titleEn,
    source: 'hyperframes',
    categories: h.categories,
    tags: h.tags,
    description: h.description,
    preview: { type: h.previewType, url: h.preview },
    sourceRepo: 'https://github.com/heygen-com/hyperframes-launches',
    sourceUrl: `https://github.com/heygen-com/hyperframes-launches/tree/main/${h.dir}`,
    usage: `打开目录 \`${h.dir}\`，使用 HyperFrames CLI：\`hyperframes preview\` / \`hyperframes render\`。官网示例：https://hyperframes.heygen.com/examples`,
    attribution: '© HeyGen — heygen-com/hyperframes-launches. 请遵循仓库 LICENSE / NOTICE；捆绑素材再分发前请阅读原仓库许可说明。',
  });
}

const lib = JSON.parse(fs.readFileSync('/tmp/mg-fetch/shotcraft-library.json', 'utf8'));
const GALLERY_BASE = 'https://vincentwei1021.github.io/video-shotcraft';

for (const card of lib.cards) {
  const name = card.name;
  const cat = card.category || (card.tags && card.tags[0]) || 'effects';
  const cats = SHOTCRAFT_CAT_MAP[cat] || ['UI场景'];
  const styles = card.styles || [];
  let previewUrl = `${GALLERY_BASE}/library.html?q=${encodeURIComponent(name)}`;
  let previewType = 'link';
  if (styles[0]?.media?.url) {
    const mediaUrl = styles[0].media.url.replace(/^\.\//, `${GALLERY_BASE}/`);
    previewUrl = mediaUrl;
    previewType = mediaUrl.includes('.mp4') ? 'video' : 'image';
  }
  const summary = card.summary || card.intention || name;
  const use = card.use || '';
  const desc = use ? `${summary} 适用：${use}` : summary;
  const tags = [...new Set([cat, name, ...(card.tags || [])])].slice(0, 8);
  templates.push({
    id: `sc-${name}`,
    title: name,
    titleEn: name,
    source: 'shotcraft',
    categories: cats,
    tags,
    description: desc,
    preview: { type: previewType, url: previewUrl },
    sourceRepo: 'https://github.com/Vincentwei1021/video-shotcraft',
    sourceUrl: `https://github.com/Vincentwei1021/video-shotcraft/blob/main/${card.source || `references/shots/${cat}/${name}.md`}`,
    usage: `安装 skill：\`npx skills add Vincentwei1021/video-shotcraft\`，让 agent 使用镜头配方卡 \`${name}\`。在线 Gallery：${GALLERY_BASE}/`,
    attribution: '© Vincentwei1021 — video-shotcraft. 请遵循仓库 LICENSE；样片与配方卡归属原作者。',
  });
}

const reg = JSON.parse(fs.readFileSync('/tmp/mg-fetch/remocn-registry.json', 'utf8'));
const comps = reg.items.filter((i) => i.type === 'registry:component');
const selected = [];
const seenPrefix = {};
for (const c of comps) {
  const prefix = c.name.split('-')[0];
  const count = seenPrefix[prefix] || 0;
  if (count >= 4 && selected.length >= 40) continue;
  seenPrefix[prefix] = count + 1;
  selected.push(c);
  if (selected.length >= 60) break;
}
while (selected.length < 40) {
  for (const c of comps) {
    if (!selected.includes(c)) selected.push(c);
    if (selected.length >= 40) break;
  }
  break;
}

for (const c of selected) {
  const name = c.name;
  const title = c.title || titleCaseFromSlug(name);
  const desc = c.description || `Remocn Remotion 组件：${title}`;
  templates.push({
    id: `rm-${name}`,
    title,
    titleEn: title,
    source: 'remocn',
    categories: remocnCategories(name, title, desc),
    tags: [name, 'remotion', 'shadcn-registry'],
    description: desc,
    preview: { type: 'link', url: `https://remocn.dev/docs/components/${name}` },
    sourceRepo: 'https://github.com/Remocn/remocn',
    sourceUrl: `https://remocn.dev/docs/components/${name}`,
    usage: `npx shadcn@latest add @remocn/${name}`,
    attribution: '© Remocn (MIT) — Remocn/remocn. Built on Remotion；Remotion 有独立许可，商用请查阅 https://www.remotion.dev/docs/license 。组件复制到你的仓库后可自由修改。',
  });
}

const order = { hyperframes: 0, shotcraft: 1, remocn: 2 };
templates.sort((a, b) => (order[a.source] - order[b.source]) || a.id.localeCompare(b.id));

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(templates, null, 2) + '\n', 'utf8');

const counts = {};
for (const t of templates) counts[t.source] = (counts[t.source] || 0) + 1;
console.log('TOTAL', templates.length);
console.log(counts);
console.log('Wrote', OUT);
