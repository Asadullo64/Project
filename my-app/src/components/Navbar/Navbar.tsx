import { Link } from 'react-router-dom';
import styles from "./style.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
            <div className={styles['navbar-brand']}>Historical Places</div>
            <div className={styles['navbar-links']}>
                <Link className={styles['navbar-link']} to="/">Home</Link>
            </div>
        </nav>
  );
};
