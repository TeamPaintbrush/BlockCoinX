import React from 'react';
import styles from './Products.module.css';
import ProductCard from './ProductCard';

const Products = () => {
    const products = [
        { 
            id: 1, 
            title: 'Spot Trading', 
            description: 'Trade crypto with our comprehensive set of powerful tools to maximize your profits.', 
            iconUrl: '/uploads/Images/spot trading icon.png'
        },
        { 
            id: 2, 
            title: 'Buy Crypto', 
            description: 'Purchase crypto quickly and easily on our popular and industry-leading platform.', 
            iconUrl: '/uploads/Images/Buy Crypto icon.png'
        },
        { 
            id: 3, 
            title: 'Crypto Derivatives', 
            description: 'We are the best crypto exchange for trading crypto futures.', 
            iconUrl: '/uploads/Images/Crypto Derivatives icon.png'
        },
    ];

    return (
        <section className={styles.products}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Explore BlockCoinX Products<br />& Services</h2>
                <div className={styles.productsGrid}>
                    {products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            title={product.title}
                            description={product.description}
                            iconUrl={product.iconUrl}
                        />
                    ))}
                </div>
                <div className={styles.pagination}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={`${styles.dot} ${styles.active}`}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
        </section>
    );
};

export default Products;