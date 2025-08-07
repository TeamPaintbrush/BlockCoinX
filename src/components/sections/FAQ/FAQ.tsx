import React from 'react';
import FAQItem from './FAQItem';
import styles from './FAQ.module.css';

const FAQ: React.FC = () => {
    const faqData = [
        {
            question: "Where can I buy cryptocurrency?",
            answer: "You can buy cryptocurrency directly on BlockCoinX using various payment methods including bank cards, bank transfers, and other supported payment options. Simply navigate to the 'Buy Crypto' section to get started."
        },
        {
            question: "How do I use a bank card to purchase cryptocurrency?",
            answer: "BlockCoinX Fast Trade offers flexible payment methods, including Visa and Mastercard. Deposit fiat directly into your Master Account, expanding support for local currencies and payment options.",
            isExpanded: true
        },
        {
            question: "Which cryptocurrency should I buy today?",
            answer: "The choice depends on your investment strategy and risk tolerance. Popular options include Bitcoin (BTC), Ethereum (ETH), and other established cryptocurrencies. Always do your own research before investing."
        },
        {
            question: "Which bank cards are supported by BlockCoinX for cryptocurrency purchases?",
            answer: "BlockCoinX supports major bank cards including Visa and Mastercard for cryptocurrency purchases. The platform also supports various local payment methods depending on your region."
        },
        {
            question: "Are there deposit limits on BlockCoinX?",
            answer: "Yes, deposit limits vary based on your account verification level. Unverified accounts have lower limits, while fully verified accounts enjoy higher deposit and withdrawal limits."
        },
        {
            question: "Is there a transaction fee for purchasing cryptocurrency on BlockCoinX?",
            answer: "Yes, BlockCoinX charges competitive transaction fees for cryptocurrency purchases. Fees vary depending on the payment method used and may include processing fees from payment providers."
        }
    ];

    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.description}>
                        The key to creating an effective FAQ page is to anticipate the questions your customers or<br />
                        users may have and provide clear and concise answers.
                    </p>
                </div>
                <div className={styles.faqList}>
                    {faqData.map((item, index) => (
                        <FAQItem 
                            key={index} 
                            question={item.question} 
                            answer={item.answer}
                            isInitiallyExpanded={item.isExpanded || false}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;