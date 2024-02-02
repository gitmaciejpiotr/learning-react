import styles from './NavBar.module.scss';

const NavBar = (props) => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.icon}>
                <span className="fa fa-tasks" />
            </div>
            <div className={styles.sites}>
                <a href="/"className={styles.siteLink}>Home</a>
                <a href="/favorite"className={styles.siteLink}>Favourite</a>
                <a href="/about"className={styles.siteLink}>About</a>
            </div>
        </nav>
    );
};

export default NavBar;