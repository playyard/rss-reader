import { FEEDS, getFeed } from "lib/rss";
import { format, endOfToday, isSameDay, parseISO } from "date-fns";
import { React } from "react";

export default function Feed({ feed, items }) {
    let date1 = endOfToday();
    let date2 = 'date1';
    console.log(date1);
    return (
        <div className="px-6 py-12 max-w-xl mx-auto">
            <h1 className="font-bold text-5xl mb-12">{feed.title}</h1>
            <div className="space-y-4">
                {items.map((item) => (
                    <a
                        key={item.link}
                        className="block p-4 border border-gray-300 hover:shadow-lg rounded-lg"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="font-bold">{item.title}</div>
                        <div className="font-bold">{format(new Date(item.isoDate), "PPP")} { format(new Date(item.isoDate), "PPP") === format(date1, "PPP") && '🔥'}</div>
                        <script type="text/javascript">{
                                function tutu() {
                                var newinfo;
                                if (format(new Date(item.isoDate), "PPP") == format(date1, "PPP")) {newinfo = "🔥"} else {"null"} return String(newinfo);
                                console.log(newinfo)}
                        }</script> 
                    </a>
                ))}
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    return {
        paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const feed = FEEDS.find((feed) => feed.slug === params.slug);
    const detailedFeed = await getFeed(feed.url);

    return {
        props: {
            feed,
            items: detailedFeed.items,
        },
        revalidate: 1,
    };
}
