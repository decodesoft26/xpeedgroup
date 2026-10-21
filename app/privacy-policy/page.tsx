import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Xpeed Staff Management System",
  description: "Privacy Policy for the Xpeed Staff Management System.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber-200 bg-amber-100">
                <img src="/logo.jpeg" alt="Xpeed Group" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-slate-900">Xpeed Group</div>
                <div className="text-[10px] font-semibold tracking-[0.26em] text-slate-500 uppercase">Diversified Holdings</div>
              </div>
            </Link>
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy — Xpeed Staff Management System</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1. Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Xpeed Staff Management System is an internal application used by Xpeed Group to manage employee records, payroll, payments, and related HR operations across its hotel and business properties (Orkid Hills, Putra Hills, and others). This Privacy Policy describes how employee personal data is collected, used, stored, and protected within the system.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2. Information Collected</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The system collects and processes the following categories of employee data:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Identity:</strong> Full name, IC/passport number, nationality, email address, phone number.</li>
              <li><strong>Employment:</strong> Role (super-admin, admin, moderator, user), assigned property/hotel, active status, timestamps of creation and updates.</li>
              <li><strong>Financial:</strong> Payable records, payment history, receipts, and transaction details.</li>
              <li><strong>Authentication:</strong> Hashed password, refresh token hash, login activity.</li>
              <li><strong>Operational:</strong> Reports, ledger entries, and audit trails generated through system use.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3. Purpose of Processing</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Managing employee onboarding, profiles, and role-based access.</li>
              <li>Tracking payables, payments, and generating payslips/receipts.</li>
              <li>Producing financial and operational reports.</li>
              <li>Ensuring system security and preventing unauthorized access.</li>
              <li>Complying with statutory and internal audit requirements.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4. Access Control</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Access to the system is role-based. Super-admins have full control, admins manage day-to-day operations, moderators have limited access, and users can view their own records. Employees can only access data relevant to their role and assigned property.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5. Data Security</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Passwords are hashed using bcrypt before storage.</li>
              <li>Refresh tokens are stored as hashes, not plaintext.</li>
              <li>Authentication is required for all protected endpoints.</li>
              <li>Data is transmitted over secure connections.</li>
              <li>Access is logged and monitored for suspicious activity.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">6. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Employee records and financial data are retained for the duration of employment and for a minimum of 7 years thereafter, in compliance with Malaysian statutory requirements. Inactive accounts may be archived but not deleted unless legally required.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">7. Employee Rights</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Right to access your own profile and payment records.</li>
              <li>Right to request correction of inaccurate personal data.</li>
              <li>Right to request a copy of your data held in the system.</li>
              <li>Right to report suspected data breaches or unauthorized access.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">8. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The system may use third-party services for file storage (image uploads) and hosting. These providers are bound by their own privacy policies and data protection agreements.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">9. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update this Privacy Policy as the system evolves. Changes will be communicated to employees through the system or via internal channels.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">10. Contact</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For privacy-related inquiries regarding the Xpeed Staff Management System, contact:
            </p>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-slate-700">
                <strong>Email:</strong> hamad.ismail.gub@gmail.com<br />
                <strong>Phone:</strong> +880 1816401515
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}