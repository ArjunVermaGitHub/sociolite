import Head from 'next/head';
import '../styles/globals.scss'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {


  useEffect(()=>{
    document.addEventListener("DOMContentLoaded", function() {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", function() {
          navLinks.classList.toggle("show");
      });
  });
  },[])
       

  return (
    <>
    <Head>
        <link rel="icon" href="/static/letter-logo.png"/>
        <title>Sociolite</title>
        <meta name="description" content="Learn how to build social connections and improve your life, all with sociolite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <Component {...pageProps} />

    </>
);
}
