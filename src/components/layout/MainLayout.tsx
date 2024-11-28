import React, { useEffect } from 'react';
import { BottomNav } from '../navigation/BottomNav';
import { useAppStore } from '../../store/appStore';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { currentPage, setCurrentPage } = useAppStore();

  useEffect(() => {
    // Force re-render when page changes
    const handlePageChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('pagechange', handlePageChange);
    return () => window.removeEventListener('pagechange', handlePageChange);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20">
        {children}
      </main>
      <BottomNav currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};