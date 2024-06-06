// AuthLayout.tsx
import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      {/* You can add footer or other components common to auth layout */}
    </div>
  );
};

export default AuthLayout;
