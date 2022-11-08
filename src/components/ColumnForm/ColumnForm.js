import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';

const ColumnForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        console.log('dispatch', ({ type: 'ADD_COLUMN', newColumn: { title, icon } }))
        setTitle('');
        setIcon('');
     };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
            <span>Icon:</span>  <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;