export async function GET() {
  const baseUrl = "https://tanayhingane03.vercel.app";
  const images: string[] = [
    "/clicks/c1.jpg",
    "/clicks/c10.jpg",
    "/clicks/c2.jpg",
    "/clicks/c5.jpg",
    "/clicks/c8.jpg",
    "/clicks/c9.jpg",
    "/portfolio.png",
    "/safebeam03.png",
    "/smartbalance.png",
    "/snake.png",
    "/snakess.png",
    "/snk.png",
    "/tpp.png",
    "/tppp.jpg",
  ];

  const imageSitemap = images
    .map(
      (image) => `
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${baseUrl}${image}</image:loc>
    </image:image>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${imageSitemap}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
