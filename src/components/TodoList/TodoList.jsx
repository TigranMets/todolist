import React from 'react';
import styles from './TodoList.module.css';
import closeButton from '../../Assets/Images/closeButton.png';

const TodoList = () => {
    return (
        <div className={styles.todos}>
            <input type='checkbox' />
            <span className='todoDescription'>researching, designing, implementing software programs.</span>
            <img src={closeButton} alt='close' />
        </div>
    )
}

export default TodoList;