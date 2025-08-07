import React from 'react';
import styles from './CryptoMarketPage.module.css';
import CryptoCard from '../../components/sections/CryptoMarket/CryptoCard';

const CryptoMarketPage: React.FC = () => {
    const allCryptoData = [
        // Extended list of crypto data for the full page
        { id: 'btc', symbol: 'BTC', name: 'Bitcoin', price: '$43,250.00', change: '+2.45%', isPositive: true },
        { id: 'eth', symbol: 'ETH', name: 'Ethereum', price: '$2,580.32', change: '+1.87%', isPositive: true },
        { id: 'bnb', symbol: 'BNB', name: 'BNB', price: '$315.45', change: '-0.56%', isPositive: false },
        { id: 'xrp', symbol: 'XRP', name: 'XRP', price: '$0.6234', change: '+3.21%', isPositive: true },
        { id: 'ada', symbol: 'ADA', name: 'Cardano', price: '$0.4567', change: '+1.23%', isPositive: true },
        { id: 'sol', symbol: 'SOL', name: 'Solana', price: '$98.76', change: '+4.56%', isPositive: true },
        { id: 'dot', symbol: 'DOT', name: 'Polkadot', price: '$5.432', change: '-1.23%', isPositive: false },
        { id: 'avax', symbol: 'AVAX', name: 'Avalanche', price: '$36.78', change: '+2.34%', isPositive: true },
        { id: 'link', symbol: 'LINK', name: 'Chainlink', price: '$14.56', change: '+0.87%', isPositive: true },
        { id: 'etc', symbol: 'ETC', name: 'Ethereum Classic', price: '$19.44', change: '+2.5%', isPositive: true },
        { id: 'zec', symbol: 'ZEC', name: 'ZEC', price: '$29.220', change: '+1.29%', isPositive: true },
        { id: 'ltc', symbol: 'LTC', name: 'Litecoin', price: '$66.28', change: '-0.18%', isPositive: false },
        { id: 'rbtc1', symbol: 'RBTC1', name: 'RabBitcoin', price: '$0.77123286', change: '-12.02%', isPositive: false },
        { id: 'social', symbol: 'SOCIAL', name: 'Phavercoin', price: '$0.01082891', change: '+8.3%', isPositive: true },
        { id: 'logx', symbol: 'LOGX', name: 'LogX Network', price: '$0.059469', change: '-24.14%', isPositive: false },
        { id: 'bch', symbol: 'BCH', name: 'Bitcoin Cash', price: '$309.33', change: '+0.16%', isPositive: true },
        { id: 'mina', symbol: 'MINA', name: 'Mina', price: '$309.33', change: '-0.16%', isPositive: false },
        { id: 'uni', symbol: 'UNI', name: 'Uniswap', price: '$6.78', change: '+2.34%', isPositive: true },
        { id: 'aave', symbol: 'AAVE', name: 'Aave', price: '$87.65', change: '+1.45%', isPositive: true },
        { id: 'comp', symbol: 'COMP', name: 'Compound', price: '$43.21', change: '-0.78%', isPositive: false },
        { id: 'mkr', symbol: 'MKR', name: 'Maker', price: '$1,234.56', change: '+0.95%', isPositive: true },
        { id: 'snx', symbol: 'SNX', name: 'Synthetix', price: '$2.87', change: '+3.45%', isPositive: true },
        { id: 'crv', symbol: 'CRV', name: 'Curve', price: '$0.76', change: '-1.23%', isPositive: false },
        { id: 'sushi', symbol: 'SUSHI', name: 'SushiSwap', price: '$0.87', change: '+2.34%', isPositive: true },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>All Cryptocurrencies</h1>
                <p>Browse all 700+ coins available on BlockCoinX</p>
            </div>
            
            <div className={styles.cryptoGrid}>
                {allCryptoData.map((crypto) => (
                    <CryptoCard key={crypto.id} crypto={crypto} />
                ))}
            </div>
        </div>
    );
};

export default CryptoMarketPage;
