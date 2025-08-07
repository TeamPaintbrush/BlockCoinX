import React, { useEffect, useState } from 'react';
import { ToastData } from './ToastProvider';
import styles from './Toast.module.css';

interface ToastProps {
  toast: ToastData;
  onRemove: () => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(onRemove, 300); // Wait for exit animation
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      default:
        return 'ℹ️';
    }
  };

  const toastClass = `
    ${styles.toast} 
    ${styles[toast.type]} 
    ${isVisible ? styles.visible : ''} 
    ${isRemoving ? styles.removing : ''}
  `.trim();

  return (
    <div
      className={toastClass}
      role="alert"
      aria-live="assertive"
    >
      <div className={styles.toastContent}>
        <div className={styles.toastIcon} aria-hidden="true">
          {getIcon()}
        </div>
        
        <div className={styles.toastText}>
          <div className={styles.toastTitle}>{toast.title}</div>
          {toast.message && (
            <div className={styles.toastMessage}>{toast.message}</div>
          )}
        </div>

        <div className={styles.toastActions}>
          {toast.action && (
            <button
              className={styles.actionButton}
              onClick={toast.action.onClick}
              type="button"
            >
              {toast.action.label}
            </button>
          )}
          
          <button
            className={styles.closeButton}
            onClick={handleRemove}
            aria-label="Close notification"
            type="button"
          >
            ✕
          </button>
        </div>
      </div>

      {toast.duration && toast.duration > 0 && (
        <div 
          className={styles.progressBar}
          style={{ 
            animationDuration: `${toast.duration}ms`,
            animationPlayState: isRemoving ? 'paused' : 'running'
          }}
        />
      )}
    </div>
  );
};

export default Toast;
