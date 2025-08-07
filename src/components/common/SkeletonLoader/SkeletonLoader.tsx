import React from 'react';
import styles from './SkeletonLoader.module.css';

interface SkeletonLoaderProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  lines?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  className = '',
  lines = 1
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return {
          width: height,
          height: height,
          borderRadius: '50%'
        };
      case 'rectangular':
        return {
          width,
          height: height || '200px',
          borderRadius
        };
      case 'card':
        return {
          width,
          height: height || '300px',
          borderRadius: '12px'
        };
      case 'text':
      default:
        return {
          width,
          height,
          borderRadius
        };
    }
  };

  const variantStyles = getVariantStyles();
  const skeletonClass = `${styles.skeleton} ${styles[variant] || ''} ${className}`;

  if (variant === 'text' && lines > 1) {
    return (
      <div className={styles.textContainer}>
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className={skeletonClass}
            style={{
              ...variantStyles,
              width: index === lines - 1 ? '75%' : width,
              marginBottom: '8px'
            }}
            aria-label="Loading content"
            role="status"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={skeletonClass}
      style={variantStyles}
      aria-label="Loading content"
      role="status"
    />
  );
};

export default SkeletonLoader;
