import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();
  const toggleFavourite = e => {
      e.preventDefault();
      console.log(props.card);
      dispatch(toggleCardFavourite({...props.card}));
  }

  return (
    <li className={styles.card}>
      { props.title }
      <button className={styles.starButton} onClick={e => toggleFavourite(e)}>
        <span className={clsx(props.card.isFavourite && 'fa fa-star', props.card.isFavourite === false && 'fa fa-star-o', props.card.isFavourite && styles.active)}></span>
      </button>
    </li>
  );
};

export default Card;