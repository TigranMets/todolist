import React from 'react';
import styles from './AddTaskForm.module.css';

const AddTaskForm = () => {
  return <form>
    <p>Task</p>
    <div>
      <input className={styles.addTaskInput} type='text' placeholder='Write here' />
      <button>Add</button>
    </div>
  </form>
};

export default AddTaskForm;