import React from 'react';
import styles from './Features.module.css';

const Features: React.FC = () => {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>BlockCoinX by Your Side</h2>
                        <p className={styles.description}>
                            The BlockCoinX app and website allow you to<br />
                            trade crypto with ease.
                        </p>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span className={styles.featureText}>24/7 Customer Service</span>
                            </div>
                            <div className={styles.featureItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span className={styles.featureText}>Join Our Community</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageContent}>
                        <div className={styles.phoneContainer}>
                            <div className={styles.coinsContainer}>
                                <div className={styles.coin}></div>
                                <div className={styles.coin}></div>
                                <div className={styles.coin}></div>
                                <div className={styles.coin}></div>
                                <div className={styles.coin}></div>
                                <div className={styles.coin}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;