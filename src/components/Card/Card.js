import styles from './Card.module.scss'
import clsx from 'clsx';

import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();

    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
     };

     const unLike = e => {
        e.preventDefault();
        dispatch(removeCard(props.id))
     }

    return (
    <div>
        <li className={styles.card}>{props.title}
        <button onClick={toggleFavorite} className={clsx(styles.button, props.isFavorite && styles.isActive)}><i className="fa fa-star-o"></i></button>
        <button onClick={unLike} className={clsx(styles.remove)}><i className="fa-trash"></i></button>
        </li>
    </div>
    );
};

export default Card;