import "./globals.css";

const siteUrl = "https://icetzw.co.zw";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ICE T Barbershop | Premium Barbershop in Victoria Falls, Zimbabwe",
    template: "%s | ICE T Barbershop",
  },
  description:
    "Looking for a barbershop in Victoria Falls, Zimbabwe? Visit ICE T Barbershop at Landela Complex for precision fades, classic cuts, beard grooming and a premium grooming experience.",
  applicationName: "ICE T Barbershop",
  keywords: [
    "barbershop Victoria Falls",
    "barber Victoria Falls Zimbabwe",
    "best barbershop in Victoria Falls",
    "men's haircut Victoria Falls",
    "haircut Victoria Falls",
    "fade haircut Victoria Falls",
    "taper fade Zimbabwe",
    "beard grooming Victoria Falls",
    "ICE T Barbershop",
    "barbershop Zimbabwe",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ICE T Barbershop",
    locale: "en_ZW",
    title: "ICE T Barbershop | Premium Grooming in Victoria Falls",
    description:
      "Precision fades, classic cuts and considered grooming at Landela Complex, Victoria Falls, Zimbabwe.",
    images: [{
      url: "/ice-t-clean.jpg",
      width: 1242,
      height: 698,
      alt: "ICE T Barbershop interior in Victoria Falls, Zimbabwe",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICE T Barbershop | Victoria Falls, Zimbabwe",
    description: "Precision fades, classic cuts and premium grooming in Victoria Falls, Zimbabwe.",
    images: ["/ice-t-clean.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "@id": siteUrl + "/#barbershop",
  name: "ICE T Barbershop",
  url: siteUrl,
  image: siteUrl + "/ice-t-clean.jpg",
  description: "ICE T Barbershop offers precision fades, classic haircuts, beard grooming and a premium barbershop experience in Victoria Falls, Zimbabwe.",
  telephone: "+263775897664",
  priceRange: "USD $5–$30",
  address: {
    "@type": "PostalAddress",
    streetAddress: "136 NRZ Lawley Road, Landela Complex",
    addressLocality: "Victoria Falls",
    addressRegion: "Matabeleland North",
    addressCountry: "ZW",
  },
  areaServed: { "@type": "City", name: "Victoria Falls" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "08:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "19:00" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Barbering and grooming services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Taper Fade" },
      { "@type": "OfferCatalog", name: "Fade Haircut" },
      { "@type": "OfferCatalog", name: "Chiskop" },
      { "@type": "OfferCatalog", name: "Brush Cut" },
      { "@type": "OfferCatalog", name: "English Cut" },
      { "@type": "OfferCatalog", name: "Beard Design" },
      { "@type": "OfferCatalog", name: "Royal Shave" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}