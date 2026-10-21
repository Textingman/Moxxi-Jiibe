import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$8',
    period: 'per employee/mo',
    desc: 'Perfect for small teams getting started with lifestyle benefits.',
    stipend: 'Up to $100/employee/mo stipend',
    features: [
      '500+ benefits marketplace',
      'Up to 50 employees',
      'Monthly stipend management',
      'Basic analytics dashboard',
      'Email support',
      'Standard HRIS integrations',
    ],
    cta: 'Start Free Trial',
    href: '/demo',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$6',
    period: 'per employee/mo',
    desc: 'For growing companies that want more flexibility and insights.',
    stipend: 'Up to $200/employee/mo stipend',
    features: [
      'Everything in Starter',
      'Up to 500 employees',
      'Custom stipend amounts by group',
      'Advanced analytics & ROI reporting',
      'Priority support',
      'All HRIS integrations',
      'Slack notifications',
      'SSO (Okta, Google)',
    ],
    cta: 'Book a Demo',
    href: '/demo',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    desc: 'For large organizations with complex needs and global teams.',
    stipend: 'Unlimited stipend amounts',
    features: [
      'Everything in Growth',
      'Unlimited employees',
      'Global benefits (30+ countries)',
      'Custom benefit curation',
      'Dedicated customer success manager',
      'SLA guarantees',
      'Custom integrations',
      'SOC 2 Type II compliance',
      'Multi-currency support',
    ],
    cta: 'Contact Sales',
    href: '/demo',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            Simple, Transparent Pricing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Pay for the platform.<br />
            <span style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f, #40916c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Only pay for benefits used.
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-4">
            Jiibe charges a small platform fee per employee. The benefit stipend you set is separate — and unused stipends roll back to you every month.
          </p>
          <p className="text-sm text-gray-400">No setup fees. No annual contracts required. Cancel anytime.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div key={plan.name}
                className={`rounded-3xl p-8 flex flex-col ${plan.highlight ? 'text-white' : 'glass-card'}`}
                style={plan.highlight ? { background: 'linear-gradient(135deg, #1a2e1f, #1a4731)' } : {}}>
                {plan.highlight && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 self-start"
                    style={{ background: 'rgba(255,255,255,0.15)' }}>
                    ⭐ Most Popular
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlight ? 'text-green-200' : 'text-gray-500'}`}>{plan.desc}</p>
                <div className="mb-2">
                  <span className={`text-5xl font-black ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className={`text-sm ml-2 ${plan.highlight ? 'text-green-200' : 'text-gray-400'}`}>{plan.period}</span>
                  )}
                </div>
                <div className={`text-xs font-semibold mb-6 px-3 py-2 rounded-lg ${plan.highlight ? 'bg-white/10 text-green-200' : 'text-green-700'}`}
                  style={!plan.highlight ? { background: 'rgba(26,71,49,0.08)' } : {}}>
                  + {plan.stipend}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={plan.highlight ? '#4ade80' : '#1a4731'} strokeWidth="2.5" className="flex-shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className={`text-sm ${plan.highlight ? 'text-green-100' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}
                  className={`w-full py-3.5 text-sm font-semibold rounded-2xl text-center transition-all hover:opacity-90 ${
                    plan.highlight ? 'bg-white text-gray-900' : 'text-white'
                  }`}
                  style={!plan.highlight ? { background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' } : {}}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Billing Works */}
      <section className="py-24 px-6 section-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How billing works</h2>
            <p className="text-lg text-gray-500">Simple, transparent, and fair.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Platform fee',
                desc: 'You pay a small monthly fee per active employee for access to the Jiibe platform, marketplace, analytics, and support.',
                example: 'Example: 100 employees × $6/mo = $600/mo platform fee',
                icon: '🏪',
              },
              {
                title: 'Benefit stipend',
                desc: 'You set a monthly stipend per employee (e.g., $100/mo). Employees spend it on benefits they choose. Unused stipend rolls back to you.',
                example: 'Example: 100 employees × $100 stipend = up to $10,000/mo in benefits',
                icon: '💳',
              },
              {
                title: 'Only pay for what\'s used',
                desc: 'If an employee doesn\'t redeem their full stipend, the unused amount rolls back to your account at the end of the month.',
                example: 'Example: Employee uses $75 of $100 → you\'re only charged $75',
                icon: '💰',
              },
              {
                title: 'No hidden fees',
                desc: 'No setup fees, no annual contracts required, no per-transaction fees, no vendor fees. What you see is what you pay.',
                example: 'Total monthly cost = Platform fee + Benefits redeemed',
                icon: '✅',
              },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                <div className="p-3 rounded-xl text-xs font-semibold" style={{ background: 'rgba(26,71,49,0.06)', color: '#1a4731' }}>
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 section-ivory">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
          </div>
          <div className="glass-card p-8 space-y-6">
            {[
              { q: 'Is there a free trial?', a: 'Yes! All plans include a 30-day free trial. No credit card required to start.' },
              { q: 'Can I change plans?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.' },
              { q: 'What happens to unused stipend?', a: 'Unused monthly stipend rolls back to your company account at the end of each month. You only pay for benefits employees actually redeem.' },
              { q: 'Are there annual discounts?', a: 'Yes! Annual billing saves 20% compared to monthly billing. Contact us for annual pricing.' },
              { q: 'Can I set different stipend amounts for different employee groups?', a: 'Yes, on Growth and Enterprise plans you can set different stipend amounts for different employee groups (e.g., full-time vs. part-time, different departments).' },
              { q: 'Is there a minimum number of employees?', a: 'No minimum. Jiibe works for teams of any size, from 5 employees to 50,000+.' },
            ].map(faq => (
              <div key={faq.q} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: '#1a2e1f' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start your free trial today</h2>
          <p className="text-gray-400 mb-8 text-lg">30 days free. No credit card required. Cancel anytime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo"
              className="px-8 py-4 text-base font-semibold text-gray-900 rounded-2xl bg-white hover:opacity-90 transition-all">
              Book a Demo
            </Link>
            <Link href="/for-hr"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
