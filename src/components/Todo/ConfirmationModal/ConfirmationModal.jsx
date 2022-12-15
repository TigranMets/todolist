import React from 'react';
import styles from './ConfirmationModal.module.css';

const ConfirmationModal = (props) => {
    const handleDelet = () => {
        props.setModalVisibility(false);
        props.deleteTodo(props.id);
    }
    return (
        <div className={styles.confirmationModalWrapper}>
            <div className={styles.confirmationModal}>
                <p className={styles.confirmationQuestion}>Are you sure you want to delete?</p>
                <span onClick={handleDelet}>Yes</span>
                <span className={styles.no} onClick={() => props.setModalVisibility(false)}>No</span>
            </div>
        </div>
    )
}

export default ConfirmationModal;