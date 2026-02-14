# 11: パフォーマンス最適化

## 概要

Lighthouse 全カテゴリ90点以上を目標に、パフォーマンス・アクセシビリティ・ベストプラクティスを最適化する。

## 要件

- Lighthouse スコア: 90点以上（Performance, Accessibility, Best Practices, SEO）
- Core Web Vitals 準拠（LCP, FID/INP, CLS）
- 初回表示: 2秒以内
- 画像の最適化（`next/image`、WebP/AVIF自動配信）
- アニメーションは `will-change` / GPU アクセラレーション活用
- フォントのセルフホスト（レイアウトシフト防止）

## チェック項目

### Performance

- 画像に `width`/`height` 明示（CLS回避）
- ヒーロー画像に `priority` 属性（LCP最適化）
- ブラウザ専用コンポーネントは `next/dynamic` + `{ ssr: false }`
- 不要なJSバンドルの排除

### Accessibility

- 色コントラスト比（WCAG 2.1 AA基準）
- 画像の `alt` テキスト
- キーボードナビゲーション対応
- `aria-label` の適切な付与

### Best Practices

- HTTPS対応
- コンソールエラー無し
- 適切なキャッシュヘッダー

## 参照

- REQUIREMENTS.md §10 パフォーマンス要件
- CLAUDE.md パフォーマンス最適化セクション

## Todo

- [ ] 全画像の `next/image` 化確認
- [ ] ヒーロー画像の `priority` 設定
- [ ] 動的インポートの適用確認（Framer Motion、パーティクル等）
- [ ] フォント最適化（`next/font` + `display: swap`）
- [ ] Lighthouse 計測・スコア確認
- [ ] Core Web Vitals 確認（LCP, INP, CLS）
- [ ] アクセシビリティ監査（色コントラスト、alt、キーボード操作）
- [ ] バンドルサイズ分析（不要な依存の除去）
