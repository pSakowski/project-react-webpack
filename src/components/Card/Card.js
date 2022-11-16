import styles from './Card.module.scss'
import clsx from 'clsx';

import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
     };

    return (
    <div>
        <li className={styles.card}>{props.title}
        <button onClick={handleClick} className={clsx(styles.button, props.isFavorite && styles.isActive)}><i className="fa fa-star-o"></i></button>
        </li>
    </div>
    );
};

export default Card;