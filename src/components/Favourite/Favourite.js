import styles from './Favourite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavouriteCards } from '../../redux/cardsRedux';

const Favourite = () => {
    const cards = useSelector(getFavouriteCards);

    return (
        <div className={styles.content}>
            <PageTitle>FAVOURITE</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} card={card} />)}
                </ul>
            </article>
        </div>
    );
};

export default Favourite;