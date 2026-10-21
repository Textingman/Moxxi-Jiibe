import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#faf9f7' }}>
      <Nav />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: 'rgba(26,71,49,0.08)', color: '#1a4731', border: '1px solid rgba(26,71,49,0.15)' }}>
            <span>📋</span>
            Terms of Service
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-500">Last Updated: October 7, 2026</p>
        </div>
      </section>

      <section className="py-12 px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the Jiibe employee lifestyle benefits platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              These Terms apply to all users of the Service, including employees who access the platform through a Company ID provided by their employer, and employers (HR teams and administrators) who set up and manage benefits programs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Jiibe is an employee lifestyle benefits platform that allows employees to browse and redeem lifestyle benefits from a curated marketplace of 500+ brands, including entertainment (Netflix, Hulu, Spotify), food delivery (DoorDash, Uber Eats), transportation (Uber), childcare (UrbanSitter), pet care (Rover), travel, wellness, learning, and shopping benefits. Employers use the platform to set monthly per-employee benefit budgets and track participation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.1 Employee Accounts</h3>
            <p className="text-gray-600 leading-relaxed">
              To create an employee account, you must have a valid Company ID provided by your employer. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.2 Employer Accounts</h3>
            <p className="text-gray-600 leading-relaxed">
              Employers who set up benefits programs are responsible for ensuring their use of the Service complies with applicable employment laws and regulations, including those related to employee benefits, privacy, and non-discrimination. Employers are responsible for the accuracy of employee information provided to Jiibe.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">3.3 Eligibility</h3>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 18 years old to use the Service. By using the Service, you represent that you meet this requirement and that you are authorized by your employer to access the platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Benefits Marketplace</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Jiibe marketplace provides access to lifestyle benefits from third-party providers. By using the marketplace, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Benefit availability may change at any time based on partner agreements</li>
              <li>Third-party benefit providers have their own terms of service and privacy policies</li>
              <li>Jiibe is not responsible for the quality, availability, or fulfillment of third-party benefits</li>
              <li>Monthly benefit budgets are set by your employer and may be adjusted at any time</li>
              <li>Unused monthly stipend funds roll back to your employer at the end of each month</li>
              <li>Benefit redemptions are generally non-refundable once processed</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SMS Communications — Transactional Account Alerts</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By providing your phone number and checking the SMS opt-in box during account registration, you expressly consent to receive <strong>transactional account alert text messages</strong> from Jiibe. These messages are limited to account-related notifications and benefit activity alerts, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Account registration confirmations and onboarding instructions</li>
              <li>Benefit redemption confirmations and access codes</li>
              <li>Monthly balance reminders and stipend reset notifications</li>
              <li>New benefit availability announcements</li>
              <li>Account security and access notifications</li>
            </ul>
            <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(26,71,49,0.06)', border: '1px solid rgba(26,71,49,0.15)' }}>
              <p className="text-sm text-green-800 font-semibold mb-2">Important SMS Disclosures:</p>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• <strong>Message and data rates may apply.</strong></li>
                <li>• Message frequency varies based on your account activity.</li>
                <li>• To opt out at any time, reply <strong>STOP</strong> to any message.</li>
                <li>• For help, reply <strong>HELP</strong> or contact <a href="mailto:support@jiibe.com" className="underline">support@jiibe.com</a>.</li>
                <li>• Opting in to SMS is optional and not required to use the Service.</li>
                <li>• <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong></li>
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              These SMS messages are strictly transactional in nature. We do not send marketing, promotional, or advertising text messages. Your consent to receive SMS is separate from your agreement to these Terms and may be withdrawn at any time without affecting your access to the Service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to any part of the Service or other user accounts</li>
              <li>Submit false or misleading information, including false Company IDs</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Attempt to manipulate benefit redemptions or exploit platform vulnerabilities</li>
              <li>Share your Company ID or account credentials with unauthorized individuals</li>
              <li>Use the Service to harass, abuse, or harm other users</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Employer Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Employers using Jiibe agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate employee information for account setup and management</li>
              <li>Ensure their benefits program complies with applicable employment laws</li>
              <li>Maintain appropriate benefit budgets and funding</li>
              <li>Not use Jiibe data to discriminate against employees</li>
              <li>Promptly notify Jiibe of employee terminations or status changes</li>
              <li>Comply with all applicable tax reporting requirements related to employee benefits</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service and its original content, features, and functionality are owned by Jiibe, Inc. and are protected by applicable intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works based on the Service without our express written permission. Third-party brand names, logos, and trademarks displayed in the benefits marketplace are the property of their respective owners.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of the Service is also governed by our <Link href="/privacy" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding your personal information, including our commitment to never selling or sharing your mobile information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. PERKPORTAL DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Jiibe does not guarantee the availability, quality, or fulfillment of any third-party benefits offered through the marketplace. Third-party benefit providers are solely responsible for their products and services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PERKPORTAL, INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, EVEN IF PERKPORTAL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Our total liability to you for any claims arising from your use of the Service shall not exceed the amount paid by your employer for your benefit access in the three months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Jiibe, Inc. and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another party.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to suspend or terminate your access to the Service at any time for violation of these Terms, at the request of your employer, or for any other reason at our discretion. You may also terminate your account at any time by contacting us at support@jiibe.com. Upon termination, your right to use the Service will immediately cease, and any unused benefit balance will be returned to your employer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time. We will notify you of any material changes by posting the new Terms on this page, updating the &quot;Last Updated&quot; date, and sending an email notification to registered users. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Us</h2>
            <div className="glass-card p-6">
              <p className="text-gray-600 mb-4">If you have questions about these Terms, please contact us:</p>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:support@jiibe.com" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>support@jiibe.com</a></p>
                <p className="text-gray-600"><strong>Address:</strong> Jiibe, Inc., 8 The Green, Ste A, Dover, DE 19901</p>
                <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="font-semibold hover:underline" style={{ color: '#1a4731' }}>jiibe.com</a></p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/privacy" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: '#1a4731' }}>
              ← View Privacy Policy
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
