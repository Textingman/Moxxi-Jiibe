'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';
import { BrandLogo } from '../components/BrandLogo';

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    employees: '',
    role: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) newErrors.email = 'Work email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email.';
    if (!formData.company) newErrors.company = 'Company name is required.';
    if (!formData.employees) newErrors.employees = 'Please select your team size.';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left: Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
                Book a Demo
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                See Jiibe in action.
              </h1>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                In 20 minutes, we&apos;ll show you how Jiibe works, answer your questions, and help you figure out if it&apos;s the right fit for your team.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: '🏪', title: 'Live marketplace walkthrough', desc: 'See Netflix, DoorDash, Uber, UrbanSitter, Rover, and 500+ more benefits in action.' },
                  { icon: '⚙️', title: 'HR admin demo', desc: 'Watch how easy it is to set budgets, manage employees, and track participation.' },
                  { icon: '📊', title: 'Analytics & ROI', desc: 'See the dashboards HR teams use to prove benefits ROI to leadership.' },
                  { icon: '🔗', title: 'HRIS integration', desc: 'We\'ll show you how your existing HRIS connects in minutes.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Brand logos */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Benefits we&apos;ll show you</p>
                <div className="flex flex-wrap gap-3">
                  {['netflix', 'hulu', 'uber', 'doordash', 'urbansitter', 'rover', 'spotify', 'airbnb'].map(brand => (
                    <BrandLogo key={brand} brand={brand} size={36} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!submitted ? (
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a demo</h2>
                  <p className="text-gray-500 text-sm mb-6">We&apos;ll reach out within 1 business day to schedule your 20-minute demo.</p>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl bg-white text-sm ${errors.firstName ? 'border-red-300' : 'border-gray-200'}`}
                          placeholder="Jane" />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl bg-white text-sm ${errors.lastName ? 'border-red-300' : 'border-gray-200'}`}
                          placeholder="Smith" />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-white text-sm ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                        placeholder="jane@company.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name *</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-white text-sm ${errors.company ? 'border-red-300' : 'border-gray-200'}`}
                        placeholder="Acme Corp" />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Employees *</label>
                      <select name="employees" value={formData.employees} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-white text-sm ${errors.employees ? 'border-red-300' : 'border-gray-200'}`}>
                        <option value="">Select team size...</option>
                        <option value="1-25">1–25 employees</option>
                        <option value="26-100">26–100 employees</option>
                        <option value="101-500">101–500 employees</option>
                        <option value="501-1000">501–1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                      {errors.employees && <p className="text-red-500 text-xs mt-1">{errors.employees}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Role</label>
                      <select name="role" value={formData.role} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm">
                        <option value="">Select your role...</option>
                        <option value="hr-director">HR Director / VP of People</option>
                        <option value="hr-manager">HR Manager</option>
                        <option value="ceo">CEO / Founder</option>
                        <option value="coo">COO / Operations</option>
                        <option value="finance">Finance / CFO</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Anything specific you&apos;d like to see?</label>
                      <textarea name="message" value={formData.message} onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm resize-none"
                        placeholder="e.g. How does the Workday integration work? Can we set different budgets by department?" />
                    </div>

                    <button type="submit"
                      className="w-full py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                      Request My Demo
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      We&apos;ll reach out within 1 business day. No spam, ever.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="glass-card p-10 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Demo requested!</h2>
                  <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                    Thanks, <strong>{formData.firstName}</strong>! We&apos;ll reach out to <strong>{formData.email}</strong> within 1 business day to schedule your demo.
                  </p>
                  <div className="p-5 rounded-2xl text-left mb-8" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                    <p className="text-sm text-green-800 leading-relaxed">
                      📅 <strong>What to expect:</strong> A 20-minute video call where we&apos;ll walk you through the full Jiibe experience — the employee marketplace, HR admin dashboard, analytics, and HRIS integrations.
                    </p>
                    <p className="text-sm text-green-800 leading-relaxed mt-3">
                      Questions in the meantime? Email us at <a href="mailto:sales@jiibe.com" className="underline font-semibold">sales@jiibe.com</a>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
