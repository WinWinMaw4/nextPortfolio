// app/user/layout.tsx
import Navbar from '@/components/share/user/Navbar';
import React from 'react';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="user-layout">
      {/* User-specific navigation, sidebar, etc. */}
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
