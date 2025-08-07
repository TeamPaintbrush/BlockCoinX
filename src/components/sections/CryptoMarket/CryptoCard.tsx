import React from 'react';
import styles from './CryptoCard.module.css';

interface CryptoData {
    id: string;
    name: string;
    symbol: string;
    price: string;
    change: string;
    isPositive: boolean;
    category?: string;
}

interface CryptoCardProps {
    crypto: CryptoData;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
    
    return (
        <div className={styles.cryptoCard}>
            <div className={styles.cardHeader}>
                <div className={styles.coinInfo}>
                    <div className={styles.coinIcon}>
                        {crypto.symbol.charAt(0)}
                    </div>
                    <div className={styles.coinDetails}>
                        <span className={styles.coinSymbol}>{crypto.symbol}</span>
                        <span className={styles.coinName}>{crypto.name}</span>
                    </div>
                </div>
            </div>
            <div className={styles.priceInfo}>
                <span className={styles.price}>{crypto.price}</span>
                <span className={`${styles.change} ${crypto.isPositive ? styles.positive : styles.negative}`}>
                    {crypto.change}
                </span>
            </div>
        </div>
    );
};

export default CryptoCard;