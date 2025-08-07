import React from 'react';
import GitHubLink from '../GitHubLink';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Section - Company Info */}
                    <div className={styles.companySection}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>KC</span>
                            <span className={styles.logoText}>BLOCKCOINX</span>
                        </div>
                        <div className={styles.companyLinks}>
                            <a href="#faq">FAQ</a>
                            <span className={styles.separator}>/</span>
                            <a href="#careers">Careers</a>
                        </div>
                        <div className={styles.newsletter}>
                            <input 
                                type="email" 
                                placeholder="Sign up for newsletter"
                                className={styles.newsletterInput}
                            />
                            <button className={styles.newsletterButton}>→</button>
                        </div>
                    </div>

                    {/* Middle Sections - Links */}
                    <div className={styles.linkColumns}>
                        <div className={styles.linkColumn}>
                            <a href="#crypto-prices" className={styles.columnTitle}>Crypto Prices</a>
                            <a href="#learn" className={styles.columnTitle}>Learn</a>
                            <a href="#developer" className={styles.columnTitle}>Developer</a>
                            <a href="#app-download" className={styles.columnTitle}>App Download</a>
                        </div>

                        <div className={styles.priceColumn}>
                            <h4 className={styles.priceTitle}>Bitcoin (BTC) Price</h4>
                            <h4 className={styles.priceTitle}>Ethereum (ETH) Price</h4>
                            <h4 className={styles.priceTitle}>Ripple (XRP) Price</h4>
                            <a href="#more-prices" className={styles.morePrices}>More Prices</a>
                        </div>
                    </div>

                    {/* Right Section - Social & Apps */}
                    <div className={styles.rightSection}>
                        <SocialMediaIcons />
                    </div>
                </div>
                
                <div className={styles.bottom}>
                    <p className={styles.copyright}>Copyright © 2017 - 2024 BlockCoinX.com. All Rights Reserved.</p>
                    <p className={styles.volume}>24h Volume1,863,997,864USDT</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;