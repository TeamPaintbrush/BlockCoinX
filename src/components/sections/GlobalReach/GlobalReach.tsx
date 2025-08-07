import React from 'react';
import styles from './GlobalReach.module.css';

const GlobalReach: React.FC = () => {
    return (
        <section className={styles.globalReach}>
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.topSection}>
                    <div className={styles.textContent}>
                        <div className={styles.badge}>GLOBAL CRYPTO TRADING HUB</div>
                                                <h2 className={styles.title}>
                            BlockCoinX Worldwide
                        </h2>
                        <p className={styles.description}>
                            Trade crypto on BlockCoinX, your gateway to global markets.<br />
                            With over 700 cryptocurrencies and advanced trading<br />
                            features, BlockCoinX offers a seamless and secure platform<br />
                            for all your trading needs.
                        </p>
                    </div>
                    <div className={styles.imageContent}>
                        {/* iPhone image replacing placeholder */}
                        <div className={styles.tradingInterface}>
                            <img 
                                src="/uploads/Images/Iphone-icon.png" 
                                alt="BlockCoinX Trading Interface" 
                                className={styles.iphoneImage}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Feature Cards */}
                <div className={styles.featureCards}>
                    <div className={styles.featureCard}>
                        <div className={styles.cardIcon}>📊</div>
                        <h3 className={styles.cardTitle}>Top Crypto/Token Lists</h3>
                        <p className={styles.cardDescription}>Access comprehensive lists of top cryptocurrencies and tokens</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.cardIcon}>🏦</div>
                        <h3 className={styles.cardTitle}>Buy Crypto via Bank Deposit</h3>
                        <p className={styles.cardDescription}>Purchase crypto directly using bank deposits and transfers</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.cardIcon}>⚡</div>
                        <h3 className={styles.cardTitle}>Easiest Way to Trade</h3>
                        <p className={styles.cardDescription}>Simple and intuitive trading experience for all users</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.cardIcon}>📈</div>
                        <h3 className={styles.cardTitle}>Spot Trading/Futures</h3>
                        <p className={styles.cardDescription}>Advanced trading options including spot and futures markets</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;