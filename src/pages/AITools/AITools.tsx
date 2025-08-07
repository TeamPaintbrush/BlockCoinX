import React from 'react';
import OpenAIAnalysis from '../../components/openai/OpenAIAnalysis';
import ImageGenerator from '../../components/openai/ImageGenerator';
import { useToast } from '../../components/common/Toast';
import styles from './AITools.module.css';

const AITools: React.FC = () => {
  const { success, error, warning, info } = useToast();

  const showToastDemo = (type: string) => {
    switch (type) {
      case 'success':
        success('Success!', 'AI tool executed successfully');
        break;
      case 'error':
        error('Error!', 'Failed to process AI request');
        break;
      case 'warning':
        warning('Warning!', 'API rate limit approaching');
        break;
      case 'info':
        info('Info', 'New AI features available');
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>AI-Powered Tools</h1>
        <p>Leverage cutting-edge AI technology for crypto analysis and content generation</p>
        
        {/* Toast Demo Buttons */}
        <div className={styles.toastDemo}>
          <button onClick={() => showToastDemo('success')} className={styles.demoButton}>
            Success Toast
          </button>
          <button onClick={() => showToastDemo('error')} className={styles.demoButton}>
            Error Toast
          </button>
          <button onClick={() => showToastDemo('warning')} className={styles.demoButton}>
            Warning Toast
          </button>
          <button onClick={() => showToastDemo('info')} className={styles.demoButton}>
            Info Toast
          </button>
        </div>
      </div>

      <div className={styles.toolsGrid}>
        <div className={styles.toolSection}>
          <ImageGenerator />
        </div>
        
        <div className={styles.toolSection}>
          <OpenAIAnalysis />
        </div>
      </div>

      <div className={styles.features}>
        <h2>AI Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎨</div>
            <h3>Image Generation</h3>
            <p>Create stunning crypto-themed images using DALL-E 3 AI technology</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👁️</div>
            <h3>Vision Analysis</h3>
            <p>Analyze images with GPT-4 Vision for detailed insights and descriptions</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💡</div>
            <h3>Smart Insights</h3>
            <p>Get AI-powered analysis of cryptocurrency trends and market data</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💾</div>
            <h3>Auto-Save</h3>
            <p>Generated images and analysis are automatically saved for future reference</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITools;
