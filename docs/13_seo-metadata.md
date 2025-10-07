# 13. SEO・メタデータ実装

## 概要
検索エンジン最適化とソーシャルメディア共有のためのメタデータを実装する。

## 目的
- 検索エンジンでの上位表示
- 地域検索最適化（四日市市、三重県）
- ソーシャルメディアでの適切な表示

## SEO要件（REQUIREMENTS.md 6.3）

### 基本メタタグ
- タイトル: 小西運送会社 | クリーンでハイテクな物流 | 三重県四日市市
- ディスクリプション: 三重県四日市市の小西運送会社。環境に配慮したクリーンな物流で、持続可能な社会を支えます。
- キーワード: 運送会社, 物流, 四日市市, 三重県, 環境配慮, エコドライブ

### OGP（Open Graph Protocol）
- og:title
- og:description
- og:image（OGP画像作成）
- og:url
- og:type: website

### Twitter Card
- twitter:card: summary_large_image
- twitter:title
- twitter:description
- twitter:image

### 構造化データ（Schema.org）
- Organization
- LocalBusiness
- PostalAddress
- ContactPoint

### 地域SEO
- 地域キーワード: 四日市市、三重県
- NAP（Name, Address, Phone）の一貫性
- 営業時間の明記

## Todo

- [x] layout.tsxにメタデータ設定
- [ ] OGP画像の作成（1200x630px）
- [ ] Favicon生成（複数サイズ）
- [x] 構造化データJSON-LDの作成
- [x] robots.txtの作成
- [x] sitemap.xmlの作成
- [x] メタディスクリプションの最適化
- [x] titleタグの最適化
- [x] canonical URLの設定
- [ ] SEO検証ツールでチェック

## 構造化データ例
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "小西運送会社",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "大井の川町1丁目1594-5",
    "addressLocality": "四日市市",
    "addressRegion": "三重県",
    "postalCode": "510-0846"
  },
  "telephone": "059-328-5248"
}
```

## 完了条件

- [ ] すべてのメタタグが設定されている
- [ ] OGP画像が作成・設定されている
- [ ] 構造化データが正しく実装されている
- [ ] Google検索でプレビューが適切に表示される
- [ ] ソーシャルメディアで共有時に適切に表示される

## 参照
- REQUIREMENTS.md - SEO要件 (6.3)
