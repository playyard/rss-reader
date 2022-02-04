import Link from "next/link";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="p-6 flex justify-between items-center">
        <Link href="/">
          <a className="font-bold"> </a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
