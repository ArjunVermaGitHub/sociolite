// components/Header.js
import Image from 'next/image';
import styles from './Logo.module.scss';


const Header = () => {

  return (
    // <header className={styles.header} >
      <div className={styles.topLeftImage}>
        <Image 
        className={styles['logo']}
          src="/static/logo.png" 
          alt="Logo" 
            width={200} 
            height={200} 
        />
      </div>
     
    // </header>
  );
};

export default Header;
