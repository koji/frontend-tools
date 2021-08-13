import { SitemapStream, streamToPromise } from 'sitemap';
import config from '../../../site.config';

export default async (req: any, res: any) => {
  try {
    const smStream = new SitemapStream({
      hostname: config.siteMeta.url,
      // cacheTime: 600000,
    });

    // List of posts
    // const post_slugs = ["news-1", "news-2", "news-3"];
    const postSlugs = ['/'];

    // Create each URL row
    postSlugs.forEach((post) => {
      smStream.write({
        url: `${post}`,
        changefreq: 'daily',
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
