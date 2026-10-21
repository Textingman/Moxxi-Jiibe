'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email.';
    if (!formData.message) newErrors.message = 'Message is required.';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                We&apos;d love to hear from you.
              </h1>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Whether you have a question about our platform, need help with your account, or want to explore a partnership — we&apos;re here to help.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: '🛟',
                    title: 'Customer Support',
                    desc: 'Need help with your account or benefits? We\'re here.',
                    contact: 'support@jiibe.com',
                    href: 'mailto:support@jiibe.com',
                  },
                  {
                    icon: '📞',
                    title: 'Support Phone',
                    desc: 'Speak directly with our support team.',
                    contact: '(302) 555-0184',
                    href: 'tel:+13025550184',
                  },
                  {
                    icon: '📍',
                    title: 'Office',
                    desc: '8 The Green, Ste A, Dover, DE 19901',
                    contact: 'View on Maps',
                    href: 'https://maps.google.com/?q=8+The+Green+Ste+A+Dover+DE+19901',
                  },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'rgba(26,71,49,0.08)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-0.5">{item.title}</p>
                      <p className="text-sm text-gray-500 mb-1">{item.desc}</p>
                      <a href={item.href} className="text-sm font-semibold hover:underline" style={{ color: '#1a4731' }}>
                        {item.contact}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-2xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                <p className="font-semibold text-green-800 mb-1">⚡ Average response time</p>
                <p className="text-sm text-green-700">We respond to all inquiries within 1 business day. For urgent support, email support@jiibe.com directly.</p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!submitted ? (
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-white text-sm ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                        placeholder="Jane Smith" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl bg-white text-sm ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                        placeholder="jane@company.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                      <select name="subject" value={formData.subject} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-sm">
                        <option value="">Select a topic...</option>
                        <option value="demo">Request a Demo</option>
                        <option value="pricing">Pricing Question</option>
                        <option value="support">Account Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="press">Press / Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-xl bg-white text-sm resize-none ${errors.message ? 'border-red-300' : 'border-gray-200'}`}
                        placeholder="Tell us how we can help..." />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit"
                      className="w-full py-4 text-base font-semibold text-white rounded-2xl shadow-lg hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                      Send Message
                    </button>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Message sent!</h2>
                  <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                    Thanks for reaching out! We&apos;ll get back to you at <strong>{formData.email}</strong> within 1 business day.
                  </p>
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
