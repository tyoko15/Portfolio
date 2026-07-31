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

// ==================================================
// 実体データ（コンポーネントに渡して表示するデータ）
// ==================================================

export const profile: Profile = {
  name: "山田 太郎",
  nameEn: "Taro Yamada",
  role: "フロントエンドエンジニア志望",
  school: "〇〇大学",
  department: "情報工学科",
  graduationYear: "2026年卒業予定",
  bio: "Web開発を中心に勉強している情報系の学生です。ユーザーが使いやすいデザインと、パフォーマンスの高いコードを書くことを心がけています。",
  motto: "継続は力なり",
  avatar: null, // 画像がある場合は "/images/avatar.jpg" などのパスを指定
  links: {
    github: "https://github.com/",
    twitter: null,
    email: "example@email.com",
  },
}

export const skills: Skill[] = [
  {
    name: "React",
    version: "18.x",
    level: 80,
    category: "Frontend",
    capabilities: ["Hooks", "TypeScript", "Vite"],
    note: "個人開発のポートフォリオや課題制作で使用",
  },
  {
    name: "TypeScript",
    version: "5.x",
    level: 75,
    category: "Frontend",
    capabilities: ["型安全なコーディング", "インターフェース設計"],
    note: "Reactと組み合わせて常用",
  },
  {
    name: "HTML / CSS",
    version: "5 / 3",
    level: 85,
    category: "Frontend",
    capabilities: ["レスポンシブ対応", "Flexbox / Grid"],
    note: "基本的なUIコンポーネントの作成が可能",
  },
]

export const works: Work[] = [
  {
    id: 1,
    title: "ポートフォリオサイト",
    genre: "Webアプリケーション",
    category: "Frontend",
    thumbnail: null,
    screenshots: [],
    description: "React + TypeScript + Vite を使用して作成した自己紹介用ポートフォリオサイトです。",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS"],
    platform: ["Web Browser"],
    period: "2026年4月 - 2026年5月",
    team: "個人開発",
    role: "企画 / 設計 / 実装",
    github: "https://github.com/",
    link: "http://localhost:5173/",
    venues: [
      {
        name: "学内発表会",
        date: "2026年5月",
      },
    ],
    techPoints: "Viteによる高速な開発環境構築と、TypeScriptによる型安全な開発を意識しました。",
    designNotes: "シンプルで視認性の高いUIデザインを追求しました。",
    implementationTheme: "コンポーネントの再利用性と可読性の向上",
    troubleshooting: "データの型定義エラーが発生した際、interfaceを見直して解決しました。",
    performance: "Lighthouseでのスコア最適化を実施",
  },
]

export const gameJams: GameJam[] = [
  {
    name: "学内ハッカソン 2025",
    date: "2025年12月",
    theme: "つながり",
    description: "チームでWebベースの簡単なオンラインマルチ対戦ゲームを作成しました。",
    platform: ["Web Browser"],
    role: "フロントエンド開発・UIデザイン",
    team: "4人チーム",
    result: "優秀賞",
    url: null,
    reflection: "短時間でのプロトタイピングとチーム開発でのGit運用の難しさと重要性を学びました。",
  },
]

export const certifications: Certification[] = [
  {
    name: "基本情報技術者試験",
    date: "2025年4月",
    category: "国家資格",
    score: null,
    status: "取得済み",
  },
  {
    name: "応用情報技術者試験",
    date: "2026年10月",
    category: "国家資格",
    score: null,
    status: "学習中",
  },
]

export const timeline: TimelineItem[] = [
  {
    year: "2023年4月",
    event: "大学に入学",
  },
  {
    year: "2024年8月",
    event: "プログラミング学習を開始（HTML/CSS/JavaScript）",
  },
  {
    year: "2025年3月",
    event: "ReactおよびTypeScriptの学習を開始",
  },
  {
    year: "2026年5月",
    event: "ポートフォリオサイトの制作",
  },
]

// カテゴリに対応するアイコン名のマッピング定義
export const CATEGORY_ICON: Record<string, string> = {
  All: 'LayoutGrid',
  Frontend: 'Code',
  Backend: 'Server',
  Mobile: 'Smartphone',
  Game: 'Gamepad2',
  Other: 'Folder',
}

// フォールバック用のデフォルトアイコン名
export const CATEGORY_ICON_FALLBACK = 'Folder'