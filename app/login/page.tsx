'use client';

import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

type View = 'login' | 'reset' | 'reset-sent';

export default function LoginPage() {
  const [view, setView] = useState<View>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [resetEmail, setResetEmail] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [resetError, setResetError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validateLogin = () => {
    const newErrors: typeof errors = {};
    if (!formData.email) {
      newErrors.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    return newErrors;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateLogin();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Simulate invalid credentials (since this is a demo)
    setErrors({ general: 'Invalid email or password. Please check your credentials and try again.' });
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      setResetError('Please enter your work email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail)) {
      setResetError('Please enter a valid email address.');
      return;
    }
    setResetError('');
    setView('reset-sent');
  };

  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(26,71,49,0.25) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(64,145,108,0.2) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-md mx-auto">

          {/* ── LOGIN VIEW ── */}
          {view === 'login' && (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  Employee Benefits Portal
                </div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Welcome back</h1>
                <p className="text-gray-500">Sign in to access your benefits</p>
              </div>

              <div className="glass-card p-8">
                {/* General error */}
                {errors.general && (
                  <div className="mb-5 p-4 rounded-xl flex items-start gap-3" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <p className="text-sm text-red-700">{errors.general}</p>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5" noValidate>
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl bg-white text-sm transition-colors ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="jane@company.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <button
                        type="button"
                        onClick={() => setView('reset')}
                        className="text-xs font-semibold hover:underline"
                        style={{ color: '#1a4731' }}>
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 pr-11 border rounded-xl bg-white text-sm transition-colors ${
                          errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        }`}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                        {showPassword ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-semibold text-white rounded-xl shadow-md hover:opacity-90 transition-all"
                    style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                    Sign In to My Benefits
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">
                    New employee?{' '}
                    <Link href="/signup" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>
                      Set up your account →
                    </Link>
                  </p>
                </div>
              </div>

              {/* Help text */}
              <p className="text-center text-xs text-gray-400 mt-6">
                Having trouble? Contact your HR team or email{' '}
                <a href="mailto:support@jiibe.com" className="font-semibold" style={{ color: '#1a4731' }}>
                  support@jiibe.com
                </a>
              </p>
            </>
          )}

          {/* ── RESET PASSWORD VIEW ── */}
          {view === 'reset' && (
            <>
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(26,71,49,0.1)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a4731" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Reset your password</h1>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Enter your work email and we&apos;ll send you a link to reset your password.
                </p>
              </div>

              <div className="glass-card p-8">
                <form onSubmit={handleReset} className="space-y-5" noValidate>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email</label>
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => { setResetEmail(e.target.value); setResetError(''); }}
                      className={`w-full px-4 py-3 border rounded-xl bg-white text-sm transition-colors ${
                        resetError ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      }`}
                      placeholder="jane@company.com"
                      autoComplete="email"
                    />
                    {resetError && (
                      <p className="text-red-500 text-xs mt-1.5 font-medium">{resetError}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm font-semibold text-white rounded-xl shadow-md hover:opacity-90 transition-all"
                    style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                    Send Reset Link
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setView('login')}
                    className="text-sm font-semibold hover:underline flex items-center gap-1.5 mx-auto"
                    style={{ color: '#1a4731' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to sign in
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ── RESET SENT VIEW ── */}
          {view === 'reset-sent' && (
            <>
              <div className="glass-card p-10 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Check your email</h2>
                <p className="text-gray-500 text-sm mb-2">
                  We sent a password reset link to:
                </p>
                <p className="font-semibold text-gray-900 mb-6">{resetEmail}</p>
                <div className="p-4 rounded-xl text-left mb-6" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.12)' }}>
                  <p className="text-sm text-green-800 leading-relaxed">
                    📧 Click the link in the email to reset your password. The link will expire in <strong>30 minutes</strong>.
                  </p>
                  <p className="text-sm text-green-800 leading-relaxed mt-2">
                    Don&apos;t see it? Check your spam folder or contact <a href="mailto:support@jiibe.com" className="underline font-semibold">support@jiibe.com</a>.
                  </p>
                </div>
                <button
                  onClick={() => setView('login')}
                  className="w-full py-3.5 text-sm font-semibold text-white rounded-xl shadow-md hover:opacity-90 transition-all"
                  style={{ background: 'linear-gradient(135deg, #1a4731, #2d6a4f)' }}>
                  Back to Sign In
                </button>
                <button
                  onClick={() => { setView('reset'); setResetEmail(''); }}
                  className="mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Use a different email
                </button>
              </div>
            </>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
