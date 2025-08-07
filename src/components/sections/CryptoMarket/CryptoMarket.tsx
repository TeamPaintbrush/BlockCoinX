import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CryptoMarket.module.css';
import CryptoCard from './CryptoCard';
import CryptoCardSkeleton from '../../common/CryptoCardSkeleton';

interface CryptoData {
    id: string;
    symbol: string;
    name: string;
    price: string;
    change: string;
    isPositive: boolean;
    category: string;
}

const CryptoMarket: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

    useEffect(() => {
        // Simulate API loading
        const loadCryptoData = async () => {
            setIsLoading(true);
            
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const data: CryptoData[] = [
                // Hot List
                { id: 'etc', symbol: 'ETC', name: 'Ethereum Classic', price: '$19.44', change: '+2.5%', isPositive: true, category: 'hot' },
                { id: 'zec', symbol: 'ZEC', name: 'ZEC', price: '$29.220', change: '+1.29%', isPositive: true, category: 'hot' },
                { id: 'ltc', symbol: 'LTC', name: 'Litecoin', price: '$66.28', change: '-0.18%', isPositive: false, category: 'hot' },
                
                // New Coins
                { id: 'rbtc1', symbol: 'RBTC1', name: 'RabBitcoin', price: '$0.77123286', change: '-12.02%', isPositive: false, category: 'new' },
                { id: 'social', symbol: 'SOCIAL', name: 'Phavercoin', price: '$0.01082891', change: '+8.3%', isPositive: true, category: 'new' },
                { id: 'logx', symbol: 'LOGX', name: 'LogX Network', price: '$0.059469', change: '-24.14%', isPositive: false, category: 'new' },
                
                // Top Gainers
                { id: 'bch', symbol: 'BCH', name: 'Bitcoin Cash', price: '$309.33', change: '+0.16%', isPositive: true, category: 'gainers' },
                { id: 'mina', symbol: 'MINA', name: 'Mina', price: '$309.33', change: '-0.16%', isPositive: false, category: 'gainers' },
                { id: 'zec2', symbol: 'ZEC', name: 'ZEC', price: '$29.220', change: '+1.29%', isPositive: true, category: 'gainers' },
            ];
            
            setCryptoData(data);
            setIsLoading(false);
        };

        loadCryptoData();
    }, []);

    const renderCryptoCards = (category: string) => {
        if (isLoading) {
            return Array.from({ length: 3 }, (_, index) => (
                <CryptoCardSkeleton key={`skeleton-${category}-${index}`} />
            ));
        }
        
        return cryptoData
            .filter(crypto => crypto.category === category)
            .map((crypto) => (
                <CryptoCard key={crypto.id} crypto={crypto} />
            ));
    };

    return (
        <section className={styles.cryptoMarket}>
            <div className={styles.marketHeader}>
                <h2 className={styles.marketTitle}>Crypto Market Today</h2>
                <Link to="/crypto-market" className={styles.viewAllButton}>
                    View all 700+ coins
                </Link>
            </div>
            
            <div className={styles.marketGrid}>
                <div className={styles.marketColumn}>
                    <div className={styles.columnHeader}>
                        <span className={styles.columnIcon}>🔥</span>
                        <span className={styles.columnTitle}>Hot List</span>
                    </div>
                    {renderCryptoCards('hot')}
                </div>
                
                <div className={styles.marketColumn}>
                    <div className={styles.columnHeader}>
                        <span className={styles.columnIcon}>⭐</span>
                        <span className={styles.columnTitle}>New Coins</span>
                    </div>
                    {renderCryptoCards('new')}
                </div>
                
                <div className={styles.marketColumn}>
                    <div className={styles.columnHeader}>
                        <span className={styles.columnIcon}>📈</span>
                        <span className={styles.columnTitle}>Top Gainers</span>
                    </div>
                    {renderCryptoCards('gainers')}
                </div>
            </div>
        </section>
    );
};

export default CryptoMarket;