# デザイントークン

このドキュメントでは、プロジェクトで使用するデザイントークン（カラー、タイポグラフィ、スペーシング等）を定義します。

## カラーパレット

### Primary Colors（プライマリカラー）
メインのアクセントカラーとして使用。ターコイズ/シアン系。

- `primary`: #14b8a6 - メインのターコイズ
- `primary-light`: #5eead4 - 明るいターコイズ
- `primary-dark`: #0d9488 - 暗いターコイズ

**使用例:**
- CTAボタン
- アクティブ状態
- セクションラベル

### Secondary Colors（セカンダリカラー）
補助的なアクセントカラー。ブルー系。

- `secondary`: #0ea5e9 - メインのブルー
- `secondary-light`: #38bdf8 - 明るいブルー
- `secondary-dark`: #0284c7 - 暗いブルー

**使用例:**
- セカンダリボタン
- リンク
- 補助的な強調

### Accent Colors（アクセントカラー）

- `accent-turquoise`: #00d9ff - 明るいターコイズ
- `accent-cyan`: #14b8a6 - シアン
- `accent-green`: #10b981 - グリーン（環境関連）
- `accent-blue`: #3b82f6 - ブルー

**使用例:**
- プログレスバー
- グラフ
- ハイライト

### Background Colors（背景色）

#### ライトモード
- `--background`: #ffffff - メイン背景
- `--dark-bg`: #f8fafc - カード背景
- `--dark-bg-lighter`: #f1f5f9 - 明るいカード背景
- `--dark-bg-card`: #ffffff - カード

#### ダークモード
- `--background`: #0a0a0a - メイン背景
- `--dark-bg`: #0a1f1f - セクション背景
- `--dark-bg-lighter`: #0d2626 - 明るいセクション背景
- `--dark-bg-card`: #0f2d2d - カード背景

### Text Colors（テキストカラー）

- `--foreground`: #171717（ライト）/ #ededed（ダーク）

### Border Colors（ボーダーカラー）

- `--border`: #e2e8f0（ライト）/ #1e3a3a（ダーク）
- `--border-light`: #f1f5f9（ライト）/ #2d4a4a（ダーク）

## グラデーション

### gradient-dark
```css
linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)
```
ダークブルー/グリーンのグラデーション。

### gradient-hero
```css
linear-gradient(135deg, rgba(10, 31, 31, 0.95) 0%, rgba(13, 38, 38, 0.9) 100%)
```
ヒーローセクションのオーバーレイ用。

### gradient-section
```css
linear-gradient(180deg, #0a1f1f 0%, #0d2626 100%)
```
セクション背景用の縦方向グラデーション。

## タイポグラフィ

### フォントファミリー

- `font-sans`: Geist Sans（メイン）
- `font-mono`: Geist Mono（数値、コード）

### フォントサイズ（Tailwind標準）

- `text-xs`: 0.75rem (12px)
- `text-sm`: 0.875rem (14px)
- `text-base`: 1rem (16px)
- `text-lg`: 1.125rem (18px)
- `text-xl`: 1.25rem (20px)
- `text-2xl`: 1.5rem (24px)
- `text-3xl`: 1.875rem (30px)
- `text-4xl`: 2.25rem (36px)
- `text-5xl`: 3rem (48px)
- `text-6xl`: 3.75rem (60px)
- `text-7xl`: 4.5rem (72px)

## アニメーション

### Built-in Animations

- `animate-fade-in`: フェードイン（0.6s）
- `animate-slide-in-up`: 下から上へスライド（0.6s）
- `animate-slide-in-left`: 左からスライド（0.6s）
- `animate-slide-in-right`: 右からスライド（0.6s）
- `animate-scale-in`: スケールイン（0.4s）

## ユーティリティクラス

### gradient-text
グラデーションテキスト（ターコイズ→シアン）
```html
<h1 class="gradient-text">グラデーションテキスト</h1>
```

### card-hover
カードのホバーエフェクト（スケール＋シャドウ）
```html
<div class="card-hover">カード</div>
```

### section-padding
セクションの標準パディング
```html
<section class="section-padding">セクション</section>
```

## スペーシング

レスポンシブスペーシングの推奨値:

- **モバイル**: `px-4 py-16`
- **タブレット**: `sm:px-6`
- **PC**: `lg:px-8 lg:py-24`

## 使用例

### プライマリボタン
```html
<button class="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full">
  ボタン
</button>
```

### セクション見出し
```html
<div>
  <span class="text-primary text-sm uppercase tracking-wider">Section Label</span>
  <h2 class="text-4xl font-bold mt-2">セクションタイトル</h2>
</div>
```

### カード
```html
<div class="bg-dark-bg-card border border-border rounded-lg p-6 card-hover">
  カードコンテンツ
</div>
```
