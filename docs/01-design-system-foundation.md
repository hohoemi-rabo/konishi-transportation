# 01: デザインシステム・基盤構築

## 概要

Tailwind CSS のカスタム設定、カラーパレット、タイポグラフィ、グローバルCSS を整備し、プロジェクト全体のデザイン基盤を構築する。

## 要件

- カラースキーム: 白（#FFFFFF）× 青（ブランドブルー）ベース
- コンセプト: クリーン & ハイテク
- フォント: `next/font/google` でセルフホスト（レイアウトシフト防止）
- CSS変数によるテーマトークン管理
- モバイルファーストのブレークポイント設定（~767px / 768-1023px / 1024px~）

## 依存パッケージ

- framer-motion（`npm install framer-motion`）
- lucide-react（`npm install lucide-react`）— アイコン

## 参照

- REQUIREMENTS.md §4 デザインコンセプト
- REQUIREMENTS.md §4.3 ビジュアル表現の方向性

## Todo

- [ ] Tailwind CSS にブランドカラー（blue系パレット）を定義
- [ ] フォント設定（`next/font/google` で日本語対応フォント + Geist）
- [ ] グローバルCSS（`globals.css`）の整備（CSS変数、ベーススタイル）
- [ ] ブレークポイントのカスタム設定確認（md: 768px, lg: 1024px）
- [ ] 共通アニメーション用のユーティリティクラスまたはCSS定義
- [ ] 必要な依存パッケージのインストール（framer-motion, lucide-react）
- [ ] `html lang="ja"` の設定確認
