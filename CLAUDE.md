# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

小西運送株式会社のコーポレートLP（シングルページ・ランディングページ）。
三重県四日市市の運送会社のブランディング・認知度向上を目的とする。
詳細な要件は `REQUIREMENTS.md` を参照。

## コマンド

```bash
npm run dev      # 開発サーバー起動（Turbopack）
npm run build    # プロダクションビルド（Turbopack）
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint実行
```

## 技術スタック

- **Next.js 15** (App Router) + **React 19** + **TypeScript 5** (strict mode)
- **Tailwind CSS v3.4** + CSS Modules（スタイリング）
- **Framer Motion v11**（アニメーション、未インストール）
- **Zustand v4**（状態管理、未インストール）
- Turbopackによるdev/build高速化
- ESLint v9 フラットコンフィグ形式

## アーキテクチャ

- App Router (`src/app/`) を使用。Pages Router は使用しない
- パスエイリアス: `@/*` → `./src/*`
- コンポーネント配置先: `src/components/`
- 言語: 日本語サイト（`lang="ja"`）
- API Routes不要（静的LP、バックエンド無し）
- CTA: 電話番号のみ（059-328-5248）、お問い合わせフォーム無し

## Next.js 15 App Router ベストプラクティス

### Server Components / Client Components

- `src/app/` 内のコンポーネントはデフォルトで **Server Component**
- `useState`, `useEffect`, イベントハンドラ、ブラウザAPI (`window`, `document`) を使う場合のみファイル先頭に `'use client'` を付与
- Server Component でデータ取得や重い処理を行い、結果を props で Client Component に渡す
- `'use client'` の境界はできるだけ葉（リーフ）に近い位置に置き、クライアントバンドルを最小化する

```
Server Component (データ取得・静的部分)
  └── Client Component ('use client' — インタラクション部分のみ)
```

### ファイル規約（App Router）

| ファイル         | 用途                                         |
| ---------------- | -------------------------------------------- |
| `layout.tsx`     | 共通UI（ヘッダー・フッター等）。部分レンダリングによりナビゲーション時にリレンダリングされない |
| `page.tsx`       | ルートのUIエントリーポイント                 |
| `loading.tsx`    | React Suspense ベースのストリーミングUI。データ取得中のフォールバック表示 |
| `error.tsx`      | Error Boundary。ルート単位のエラーハンドリング（`'use client'` 必須） |
| `not-found.tsx`  | 404ページ                                    |

### メタデータ

- `layout.tsx` または `page.tsx` で `generateMetadata` 関数 または `metadata` オブジェクトをエクスポート
- 動的なメタデータが不要な場合は静的な `metadata` オブジェクトを優先

```tsx
// 静的メタデータ（本プロジェクトではこちらを使用）
export const metadata: Metadata = {
  title: '小西運送株式会社 | クリーンでハイテクな物流で、次の社会を支える',
  description: '...',
}
```

### パフォーマンス最適化

- **画像**: `next/image` を使用。`width`/`height` を明示しCLS回避。WebP/AVIF自動配信
- **フォント**: `next/font/google` でフォントをセルフホスト（レイアウトシフト防止）
- **動的インポート**: ブラウザ専用コンポーネント（パーティクルアニメーション等）は `next/dynamic` + `{ ssr: false }` で遅延読み込み
- **Streaming**: `loading.tsx` と React Suspense で段階的にUIを送信。ルート全体のブロッキングを回避
- **バンドル最小化**: 大きなライブラリは動的 `import()` で必要時のみ読み込む

```tsx
// ブラウザ専用コンポーネントの遅延読み込み例
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(
  () => import('@/components/ParticleBackground'),
  { ssr: false }
)
```

### このプロジェクト固有の注意点

- 静的LPのため、データ取得は不要。Server Component のメリットはバンドルサイズ削減とメタデータ生成に活用
- アニメーション系コンポーネント（Framer Motion、パーティクル等）は必ず Client Component として分離
- レイアウト (`layout.tsx`) に固定ヘッダー・フッターを配置し、部分レンダリングの恩恵を受ける

## デザイン方針

- **カラー**: 白（#FFFFFF）× 青（ブランドブルー）ベース
- **コンセプト**: クリーン & ハイテク
- **アニメーション**: 適度（パララックス、フェードイン、スクロールトランジション）
- CO2削減率等の具体的数値は使用禁止。ビジュアル表現で環境配慮を伝える
- デザインシステム: Claude Code skills の `ui-ux-pro-max` を使用
- モバイルファースト設計（ブレークポイント: ~767px / 768-1023px / 1024px~）

## パフォーマンス要件

- Lighthouse 全カテゴリ90点以上
- Core Web Vitals準拠
- 初回表示2秒以内
- 画像は `next/image` で最適化
- アニメーションはGPUアクセラレーション活用

## SEO

- 構造化データ: LocalBusiness スキーマ
- OGP設定必須
- title: `小西運送株式会社 | クリーンでハイテクな物流で、次の社会を支える`

## チケット管理（docs/）

開発チケットは `docs/` 配下に連番ファイルで管理する。

### ファイル一覧

| # | ファイル | 内容 |
|---|---------|------|
| 01 | `docs/01-design-system-foundation.md` | デザインシステム・基盤構築 |
| 02 | `docs/02-layout-header.md` | 共通レイアウト・固定ヘッダー |
| 03 | `docs/03-hero-section.md` | ヒーローセクション |
| 04 | `docs/04-services-section.md` | サービス紹介セクション |
| 05 | `docs/05-environment-section.md` | 環境への取り組みセクション |
| 06 | `docs/06-vehicles-section.md` | 車両・設備紹介セクション |
| 07 | `docs/07-company-section.md` | 会社概要セクション |
| 08 | `docs/08-access-section.md` | アクセスセクション |
| 09 | `docs/09-footer.md` | フッター |
| 10 | `docs/10-seo-metadata.md` | SEO・メタデータ・構造化データ |
| 11 | `docs/11-performance-optimization.md` | パフォーマンス最適化 |
| 12 | `docs/12-responsive-final-check.md` | レスポンシブ対応・最終調整 |

### Todo 運用ルール

- 各チケットファイルの `## Todo` セクションで進捗を管理する
- 未着手: `- [ ]`
- 完了: `- [x]`
- タスク完了時は必ず `- [ ]` → `- [x]` に更新すること
- 推奨実装順: 01 → 02 → 03〜09（並行可） → 10 → 11 → 12
