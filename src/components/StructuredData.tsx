export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://konishi-transport.jp/#organization",
        name: "小西運送株式会社",
        alternateName: "小西運送",
        url: "https://konishi-transport.jp",
        logo: "https://konishi-transport.jp/logo.png",
        image: "https://konishi-transport.jp/og-image.jpg",
        description:
          "三重県四日市市の小西運送株式会社。環境に配慮したクリーンな物流で、持続可能な社会を支えます。一般貨物輸送、重量物輸送、特殊輸送に対応。",
        address: {
          "@type": "PostalAddress",
          streetAddress: "大井の川町1丁目1594-5",
          addressLocality: "四日市市",
          addressRegion: "三重県",
          postalCode: "510-0846",
          addressCountry: "JP",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 34.9656,
          longitude: 136.6247,
        },
        telephone: "059-328-5248",
        email: "info@konishi-transport.jp",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        areaServed: [
          {
            "@type": "City",
            name: "四日市市",
          },
          {
            "@type": "State",
            name: "三重県",
          },
        ],
        foundingDate: "1995",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: 50,
        },
        slogan: "クリーンでハイテクな物流で、次の社会を支える",
      },
      {
        "@type": "Organization",
        "@id": "https://konishi-transport.jp/#organization",
        name: "小西運送株式会社",
        url: "https://konishi-transport.jp",
        logo: {
          "@type": "ImageObject",
          url: "https://konishi-transport.jp/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "059-328-5248",
          contactType: "customer service",
          areaServed: "JP",
          availableLanguage: ["Japanese"],
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://konishi-transport.jp/#website",
        url: "https://konishi-transport.jp",
        name: "小西運送株式会社",
        description:
          "三重県四日市市の小西運送株式会社。環境に配慮したクリーンな物流で、持続可能な社会を支えます。",
        publisher: {
          "@id": "https://konishi-transport.jp/#organization",
        },
        inLanguage: "ja",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ホーム",
            item: "https://konishi-transport.jp",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
