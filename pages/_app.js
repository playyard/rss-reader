import Link from "next/link";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="p-6 flex justify-between items-center">
        <Link href="/">
          <img class="inline" src="/favicon.ico" alt="button"</img>
        </Link>
        <div className="flex space-x-4">
          <a
            href="https://github.com/andreaskeller/rss-reader"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
