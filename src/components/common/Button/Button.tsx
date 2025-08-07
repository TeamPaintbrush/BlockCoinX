import React from 'react';
import styles from './Button.module.css';
import Spinner from '../Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  children: React.ReactNode;
  label?: string; // Keep for backward compatibility
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled,
  children,
  label,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    loading && styles.loading,
    className
  ].filter(Boolean).join(' ');

  const content = children || label;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className={styles.spinner}>
          <Spinner size="small" color={variant === 'primary' ? '#ffffff' : '#00D395'} />
        </span>
      )}
      <span className={loading ? styles.hiddenText : ''}>
        {content}
      </span>
    </button>
  );
};

export default Button;