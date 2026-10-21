import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            <span>🔐</span>
            Privacy Policy
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-500">Last Updated: October 7, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Privacy principles */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Privacy Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🔐', title: 'Your Data', desc: 'Your personal information belongs to you. You decide what to share and can request deletion at any time.' },
                { icon: '⚙️', title: 'Your Permissions', desc: 'You control which communications you receive. SMS opt-in is always optional and separate from service access.' },
                { icon: '✋', title: 'Your Choice', desc: 'We never sell your mobile number or personal data to third parties for marketing purposes.' },
              ].map(item => (
                <div key={item.title} className="text-center p-4">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Jiibe, Inc. (&quot;Jiibe,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our employee lifestyle benefits platform, including our website at jiibe.com and our employee portal.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By using Jiibe, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
              <p className="text-gray-600 mb-3">When you create an account or use our platform, we may collect:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Employer information and Company ID</li>
                <li>Job title and department</li>
                <li>Account credentials (username and password)</li>
                <li>Benefit selections and redemption history</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Mobile Information — No-Sharing Policy</h3>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <p className="text-sm font-bold text-red-800 mb-2">No Mobile Data Sharing Policy</p>
                <p className="text-sm text-red-700">
                  <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> All categories of mobile information are excluded from sharing with third-party marketers. We are committed to protecting your mobile information and will only use it for the purposes outlined in this Privacy Policy, such as providing our benefits platform and sending transactional account alert SMS messages to users who have explicitly opted in.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Device information (browser type, operating system, device type)</li>
                <li>IP address and general location data</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Platform performance and error data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, operate, and maintain the Jiibe lifestyle benefits platform</li>
                <li>Process benefit selections and redemptions</li>
                <li>Manage your account and employee profile</li>
                <li>Send transactional account alerts and benefit notifications (SMS and email, where opted in)</li>
                <li>Generate aggregate analytics for your employer&apos;s benefits program administration</li>
                <li>Improve our platform, products, and services</li>
                <li>Respond to customer support inquiries</li>
                <li>Detect and prevent fraud, abuse, or security incidents</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What Your Employer Can See</h2>
              <p className="text-gray-600 mb-4">
                Employers who use Jiibe to administer benefits programs have access to aggregate participation data — not individual employee personal information beyond what is necessary to manage the program.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.15)' }}>
                  <p className="text-sm font-semibold text-green-800 mb-2">✅ Employers CAN see:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Overall participation rates</li>
                    <li>• Most popular benefit categories</li>
                    <li>• Budget utilization reports</li>
                    <li>• Employee enrollment status</li>
                    <li>• Aggregate satisfaction scores</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <p className="text-sm font-semibold text-red-800 mb-2">❌ Employers CANNOT see:</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Individual benefit selections by name</li>
                    <li>• Personal contact information</li>
                    <li>• Account passwords or credentials</li>
                    <li>• SMS opt-in status</li>
                    <li>• Any data you haven&apos;t authorized</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">We may share your information with:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.1 Service Providers</h3>
              <p className="text-gray-600">Third-party vendors who perform services on our behalf, including cloud hosting, payment processing, analytics, and customer support. These providers are contractually obligated to protect your information and may not use it for their own marketing purposes.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.2 Your Employer</h3>
              <p className="text-gray-600">Aggregate benefits participation data as described in Section 4. We do not share individual employee personal data with employers beyond what is necessary to administer the benefits program.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.3 Benefit Partners</h3>
              <p className="text-gray-600">When you redeem a benefit (e.g., Netflix, DoorDash, Rover), we share only the information necessary to fulfill that redemption with the applicable benefit partner.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.4 Legal Requirements</h3>
              <p className="text-gray-600">When required by law, court order, or government regulation, or to protect the rights, property, or safety of Jiibe, our users, or the public.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">5.5 Business Transfers</h3>
              <p className="text-gray-600">In connection with a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your information is transferred and becomes subject to a different privacy policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. SMS Communications</h2>
              <p className="text-gray-600 mb-4">
                Jiibe may send SMS (text message) communications to users who have explicitly opted in. Our SMS program is limited exclusively to <strong>transactional account alert messages</strong>, which may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Account registration and onboarding confirmations</li>
                <li>Benefit redemption confirmations and access codes</li>
                <li>Monthly balance reminders and reset notifications</li>
                <li>New benefit availability alerts</li>
                <li>Account security notifications</li>
              </ul>
              <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.15)' }}>
                <p className="text-sm font-semibold text-green-800 mb-2">SMS Disclosures:</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>We do not send marketing or promotional SMS messages.</strong></li>
                  <li>• <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong></li>
                  <li>• Message and data rates may apply.</li>
                  <li>• Message frequency varies based on account activity.</li>
                  <li>• To opt out at any time, reply <strong>STOP</strong> to any message.</li>
                  <li>• For help, reply <strong>HELP</strong> or contact support@jiibe.com.</li>
                  <li>• SMS opt-in is optional and not required to use the Jiibe platform.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect platform functionality.
              </p>
              <p className="text-gray-600">
                We use cookies for: session management, remembering your preferences, analytics and performance monitoring, and security purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out of SMS:</strong> Reply STOP to any SMS message at any time</li>
                <li><strong>Opt-out of email:</strong> Use the unsubscribe link in any marketing email</li>
                <li><strong>Do Not Sell:</strong> We do not sell your personal information. If you have questions, contact us at support@jiibe.com.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, contact us at <a href="mailto:support@jiibe.com" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>support@jiibe.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption of data in transit (HTTPS/TLS), secure hosting infrastructure, access controls and authentication requirements, regular security assessments, and employee security training. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. When you close your account, we will delete or anonymize your personal information within 90 days, unless retention is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-gray-600">
                Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete that information promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. California Privacy Rights (CCPA)</h2>
              <p className="text-gray-600 mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The right to know what personal information we collect, use, disclose, and sell</li>
                <li>The right to delete personal information we have collected from you</li>
                <li>The right to opt-out of the sale of your personal information (we do not sell personal information)</li>
                <li>The right to non-discrimination for exercising your CCPA rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page, updating the &quot;Last Updated&quot; date, and sending an email notification to registered users. Your continued use of the platform after any changes constitutes your acceptance of the new Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
              <div className="glass-card p-6">
                <p className="text-gray-600 mb-4">If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:support@jiibe.com" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>support@jiibe.com</a></p>
                  <p className="text-gray-600"><strong>Address:</strong> Jiibe, Inc., 8 The Green, Ste A, Dover, DE 19901</p>
                  <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>jiibe.com</a></p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/terms" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: '#1a4731' }}>
                View Terms of Service →
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
