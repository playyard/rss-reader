import { FEEDS } from "lib/rss";
import Link from "next/link";

export default function Home() {
    return (

        <div className="px-0 py-12 max-w-xl mx-auto">
            <div class="pb-8 h-36 w-36 mx-auto">
                <img className="inline" src="/logo2.png" alt="image"></img>
            </div>
            <div className="mx-auto pt-4 pl-36">
            <h1 className="font-bold text-5xl mb-5">WhatsApps?</h1>
            </div>
      <div className="grid grid-cols-2 gap-4">
        {FEEDS.map((feed) => (
          <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
            <a className="hover:shadow-lg p-4 border border-gray-300 rounded-lg">
              {feed.title}
            </a>
          </Link>
        ))}
      </div>
    </div> 
  );
}
