import React, { useState } from 'react';
import closeButton from '../../Assets/Images/closeButton.png';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';
import styles from './Todo.module.css';

const Todo = ({ todo, deleteTodo, isCompleted, id, completeTodo }) => {
    const [modalVisibility, setModalVisibility] = useState(false);
    return <div className={styles.todo}>
        <input type='checkbox' onChange={() => completeTodo(id)}/>
        <span className={`${styles.todoDescription} ${isCompleted ? styles.completedTodoDescription : styles.unCompletedTodoDescription}`}>{todo}</span>
        <img src={closeButton} alt='delete' onClick={() => setModalVisibility(true)} />
        {modalVisibility && <ConfirmationModal setModalVisibility={setModalVisibility} deleteTodo={deleteTodo} id={id} />}
    </div>
}

export default Todo;