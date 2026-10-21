'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/jiibe-logo.png"
            alt="Jiibe"
            width={100}
            height={36}
            style={{ objectFit: 'contain', height: '32px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Benefits', href: '/benefits' },
            { label: 'Platform', href: '/platform' },
            { label: 'For HR Teams', href: '/for-hr' },
            { label: 'Pricing', href: '/pricing' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-black/5 transition-all">
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Employee Login
          </Link>
          <Link href="/demo"
            className="hidden md:block px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: '#1a4731' }}>
            Book a Demo
          </Link>
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav mt-2 mx-4 rounded-2xl p-4 border border-white/50">
          {[
            { label: 'Benefits', href: '/benefits' },
            { label: 'Platform', href: '/platform' },
            { label: 'For HR Teams', href: '/for-hr' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Employee Login', href: '/login' },
          ].map(item => (
            <Link key={item.href} href={item.href}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:text-gray-900 rounded-lg hover:bg-black/5">
              {item.label}
            </Link>
          ))}
          <Link href="/demo"
            className="block w-full mt-3 px-5 py-3 text-sm font-bold text-white rounded-xl text-center"
            style={{ background: '#1a4731' }}>
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
