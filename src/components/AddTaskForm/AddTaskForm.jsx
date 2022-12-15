import React, { useState } from 'react';
import styles from './AddTaskForm.module.css';

const AddTaskForm = ({ createTodo }) => {
  const [todoValue, setTodoValue] = useState('');

  const handleSubmit = () => {
    if (todoValue.length < 54) {
      createTodo(todoValue);
      setTodoValue('');
    }
  }
  return <form>
    <p>Task</p>
    <div>
      <input className={styles.addTaskInput} type='text' onChange={(e) => setTodoValue(e.target.value)} value={todoValue} placeholder='Write here' />
      <button type='button' onClick={handleSubmit}>Add</button>
    </div>
    {todoValue.length > 54 && <span className={styles.error}>Task content can contain max 54 characters.</span>}
  </form>
};

export default AddTaskForm;