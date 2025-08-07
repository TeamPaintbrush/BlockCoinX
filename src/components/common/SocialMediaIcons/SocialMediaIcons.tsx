import React, { useState } from 'react';
import styles from './SocialMediaIcons.module.css';

interface IconData {
    src?: string;
    text?: string;
    alt: string;
    href: string;
}

const SocialMediaIcons: React.FC = () => {
    // Use the actual social media icons from public folder
    const [socialIcons] = useState<IconData[]>([
        { 
            src: '/uploads/Social Media/Facebook-icon.png', 
            alt: 'Facebook', 
            href: '#facebook' 
        },
        { 
            src: '/uploads/Social Media/X-icon.png', 
            alt: 'X (Twitter)', 
            href: '#twitter' 
        },
        { 
            src: '/uploads/Social Media/LinkedIn-icon.png', 
            alt: 'LinkedIn', 
            href: '#linkedin' 
        },
        { 
            src: '/uploads/Social Media/Pintrest-icon.png', 
            alt: 'Pinterest', 
            href: '#pinterest' 
        },
        { 
            src: '/uploads/Social Media/Youtube-icon.png', 
            alt: 'YouTube', 
            href: '#youtube' 
        }
    ]);
    
    // Use the actual icons from public folder instead of generating them
    const [appBadges] = useState<IconData[]>([
        { 
            src: '/uploads/Images/Google-Play-icon.png', 
            alt: 'Google Play', 
            href: '#google-play' 
        },
        { 
            src: '/uploads/Images/App-Store-icon.png', 
            alt: 'App Store', 
            href: '#app-store' 
        }
    ]);

    return (
        <div className={styles.container}>
            <div className={styles.socialIcons}>
                {socialIcons.map((icon, index) => (
                    <a key={index} href={icon.href} className={styles.socialIcon}>
                        <img src={icon.src} alt={icon.alt} className={styles.iconImage} />
                    </a>
                ))}
            </div>
            
            <div className={styles.appSection}>
                <h4 className={styles.downloadTitle}>Download app</h4>
                <div className={styles.appBadges}>
                    {appBadges.map((badge, index) => (
                        <a key={index} href={badge.href} className={styles.appBadge}>
                            <img src={badge.src} alt={badge.alt} className={styles.badgeImage} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialMediaIcons;
