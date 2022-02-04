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
  {
    slug: "businessofapps",
    title: "BusinessOfApps",
    url: "https://www.businessofapps.com/feed",
  },  
  {
    slug: "smartlyio",
    title: "Smartly.io",
    url: "https://www.smartly.io/blog/rss.xml",
  },
  {
    slug: "cxl",
    title: "CXL",
    url: "https://cxl.com/feed",
  },

  {
    slug: "mobiledevmemo",
    title: "MobileDevMemo",
    url: "https://mobiledevmemo.com/feed",
  },
  {
    slug: "af",
    title: "Appsflyer",
    url: "https://www.appsflyer.com/feed",
  },
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
