import React from 'react';
import Hero from '../../components/sections/Hero';
import Stats from '../../components/sections/Stats';
import CryptoMarket from '../../components/sections/CryptoMarket';
import TradingChart from '../../components/sections/TradingChart';
import Products from '../../components/sections/Products';
import Features from '../../components/sections/Features';
import GlobalReach from '../../components/sections/GlobalReach';
import FAQ from '../../components/sections/FAQ';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Stats />
            <CryptoMarket />
            <TradingChart />
            <Products />
            <Features />
            <GlobalReach />
            <FAQ />
        </>
    );
};

export default Home;