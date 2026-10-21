import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ForHRPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
                For HR Teams
              </div>
              <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-6">
                Benefits your employees will actually use.
                <span style={{ display: 'block', background: 'linear-gradient(135deg, #1a4731, #2d6a4f, #40916c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Zero admin overhead.
                </span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Stop managing complicated benefit packages that half your team ignores. Jiibe gives every employee a monthly stipend to spend on the perks they actually want.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo"
                  className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all text-center"
                  style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                  Book a Demo
                </Link>
                <Link href="/pricing"
                  className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-all text-center">
                  See Pricing →
                </Link>
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">HR Dashboard — October 2026</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Active Employees', value: '247', change: '+12 this month', icon: '👥' },
                  { label: 'Participation Rate', value: '94%', change: '+8% vs last month', icon: '📈' },
                  { label: 'Avg. Satisfaction', value: '4.8★', change: 'Employee rating', icon: '⭐' },
                  { label: 'Budget Utilized', value: '$34.2K', change: 'of $37K budget', icon: '💰' },
                ].map(stat => (
                  <div key={stat.label} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm">{stat.icon}</span>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-green-600 font-medium mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                <p className="text-xs font-semibold text-green-800">🏆 Top benefit this month: DoorDash (68% of employees)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HR Teams Love It */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why HR teams choose Jiibe</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We built Jiibe to solve the problems HR teams actually face with traditional benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'The old way',
                solution: 'The Jiibe way',
                old: 'Spend weeks selecting benefit packages. Negotiate with vendors. Manage annual enrollment windows. Deal with employees who never use their benefits.',
                new: 'Set a monthly budget in 15 minutes. Employees choose from 500+ benefits. No enrollment windows. 94% average participation rate.',
                icon: '⚡',
              },
              {
                problem: 'The old way',
                solution: 'The Jiibe way',
                old: 'Pay for benefits whether employees use them or not. Complicated invoicing. Hard to track ROI. Employees complain about benefits they don\'t want.',
                new: 'Only pay for what employees actually redeem. Unused stipends roll back. Real-time ROI dashboards. Employees love their benefits.',
                icon: '💰',
              },
              {
                problem: 'The old way',
                solution: 'The Jiibe way',
                old: 'Manual HRIS updates when employees join or leave. Separate logins for each benefit vendor. Hours spent on benefits administration every month.',
                new: 'Automatic HRIS sync. One platform for all benefits. Benefits administration takes minutes, not hours.',
                icon: '🔗',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">❌ {item.problem}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.old}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#1a4731' }}>✅ {item.solution}</p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{item.new}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-24 px-6 section-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Set up in 15 minutes. Manage in seconds.</h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                We designed Jiibe for HR teams who are already stretched thin. Setup is fast, management is minimal, and employees handle the rest themselves.
              </p>
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Connect your HRIS', desc: 'Workday, BambooHR, Rippling, ADP, Gusto — we integrate with all of them. Employees are automatically enrolled.' },
                  { step: '2', title: 'Set your budget', desc: 'Choose a monthly per-employee stipend. You can set different amounts for different employee groups.' },
                  { step: '3', title: 'Invite your team', desc: 'Employees receive an email with instructions to access their benefits. Most activate within 24 hours.' },
                  { step: '4', title: 'Watch participation soar', desc: 'Employees choose their own benefits. Average participation rate: 94%. Average time to first redemption: 3 minutes.' },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-6">Admin Setup Checklist</p>
              <div className="space-y-4">
                {[
                  { label: 'Connect Workday HRIS', done: true },
                  { label: 'Set monthly budget ($150/employee)', done: true },
                  { label: 'Configure employee groups', done: true },
                  { label: 'Send employee invitations', done: true },
                  { label: 'Employees activate accounts', done: false },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${item.done ? 'text-white' : 'border-2 border-gray-200 text-gray-400'}`}
                      style={item.done ? { background: '#1a4731' } : {}}>
                      {item.done ? '✓' : ''}
                    </div>
                    <span className={`text-sm ${item.done ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                <p className="text-sm font-semibold text-green-800">⚡ Total setup time: 14 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Know exactly what&apos;s working</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Real-time dashboards give you the data you need to optimize your benefits program and prove ROI to leadership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '94%', label: 'Average participation rate', desc: 'vs. 40% industry average for traditional benefits' },
              { metric: '3 min', label: 'Time to first redemption', desc: 'Employees activate and redeem benefits immediately' },
              { metric: '4.8★', label: 'Average employee satisfaction', desc: 'Employees rate their benefits experience' },
              { metric: '15 min', label: 'Average setup time', desc: 'From signup to employees receiving invitations' },
            ].map(stat => (
              <div key={stat.metric} className="glass-card p-6 text-center">
                <p className="text-4xl font-black mb-2" style={{ color: '#1a4731' }}>{stat.metric}</p>
                <p className="font-semibold text-gray-900 text-sm mb-2">{stat.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 section-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What HR leaders say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'We went from 40% benefit utilization to 94% in the first month. Employees actually use Jiibe because they get to choose what matters to them.',
                name: 'Jennifer K.',
                title: 'VP of People, TechCorp (500 employees)',
                stat: '94% utilization',
              },
              {
                quote: 'Setup took 20 minutes. Our Workday integration connected automatically. Now I spend zero time managing benefits — employees handle it themselves.',
                name: 'Sarah M.',
                title: 'HR Director, StartupCo (120 employees)',
                stat: '20 min setup',
              },
              {
                quote: 'Our employees love that they can choose Netflix one month and switch to DoorDash the next. The flexibility is what makes it work.',
                name: 'David R.',
                title: 'Chief People Officer, ScaleUp (800 employees)',
                stat: '4.9★ rating',
              },
            ].map(proof => (
              <div key={proof.name} className="glass-card p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm">&ldquo;{proof.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{proof.name}</p>
                    <p className="text-xs text-gray-400">{proof.title}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731' }}>
                    {proof.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: '#1a2e1f' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to transform your benefits program?</h2>
          <p className="text-gray-400 mb-8 text-lg">Book a 20-minute demo. We&apos;ll show you exactly how Jiibe works and answer all your questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo"
              className="px-8 py-4 text-base font-semibold text-gray-900 rounded-2xl bg-white hover:opacity-90 transition-all">
              Book a Demo
            </Link>
            <Link href="/pricing"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
              See Pricing →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
