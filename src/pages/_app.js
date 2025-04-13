import Head from 'next/head';
import '../styles/globals.scss';
import { useEffect } from 'react';
import Layout from '../components/Layout'; // Ensure this exists and includes your navbar

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
      const toggleNav = () => navLinks.classList.toggle("show");
      hamburger.addEventListener("click", toggleNav);

      return () => hamburger.removeEventListener("click", toggleNav); // Cleanup
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/static/letter-logo.png" />
        <title>Sociolite | Tech tools for social skill development</title>
        <link rel="canonical" href="https://sociolite.co/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sociolite | Tech tools for social skill development" />
        <meta property="og:description" content="Sociolite | Building skills in networking, etiquette, social relationships, and dating" />
        <meta property="og:url" content="https://sociolite.co/" />
        <meta property="og:site_name" content="Sociolite" />
        <meta property="og:image" content="https://www.sociolite.co/static/sociolite.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KPDV84L6');`
          }}
        >
        </script>


        <meta name="description" content="Learn how to build social connections and improve your life, all with Sociolite." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Wrap pages with a Layout to persist the Navbar */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
