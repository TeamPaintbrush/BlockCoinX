import { useEffect, useState } from 'react';
import { fetchCryptoData } from '../services/api/crypto';

interface CryptoData {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    image: string;
}

const useCryptoData = () => {
    const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchCryptoData();
                setCryptoData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return { cryptoData, loading, error };
};

export { useCryptoData };
export default useCryptoData;