import React, { useState, useRef, useEffect } from 'react';
import styles from './SearchBox.module.css';
import Spinner from '../Spinner';

interface SearchResult {
    id: string;
    symbol: string;
    name: string;
    price: string;
    change: string;
    isPositive: boolean;
}

// Mock crypto data for search
const cryptoData: SearchResult[] = [
    { id: 'btc', symbol: 'BTC', name: 'Bitcoin', price: '$43,250.30', change: '+2.45%', isPositive: true },
    { id: 'eth', symbol: 'ETH', name: 'Ethereum', price: '$2,580.45', change: '+1.23%', isPositive: true },
    { id: 'ada', symbol: 'ADA', name: 'Cardano', price: '$0.4521', change: '-0.86%', isPositive: false },
    { id: 'sol', symbol: 'SOL', name: 'Solana', price: '$98.76', change: '+5.67%', isPositive: true },
    { id: 'dot', symbol: 'DOT', name: 'Polkadot', price: '$7.89', change: '-1.23%', isPositive: false },
    { id: 'matic', symbol: 'MATIC', name: 'Polygon', price: '$1.23', change: '+3.45%', isPositive: true },
];

const SearchBox: React.FC = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Filter results based on query with simulated API delay
        const searchCrypto = async () => {
            if (query.length === 0) {
                setResults([]);
                setIsOpen(false);
                setIsSearching(false);
                return;
            }

            if (query.length > 0) {
                setIsSearching(true);
                
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 300));
                
                const filtered = cryptoData.filter(crypto =>
                    crypto.symbol.toLowerCase().includes(query.toLowerCase()) ||
                    crypto.name.toLowerCase().includes(query.toLowerCase())
                );
                setResults(filtered);
                setIsOpen(true);
                setIsSearching(false);
            }
            setSelectedIndex(-1);
        };

        const debounceTimer = setTimeout(searchCrypto, 200);
        return () => clearTimeout(debounceTimer);
    }, [query]);

    useEffect(() => {
        // Close search on outside click
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen || results.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => prev < results.length - 1 ? prev + 1 : 0);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : results.length - 1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0) {
                    handleSelectResult(results[selectedIndex]);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                inputRef.current?.blur();
                break;
        }
    };

    const handleSelectResult = (result: SearchResult) => {
        setQuery(`${result.symbol} - ${result.name}`);
        setIsOpen(false);
        // In a real app, you would navigate to the crypto's detail page
        console.log('Selected:', result);
    };

    const handleClear = () => {
        setQuery('');
        setIsOpen(false);
        inputRef.current?.focus();
    };

    return (
        <div className={styles.searchContainer} ref={searchRef}>
            <div className={styles.searchBox}>
                <div className={styles.searchIcon}>
                    🔍
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search cryptocurrencies..."
                    className={styles.searchInput}
                    aria-label="Search cryptocurrencies"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    aria-controls="search-results"
                    role="combobox"
                    aria-autocomplete="list"
                />
                {isSearching && (
                    <div className={styles.loadingSpinner}>
                        <Spinner size="small" />
                    </div>
                )}
                {query && !isSearching && (
                    <button
                        onClick={handleClear}
                        className={styles.clearButton}
                        aria-label="Clear search"
                        type="button"
                    >
                        ✕
                    </button>
                )}
            </div>

            {isSearching && query && (
                <div className={styles.searchResults}>
                    <div className={styles.loadingState}>
                        <Spinner size="small" />
                        <span>Searching cryptocurrencies...</span>
                    </div>
                </div>
            )}

            {isOpen && !isSearching && results.length > 0 && (
                <div id="search-results" className={styles.searchResults} role="listbox">
                    {results.map((result, index) => (
                        <div
                            key={result.id}
                            className={`${styles.searchResult} ${index === selectedIndex ? styles.selected : ''}`}
                            onClick={() => handleSelectResult(result)}
                            role="option"
                            aria-selected={index === selectedIndex}
                        >
                            <div className={styles.resultInfo}>
                                <div className={styles.resultSymbol}>{result.symbol}</div>
                                <div className={styles.resultName}>{result.name}</div>
                            </div>
                            <div className={styles.resultPricing}>
                                <div className={styles.resultPrice}>{result.price}</div>
                                <div className={`${styles.resultChange} ${result.isPositive ? styles.positive : styles.negative}`}>
                                    {result.change}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {isOpen && !isSearching && query && results.length === 0 && (
                <div className={styles.searchResults}>
                    <div className={styles.noResults}>
                        No cryptocurrencies found for "{query}"
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBox;
