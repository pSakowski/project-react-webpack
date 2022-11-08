import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ColumnForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
        console.log('dispatch', ({ type: 'ADD_COLUMN', newColumn: { title, icon } }))
        setTitle('');
        setIcon('');
     };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            {/* Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} /> */}

            <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} /> 
            <span>Icon:</span>  <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;