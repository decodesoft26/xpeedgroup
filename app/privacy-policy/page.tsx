import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Xpeed Group Software Suite",
  description: "Privacy Policy for Xpeed Group's software suite: Finance, Salary, FrontDesk (PMS), and more.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="subpage">
      <header className="subpage-header">
        <Link className="brand" href="/" aria-label="Xpeed Group home">
          <span className="brand-mark" aria-hidden="true">X</span>
          <span className="brand-name">
            XPEED<span>GROUP</span>
          </span>
        </Link>
        <Link className="subpage-back" href="/">
          <span aria-hidden="true">←</span> Back to Xpeed Group
        </Link>
      </header>

      <div className="subpage-banner">
        <div className="subpage-banner-inner">
          <p className="eyebrow eyebrow-light">Xpeed Group · Company information</p>
          <h1>
            Your privacy
            <br />
            matters <em>to us.</em>
          </h1>
          <p className="subpage-banner-copy">
            A clear guide to how information is collected, used, and protected
            across Xpeed Group software systems.
          </p>
        </div>
      </div>

      <div className="subpage-document-wrap">
        <aside className="subpage-sidebar">
          <span>DOCUMENT</span>
          <strong>Privacy policy</strong>
          <span>LAST UPDATED</span>
          <strong>January 2025</strong>
          <Link href="/privacy-policy/xpeed-salary">
            Salary portal policy <span aria-hidden="true">↗</span>
          </Link>
        </aside>

        <article className="policy-document">
          <div className="policy-document-heading">
            <p className="eyebrow">Xpeed Group Software Suite</p>
            <h2>Privacy Policy</h2>
            <p>Last updated: January 2025</p>
          </div>

          <div className="policy-content">
            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">1. Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Xpeed Group operates a suite of internal business software systems to support its operations across energy, hospitality, and real estate. These systems include, but are not limited to: Finance Software, Salary Software, FrontDesk Software (Property Management System / PMS), Staff Management, and various other operational tools. This Privacy Policy describes how personal and business data is collected, used, stored, and protected across all Xpeed Group software systems.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">2. Scope of Systems Covered</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Finance Software:</strong> Accounting, invoicing, expense tracking, financial reporting, and budget management.</li>
              <li><strong>Salary Software:</strong> Payroll processing, payslip generation, tax document management (EA/EC forms), salary history, and disbursement tracking.</li>
              <li><strong>FrontDesk Software (PMS):</strong> Hotel property management including guest reservations, check-in/check-out, room allocation, billing, and guest profiles.</li>
              <li><strong>Staff Management:</strong> Employee records, role-based access, attendance, leave tracking, and HR operations.</li>
              <li><strong>Other Operational Tools:</strong> Reporting dashboards, inventory management, vendor management, and any additional internal systems deployed by Xpeed Group.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">3. Information Collected</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on the system used, the following categories of data may be collected:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Personal Identity:</strong> Name, IC/passport number, nationality, email, phone number, address.</li>
              <li><strong>Employment Data:</strong> Role, department, assigned property, salary, bank details, tax information, leave balances.</li>
              <li><strong>Financial Data:</strong> Transaction records, invoices, expenses, payroll entries, payment receipts, budget allocations.</li>
              <li><strong>Guest Data (PMS):</strong> Guest name, contact details, reservation history, billing, payment method, stay preferences.</li>
              <li><strong>Authentication Data:</strong> Hashed passwords, refresh tokens, login activity, role assignments.</li>
              <li><strong>Operational Data:</strong> Reports, audit logs, inventory records, vendor information, and system usage metrics.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">4. Purpose of Processing</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Managing day-to-day business operations across finance, HR, and hospitality.</li>
              <li>Processing payroll and generating statutory tax documents.</li>
              <li>Managing hotel reservations, guest services, and property operations.</li>
              <li>Generating financial, operational, and compliance reports.</li>
              <li>Enforcing role-based access control and system security.</li>
              <li>Complying with Malaysian statutory requirements (EPF, SOCSO, EIS, PCB, etc.).</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">5. Access Control & Roles</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All systems enforce role-based access control. Roles include super-admin, admin, moderator, and user. Each role has defined permissions, and users can only access data and functions relevant to their role and assigned property. Cross-system access is restricted to authorized personnel only.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">6. Data Security</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Passwords are hashed using bcrypt before storage.</li>
              <li>Refresh tokens are stored as hashes, never in plaintext.</li>
              <li>All endpoints require authentication; sensitive operations require elevated privileges.</li>
              <li>Data is transmitted over encrypted connections (HTTPS/TLS).</li>
              <li>Access is logged and monitored for unauthorized activity.</li>
              <li>Regular backups are performed to prevent data loss.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">7. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Data is retained for the duration required by business operations and Malaysian statutory law. Financial and payroll records are retained for a minimum of 7 years. Guest records are retained for the period required by hospitality regulations. Inactive accounts are archived but not permanently deleted unless legally required.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">8. Data Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Data collected across Xpeed Group systems is not sold or shared with third parties except:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>When required by law or statutory authorities.</li>
              <li>With trusted service providers (hosting, cloud storage) bound by data protection agreements.</li>
              <li>During business transfers such as mergers or acquisitions.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">9. User Rights</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Right to access your own records and data held in the system.</li>
              <li>Right to request correction of inaccurate information.</li>
              <li>Right to request a copy of your personal data.</li>
              <li>Right to report suspected data breaches or unauthorized access.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">10. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Xpeed Group software systems may use third-party services for hosting, file storage, email delivery, and analytics. These providers are bound by their own privacy policies and data protection agreements.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">11. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update this Privacy Policy as systems evolve. Changes will be communicated to users through the respective systems or via internal channels.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-6 mb-3">12. Contact</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For privacy-related inquiries regarding any Xpeed Group software system, contact:
            </p>
            <div className="policy-contact-card">
              <p className="text-slate-700">
                <strong>Email:</strong> hamad.ismail.gub@gmail.com<br />
                <strong>Phone:</strong> +880 1816401515
              </p>
            </div>
          </div>
        </article>
      </div>

      <footer className="subpage-footer">
        <Link className="brand brand-footer" href="/" aria-label="Xpeed Group home">
          <span className="brand-mark" aria-hidden="true">X</span>
          <span className="brand-name">
            XPEED<span>GROUP</span>
          </span>
        </Link>
        <span>© {new Date().getFullYear()} Xpeed Group</span>
        <Link href="/privacy-policy/xpeed-salary">Salary privacy policy</Link>
      </footer>
    </main>
  )
}