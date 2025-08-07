import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GitHubLink from '../GitHubLink';
import SearchBox from '../SearchBox';
import ThemeToggle from '../ThemeToggle';
import MobileMenu from '../MobileMenu';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isKeyboardUser, setIsKeyboardUser] = useState(false);

    useEffect(() => {
        // Track keyboard vs mouse usage for accessibility
        const handleKeydown = () => setIsKeyboardUser(true);
        const handleMousedown = () => setIsKeyboardUser(false);

        document.addEventListener('keydown', handleKeydown);
        document.addEventListener('mousedown', handleMousedown);

        // Apply class to body for focus styles
        document.body.classList.toggle('keyboard-user', isKeyboardUser);
        document.body.classList.toggle('mouse-user', !isKeyboardUser);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('mousedown', handleMousedown);
        };
    }, [isKeyboardUser]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Skip to main content for accessibility */}
            <a href="#main-content" className="skip-to-main">
                Skip to main content
            </a>
            
            <header className={styles.header} role="banner">
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link to="/" className={styles.logoLink} aria-label="BlockCoinX homepage">
                            <span className={styles.logoIcon} aria-hidden="true">⚡</span>
                            BlockCoinX
                        </Link>
                    </div>
                    
                    {/* Desktop Search */}
                    <div className={styles.searchSection}>
                        <SearchBox />
                    </div>
                    
                    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
                        <ul className={styles.navList}>
                            <li><Link to="/" className={styles.navLink}>Trade</Link></li>
                            <li><Link to="/" className={styles.navLink}>Markets</Link></li>
                            <li><Link to="/" className={styles.navLink}>Futures</Link></li>
                            <li><Link to="/" className={styles.navLink}>Earn</Link></li>
                            <li><Link to="/ai-tools" className={styles.navLink}>AI Tools</Link></li>
                        </ul>
                    </nav>

                    <div className={styles.rightSection}>
                        <ThemeToggle />
                        <GitHubLink variant="header" />
                        
                        {/* Desktop Auth Buttons */}
                        <div className={styles.authButtons}>
                            <Link to="/login" className={styles.loginBtn}>Login</Link>
                            <Link to="/signup" className={styles.signupBtn}>Sign Up</Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className={styles.mobileMenuButton}
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                            type="button"
                        >
                            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu 
                isOpen={isMobileMenuOpen} 
                onClose={() => setIsMobileMenuOpen(false)} 
            />
        </>
    );
};

export default Header;