export interface Profile {
  name: string
  nameEn: string
  role: string
  school: string
  department: string
  graduationYear: string
  bio: string
  motto: string | null       // null = 非表示
  avatar: string | null      // null = プレースホルダー表示
  links: {
    github: string
    twitter: string | null   // null = リンク非表示
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

export interface GameJam {
  name: string
  date: string
  theme: string
  description: string
  platform: string[]
  role: string
  team: string
  result: string | null
  url: string | null
  reflection: string
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
  name: '山田 太郎',           // 漢字表記
  nameEn: 'Taro Yamada',      // ローマ字（Hero で使う）
  role: 'Game Creator / Web Developer',
  school: '◯◯専門学校',
  department: 'ゲームクリエイター科',
  graduationYear: '2027年3月卒業見込み',
  bio: '自己紹介文（100〜150字程度）',
  motto: '信頼は、積むもの',   // 座右の銘（Hero のキャッチコピーに使う）
  avatar: null,               // 画像パス or null
  links: {
    github: 'https://github.com/あなたのID',
    twitter: 'https://twitter.com/あなたのID',
    email: 'あなた@example.com',
  },
}

export const skills: Skill[] = [
  {
    name: 'Unity',
    version: '2022.3 LTS',
    level: 80,            // 0〜100（後述）
    category: 'game',    // フィルター用カテゴリ
    capabilities: ['3D/2Dゲーム開発', 'Physics演算', 'ProceduralGeneration'],
    note: 'プロシージャル迷宮生成・A*経路探索を実装済み',
  },
  // ...続きを追加
]

export const works: Work[] = [
  {
    id: 1,                              // 連番（詳細ページのURLに使う）
    title: '迷宮脱出ゲーム',
    genre: '3Dパズルアクション',
    category: 'game',
    thumbnail: null,                    // '/images/work1.png' or null
    screenshots: [],                    // ['/images/w1-1.png', '/images/w1-2.gif']
    description: '作品の概要説明...',
    tags: ['Unity', 'C#', 'ProceduralGeneration'],
    platform: ['Windows', 'WebGL'],
    period: '2025年10月〜2026年1月（3ヶ月）',
    team: '個人制作',
    role: 'プログラマー / レベルデザイナー（全工程）',
    github: 'https://github.com/username/repo',
    link: null,                         // 公開URLがある場合
    venues: [                           // 出展・公開先（複数可）
      { name: '学校 卒業制作展示会', date: '2026年2月' },
    ],
    techPoints: 'こだわった技術ポイント...',
    designNotes: '設計上の工夫...',
    implementationTheme: '実装解説テーマ（1文）',
    troubleshooting: '詰まった問題と解決策...',
    performance: 'パフォーマンス改善の工夫...',
  },
]

export const gameJams: GameJam[] = [
  {
    name: 'Global Game Jam 2025',
    date: '2025年1月（48時間制作）',
    theme: '「Bubble」→ 泡を使った物理パズルを制作',
    description: '作品の説明...',
    platform: ['WebGL', 'Windows'],
    role: 'プログラマー（物理演算・ステージ生成担当）',
    team: '4名（PG×2・デザイナー×1・サウンド×1）',
    result: null,                       // '総合2位' など、なければ null
    url: 'https://itch.io/...',         // なければ null
    reflection: '学び・振り返り...',
  },
]

export const certifications: Certification[] = [
  {
    name: 'ITパスポート',
    date: '2024年10月合格',
    category: '国家資格',
    score: '665点',                     // なければ null
    status: '取得済み',                 // '取得済み' | '受験予定' | '取得予定' | '学習中'
  },
]

export const timeline: TimelineItem[] = [
  { year: '2024年4月', event: '◯◯専門学校 ゲームクリエイター科 入学' },
  { year: '2024年7月', event: 'Unity基礎習得・初めてのゲーム完成' },
  // ...
]

export const CATEGORY_ICON: Record<string, string> = {
  game: 'G',
  web: 'W',
  '3d': 'D',
}

export const CATEGORY_ICON_FALLBACK = 'FaFolder'