import Image from "next/image";
import styles from "./Navbar.module.scss"; // Import SCSS module
import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 50;
      setIsScrolled(scrolledDown);

      // Close menu when scrolling back up
      if (!scrolledDown) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isOpen ? styles.isOpen : ""}`}>
      <div className={styles.navContainer}>
        
        {/* Expanding Background for Logo + Hamburger */}
        <div className={`${styles.logoContainer} ${isOpen ? styles.isOpen : ""}`}>
          <div className={styles.logo}>
            <Link href={"/"}>
            <Image
              src="/static/sociolite.svg"
              alt="Logo"
              width={100}
              height={0}
              style={{ height: "auto" }}
            />
            </Link>
           
          </div>

          {/* Hamburger (inside background) */}
          <div
  className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
  onClick={() => setIsOpen((prev) => !prev)}
>
  <span></span>
  <span></span>
  <span></span>
</div>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about">About</Link>

          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Desktop Social Icons (Hidden on Scroll) */}
        <div className={`${styles.socialIcons} ${isScrolled ? styles.hidden : ""}`}>
          <a href="https://www.facebook.com/profile.php?id=61574677020760" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a> */}
          <a href="https://www.instagram.com/sociolite.co" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={styles.mobileMenu}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

        {/* Mobile Social Icons */}
        <div className={styles.mobileSocialIcons}>
          <a href="https://www.facebook.com/profile.php?id=61574677020760" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a> */}
          <a href="https://www.instagram.com/sociolite.co" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}
