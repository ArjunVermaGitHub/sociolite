import Image from 'next/image';
import styles from './about.module.scss';
import { useEffect, useRef, useState } from 'react';

export default function AboutIntro() {

  const divRef = useRef(null);
  const spanRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setPosition(rect);
        console.log('Div:', rect);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const [finalPosition,setFinalPosition] = useState('static')
  useEffect(()=>{
    console.log(position.y , window.innerHeight -  (145 + (spanRef?.current?.getBoundingClientRect().height || 0)))
    setFinalPosition(position.height < position.top || (position.y < window.innerHeight -  (145 + (spanRef?.current?.getBoundingClientRect().height || 0))) ? 'static' : 'fixed')
  },[scrollY])

  console.log({finalPosition})

  return (
    <>
     <div className={styles["about-intro"]}>
      {/* Background Image */}
      <Image
        src="/static/cityscape-ai.webp"
        alt="Cityscape"
        layout="fill" // Ensures it covers the container
        objectFit="cover" // Behaves like a background image
        className={styles["background-image"]}
        priority // Ensures it loads quickly
      />

      {/* Text Content */}
        <h1>Conquering fears & building social confidence through structured learning</h1>
      </div>
      <div className='home page-container' style={{height:'500px'}}>
        <h1 className='green'>
          We teach dating, etiquette, public speaking through smart tech products.
          You bring the courage. We’ll guide the rest.
        </h1>
        We’re Sociolite.
      </div>
      <div ref={divRef} className={
        styles['static-page'] + 
        ' page-container'
      }

      >
        {console.log(spanRef?.current?.getBoundingClientRect().height)}
        <blockquote
          ref={spanRef}
          style={{
            // transform: `translateY(${scrollY}px)`,
            position: finalPosition,
            // top: 0,
            bottom: 40,
            zIndex: -2,
          }}
        >
          “I learnt a lot of things via Sociolite. My dreams were realized thanks to your program.”<br></br>
          <p className={styles['quote-user']}>-Ankur Thakur, startup founder</p>
        </blockquote>
      </div>
      <div
      style={{height:'500px',backgroundColor:'red'}}>
        NOW THIS DIV HAS SOME CRAZY RANDOM TEXT
      </div>
    </>
   
  );
}
