
import React from 'react';
import { Link } from 'react-router-dom';
import blockchainImg from '../../../uploads/Images/3d-rendering-blockchain-technology.jpg';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <span className={styles.hero__badge}>✨ UNCOVER THE NEXT CRYPTO</span>
          <h1 className={styles.hero__title}>
            Find the Next Crypto <span className={styles.hero__highlight}>Gem on BlockCoinX</span>
          </h1>
          <h2 className={styles.hero__subtitle}>1 Out of 4 Crypto Holders Worldwide is with BlockCoinX</h2>
          <p className={styles.hero__description}>
            BlockCoinX has earned its reputation as the go-to platform for 
            discovering the next big cryptocurrency projects.
          </p>
          <div className={styles.hero__inputSection}>
            <input 
              type="text" 
              placeholder="Email / Phone number" 
              className={styles.hero__input}
            />
            <Link to="/signup" className={styles.hero__button}>Sign up →</Link>
          </div>
        </div>
        <div className={styles.hero__imageWrapper}>
          <img
            src={blockchainImg}
            alt="Blockchain Technology Illustration"
            className={styles.hero__image}
          />
        </div>
      </div>
      
      {/* Stats Section */}
      <div className={styles.hero__stats}>
        <div className={styles.hero__statsContainer}>
          <div className={styles.hero__stat}>
            <div className={styles.hero__statNumber}>200 +</div>
            <div className={styles.hero__statLabel}>Countries Covered</div>
          </div>
          <div className={styles.hero__stat}>
            <div className={styles.hero__statNumber}>30 Million</div>
            <div className={styles.hero__statLabel}>Global Investors</div>
          </div>
          <div className={styles.hero__stat}>
            <div className={styles.hero__statNumber}>700 +</div>
            <div className={styles.hero__statLabel}>Coins</div>
          </div>
          <div className={styles.hero__stat}>
            <div className={styles.hero__statNumber}>$1.32 Billion</div>
            <div className={styles.hero__statLabel}>24h Trading Volume</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;