import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite, deleteCard } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();
  const toggleFavourite = e => {
      e.preventDefault();
      dispatch(toggleCardFavourite({...props.card}));
  }
  const deleteClickedCard = e => {
    e.preventDefault();
    dispatch(deleteCard({...props.card}));
  }

  return (
    <li className={styles.card}>
      { props.title }
      <button className={styles.starButton}>
        <span onClick={e => toggleFavourite(e)} className={clsx(styles.icon, styles.iconStar, props.card.isFavourite && 'fa fa-star', props.card.isFavourite === false && 'fa fa-star-o', props.card.isFavourite && styles.active)}></span>
        <span onClick={e => deleteClickedCard(e)} className={clsx(styles.icon, styles.iconTrash, 'fa fa-trash')}></span>
      </button>
    </li>
  );
};

export default Card;