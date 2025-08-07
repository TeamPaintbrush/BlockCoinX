import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className={styles.actions}>
          <Link to="/" className={styles.homeButton}>
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className={styles.backButton}
            type="button"
          >
            Go Back
          </button>
        </div>

        <div className={styles.suggestions}>
          <h3>You might be looking for:</h3>
          <ul className={styles.suggestionList}>
            <li>
              <Link to="/" className={styles.suggestionLink}>Trading Dashboard</Link>
            </li>
            <li>
              <Link to="/crypto-market" className={styles.suggestionLink}>Crypto Market</Link>
            </li>
            <li>
              <Link to="/ai-tools" className={styles.suggestionLink}>AI Tools</Link>
            </li>
            <li>
              <Link to="/login" className={styles.suggestionLink}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.illustration} aria-hidden="true">
        <div className={styles.planet}></div>
        <div className={styles.astronaut}>🚀</div>
      </div>
    </div>
  );
};

export default NotFound;
