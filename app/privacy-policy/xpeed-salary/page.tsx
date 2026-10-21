import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - Xpeed Salary",
  description: "Privacy Policy for salary and employee information handled by Xpeed Group.",
}

const sections = [
  {
    title: "1. Scope",
    content: (
      <p>
        This Privacy Policy applies specifically to the Xpeed Salary employee
        portal and covers the collection, use, and protection of employee
        salary and personal information accessed through this system.
      </p>
    ),
  },
  {
    title: "2. Information Collected",
    content: (
      <ul>
        <li>Employee identification (name, employee ID, department)</li>
        <li>Salary and compensation details</li>
        <li>Bank account information for salary disbursement</li>
        <li>Tax information (EA/EC forms, tax file numbers)</li>
        <li>Leave balances and entitlements</li>
        <li>Login credentials and access logs</li>
      </ul>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <ul>
        <li>Processing and disbursing monthly salary payments</li>
        <li>Generating payslips and tax documents</li>
        <li>Maintaining accurate employee records</li>
        <li>Complying with statutory requirements (EPF, SOCSO, EIS, PCB)</li>
        <li>Providing salary history and records to employees</li>
      </ul>
    ),
  },
  {
    title: "4. Data Security",
    content: (
      <p>
        All salary data is encrypted in transit and at rest. Access is
        restricted to authorized HR personnel and the individual employee.
        Multi-factor authentication is required for all portal access.
      </p>
    ),
  },
  {
    title: "5. Data Retention",
    content: (
      <p>
        Salary records are retained for a minimum of 7 years in accordance with
        Malaysian statutory requirements. Upon employment termination, records
        are archived and access is revoked.
      </p>
    ),
  },
  {
    title: "6. Employee Rights",
    content: (
      <ul>
        <li>Right to access your own salary records and payslips</li>
        <li>Right to request correction of inaccurate information</li>
        <li>Right to request a copy of your personal data</li>
        <li>Right to report any suspected data breach</li>
      </ul>
    ),
  },
]

export default function PrivacyPolicyXpeedSalaryPage() {
  return (
    <main className="subpage">
      <header className="subpage-header">
        <Link className="brand" href="/" aria-label="Xpeed Group home">
          <span className="brand-mark" aria-hidden="true">X</span>
          <span className="brand-name">
            XPEED<span>GROUP</span>
          </span>
        </Link>
        <Link className="subpage-back" href="/privacy-policy">
          <span aria-hidden="true">←</span> All privacy policies
        </Link>
      </header>

      <div className="subpage-banner">
        <div className="subpage-banner-inner">
          <p className="eyebrow eyebrow-light">Xpeed Group · Privacy policy</p>
          <h1>
            Privacy, handled
            <br />
            with <em>care.</em>
          </h1>
          <p className="subpage-banner-copy">
            How we protect personal and salary information handled by the Xpeed
            Salary system.
          </p>
        </div>
      </div>

      <div className="subpage-document-wrap">
        <aside className="subpage-sidebar">
          <span>DOCUMENT</span>
          <strong>Privacy policy</strong>
          <span>LAST UPDATED</span>
          <strong>January 2025</strong>
          <Link href="/privacy-policy">
            Group privacy policy <span aria-hidden="true">↗</span>
          </Link>
        </aside>

        <article className="policy-document">
          <div className="policy-document-heading">
            <p className="eyebrow">Xpeed Salary System</p>
            <h2>Privacy Policy</h2>
            <p>Last updated: January 2025</p>
          </div>

          <div className="policy-content">
            {sections.map((section) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                {section.content}
              </section>
            ))}

            <section>
              <h3>7. Contact</h3>
              <p>
                For privacy concerns related to the Xpeed Salary portal,
                contact:
              </p>
              <div className="policy-contact-card">
                <div>
                  <span>HR Department</span>
                  <a href="mailto:hamad.ismail.gub@gmail.com">
                    hamad.ismail.gub@gmail.com
                  </a>
                </div>
                <div>
                  <span>Phone</span>
                  <a href="tel:+8801816401515">+880 1816401515</a>
                </div>
              </div>
            </section>
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
        <Link href="/privacy-policy">Group privacy policy</Link>
      </footer>
    </main>
  )
}
