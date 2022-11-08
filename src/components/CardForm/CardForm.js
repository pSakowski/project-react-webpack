import styles from './CardForm.module.scss';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';


const CardForm = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { title, shortid } });
        console.log('dispatch', ({ type: 'ADD_CARD', payload: { title } }))
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