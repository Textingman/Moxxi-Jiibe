import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { BrandLogo } from '../components/BrandLogo';

export default function PlatformPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            How It Works
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            The simplest benefits platform<br />
            <span style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f, #40916c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              your team will actually use.
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Jiibe replaces complicated benefit packages with a simple marketplace. HR sets a budget. Employees choose what they love. Done.
          </p>
        </div>
      </section>

      {/* Product Mockup — Employee View */}
      <section className="py-20 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1a4731' }}>Employee Experience</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">A marketplace employees actually want to use.</h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Employees log in, browse 500+ benefits organized by category, and redeem what fits their life. No paperwork. No waiting. Instant access.
              </p>
              <div className="space-y-3">
                {[
                  'Browse by category — streaming, food, travel, wellness, and more',
                  'See your monthly balance and remaining stipend at a glance',
                  'Redeem in one click — get codes or credits instantly',
                  'Change selections every month with no lock-in',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(26,71,49,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1a4731" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Mockup */}
            <div className="glass-card p-6">
              {/* App header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Your Benefits</p>
                  <p className="text-2xl font-bold text-gray-900 mt-0.5">$150 <span className="text-sm text-gray-400 font-normal">/ month</span></p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Remaining</p>
                  <p className="text-lg font-bold text-green-700">$47.01</p>
                </div>
              </div>

              {/* Active benefits */}
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-3">Active Benefits</p>
              <div className="space-y-2 mb-5">
                {[
                  { key: 'netflix', name: 'Netflix Premium', cost: '$22.99', status: 'Active' },
                  { key: 'doordash', name: 'DoorDash Credits', cost: '$40.00', status: 'Active' },
                  { key: 'rover', name: 'Rover Dog Walking', cost: '$40.00', status: 'Active' },
                ].map(b => (
                  <div key={b.key} className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center gap-3">
                      <BrandLogo brand={b.key} size={32} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{b.name}</p>
                        <p className="text-xs text-gray-400">{b.cost}/mo</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-green-600 px-2 py-1 rounded-full" style={{ background: 'rgba(26,71,49,0.08)' }}>
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Browse section */}
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-3">Browse More Benefits</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'spotify', name: 'Spotify' },
                  { key: 'classpass', name: 'ClassPass' },
                  { key: 'coursera', name: 'Coursera' },
                ].map(b => (
                  <div key={b.key} className="p-3 rounded-xl text-center border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer">
                    <BrandLogo brand={b.key} size={32} className="mx-auto mb-1.5" />
                    <p className="text-xs text-gray-600 font-medium">{b.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-6" style={{ background: '#1a2e1f' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Three steps. That&apos;s it.</h2>
            <p className="text-gray-400 text-lg">From setup to happy employees in under 20 minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'HR sets the budget',
                desc: 'Choose a monthly per-employee stipend. Connect your HRIS and employees are automatically enrolled.',
                detail: 'Average setup time: 15 minutes',
              },
              {
                num: '02',
                title: 'Employees choose',
                desc: 'Employees log in and browse 500+ lifestyle benefits. They pick what fits their life. Selections can change every month.',
                detail: 'Average time to first redemption: 3 minutes',
              },
              {
                num: '03',
                title: 'Track and optimize',
                desc: 'Real-time dashboards show participation rates, most popular benefits, and budget utilization.',
                detail: 'Average participation rate: 94%',
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div className="text-7xl font-black mb-4" style={{ color: 'rgba(255,255,255,0.05)' }}>{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.desc}</p>
                <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <p className="text-xs text-green-400 font-semibold">{step.detail}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 z-10">
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

      {/* Product Mockup — HR Dashboard */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* HR Dashboard Mockup */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">HR Dashboard</p>
                  <p className="text-lg font-bold text-gray-900 mt-0.5">October 2026</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-green-700" style={{ background: 'rgba(26,71,49,0.08)' }}>
                  247 employees
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: 'Participation Rate', value: '94%', trend: '+8% vs last month' },
                  { label: 'Budget Utilized', value: '$34.2K', trend: 'of $37K budget' },
                  { label: 'Avg. Satisfaction', value: '4.8 / 5', trend: 'Employee rating' },
                  { label: 'Setup Time', value: '14 min', trend: 'One-time setup' },
                ].map(stat => (
                  <div key={stat.label} className="p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 mt-0.5">{stat.trend}</p>
                  </div>
                ))}
              </div>

              {/* Top benefits */}
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-3">Top Benefits This Month</p>
              <div className="space-y-2">
                {[
                  { key: 'doordash', name: 'DoorDash', pct: 68 },
                  { key: 'netflix', name: 'Netflix', pct: 54 },
                  { key: 'uber', name: 'Uber', pct: 41 },
                ].map(b => (
                  <div key={b.key} className="flex items-center gap-3">
                    <BrandLogo brand={b.key} size={24} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs font-medium text-gray-900">{b.name}</p>
                        <p className="text-xs text-gray-400">{b.pct}%</p>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div className="h-1.5 rounded-full" style={{ width: `${b.pct}%`, background: '#1a4731' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#1a4731' }}>HR Admin View</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Real-time visibility into what&apos;s working.</h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                See participation rates, budget utilization, and employee satisfaction in one dashboard. Know exactly which benefits your team loves.
              </p>
              <div className="space-y-3">
                {[
                  'Participation rate by department and benefit category',
                  'Budget utilization and rollback tracking',
                  'Employee satisfaction scores and feedback',
                  'Export reports for leadership presentations',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(26,71,49,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1a4731" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HRIS Integrations */}
      <section className="py-24 px-6 section-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Works with your existing stack</h2>
            <p className="text-lg text-gray-500">Connect Jiibe to the tools you already use. Setup is automatic.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { key: 'workday', name: 'Workday', category: 'HRIS' },
              { key: 'bamboohr', name: 'BambooHR', category: 'HRIS' },
              { key: 'rippling', name: 'Rippling', category: 'HRIS' },
              { key: 'adp', name: 'ADP', category: 'HRIS' },
              { key: 'gusto', name: 'Gusto', category: 'HRIS' },
              { key: 'okta', name: 'Okta', category: 'SSO' },
              { key: 'slack', name: 'Slack', category: 'Notifications' },
              { key: 'linkedin', name: 'LinkedIn', category: 'Directory' },
            ].map(integration => (
              <div key={integration.key} className="glass-card p-5 text-center">
                <BrandLogo brand={integration.key} size={40} className="mx-auto mb-3" />
                <p className="font-semibold text-gray-900 text-sm">{integration.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{integration.category}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400">+ 20 more integrations including Workday, SAP, Oracle HCM, and more</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need. Nothing you don&apos;t.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '500+ Benefits Marketplace', desc: 'Netflix, Hulu, Uber, DoorDash, UrbanSitter, Rover, Spotify, Airbnb, ClassPass, Coursera, and hundreds more.' },
              { title: 'Flexible Budgets', desc: 'Set any monthly stipend per employee. Unused funds roll back — you only pay for what employees actually redeem.' },
              { title: 'HRIS Integrations', desc: 'Connects with Workday, BambooHR, Rippling, ADP, Gusto, and 20+ more. Onboarding and offboarding is automatic.' },
              { title: 'Real-Time Analytics', desc: 'See participation rates, most popular benefits, budget utilization, and employee satisfaction scores.' },
              { title: 'Monthly Flexibility', desc: 'Employees can change their benefit selections every month. No annual enrollment windows.' },
              { title: 'Instant Redemption', desc: 'Employees receive access codes, credits, or subscriptions instantly — no waiting, no paperwork.' },
              { title: 'Enterprise Security', desc: 'SOC 2 Type II certified. Data encrypted in transit and at rest. SSO support for all major providers.' },
              { title: 'Global Ready', desc: 'Support for employees in 30+ countries with local benefit options and multi-currency support.' },
              { title: 'Dedicated Support', desc: 'Every account gets a dedicated customer success manager. Average response time: under 2 hours.' },
            ].map(feature => (
              <div key={feature.title} className="glass-card p-6">
                <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: 'rgba(26,71,49,0.1)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a4731" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 section-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See it in action</h2>
          <p className="text-gray-500 mb-8 text-lg">Book a 20-minute demo and we&apos;ll show you exactly how Jiibe works for your team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
              Book a Demo
            </Link>
            <Link href="/for-hr"
              className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-all">
              For HR Teams →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
