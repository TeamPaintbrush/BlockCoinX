import React from 'react';
import SkeletonLoader from '../SkeletonLoader';
import styles from './CryptoCardSkeleton.module.css';

const CryptoCardSkeleton: React.FC = () => {
  return (
    <div className={styles.cryptoCard} aria-label="Loading crypto data">
      <div className={styles.cardHeader}>
        <div className={styles.coinInfo}>
          <SkeletonLoader 
            width="40px" 
            height="40px" 
            borderRadius="50%" 
            className={styles.coinIcon}
          />
          <div className={styles.coinDetails}>
            <SkeletonLoader width="60px" height="16px" />
            <SkeletonLoader width="80px" height="14px" />
          </div>
        </div>
      </div>
      <div className={styles.priceInfo}>
        <SkeletonLoader width="100px" height="20px" />
        <SkeletonLoader width="70px" height="16px" />
      </div>
    </div>
  );
};

export default CryptoCardSkeleton;
