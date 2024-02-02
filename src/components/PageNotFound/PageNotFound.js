import styles from './PageNotFound.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const PageNotFound = () => {
    return (
        <div className={styles.content}>
            <PageTitle>404 NOT FOUND</PageTitle>
        </div>
    );
};

export default PageNotFound;