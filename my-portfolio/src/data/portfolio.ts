export interface Profile {
  name: string
  nameEn: string
  role: string
  school: string
  department: string
  major: string
  graduationYear: string
  bio: string
  motto: string | null       // null = 非表示
  avatar: string | null      // null = プレースホルダー表示
  links: {
    github: string
    email: string
  }
}

export interface Skill {
  name: string
  version: string
  level: number              // 0〜100
  category: string
  capabilities: string[]
  note: string | null
}

export interface Venue {
  name: string
  date: string
}

export interface Work {
  id: number
  title: string
  genre: string
  category: string
  thumbnail: string | null
  screenshots: string[]
  description: string
  tags: string[]
  platform: string[]
  period: string
  team: string
  role: string
  github: string | null
  link: string | null
  venues: Venue[]
  techPoints: string | null
  designNotes: string | null
  implementationTheme: string | null
  troubleshooting: string | null
  performance: string | null
}

// union型で入力できる値を制限する
export type CertStatus = '取得済み' | '受験予定' | '取得予定' | '学習中'

export interface Certification {
  name: string
  date: string
  category: string
  score: string | null
  status: CertStatus
}

export interface TimelineItem {
  year: string
  event: string
}

export const profile: Profile = {
  name: '島田 啓冬',           // 漢字表記
  nameEn: 'keito Shimada',      // ローマ字（Hero で使う）
  role: 'Game Client Engineer',
  school: '京都デザイン&テクノロジー専門学校\n',
  department: 'スーパーAI&テクノロジー科\n',
  major: 'スーパーゲームクリエイター専攻\n',
  graduationYear: '2027年3月卒業見込み',
  bio: 'どんなことも最初の努力で手を付けて、慣れるまで繰り返し作業をします。\n初歩的な開発を積み重ねて、必要に感じるツールを学び自分なりに扱い方を落とし込む方法で勉強をしています。\n今はより簡単にステージ制作をするためにエディタ拡張を勉強して、コードを書かずにステージ制作できるようにすることを目標に勉強をしています。',

  motto: 'まっすぐ自分の言葉は曲げねぇ',   // 座右の銘（Hero のキャッチコピーに使う）
  avatar: '/images/iconimage1.png',               // 画像パス or null
  links: {
    github: 'https://github.com/tyoko15',
    email: 'tyoko15@icloud.com',
  },
}

export const skills: Skill[] = [
  {
    name: 'Unity',
    version: '不明',
    level: 70,            // 0〜100（後述）
    category: 'game',    // フィルター用カテゴリ
    capabilities: ['3D/2Dゲーム開発', 'Physics演算', 'UniTask', 'R3', 'Addressables', 'NavMeshAI', 'ProceduralGeneration'],
    note: 'チーム制作でリーダーを経験',
  },
  {
    name: 'UnrealEngine',
    version: '6',
    level: 40,            // 0〜100（後述）
    category: 'game',    // フィルター用カテゴリ
    capabilities: ['3Dゲーム開発', 'NavMeshAI', 'BluePrint Only'],
    note: '主にBPを用いて個人開発',
  },  
  {
    name: 'Visual Stadio',
    version: '不明',
    level: 50,            // 0〜100（後述）
    category: 'game',    // フィルター用カテゴリ
    capabilities: ['Unity', 'DirectX'],
    note: 'コード実装',
  },  
  {
    name: 'GitHub',
    version: '不明',
    level: 60,            // 0〜100（後述）
    category: 'management',    // フィルター用カテゴリ
    capabilities: ['data'],
    note: '個人制作作品とチーム制作作品を管理',
  }, 
  {
    name: 'SourceTree',
    version: '不明',
    level: 60,            // 0〜100（後述）
    category: 'management',    // フィルター用カテゴリ
    capabilities: ['data'],
    note: '作品の進捗管理',
  }, 
  {
    name: 'Power Point',
    version: '不明',
    level: 80,            // 0〜100（後述）
    category: 'plan',    // フィルター用カテゴリ
    capabilities: ['plannig'],
    note: '企画書の制作',
  },  
  {
    name: 'Excel',
    version: '不明',
    level: 90,            // 0〜100（後述）
    category: 'plan',    // フィルター用カテゴリ
    capabilities: ['parameter'],
    note: '仕様書の制作',
  },
  {
    name: 'Substance 3D Painter',
    version: '不明',
    level: 60,            // 0〜100（後述）
    category: 'design',    // フィルター用カテゴリ
    capabilities: ['texture'],
    note: '簡単なテクスチャ作成',
  },
  {
    name: 'Illutrator',
    version: '不明',
    level: 60,            // 0〜100（後述）
    category: 'design',    // フィルター用カテゴリ
    capabilities: ['UI'],
    note: 'UI作成',
  },
  {
    name: 'Maya',
    version: '不明',
    level: 70,            // 0〜100（後述）
    category: 'design',    // フィルター用カテゴリ
    capabilities: ['Model'],
    note: '低ポリゴンモデル作成',
  },
  // ...続きを追加
]

