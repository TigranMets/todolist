import React from 'react';
import styles from './AddTaskForm.module.css';

const ConfirmationModal = () => {
  return (
    <div className={styles.confirmationModal}>
        <p>Are you sure you want to delete?</p>
        <span>Yes</span>
        <span>No</span>
    </div>
  )
}

export default ConfirmationModal;