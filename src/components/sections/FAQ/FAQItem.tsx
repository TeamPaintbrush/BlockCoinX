import React from 'react';
import styles from './FAQ.module.css';

interface FAQItemProps {
    question: string;
    answer: string;
    isInitiallyExpanded?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isInitiallyExpanded = false }) => {
    const [isOpen, setIsOpen] = React.useState(isInitiallyExpanded);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.faqItem} ${isOpen ? styles.expanded : ''}`}>
            <div className={styles.faqQuestion} onClick={toggleOpen}>
                <span className={styles.questionText}>{question}</span>
                <span className={`${styles.toggleIcon} ${isOpen ? styles.open : ''}`}>
                    {isOpen ? '−' : '+'}
                </span>
            </div>
            <div className={`${styles.faqAnswer} ${isOpen ? styles.show : ''}`}>
                <div className={styles.answerContent}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQItem;