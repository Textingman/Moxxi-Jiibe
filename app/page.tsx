'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrandLogo } from './components/BrandLogo';

// ─── Category accent map ───────────────────────────────────────────────────
const catAccent: Record<string, { bg: string; text: string; dot: string }> = {
  Entertainment: { bg: '#fef3ec', text: '#8b3a0f', dot: '#f5a97f' },
  Food:          { bg: '#fdf5e4', text: '#6b4a0f', dot: '#d4a84b' },
  Travel:        { bg: '#edf6fb', text: '#1a4a6b', dot: '#7ab8d4' },
  Family:        { bg: '#fbeef1', text: '#7a1f30', dot: '#d47a8a' },
  Wellness:      { bg: '#eef6f1', text: '#1e5c35', dot: '#7aab8a' },
  Learning:      { bg: '#f2f0fb', text: '#3d2f7a', dot: '#a89fd4' },
  Pets:          { bg: '#e8f8f7', text: '#1a5c58', dot: '#4ab8b0' },
  Shopping:      { bg: '#fdf5e4', text: '#6b4a0f', dot: '#d4a84b' },
};

// ─── Marketplace perk cards for hero ──────────────────────────────────────
const heroPerks = [
  { key: 'netflix',     name: 'Netflix',     cat: 'Entertainment', catAccent: '#fef3ec', catText: '#8b3a0f' },
  { key: 'doordash',    name: 'DoorDash',    cat: 'Food',          catAccent: '#fdf5e4', catText: '#6b4a0f' },
  { key: 'rover',       name: 'Rover',       cat: 'Pets',          catAccent: '#e8f8f7', catText: '#1a5c58' },
  { key: 'uber',        name: 'Uber',        cat: 'Travel',        catAccent: '#edf6fb', catText: '#1a4a6b' },
  { key: 'urbansitter', name: 'UrbanSitter', cat: 'Family',        catAccent: '#fbeef1', catText: '#7a1f30' },
  { key: 'spotify',     name: 'Spotify',     cat: 'Entertainment', catAccent: '#fef3ec', catText: '#8b3a0f' },
  { key: 'classpass',   name: 'ClassPass',   cat: 'Wellness',      catAccent: '#eef6f1', catText: '#1e5c35' },
  { key: 'coursera',    name: 'Coursera',    cat: 'Learning',      catAccent: '#f2f0fb', catText: '#3d2f7a' },
  { key: 'airbnb',      name: 'Airbnb',      cat: 'Travel',        catAccent: '#edf6fb', catText: '#1a4a6b' },
  { key: 'hellofresh',  name: 'HelloFresh',  cat: 'Food',          catAccent: '#fdf5e4', catText: '#6b4a0f' },
  { key: 'headspace',   name: 'Headspace',   cat: 'Wellness',      catAccent: '#eef6f1', catText: '#1e5c35' },
  { key: 'amazon',      name: 'Amazon',      cat: 'Shopping',      catAccent: '#fdf5e4', catText: '#6b4a0f' },
];

// ─── FAQ Item ──────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-semibold text-gray-900 text-sm">{q}</span>
        <span className={`text-gray-400 transition-transform flex-shrink-0 ${open ? 'rotate-45' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && <p className="text-sm text-gray-500 leading-relaxed pb-5">{a}</p>}
    </div>
  );
}

// ─── Audience Tab ──────────────────────────────────────────────────────────
function AudienceTab({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${active ? 'text-white shadow-md' : 'text-gray-600 hover:text-gray-900 bg-white border border-gray-200'}`}
      style={active ? { background: '#1a4731' } : {}}>
      {label}
    </button>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'employees' | 'hr'>('employees');
  const [selectedPerks, setSelectedPerks] = useState<string[]>(['netflix', 'rover', 'doordash']);

  const togglePerk = (key: string) => {
    setSelectedPerks(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#faf8f4' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 px-6" style={{ background: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
                style={{ background: '#eef6f1', color: '#1e5c35', border: '1px solid #c3e6d0' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Employee lifestyle benefits
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                Find your next<br />
                <span className="gradient-text-brand">favorite perk.</span>
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed mb-4">
                Netflix, Rover, DoorDash, Airbnb, UrbanSitter — your employer sets the budget, you choose what fits your life.
              </p>
              <p className="text-base text-gray-400 mb-10">
                No more one-size-fits-all benefits packages. Just perks you&apos;ll actually use.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white rounded-2xl transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: '#1a4731' }}>
                  Book a Demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/benefits"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-gray-700 rounded-2xl transition-all hover:bg-gray-100"
                  style={{ background: 'white', border: '1.5px solid rgba(0,0,0,0.1)' }}>
                  Browse all perks
                </Link>
              </div>

              {/* Category tags — horizontal scrollable row */}
              <div className="mt-10">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">15 benefit categories</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: '🎬 Entertainment', bg: '#fef3ec', text: '#8b3a0f' },
                    { label: '🍕 Food & Dining',  bg: '#fdf5e4', text: '#6b4a0f' },
                    { label: '✈️ Travel',          bg: '#edf6fb', text: '#1a4a6b' },
                    { label: '👨‍👩‍👧 Family',         bg: '#fbeef1', text: '#7a1f30' },
                    { label: '🧘 Wellness',        bg: '#eef6f1', text: '#1e5c35' },
                    { label: '📚 Learning',        bg: '#f2f0fb', text: '#3d2f7a' },
                    { label: '🐾 Pets',            bg: '#e8f8f7', text: '#1a5c58' },
                    { label: '🛍️ Shopping',        bg: '#fdf5e4', text: '#6b4a0f' },
                  ].map(tag => (
                    <span key={tag.label}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: tag.bg, color: tag.text }}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive marketplace preview */}
            <div className="relative">
              <div className="glass-card p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Your monthly perks</p>
                    <p className="text-2xl font-bold text-gray-900">Choose what you love</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Balance</p>
                    <p className="text-lg font-bold" style={{ color: '#1a4731' }}>$150</p>
                  </div>
                </div>

                {/* Perk grid — static display, no interaction */}
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  {heroPerks.map(perk => {
                    const isSelected = selectedPerks.includes(perk.key);
                    return (
                      <div key={perk.key}
                        className="marketplace-card text-left p-3 relative"
                        style={isSelected ? {
                          borderColor: '#1a4731',
                          boxShadow: '0 0 0 2px rgba(26,71,49,0.12)',
                          cursor: 'default',
                        } : { cursor: 'default' }}>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{ background: '#1a4731' }}>
                            <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                        <BrandLogo brand={perk.key} size={28} className="mb-2" />
                        <p className="text-xs font-semibold text-gray-900 leading-tight">{perk.name}</p>
                        <span className="cat-pill mt-1 inline-flex"
                          style={{ background: perk.catAccent, color: perk.catText, fontSize: '9px', padding: '2px 6px' }}>
                          {perk.cat}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Summary bar — static, no links */}
                <div className="p-3 rounded-xl flex items-center justify-between"
                  style={{ background: '#eef6f1', border: '1px solid #c3e6d0' }}>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: '#1e5c35' }}>
                      {selectedPerks.length} perks selected this month
                    </p>
                    <p className="text-xs text-gray-500">$103 of $150 used</p>
                  </div>
                  <span className="text-xs font-bold text-white px-4 py-2 rounded-xl"
                    style={{ background: '#1a4731', cursor: 'default' }}>
                    Active
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-card p-3 float-animation" style={{ zIndex: 20 }}>
                <p className="text-xs text-gray-400 mb-1">Team participation</p>
                <p className="text-xl font-bold text-gray-900">94%</p>
                <div className="w-full bg-gray-100 rounded-full h-1 mt-1.5">
                  <div className="h-1 rounded-full" style={{ width: '94%', background: '#1a4731' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY SHOWCASE ── */}
      <section className="py-20 px-6" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Benefits for every kind of life.
            </h2>
            <p className="text-lg text-gray-500">
              From streaming to childcare, fitness to food — employees choose what actually matters to them.
            </p>
          </div>

          {/* Category bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { cat: 'Entertainment', emoji: '🎬', brands: ['netflix', 'spotify', 'disney'], bg: '#fef3ec', text: '#8b3a0f', dot: '#f5a97f', desc: 'Netflix, Spotify, Disney+, and more' },
              { cat: 'Food & Dining', emoji: '🍕', brands: ['doordash', 'ubereats', 'hellofresh'], bg: '#fdf5e4', text: '#6b4a0f', dot: '#d4a84b', desc: 'Delivery, meal kits, and groceries' },
              { cat: 'Family', emoji: '👨‍👩‍👧', brands: ['urbansitter', 'care', 'headspace'], bg: '#fbeef1', text: '#7a1f30', dot: '#d47a8a', desc: 'Childcare, wellness, and family support' },
              { cat: 'Travel', emoji: '✈️', brands: ['uber', 'airbnb', 'lyft'], bg: '#edf6fb', text: '#1a4a6b', dot: '#7ab8d4', desc: 'Rides, hotels, and flights' },
            ].map(item => (
              <div key={item.cat} className="glass-card p-5 cursor-pointer"
                style={{ borderTop: `3px solid ${item.dot}` }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm font-bold text-gray-900">{item.cat}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">{item.desc}</p>
                <div className="flex gap-1.5">
                  {item.brands.map(b => (
                    <BrandLogo key={b} brand={b} size={28} />
                  ))}
                  <div className="w-7 h-7 rounded-xl bg-gray-100 flex items-center justify-center text-xs text-gray-400 font-semibold">
                    +
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { cat: 'Wellness', emoji: '🧘', brands: ['classpass', 'calm', 'noom'], bg: '#eef6f1', text: '#1e5c35', dot: '#7aab8a', desc: 'Fitness, meditation, and mental health' },
              { cat: 'Pets', emoji: '🐾', brands: ['rover', 'chewy', 'petco'], bg: '#e8f8f7', text: '#1a5c58', dot: '#4ab8b0', desc: 'Dog walking, pet food, and vet care' },
              { cat: 'Learning', emoji: '📚', brands: ['coursera', 'udemy', 'linkedin'], bg: '#f2f0fb', text: '#3d2f7a', dot: '#a89fd4', desc: 'Courses, skills, and certifications' },
              { cat: 'Shopping', emoji: '🛍️', brands: ['amazon', 'target', 'nordstrom'], bg: '#fdf5e4', text: '#6b4a0f', dot: '#d4a84b', desc: 'Retail credits for everyday needs' },
            ].map(item => (
              <div key={item.cat} className="glass-card p-5 cursor-pointer"
                style={{ borderTop: `3px solid ${item.dot}` }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-sm font-bold text-gray-900">{item.cat}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">{item.desc}</p>
                <div className="flex gap-1.5">
                  {item.brands.map(b => (
                    <BrandLogo key={b} brand={b} size={28} />
                  ))}
                  <div className="w-7 h-7 rounded-xl bg-gray-100 flex items-center justify-center text-xs text-gray-400 font-semibold">
                    +
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/benefits" className="btn-secondary">
              See all 15 categories →
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMPLOYEE / EMPLOYER TABS ── */}
      <section className="py-24 px-6" style={{ background: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Built for everyone on your team.
            </h2>
            <p className="text-lg text-gray-500 mb-8">See how Jiibe works for employees and HR teams alike.</p>
            <div className="flex items-center justify-center gap-3">
              <AudienceTab active={activeTab === 'employees'} label="For Your People" onClick={() => setActiveTab('employees')} />
              <AudienceTab active={activeTab === 'hr'} label="For Your HR Team" onClick={() => setActiveTab('hr')} />
            </div>
          </div>

          {activeTab === 'employees' ? (
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Benefits that fit your life.</h3>
                <div className="space-y-5">
                  {[
                    { title: 'Choose what you love', desc: 'Browse 500+ perks and pick what fits your life — streaming, food, childcare, travel, pets, and more.' },
                    { title: 'Monthly stipend, your way', desc: 'Your employer sets a monthly budget. You decide how to spend it across any perks you want.' },
                    { title: 'Redeem in seconds', desc: 'Get instant access codes, credits, or subscriptions delivered directly to your account.' },
                    { title: 'Change anytime', desc: 'Switch your perks month to month. Try Netflix this month, Rover next month.' },
                  ].map((item, i) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                        style={{ background: '#1a4731' }}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-4">Employee Dashboard</p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">$150</p>
                    <p className="text-xs text-gray-400">Monthly balance</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold" style={{ color: '#1a4731' }}>$47 remaining</p>
                    <p className="text-xs text-gray-400">Resets Nov 1</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { key: 'netflix',     name: 'Netflix',     cost: '$22.99', cat: 'Entertainment', catBg: '#fef3ec', catText: '#8b3a0f' },
                    { key: 'doordash',    name: 'DoorDash',    cost: '$40.00', cat: 'Food',          catBg: '#fdf5e4', catText: '#6b4a0f' },
                    { key: 'urbansitter', name: 'UrbanSitter', cost: '$40.00', cat: 'Family',        catBg: '#fbeef1', catText: '#7a1f30' },
                  ].map(b => (
                    <div key={b.name} className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                      <div className="flex items-center gap-2">
                        <BrandLogo brand={b.key} size={24} />
                        <div>
                          <span className="text-sm font-medium text-gray-900">{b.name}</span>
                          <span className="cat-pill ml-2" style={{ background: b.catBg, color: b.catText, fontSize: '9px', padding: '2px 6px' }}>{b.cat}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{b.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Simple to set up. Easy to manage.</h3>
                <div className="space-y-5">
                  {[
                    { title: 'Set your budget', desc: 'Choose a monthly per-employee stipend. No complicated benefit packages to manage.' },
                    { title: 'Track participation', desc: 'See real-time dashboards showing which benefits employees love most.' },
                    { title: 'HRIS integrations', desc: 'Connects with Workday, BambooHR, Rippling, and more. Onboarding is automatic.' },
                    { title: 'Only pay for what\'s used', desc: 'Unused stipends roll back. You never pay for benefits employees don\'t redeem.' },
                  ].map((item, i) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                        style={{ background: '#1a4731' }}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-6">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-4">HR Dashboard — October</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Active Employees', value: '247' },
                    { label: 'Participation Rate', value: '94%' },
                    { label: 'Avg. Satisfaction', value: '4.8 / 5' },
                    { label: 'Budget Used', value: '$34.2K' },
                  ].map(stat => (
                    <div key={stat.label} className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-xl" style={{ background: '#eef6f1', border: '1px solid #c3e6d0' }}>
                  <p className="text-xs font-semibold" style={{ color: '#1e5c35' }}>Top perk this month: DoorDash (68% of employees)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 3-STEP WALKTHROUGH ── */}
      <section className="py-24 px-6 section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Up and running in 3 steps.
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              No complicated setup. No benefit consultants. Just perks your team will actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Set your budget',
                desc: 'Choose a monthly per-employee stipend — $50, $100, $200, or custom. Connect your HRIS and you\'re done.',
                preview: (
                  <div className="p-4 rounded-xl mt-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <p className="text-xs text-gray-400 mb-2">Monthly stipend per employee</p>
                    <p className="text-2xl font-bold text-white">$150</p>
                    <div className="flex gap-2 mt-3">
                      {['$50', '$100', '$150', '$200'].map(amt => (
                        <span key={amt} className="text-xs px-2 py-1 rounded-lg"
                          style={{ background: amt === '$150' ? '#2d6a4f' : 'rgba(255,255,255,0.06)', color: amt === '$150' ? 'white' : '#9ca3af' }}>
                          {amt}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              },
              {
                num: '02',
                title: 'Employees choose',
                desc: 'Employees browse the marketplace and pick the perks that fit their life. Netflix, Rover, DoorDash — their call.',
                preview: (
                  <div className="p-4 rounded-xl mt-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <p className="text-xs text-gray-400 mb-3">Sarah&apos;s picks this month</p>
                    <div className="space-y-2">
                      {[
                        { key: 'netflix', n: 'Netflix', a: '$22.99', catBg: 'rgba(245,169,127,0.2)', catText: '#f5a97f' },
                        { key: 'rover',   n: 'Rover',   a: '$35.00', catBg: 'rgba(74,184,176,0.2)',  catText: '#4ab8b0' },
                      ].map(b => (
                        <div key={b.n} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <BrandLogo brand={b.key} size={20} />
                            <span className="text-xs text-gray-300">{b.n}</span>
                          </div>
                          <span className="text-xs text-gray-400">{b.a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              },
              {
                num: '03',
                title: 'Track participation',
                desc: 'See real-time dashboards. Know which perks employees love. Adjust budgets anytime.',
                preview: (
                  <div className="p-4 rounded-xl mt-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <p className="text-xs text-gray-400 mb-2">Participation this month</p>
                    <div className="flex items-end gap-1 h-10">
                      {[60, 80, 70, 90, 85, 94, 94].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm"
                          style={{ height: `${h}%`, background: i === 6 ? '#40916c' : 'rgba(255,255,255,0.15)' }} />
                      ))}
                    </div>
                    <p className="text-xs mt-2 font-semibold" style={{ color: '#7aab8a' }}>94% participation</p>
                  </div>
                )
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-6xl font-black mb-4" style={{ color: 'rgba(255,255,255,0.06)' }}>{step.num}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white mb-4"
                  style={{ background: '#2d6a4f' }}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {step.preview}
                {i < 2 && (
                  <div className="hidden md:block absolute top-16 -right-4 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATING STORY SECTIONS ── */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Story 1: Employee choice */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1a4731' }}>Employee Choice</p>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
                One person&apos;s perk is another&apos;s must-have.
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                A parent needs UrbanSitter. A dog owner needs Rover. A foodie needs DoorDash. A homebody needs Netflix. Why give everyone the same thing?
              </p>
              <p className="text-gray-500 mb-8">
                Jiibe lets every employee choose the perks that actually fit their life — not a one-size-fits-all package that half your team ignores.
              </p>
              <Link href="/benefits" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#1a4731' }}>
                Browse all perks →
              </Link>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">What employees are choosing</p>
              <div className="space-y-3">
                {[
                  { name: 'Sarah', role: 'Software Engineer', perk: 'Netflix + Spotify', cat: 'Entertainment', catBg: '#fef3ec', catText: '#8b3a0f' },
                  { name: 'Marcus', role: 'Product Manager', perk: 'DoorDash + Rover', cat: 'Food & Pets', catBg: '#e8f8f7', catText: '#1a5c58' },
                  { name: 'Jennifer', role: 'HR Director', perk: 'UrbanSitter + Calm', cat: 'Family', catBg: '#fbeef1', catText: '#7a1f30' },
                  { name: 'David', role: 'Sales Lead', perk: 'Uber + Airbnb', cat: 'Travel', catBg: '#edf6fb', catText: '#1a4a6b' },
                  { name: 'Priya', role: 'Designer', perk: 'ClassPass + Coursera', cat: 'Wellness', catBg: '#eef6f1', catText: '#1e5c35' },
                ].map(emp => (
                  <div key={emp.name} className="flex items-start gap-4 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: '#1a4731' }}>
                      {emp.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-gray-900">{emp.name}</p>
                        <p className="text-xs text-gray-400 flex-shrink-0">{emp.role}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-xs font-medium text-gray-700">{emp.perk}</p>
                        <span className="cat-pill" style={{ background: emp.catBg, color: emp.catText, fontSize: '9px', padding: '2px 6px' }}>{emp.cat}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story 2: Simple admin */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card p-8">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">Admin Setup</p>
                <div className="space-y-4">
                  {[
                    { step: '1', label: 'Connect your HRIS', done: true },
                    { step: '2', label: 'Set monthly budget', done: true },
                    { step: '3', label: 'Invite employees', done: true },
                    { step: '4', label: 'Employees choose perks', done: false },
                  ].map(s => (
                    <div key={s.step} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${s.done ? 'text-white' : 'text-gray-400 border-2 border-gray-200'}`}
                        style={s.done ? { background: '#1a4731' } : {}}>
                        {s.done ? '✓' : s.step}
                      </div>
                      <span className={`text-sm font-medium ${s.done ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl" style={{ background: '#eef6f1', border: '1px solid #c3e6d0' }}>
                  <p className="text-sm font-semibold" style={{ color: '#1e5c35' }}>Average setup time: 15 minutes</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1a4731' }}>Simple Administration</p>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Set it up in 15 minutes. Run it in 15 seconds a month.
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                No benefit consultants. No complicated enrollment windows. No annual reviews. Just set a budget, connect your HRIS, and let employees do the rest.
              </p>
              <Link href="/for-hr" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#1a4731' }}>
                See the HR experience →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6" style={{ background: '#faf8f4' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Frequently asked questions</h2>
          </div>
          <div className="glass-card p-8">
            {[
              { q: 'How does the monthly stipend work?', a: 'HR teams set a monthly per-employee budget (e.g., $100/month). Employees can spend that budget on any perks in the marketplace. Unused funds roll back at the end of the month — you only pay for what employees actually use.' },
              { q: 'Which HRIS systems does Jiibe integrate with?', a: 'Jiibe integrates with Workday, BambooHR, Rippling, ADP, Gusto, and 20+ other HRIS platforms. Employee onboarding and offboarding is automatic.' },
              { q: 'How do employees access their perks?', a: 'Employees log in to the Jiibe employee portal, browse the marketplace, and redeem perks instantly. They receive access codes, credits, or subscriptions directly — no waiting, no paperwork.' },
              { q: 'Can employees change their perks each month?', a: 'Yes! Employees can change their perk selections every month. Try Netflix this month, switch to Rover next month. The flexibility is the whole point.' },
              { q: 'Is there a minimum number of employees?', a: 'Jiibe works for teams of all sizes, from 10 employees to 10,000+. Pricing scales with your team size.' },
              { q: 'What happens to unused stipend funds?', a: 'Unused monthly stipend funds roll back to your company account at the end of each month. You never pay for perks employees don\'t redeem.' },
              { q: 'How does SMS communication work?', a: 'Employees who opt in to SMS notifications receive transactional account alerts — perk redemption confirmations, balance reminders, and new perk announcements. SMS opt-in is always optional. Reply STOP to opt out at any time.' },
            ].map(faq => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
            style={{ background: '#1a2e1f' }}>
            <div className="absolute top-0 left-0 w-64 h-64 blob opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(64,145,108,0.6) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 right-0 w-64 h-64 blob opacity-15"
              style={{ background: 'radial-gradient(circle, rgba(245,169,127,0.4) 0%, transparent 70%)' }} />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#7aab8a' }}>Ready to get started?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Give your team perks they&apos;ll actually love.
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#c3e6d0' }}>
                Join 500+ companies giving employees the freedom to choose Netflix, Uber, DoorDash, UrbanSitter, Rover, and 500+ more lifestyle perks.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo"
                  className="px-10 py-4 text-base font-bold text-gray-900 rounded-2xl shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all bg-white">
                  Book a Demo
                </Link>
                <Link href="/signup"
                  className="px-10 py-4 text-base font-bold text-white rounded-2xl transition-all hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
                  Employee Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
