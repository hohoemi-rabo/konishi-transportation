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
