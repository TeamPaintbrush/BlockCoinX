import React from 'react';
import styles from './TradingChart.module.css';

const TradingChart: React.FC = () => {
    return (
        <section className={styles.tradingChartSection}>
            <div className={styles.tradingChart}>
                <div className={styles.chartContainer}>
                    <div className={styles.chartHeader}>
                        <h2 className={styles.chartTitle}>Trading Chart</h2>
                        <div className={styles.chartSubtitle}>Real-time trading insights</div>
                    </div>
                    <div className={styles.chartContent}>
                        <div className={styles.statRow}>
                            <div className={styles.statBox}>
                                <span className={styles.statLabel}>Total Users</span>
                                <span className={styles.statValue}>1,234</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statLabel}>Total Trades</span>
                                <span className={styles.statValue}>567,890</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statLabel}>Total Volume</span>
                                <span className={styles.statValue}>$12,345,678</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TradingChart;