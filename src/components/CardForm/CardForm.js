import styles from './CardForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { addCard } from '../../redux/cardsRedux';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CardForm = props => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch({ type: 'ADD_CARD', payload: { id: shortid(), columnId: props.columnId, title: title }});
        dispatch(addCard({ title, columnId: props.columnId }));
        // console.log('addCard', { id: shortid(), columnId: props.columnId, title: title })
        setTitle('');
    };
    

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>ADD CARD</Button>
        </form>
	);
};

export default CardForm;