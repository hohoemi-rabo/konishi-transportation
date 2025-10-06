# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.4 application for Konishi Transportation, built with React 19.1.0, TypeScript, and Tailwind CSS. The project uses the App Router architecture and Turbopack for faster builds.

## 要件定義（プロジェクト要件）

### プロジェクト目的
- **主目的**: 企業としての信頼感の醸成
- **副目的**: 地域での認知度向上、環境への取り組みのアピール

### コンセプト
**「地球の未来を運ぶ、クリーンでハイテクな物流企業」**
- 環境に配慮したクリーンな企業イメージ
- テクノロジー企業のようなミニマルでシャープなデザイン
- モダンでカッコいい、先進的な印象

### 会社情報
- **会社名**: 小西運送会社
- **所在地**: 〒510-0846 三重県四日市市大井の川町1丁目1594-5
- **電話番号**: 059-328-5248
- **創業**: 約30年
- **保有車両**: 大型トラック15台
- **事業内容**: 一般貨物輸送、重量物輸送、特殊輸送

### サイト構成（シングルページ / ランディングページ形式）

1. **ヘッダー**
   - ロゴ（新規作成）
   - ナビゲーションメニュー（各セクションへのスムーズスクロール）
   - ダークモード切り替えボタン（右上配置）

2. **ヒーローセクション**
   - メインビジュアル（動画/静止画/アニメーション）
   - キャッチコピー: 「地球の未来を運ぶ」
   - サブメッセージ: クリーンな物流で社会に貢献

3. **事業内容・サービス**
   - インフォグラフィックス的な表現
   - 3つのサービス紹介（一般貨物、重量物、特殊輸送）
   - ビジュアル重視の説明

4. **環境への取り組み**
   - エコドライブの実施
   - 低公害車の導入
   - CO2削減への取り組み
   - 数値・実績のビジュアル化（グラフ、チャート等）

5. **会社概要**
   - 会社基本情報の表示
   - 社長写真・メッセージ（仮画像使用）
   - 数字で見る小西運送（創業年数、車両台数等）のインフォグラフィック
   - 取得認証・資格の表示（Gマーク、グリーン経営認証等）※仮設定

6. **フッター**
   - 会社情報
   - 所在地・連絡先
   - コピーライト

### デザイン要件

**デザインコンセプト:**
- スタイル: ミニマル、シャープ、テクノロジー企業風
- 印象: ハイテク、モダン、クリーン、信頼感

**カラースキーム:**
- ライトモード/ダークモード対応
- 環境を意識したグリーン系、または信頼感のあるブルー系を基調
- アクセントカラーで先進性を表現

**参考サイト:**
- 宝運送（https://takaraunsou.com/）
- 参考要素: レイアウト、写真の使い方、アニメーション

**ビジュアル要素:**
- トラック、施設の写真（開発時は仮画像使用）
- 社長写真（開発時は仮画像使用）
- サービス説明用のカスタムアイコン
- 環境データのビジュアル化グラフィック

### 必須機能

**基本機能:**
- レスポンシブデザイン（スマートフォン、タブレット、PC完全対応）
- ダークモード（手動切り替え + システム設定連動、デフォルト: ライトモード）
- スムーズスクロール（セクション間の滑らかな移動）
- スティッキーヘッダー（スクロール時のヘッダー固定）

**アニメーション・インタラクション:**
- スクロールトリガーアニメーション（フェードイン、スライドイン）
- パララックス効果
- ホバーエフェクト
- トランジション効果
- ※リッチな表現を重視

**不要機能:**
- お問い合わせフォーム
- 多言語対応
- ニュース・お知らせ更新機能
- 採用情報ページ（将来的には追加可能性あり）

### 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript 5.x
- **スタイリング**: Tailwind CSS v3.4.17 + CSS Modules
- **アニメーション**: Framer Motion v11
- **状態管理**: Zustand v4
- ~~**3D**: Three.js (React Three Fiber v8)~~ ※必要に応じて検討

### パフォーマンス方針
- リッチな表現を優先
- 基本的なパフォーマンス最適化は実施
  - 画像の最適化（WebP、遅延読み込み）
  - コード分割
  - キャッシュ戦略

### SEO要件
- 適切なメタタグ設定
- 構造化データ（Schema.org）
- 地域検索最適化（四日市市、三重県）
- OGP設定

### 重要な注意事項
- 基本的に更新作業は行わない想定
- トラック・施設・社長写真は撮影予定（開発時は仮画像）
- 取得認証・資格は仮設定（後日クライアント確認）
- 予算制限なし（機能・デザインの充実を優先）

## プロジェクト管理

### チケット管理（/docs配下）
プロジェクトは15個のチケットに分割されており、各チケットは独立した機能・要件を表しています。

チケット一覧:
1. `01_environment-setup.md` - 環境セットアップ
2. `02_design-system.md` - デザインシステム構築
3. `03_dark-mode.md` - ダークモード機能
4. `04_header-navigation.md` - ヘッダー・ナビゲーション
5. `05_hero-section.md` - ヒーローセクション
6. `06_service-section.md` - サービスセクション
7. `07_sustainability-section.md` - 環境への取り組みセクション
8. `08_company-section.md` - 会社概要セクション
9. `09_access-section.md` - アクセスセクション
10. `10_footer.md` - フッター
11. `11_animations.md` - アニメーション実装
12. `12_responsive-design.md` - レスポンシブデザイン
13. `13_seo-metadata.md` - SEO・メタデータ
14. `14_performance-optimization.md` - パフォーマンス最適化
15. `15_testing-deployment.md` - テスト・デプロイ

