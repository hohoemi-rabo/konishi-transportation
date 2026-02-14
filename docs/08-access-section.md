# 08: アクセスセクション

## 概要

Google Maps 埋め込みと住所テキストを表示するセクション。

## 要件

- Google Maps 埋め込み（iframe）
- 住所: 三重県四日市市大井の川町1丁目1594番地5
- 最寄り駅・ICなどのアクセス情報（※クライアント確認後に追加）
- 地図はレスポンシブでアスペクト比を維持

## 技術ポイント

- Google Maps iframe は `loading="lazy"` で遅延読み込み
- iframe は固定アスペクト比で表示（Tailwind の `aspect-video` 等）

## 参照

- REQUIREMENTS.md §5.6 アクセス

## Todo

- [ ] `src/components/sections/AccessSection.tsx` 作成
- [ ] Google Maps iframe 埋め込み（住所ベース）
- [ ] 住所テキスト表示
- [ ] iframe の遅延読み込み（`loading="lazy"`）
- [ ] レスポンシブ対応（地図のアスペクト比維持）
- [ ] スクロールフェードインアニメーション
