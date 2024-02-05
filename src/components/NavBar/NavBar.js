import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.icon}>
                <span className="fa fa-tasks" />
            </div>
            <ul className={styles.sites}>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.siteLink}
                    to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.siteLink}
                    to="/favorite">Favorite</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.siteLink}
                    to="/about">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;