export const works: Work[] = [
  {
    id: 1,                              // 連番（詳細ページのURLに使う）
    title: 'DarkMaze',
    genre: '3D謎解きアクション',
    category: 'game',
    thumbnail: '/images/DarkMaze_image1.png',                    // '/images/work1.png' or null
    screenshots: [],                    // ['/images/w1-1.png', '/images/w1-2.gif']
    description: '暗闇の中を手探りで進む、謎解きアクション ゲームです。\n4分割されたステージに仕掛けられたギミックを解き明かし、ゴールを目指します。\n',
    tags: ['Unity', 'C#', 'ProceduralGeneration'],
    platform: ['Windows', 'WebGL'],
    period: '2025年5月〜2026年2月（10ヶ月）',
    team: '個人制作',
    role: 'すべて',
    github: 'https://github.com/tyoko15/DarkMaze',
    link: 'https://unityroom.com/games/tyoko15_darkmaze',                         // 公開URLがある場合
    venues: [                           // 出展・公開先（複数可）
      { name: 'UnityRoom', date: '2026年2月' },
    ],
    techPoints: '継承を使ってコーディングをして、修正をするときの手間が省けた。\nステージ構成を簡単にするために、規定クラスでギミックの実装継承先で各ステージに合わせた実装にした。\n',
    designNotes: 'ステージ全体を4分割し、それぞれを独立した部屋として設計。\n​共通ステージロジックは、基底クラスに集約して共通化し、継承したクラスで​、各ステージのギミックを実装。\nギミック発動は、ゲームマネージャー側で管理していて、​ステージ固有のギミック内容は、基底クラスを継承した各ステージマネージャーで設計。\n',
    implementationTheme: '​ステージを増やしやすい設計を心掛けた。',
    troubleshooting: '規定クラスが追加の実装でより複雑になり、使いまわせるコードを関数にしてできる限り、コンパクト化をした。',
    performance: '一つのステージの作成に2～3時間かかっていたので、Inspectorからステージを作成できるエディタ拡張を制作してステージ制作をもっと簡単にすることで短期間でステージを増やすことを実現したいと考えています。',
  },

  {
    id: 2,                              // 連番（詳細ページのURLに使う）
    title: '戦輪神楽',
    genre: '3Dアクション',
    category: 'game',
    thumbnail: '/images/Senrinkagura_image1.png',                    // '/images/work1.png' or null
    screenshots: [],                    // ['/images/w1-1.png', '/images/w1-2.gif']
    description: '変幻自在の『戦輪（チャクラム）』を操り、妖しげな寺院をチャクラムを使って舞うように攻略する和風3Dアクション',
    tags: ['Unity', 'C#', 'ProceduralGeneration'],
    platform: ['Windows'],
    period: '2025年10月〜2026年1月（3ヶ月）',
    team: 'チーム制作 (15名)',
    role: '全Enemyの実装',
    github: 'https://github.com/tagu204/Inari',
    link: null,                         // 公開URLがある場合
    venues: [                           // 出展・公開先（複数可）
      { name: 'なし', date: '-' },
    ],
    techPoints: 'AnimatorのtimeLineでEventを作り、動きに合わせた行動を実装した。',
    designNotes: '規定クラスでUpdate関数を動かすためにEnemyの移動と攻撃をストラクタにして継承先で実装を行った。',
    implementationTheme: 'Enemyの種類を増やすしすい設計を心がけた。',
    troubleshooting: 'AnimatorのEventを使用するのが初めて触ったのでどのような仕様なのか確認してから制作したので時間を要した',
    performance: 'ゲーム内に大量のEnemyが出てくるので、一斉に出現するのは5体までとし、個体数に制限をかけた。この実装にオブジェクトプールを使用するか検討したがオブジェクトプールを最初からまなんで実装するには時間がなく、あきらめて簡単なストック機能の実装にした。',
  },
]

export const certifications: Certification[] = [
  {
    name: '普通自動車第一種運転免許',
    date: '2023年4月',
    category: '免許',
    score: null,                     // なければ null
    status: '取得済み',                 // '取得済み' | '受験予定' | '取得予定' | '学習中'
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals AI-900',
    date: '2023年11月',
    category: 'ベンダー認定',
    score: '715/1000点',                     // なければ null
    status: '取得済み',                 // '取得済み' | '受験予定' | '取得予定' | '学習中'
  },
  {
    name: 'MOS PowerPoint  2019 Associate',
    date: '2023年11月',
    category: 'ベンダー認定',
    score: '953/1000点',                     // なければ null
    status: '取得済み',                 // '取得済み' | '受験予定' | '取得予定' | '学習中'
  },
    {
    name: 'MOS Excel  2019 Associate',
    date: '2023年11月',
    category: 'ベンダー認定',
    score: '1000/1000点',                     // なければ null
    status: '取得済み',                 // '取得済み' | '受験予定' | '取得予定' | '学習中'
  },
]

export const timeline: TimelineItem[] = [
  { year: '2023年4月', event: '京都デザイン&テクノロジー専門学校\n スーパーAI&テクノロジー科\n スーパーゲームクリエイター専攻\n 入学' },
  { year: '2023年5月~12月', event: 'プランニング・デザイン・プログラミングの基礎を学習' },
  { year: '2024年2月', event: '初めてのチーム制作 プログラマーリーダーとして2Dパズルゲーム「ツミキの旅」を制作' },
  { year: '2024年8月', event: 'チーム制作 Enemy実装プログラマー&デザイナーとして3Dステルスゲーム「Hide」を制作' },
  { year: '2025年2月', event: 'チーム制作 ゲームフロー実装プログラマーとして3Dストラテジーゲーム「勇魔伝」を制作' },
  { year: '2025年5月', event: 'チーム制作 プログラマーリーダーとして3Dストラテジーゲーム「TridentGrowthDuel」を制作' },
  { year: '2026年1月', event: 'チーム制作 Enemy実装プログラマーとして3Dアクションゲーム「戦輪神楽」を制作' },
  { year: '2026年2月', event: '個人制作 3D謎解きアクションゲーム「DarkMaze」を制作' },
  { year: '2027年3月', event: '京都デザイン&テクノロジー専門学校\n 卒業見込み' },
  // ...
]

export const CATEGORY_ICON: Record<string, string> = {
  game: '🎮',
  web: 'W',
  '3d': 'D',
}

export const CATEGORY_ICON_FALLBACK = 'FaFolder'