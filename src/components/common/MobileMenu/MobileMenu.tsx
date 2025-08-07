import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        // Prevent body scroll when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        // Close menu on escape key
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const menuItems = [
        { label: 'Trade', href: '#trade' },
        { label: 'Markets', href: '#markets' },
        { label: 'Futures', href: '#futures' },
        { label: 'Earn', href: '#earn' },
        { label: 'NFT', href: '#nft' },
        { label: 'Institutional', href: '#institutional' },
        { label: 'AI Tools', href: '/ai-tools' },
    ];

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />
            
            {/* Menu */}
            <nav 
                className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                <div className={styles.menuHeader}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>K</span>
                        <span className={styles.logoText}>BlockCoinX</span>
                    </div>
                    <button
                        onClick={onClose}
                        className={styles.closeButton}
                        aria-label="Close menu"
                        type="button"
                    >
                        ✕
                    </button>
                </div>

                <div className={styles.menuContent}>
                    <ul className={styles.menuList}>
                        {menuItems.map((item, index) => (
                            <li key={item.label} className={styles.menuItem}>
                                <a 
                                    href={item.href}
                                    className={styles.menuLink}
                                    onClick={onClose}
                                    tabIndex={isOpen ? 0 : -1}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.menuActions}>
                        <Link to="/login" className={styles.loginBtn} onClick={onClose}>
                            Log In
                        </Link>
                        <Link to="/signup" className={styles.signupBtn} onClick={onClose}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MobileMenu;
