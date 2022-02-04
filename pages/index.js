import { FEEDS } from "lib/rss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-0 py-12 max-w-xl mx-auto">
        <h1 className="border-pink-400 border-b-4 font-bold text-5xl mb-5 pr-0">WhatsApps?</h1>
      <div className="grid grid-cols-2 gap-4">
        {FEEDS.map((feed) => (
          <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
            <a className="p-4 border border-gray-200 hover:border-gray-500 rounded-lg">
              {feed.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
