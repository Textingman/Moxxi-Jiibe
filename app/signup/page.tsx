'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

type Step = 1 | 2 | 3;

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [companyIdError, setCompanyIdError] = useState('');
  const [formData, setFormData] = useState({
    companyId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
    smsOptIn: false,
    smsMarketingOptIn: false,
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(26,71,49,0.3) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] blob opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(64,145,108,0.25) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-10 px-6 text-center relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
            Employee Benefits Portal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Access Your Benefits
          </h1>
          <p className="text-lg text-gray-500">
            Your employer has set up a Jiibe benefits program. Use your Company ID to get started and choose from Netflix, Uber, DoorDash, Rover, and 500+ more.
          </p>
        </div>
      </section>

      {/* Progress stepper */}
      {step < 3 && (
        <div className="max-w-lg mx-auto px-6 pt-4 pb-2 relative" style={{ zIndex: 1 }}>
          <div className="flex items-center">
            {[{ num: 1, label: 'Company ID' }, { num: 2, label: 'Your Details' }].map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                    step > s.num ? 'text-white border-green-700' : step === s.num ? 'text-white border-green-700' : 'bg-white border-gray-200 text-gray-400'
                  }`} style={step >= s.num ? { background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' } : {}}>
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${step === s.num ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</span>
                </div>
                {i < 1 && (
                  <div className={`flex-1 h-0.5 mx-3 mb-5 ${step > s.num ? 'bg-green-700' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form */}
      <section className="max-w-lg mx-auto px-6 py-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="glass-card p-8 md:p-10">

          {/* Step 1: Company ID */}
          {step === 1 && (
            <form onSubmit={(e) => {
              e.preventDefault();
              const VALID_IDS = ['1234', 'DEMO', 'TEST', 'PERK'];
              if (!VALID_IDS.includes(formData.companyId.trim().toUpperCase())) {
                setCompanyIdError('Company ID not found. Please check with your HR team or manager.');
                return;
              }
              setCompanyIdError('');
              nextStep();
            }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Enter your Company ID</h2>
                <p className="text-gray-500 text-sm">Step 1 of 2 — Your HR team or manager provided this ID</p>
              </div>

              <div className="p-4 rounded-2xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                <div className="flex items-start gap-3">
                  <span className="text-lg">🏢</span>
                  <div>
                    <p className="text-sm font-semibold text-green-800 mb-1">How to get your Company ID</p>
                    <p className="text-xs text-green-700">Your Company ID was provided by your HR team, benefits manager, or in your onboarding materials. Contact your HR department if you don&apos;t have one.</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company ID *</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="companyId"
                    required
                    value={formData.companyId}
                    onChange={(e) => { handleChange(e); setCompanyIdError(''); }}
                    className={`block w-full pl-11 pr-4 py-4 border rounded-2xl focus:ring-2 focus:border-transparent text-lg font-mono tracking-widest ${
                      companyIdError ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
                    }`}
                    style={{ outline: 'none' }}
                    placeholder="e.g. 1234"
                  />
                </div>
                {companyIdError && (
                  <p className="text-red-500 text-sm mt-2 font-medium">{companyIdError}</p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Don&apos;t have a Company ID? <Link href="/contact" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>Contact your HR team</Link> or <Link href="/for-hr" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>set up a company program</Link>.
                </p>
              </div>

              <button type="submit"
                className="w-full py-4 text-base font-semibold text-white rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                Continue
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}

          {/* Step 2: Personal Details */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Your details</h2>
                <p className="text-gray-500 text-sm">Step 2 of 2 — Tell us about yourself</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm"
                    placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm"
                    placeholder="Smith" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm"
                  placeholder="jane@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number (Optional)</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm"
                  placeholder="(555) 123-4567" />
                <p className="text-xs text-gray-400 mt-1">Required only if you want SMS benefit alerts</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Job Title *</label>
                <input type="text" name="jobTitle" required value={formData.jobTitle} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm"
                  placeholder="e.g. Marketing Manager" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Department *</label>
                <select name="department" required value={formData.department} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm">
                  <option value="">Select your department...</option>
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="engineering">Engineering</option>
                  <option value="operations">Operations</option>
                  <option value="hr">Human Resources</option>
                  <option value="finance">Finance</option>
                  <option value="customer_success">Customer Success</option>
                  <option value="product">Product</option>
                  <option value="design">Design</option>
                  <option value="legal">Legal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* SMS Opt-in — CARRIER COMPLIANT (Transactional) */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="smsOptIn"
                    name="smsOptIn"
                    checked={formData.smsOptIn}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 border-gray-300 rounded flex-shrink-0 cursor-pointer"
                    style={{ accentColor: '#1a4731' }}
                  />
                  <label htmlFor="smsOptIn" className="text-xs leading-relaxed text-gray-600 cursor-pointer">
                    By checking this box, I expressly consent to receive <strong>transactional account alert text messages</strong> from <strong>Jiibe</strong>, including benefit redemption confirmations, monthly balance reminders, new benefit availability alerts, and account notifications. Message frequency varies based on account activity. Message and data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help or email <strong>support@jiibe.com</strong>. <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> Consent is not required as a condition of accessing the Jiibe platform or any benefits. See our <Link href="/terms" className="font-semibold underline" style={{ color: '#1a4731' }}>Terms of Service</Link> (Section 5) for full SMS disclosures.
                  </label>
                </div>
              </div>

              {/* SMS Opt-in — Promotional Marketing */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="smsMarketingOptIn"
                    name="smsMarketingOptIn"
                    checked={formData.smsMarketingOptIn}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 border-gray-300 rounded flex-shrink-0 cursor-pointer"
                    style={{ accentColor: '#1a4731' }}
                  />
                  <label htmlFor="smsMarketingOptIn" className="text-xs leading-relaxed text-gray-600 cursor-pointer">
                    By checking this box, I expressly consent to receive <strong>promotional and marketing text messages</strong> from <strong>Jiibe</strong>, including new benefit announcements, seasonal promotions, exclusive offers, and platform updates. Message frequency may vary. Message and data rates may apply. Reply <strong>STOP</strong> to opt out at any time. Reply <strong>HELP</strong> for help or email <strong>support@jiibe.com</strong>. <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> Consent is not required as a condition of accessing the Jiibe platform or any benefits. See our <Link href="/terms" className="font-semibold underline" style={{ color: '#1a4731' }}>Terms of Service</Link> and <Link href="/sms-policy" className="font-semibold underline" style={{ color: '#1a4731' }}>SMS Policy</Link> for full disclosures.
                  </label>
                </div>
              </div>

              {/* Terms acceptance */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    required
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 border-gray-300 rounded flex-shrink-0 cursor-pointer"
                    style={{ accentColor: '#1a4731' }}
                  />
                  <label htmlFor="termsAccepted" className="text-xs leading-relaxed text-gray-600 cursor-pointer">
                    I agree to the{' '}
                    <Link href="/terms" className="font-semibold underline" style={{ color: '#1a4731' }}>Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="font-semibold underline" style={{ color: '#1a4731' }}>Privacy Policy</Link>. *
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={prevStep}
                  className="flex-1 py-4 border-2 border-gray-200 text-gray-700 text-sm font-semibold rounded-2xl hover:bg-gray-50 transition-colors bg-white">
                  Back
                </button>
                <button type="submit"
                  className="flex-1 py-4 text-sm font-semibold text-white rounded-2xl shadow-lg transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                  Access My Benefits
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">You&apos;re in!</h2>
              <p className="text-lg text-gray-500 mb-6 max-w-md mx-auto">
                Thanks, <strong>{formData.firstName}</strong>! Your access request has been received.
              </p>
              <div className="p-6 rounded-2xl text-left mb-8" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                <p className="text-sm text-green-800 leading-relaxed">
                  📧 <strong>We&apos;ve notified your employer</strong> (Company ID: <strong>{formData.companyId}</strong>) that you&apos;ve requested access. Once approved, you&apos;ll receive an email at <strong>{formData.email}</strong> with instructions to activate your account and start choosing benefits.
                </p>
                <p className="text-sm text-green-800 leading-relaxed mt-3">
                  🎁 You&apos;ll be able to choose from Netflix, Hulu, Uber, DoorDash, UrbanSitter, Rover, and 500+ more lifestyle benefits.
                </p>
                <p className="text-sm text-green-800 leading-relaxed mt-3">
                  ⏱ Approval typically takes <strong>1–2 business days</strong>. Questions? <a href="mailto:support@jiibe.com" className="underline font-semibold">support@jiibe.com</a>
                </p>
              </div>
              <Link href="/"
                className="inline-block px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                Back to Home
              </Link>
            </div>
          )}
        </div>

        {/* HR team link */}
        {step === 1 && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Are you an HR or People team leader?{' '}
              <Link href="/for-hr" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>
                Set up a company program →
              </Link>
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
