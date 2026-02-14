# 10: SEO・メタデータ・構造化データ

## 概要

検索エンジン最適化、OGP設定、LocalBusiness 構造化データを実装する。

## 要件

### メタデータ

| 項目        | 内容                                                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| title       | 小西運送株式会社 \| クリーンでハイテクな物流で、次の社会を支える                                                                   |
| description | 三重県四日市市の小西運送株式会社。環境に配慮したクリーンな物流と最先端テクノロジーで、地域の皆さまと共に持続可能な未来を創造します。 |

### OGP

- `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- OGP画像: ヒーローセクションのスクリーンショットまたは専用画像

### 構造化データ（JSON-LD）

- スキーマ: `LocalBusiness`
- 会社名、住所、電話番号、エリア等を構造化

## 技術ポイント

- `layout.tsx` の `metadata` オブジェクトで静的メタデータを定義
- JSON-LD は `<script type="application/ld+json">` で `layout.tsx` に埋め込み

## 参照

- REQUIREMENTS.md §9 SEO・メタ情報
- REQUIREMENTS.md §2 クライアント情報

## Todo

- [ ] `layout.tsx` に `metadata` オブジェクト設定（title, description, OGP）
- [ ] OGP画像の作成・配置
- [ ] LocalBusiness JSON-LD 構造化データの実装
- [ ] `robots.txt` の作成
- [ ] `sitemap.xml` の生成設定
- [ ] セマンティック HTML の確認（適切な見出し階層、`<main>`, `<section>`, `<nav>` 等）
