import React from 'react';
import styles from './ConfirmationModal.module.css';

const ConfirmationModal = () => {
    return (
        <div className={styles.confirmationModalWrapper}>
            <div className={styles.confirmationModal}>
                <p className={styles.confirmationQuestion}>Are you sure you want to delete?</p>
                <span>Yes</span>
                <span className={styles.no}>No</span>
            </div>
        </div>
    )
}

export default ConfirmationModal;