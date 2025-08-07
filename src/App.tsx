import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/layout/ScrollToTop';
import ErrorBoundary from './components/common/ErrorBoundary';
import SkeletonLoader from './components/common/SkeletonLoader';
import { ToastProvider } from './components/common/Toast';
import './App.css';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const AITools = React.lazy(() => import('./pages/AITools'));
const CryptoMarketPage = React.lazy(() => import('./pages/CryptoMarketPage'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <ScrollToTop />
          <Suspense 
            fallback={
              <div style={{ padding: '40px' }}>
                <SkeletonLoader variant="card" height="400px" />
              </div>
            }
          >
            <Routes>
              {/* Auth routes without main layout */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Main app routes with layout */}
              <Route path="/*" element={
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ai-tools" element={<AITools />} />
                    <Route path="/crypto-market" element={<CryptoMarketPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </MainLayout>
              } />
            </Routes>
          </Suspense>
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  );
};

export default App;