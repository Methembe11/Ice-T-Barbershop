export default function sitemap() {
  return [
    {
      url: "https://icetzw.co.zw",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://icetzw.co.zw/team",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}