import React from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    title: string;
    description: string;
    iconUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, iconUrl }) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.iconContainer}>
                <img src={iconUrl} alt={title} className={styles.productIcon} />
            </div>
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.productDescription}>{description}</p>
        </div>
    );
};

export default ProductCard;