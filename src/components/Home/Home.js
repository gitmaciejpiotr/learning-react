import styles from './Home.module.scss'
import Hero from '../Hero/Hero';
import Lists from '../Lists/Lists';

const Home = () => {
    return (
        <div className={styles.content}>
            <Hero />
            <Lists />
        </div>
    );
};

export default Home;