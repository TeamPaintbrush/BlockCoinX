import React from 'react';
import styles from './Stats.module.css';

const Stats: React.FC = () => {
    return (
        <section className={styles.statsSection}>
            <div className={styles.statsContainer}>
                <h2 className={styles.title}>Statistics</h2>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Total Users:</span>
                    <span className={styles.statValue}>1,234</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Total Trades:</span>
                    <span className={styles.statValue}>567,890</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Total Volume:</span>
                    <span className={styles.statValue}>$12,345,678</span>
                </div>
            </div>
        </section>
    );
};

export default Stats;