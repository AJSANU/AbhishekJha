import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const title = "Abhishek Jha — Senior Software Engineer · Cloud & AI";
  const description =
    "Senior Software Developer at Oracle Cloud Infrastructure. Building intelligent cloud products, thoughtful interfaces, and reliable systems. Previously Teradata and Amazon.";
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://1abhishek1998.netlify.app"
  ).replace(/\/$/, "");
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f7f6f2" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:image"
          content={`${siteUrl}/assets/portfolio-social.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${siteUrl}/assets/portfolio-social.png`}
        />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="apple-touch-icon"
          href="/assets/icons/favicon/ABHISHEKPNG.png"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
