import Parser from "rss-parser";

export const FEEDS = [
  {
    slug: "adexchanger",
    title: "AdExchanger",
    url: "https://www.adexchanger.com/feed",
  },
  {
    slug: "gopractice",
    title: "GoPractice.ru",
    url: "https://gopractice.ru/feed",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
