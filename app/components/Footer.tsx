'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a2e1f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">Jiibe</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              The lifestyle benefits platform that lets employees choose the perks they actually want — Netflix, Uber, DoorDash, and 500+ more.
            </p>
            <div className="flex gap-3">
              {['twitter', 'linkedin', 'instagram'].map(social => (
                <a key={social} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                  style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <span className="text-xs text-gray-400 capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Platform</p>
            <ul className="space-y-3">
              {[
                { label: 'Benefits Marketplace', href: '/benefits' },
                { label: 'How It Works', href: '/platform' },
                { label: 'For HR Teams', href: '/for-hr' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Book a Demo', href: '/demo' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Benefits</p>
            <ul className="space-y-3">
              {[
                { label: 'Entertainment', href: '/benefits#entertainment' },
                { label: 'Food & Dining', href: '/benefits#food' },
                { label: 'Travel', href: '/benefits#travel' },
                { label: 'Family & Childcare', href: '/benefits#family' },
                { label: 'Wellness', href: '/benefits#wellness' },
                { label: 'Learning', href: '/benefits#learning' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Legal</p>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Employee Login', href: '/login' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 text-center md:text-left">
            <p>© 2026 Jiibe, Inc. All rights reserved.</p>
            <p className="mt-1">8 The Green, Ste A, Dover, DE 19901 · support@jiibe.com</p>
          </div>
          <div className="text-xs text-gray-600 text-center md:text-right max-w-md">
            <p>No mobile information will be shared with or sold to third parties for marketing purposes. SMS opt-in is optional. Reply STOP to opt out, HELP for help. Msg & data rates may apply.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
