export interface Crypto {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    priceChangePercentage24h: number;
    marketCap: number;
    totalSupply: number;
    volume24h: number;
}

export interface CryptoMarketData {
    cryptocurrencies: Crypto[];
    totalMarketCap: number;
    totalVolume: number;
}