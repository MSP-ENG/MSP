import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <ScrollToTop />
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Body */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Mobile Sticky Navigation Adapter */}
      <MobileNav />
    </div>
  );
}

export default App;
