import styles from './Favourite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const Favourite = () => {
    return (
        <div className={styles.content}>
            <PageTitle>FAVOURITE</PageTitle>
            <p>Lorem ipsum</p>
        </div>
    );
};

export default Favourite;