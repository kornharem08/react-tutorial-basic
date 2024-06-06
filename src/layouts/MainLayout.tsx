
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar/Navbar';

interface MainLayoutProps {
    children: ReactNode;
  }
  
  const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
      <div>
        <Navbar />
        <main>{children}</main>
        {/* You can add footer or other components common to main layout */}
      </div>
    );
  };
  
  export default MainLayout;