### Todoリスト管理ルール
各チケットファイル内のTodoは以下の形式で管理します:
- 未完了: `- [ ] タスク名`
- 完了: `- [x] タスク名`

**重要**: タスク完了時は必ず `[ ]` を `[x]` に更新してください。これにより進捗が視覚的に確認できます。

## Development Commands

**Start development server:**
```bash
npm run dev
```
Server runs at http://localhost:3000 with hot reload enabled.

**Build for production:**
```bash
npm run build
```
Note: Both dev and build commands use `--turbopack` flag.

**Start production server:**
```bash
npm start
```

**Lint code:**
```bash
npm run lint
```

## Architecture

### Project Structure
- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Geist Sans and Geist Mono font setup
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind directives
- `src/` - Source files (aliased as `@/` in imports)

### Key Configurations

**TypeScript Path Aliases:**
- `@/*` maps to `./src/*`
- Use this for all imports: `import { Component } from "@/components/Component"`

**Tailwind Content Paths:**
- Configured to scan: `./src/**/*.{js,ts,jsx,tsx,mdx}`
- Custom CSS variables: `--background`, `--foreground`
- Custom font families: `font-sans` (Geist Sans), `font-mono` (Geist Mono)

**Fonts:**
- Geist Sans (default sans-serif)
- Geist Mono (monospace)
- Loaded via `next/font/google` in root layout
- Applied via CSS variables: `--font-geist-sans`, `--font-geist-mono`

### Important Notes

**Tailwind Version:**
The project uses Tailwind CSS 3.4.17 (downgraded from 4.x based on git history: commit d6d382e). Do not upgrade to Tailwind 4.x without testing compatibility.

**Build System:**
All builds use Turbopack. Do not remove `--turbopack` flags from package.json scripts.

**TypeScript:**
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler

## Next.js App Router Best Practices

### Server vs Client Components

**Default to Server Components:**
- All components in `src/app/` are Server Components by default
- Only add `"use client"` directive when necessary:
  - Using React hooks (useState, useEffect, useContext, etc.)
  - Using browser-only APIs
  - Handling user interactions (onClick, onChange, etc.)
  - Using event listeners

**Server Component Benefits:**
- Better performance (zero JS shipped to client by default)
- Direct database/API access without exposing credentials
- Better SEO with server-side rendering
- Automatic code splitting

### File Organization

**Special Files:**
- `layout.tsx` - Shared UI wrapper for routes (persists across navigation)
- `page.tsx` - Unique UI for a route, makes route publicly accessible
- `loading.tsx` - Loading UI with React Suspense
- `error.tsx` - Error boundary UI (requires `"use client"`)
- `not-found.tsx` - 404 UI

**Route Organization:**
```
src/app/
  layout.tsx          # Root layout
  page.tsx            # Home page (/)
  about/
    page.tsx          # /about
  dashboard/
    layout.tsx        # Dashboard layout
    page.tsx          # /dashboard
    settings/
      page.tsx        # /dashboard/settings
```

### Data Fetching

**Server Components (Recommended):**
```typescript
// Direct async/await in Server Components
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store' // or 'force-cache' for static
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{data.title}</div>
}
```

**Caching Strategy:**
- `{ cache: 'force-cache' }` - Static generation (default)
- `{ cache: 'no-store' }` - Dynamic rendering (always fresh)
- `{ next: { revalidate: 3600 } }` - Incremental Static Regeneration

**Route Segment Config:**
```typescript
// At top of page.tsx or layout.tsx
export const dynamic = 'force-static' // or 'force-dynamic', 'auto'
export const revalidate = 3600 // seconds
```

### Metadata

**Static Metadata:**
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```

**Dynamic Metadata:**
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `Post ${params.id}`,
  }
}
```

### Component Patterns

**Composition Pattern:**
```typescript
// layout.tsx passes children
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>...</nav>
      {children}
    </div>
  )
}
```

**Passing Data Down:**
- Use props for Server Components (can pass server-fetched data)
- Use Context for Client Components (requires `"use client"`)
- Avoid prop drilling by fetching data where needed (Server Components can fetch independently)

### Image Optimization

**Always use next/image:**
```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // for LCP images
/>
```

### Navigation

**Use next/link:**
```typescript
import Link from 'next/link'

<Link href="/dashboard">Dashboard</Link>
```

**Programmatic Navigation (Client Component):**
```typescript
'use client'
import { useRouter } from 'next/navigation'

export default function Button() {
  const router = useRouter()
  return <button onClick={() => router.push('/dashboard')}>Go</button>
}
```

### Performance

**Loading States:**
```typescript
// src/app/dashboard/loading.tsx
export default function Loading() {
  return <div>Loading...</div>
}
```

**Streaming with Suspense:**
```typescript
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SlowComponent />
    </Suspense>
  )
}
```

### Environment Variables

**Public variables:** Prefix with `NEXT_PUBLIC_`
```typescript
// Accessible in browser
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

**Private variables:** No prefix (Server Components only)
```typescript
// Server Components only
const secret = process.env.DATABASE_URL
```
