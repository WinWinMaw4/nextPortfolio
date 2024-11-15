// app/dashboard/layout.tsx
import { AppSidebar } from '@/components/share/app-sidebar';
import Sidebar from '@/components/share/dashboard/Sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
  );
}
