import React from "react";
import { Sidebar } from "./_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <nav className='h-[80px] md:pl-56 fixed inset-y-0 w-full z-50'>
        <Navbar />
      </nav>
      <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0'>
        <Sidebar />
      </div>
      <main className='md:pl-56 pt-[80px] h-full'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
