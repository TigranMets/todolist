import React, { useState } from 'react';
import closeButton from '../../Assets/Images/closeButton.png';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';
import styles from './Todo.module.css';

const Todo = ({ todo }) => {
    const [modalVisibility, setModalVisibility] = useState(false);

    return <div className={styles.todo}>
        <input type='checkbox' />
        <span className='todoDescription'>{todo}</span>
        <img src={closeButton} alt='delete' onClick={() => setModalVisibility(true)} />
        {modalVisibility && <ConfirmationModal setModalVisibility={setModalVisibility} todo={todo} deleteTodo={deleteTodo}/>}
    </div>
}

export default Todo;