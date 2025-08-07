import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3'; // Use CoinGecko API

export const fetchCryptoData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        throw error;
    }
};

export const fetchCryptocurrencyData = async () => {
    return fetchCryptoData();
};

export const fetchCryptocurrencyDetails = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/coins/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching details for cryptocurrency ${id}:`, error);
        throw error;
    }
};