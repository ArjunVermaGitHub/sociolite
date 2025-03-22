import Logo from './Logo'; // Your logo component
import Sociolite from './Sociolite'; // Your SVG image component
import styles from "./Header.module.scss"
import style from "../../styles/float.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo className='test'/>
      <Sociolite />
    </div>
  );
};

export default Header;
