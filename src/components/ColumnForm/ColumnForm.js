import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ColumnForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        // dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
        dispatch(addColumn({ title, icon, listId: props.listId }));
        // console.log('addColumn:', { title, icon })
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