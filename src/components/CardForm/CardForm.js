import styles from './CardForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CardForm = props => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { title, columnId: props.columnId } });
        console.log('ADD_CARD' , { type: 'ADD_CARD', title, columnId: props.columnId })
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