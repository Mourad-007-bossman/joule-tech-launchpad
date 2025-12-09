import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = "Joule Tech | Électricité Industrielle & Pompage à Tanger",
  description = "Expert en installation électrique industrielle, stations de pompage et automatismes à Tanger. Programmation automate, maintenance industrielle, câblage armoire. Devis gratuit.",
  keywords = "électricité industrielle Tanger, installation station pompage, programmation automate Tanger, câblage armoire électrique, maintenance industrielle, Sofrel S4W, société installation électrique Tanger",
  image = "https://joule-tech.ma/og-image.jpg",
  url = "https://joule-tech.ma",
  type = "website",
}: SEOProps) {
  const siteName = "Joule Tech";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Joule Tech" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags */}
      <meta name="geo.region" content="MA-01" />
      <meta name="geo.placename" content="Tanger" />
      <meta name="geo.position" content="35.7595;-5.8340" />
      <meta name="ICBM" content="35.7595, -5.8340" />
    </Helmet>
  );
}

// JSON-LD Schema for LocalBusiness
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Joule Tech",
    "url": "https://joule-tech.ma",
    "telephone": "+212663339585",
    "email": "info@joule-tech.ma",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tanger",
      "addressCountry": "MA"
    },
    "description": "Joule Tech — installation et maintenance électrique et station de pompage à Tanger. Programmation automate, maintenance industrielle, câblage armoire.",
    "areaServed": "Tanger, Maroc",
    "openingHours": "Mo-Fr 08:00-18:00",
    "image": "https://joule-tech.ma/og-image.jpg",
    "priceRange": "$$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.7595",
      "longitude": "-5.8340"
    },
    "sameAs": [
      "https://www.facebook.com/jouletech",
      "https://www.linkedin.com/company/jouletech"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
