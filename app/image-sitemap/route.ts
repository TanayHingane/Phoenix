import { MetadataRoute } from "next";

const images: string[] = [
  "D:\\Phoenix\\public\\clicks\\c1.jpg",
  "D:\\Phoenix\\public\\clicks\\c10.jpg",
  "D:\\Phoenix\\public\\clicks\\c2.jpg",
  "D:\\Phoenix\\public\\clicks\\c5.jpg",
  "D:\\Phoenix\\public\\clicks\\c8.jpg",
  "D:\\Phoenix\\public\\clicks\\c9.jpg",
  "D:\\Phoenix\\public\\portfolio.png",
  "D:\\Phoenix\\public\\safebeam03.png",
  "D:\\Phoenix\\public\\smartbalance.png",
  "D:\\Phoenix\\public\\snake.png",
  "D:\\Phoenix\\public\\snakess.png",
  "D:\\Phoenix\\public\\snk.png",
  "D:\\Phoenix\\public\\tpp.png",
  "D:\\Phoenix\\public\\tppp.jpg",
];

export async function GET() {
  const baseUrl = "https://tanayhingane03.vercel.app";
  const imageSitemap = images
    .map((image) => {
      const imageUrl = image.replace("D:\\Phoenix\\public", baseUrl);
      return `
      <url>
        <loc>${baseUrl}</loc>
        <image:image>
          <image:loc>${imageUrl}</image:loc>
        </image:image>
      </url>
    `;
    })
    .join("");

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${imageSitemap}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
