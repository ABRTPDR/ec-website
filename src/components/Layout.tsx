import { NavLink, Outlet, Link } from 'react-router-dom';
import BITSLogo from '../assets/BITSLogo.svg';
import Footer from './Footer';

export default function Layout() {
  // Helper function to handle the active tab styling dynamically
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `uppercase transition-colors ${
      isActive 
        ? 'text-blue-700 font-bold' // Highlighted state
        : 'text-gray-600 hover:text-blue-700' // Default state
    }`;

  return (
    <div className="min-h-screen bg-white">
      {/* Added sticky, top-0, z-50, and bg-white to the header */}
      <header className="sticky top-0 z-50 bg-white w-full flex flex-col lg:flex-row justify-between items-center py-4 lg:py-6 px-4 lg:px-8 border-b border-gray-100 shadow-sm gap-4 lg:gap-0 box-border overflow-hidden">
        
        {/* Top Left: Logo & Titles */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 max-w-full md:hover:opacity-80 transition-opacity cursor-pointer">
          <img 
            src={BITSLogo} 
            alt="BITS Pilani Logo" 
            className="w-12 h-12 md:w-[60px] md:h-[60px] object-contain flex-shrink-0" 
          />
          
          <div className="flex flex-col min-w-0 text-left">
            <span className="text-lg sm:text-xl lg:text-2xl font-heading tracking-tight text-gray-900 uppercase leading-tight">
              Election Commission
            </span>
            <span className="text-xs sm:text-sm text-gray-500 tracking-wide uppercase mt-0.5">
              BITS Pilani, Pilani Campus
            </span>
          </div>
        </Link>

        {/* Top Right: Navigation */}
        <nav className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-2 lg:gap-6 text-[15px] lg:text-base tracking-wide w-full lg:w-auto">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>

          <NavLink to="/notices" end className={navLinkClass}>Notices</NavLink>
          
          <NavLink to="/candidates" className={navLinkClass}>Candidates</NavLink>
          
          {/* Archives removed on mobile (hidden), visible on medium screens and up (md:inline) */}
          {/*
          <NavLink to="/archives" className={(props) => `${navLinkClass(props)} hidden md:inline`}>
            Archives
          </NavLink>
          */}
          
          <NavLink to="/contact" className={navLinkClass}>
            <span className="hidden sm:inline">Contact Us</span>
            {/* Mobile-only truncated text */}
            <span className="sm:hidden">Contact</span>
          </NavLink>
        </nav>
      </header>

      
      {/* Outlet is where current page's content gets rendered */}
      <Outlet />
      
      <Footer />
    </div>
  );
}