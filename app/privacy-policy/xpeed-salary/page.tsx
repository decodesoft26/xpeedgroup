import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - Xpeed Salary | Xpeed Group",
  description: "Privacy Policy for the Xpeed Salary employee portal system.",
}

export default function PrivacyPolicyXpeedSalaryPage() {
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
            <Link href="/xpeed-salary" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
              ← Back to Xpeed Salary
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy — Xpeed Salary Portal</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1. Scope</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              This Privacy Policy applies specifically to the Xpeed Salary employee portal and covers the collection, use, and protection of employee salary and personal information accessed through this system.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2. Information Collected</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Employee identification (name, employee ID, department)</li>
              <li>Salary and compensation details</li>
              <li>Bank account information for salary disbursement</li>
              <li>Tax information (EA/EC forms, tax file numbers)</li>
              <li>Leave balances and entitlements</li>
              <li>Login credentials and access logs</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Processing and disbursing monthly salary payments</li>
              <li>Generating payslips and tax documents</li>
              <li>Maintaining accurate employee records</li>
              <li>Complying with statutory requirements (EPF, SOCSO, EIS, PCB)</li>
              <li>Providing salary history and records to employees</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All salary data is encrypted in transit and at rest. Access is restricted to authorized HR personnel and the individual employee. Multi-factor authentication is required for all portal access.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Salary records are retained for a minimum of 7 years in accordance with Malaysian statutory requirements. Upon employment termination, records are archived and access is revoked.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">6. Employee Rights</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Right to access your own salary records and payslips</li>
              <li>Right to request correction of inaccurate information</li>
              <li>Right to request a copy of your personal data</li>
              <li>Right to report any suspected data breach</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">7. Contact</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For privacy concerns related to the Xpeed Salary portal, contact:
            </p>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-slate-700">
                <strong>HR Department:</strong> hamad.ismail.gub@gmail.com<br />
                <strong>Phone:</strong> +880 1816401515
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}