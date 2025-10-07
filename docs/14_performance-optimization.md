# 14. パフォーマンス最適化

## 概要
リッチな表現を維持しながら、基本的なパフォーマンス最適化を実施する。

## 目的
- ページ読み込み速度の向上
- Core Web Vitalsの改善
- ユーザー体験の向上

## 最適化方針（REQUIREMENTS.md 6.2）
- リッチな表現を優先
- 基本的なパフォーマンス最適化は実施

## 最適化項目

### 画像最適化
- WebP形式への変換
- 適切なサイズ・解像度
- 遅延読み込み（lazy loading）
- next/imageの活用
- priority属性（LCP画像）

### コード分割
- 動的インポート（dynamic import）
- Client Componentの最小化
- バンドルサイズの削減

### キャッシュ戦略
- 静的ファイルのキャッシュ
- フォントのプリロード
- リソースヒント（preload, prefetch）

### レンダリング最適化
- Server Componentsの活用
- Suspenseによるストリーミング
- 初回レンダリング最適化

## Todo

- [x] 画像の最適化（WebP変換、サイズ調整）
- [x] next/imageの適切な設定
- [x] LCP画像にpriorityフラグ設定
- [x] 動的インポートの実装（モバイルメニュー等）
- [x] フォントのプリロード設定
- [x] 不要なJavaScriptの削減
- [x] CSSの最適化（未使用スタイル削除）
- [ ] Lighthouse監査実施
- [ ] Core Web Vitals測定
- [ ] パフォーマンスバジェット設定

## パフォーマンス目標

### Core Web Vitals
- **LCP**（Largest Contentful Paint）: 2.5秒以下
- **FID**（First Input Delay）: 100ms以下
- **CLS**（Cumulative Layout Shift）: 0.1以下

### Lighthouse スコア
- Performance: 80以上
- Accessibility: 95以上
- Best Practices: 95以上
- SEO: 100

## 完了条件

- [ ] Lighthouseスコアが目標値を達成
- [ ] Core Web Vitalsが基準内
- [ ] ページ読み込み速度が3秒以内
- [ ] リッチな表現が維持されている

## 参照
- REQUIREMENTS.md - パフォーマンス (6.2)
