// Schema.org structured data helpers for FIMI-Service

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FIMI-Service",
  "url": "https://fimi-service.de",
  "logo": "https://fimi-service.de/logo.png",
  "description": "Professionelle Reinigungsfirma in Niederbayern für Gebäudereinigung, Büroreinigung und Facility Management",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kellerstr. 39",
    "addressLocality": "Landshut",
    "postalCode": "84036",
    "addressRegion": "Bayern",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-174-722-5473",
    "contactType": "customer service",
    "availableLanguage": ["de"],
    "areaServed": ["DE"]
  },
  "sameAs": [
    "https://www.facebook.com/fimi-service",
    "https://www.instagram.com/fimi-service"
  ]
};

export const localBusinessSchema = (location: {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  lat: number;
  lng: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://fimi-service.de/#location-${location.city.toLowerCase()}`,
  "name": `FIMI-Service ${location.city}`,
  "image": "https://fimi-service.de/og-image.jpg",
  "description": `Professionelle Reinigungsfirma und Gebäudereinigung in ${location.city}. Zuverlässige Reinigungsdienste für Unternehmen in Niederbayern.`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": location.address,
    "addressLocality": location.city,
    "postalCode": location.postalCode,
    "addressRegion": "Bayern",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": location.lat,
    "longitude": location.lng
  },
  "url": `https://fimi-service.de`,
  "telephone": "+49-174-722-5473",
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "95"
  }
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
  category: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://fimi-service.de${service.url}`,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "FIMI-Service",
    "url": "https://fimi-service.de"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Landshut",
      "containedIn": {
        "@type": "State",
        "name": "Bayern"
      }
    },
    {
      "@type": "City",
      "name": "Regensburg"
    },
    {
      "@type": "City",
      "name": "Freising"
    },
    {
      "@type": "State",
      "name": "Niederbayern"
    }
  ],
  "serviceType": service.category,
  "url": `https://fimi-service.de${service.url}`,
  "image": "https://fimi-service.de/og-image.jpg"
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://fimi-service.de${item.url}`
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "image": article.image || "https://fimi-service.de/og-image.jpg",
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Organization",
    "name": "FIMI-Service"
  },
  "publisher": {
    "@type": "Organization",
    "name": "FIMI-Service",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fimi-service.de/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://fimi-service.de${article.url}`
  }
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
