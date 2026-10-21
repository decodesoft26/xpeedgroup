import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Xpeed Group | Energy, Hospitality & Real Estate",
  description: "Xpeed Group is a diversified Malaysian company delivering growth across energy and infrastructure, hospitality, and real estate development.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber-200 bg-amber-100">
                <Image src="/logo.jpeg" alt="Xpeed Group" width={40} height={40} className="object-cover" />
              </div>
              <div>
                <div className="text-lg font-black tracking-tight text-slate-900">Xpeed Group</div>
                <div className="text-[10px] font-semibold tracking-[0.26em] text-slate-500 uppercase">Diversified Holdings</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-slate-900 transition">About</a>
              <a href="#segments" className="hover:text-slate-900 transition">Segments</a>
              <a href="#ventures" className="hover:text-slate-900 transition">Ventures</a>
              <a href="#team" className="hover:text-slate-900 transition">Team</a>
              <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
            </nav>
            <Link href="/xpeed-salary" className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">
              Employee Portal
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.15),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.28em] text-amber-200 uppercase">
              Energy • Hospitality • Real Estate
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Shaping growth across essential industries.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Xpeed Group brings together strategic businesses in fuel, hospitality, and property development to deliver dependable value, trusted service, and long-term opportunity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#ventures" className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition">
                Our Ventures
              </a>
              <a href="#contact" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-amber-600 uppercase">About Us</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Strong foundations. Thoughtful growth. Real impact.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Xpeed Group has built a reputation for strategic diversification, dependable execution, and community-centered growth. Our ventures reflect a shared commitment to quality, trust, and value across every sector we serve.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Integrated business model across essential sectors",
                  "Customer-first service built on trust and consistency",
                  "Long-term planning for resilient and sustainable growth",
                  "Operational excellence in energy, hospitality, and property",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700">✓</div>
                    <p className="text-sm text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2015", label: "Founded" },
                { value: "11+", label: "Ventures" },
                { value: "3", label: "Sectors" },
                { value: "500+", label: "Team Members" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <div className="text-3xl font-black text-slate-900">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section id="segments" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-[0.3em] text-amber-600 uppercase">Business Pillars</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Purposeful businesses built for everyday life and long-term growth.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Energy & Infrastructure", desc: "CNG, Diesel, Octane & LPG operations across Malaysia.", icon: "⚡", color: "from-amber-500 to-orange-500" },
              { title: "Hospitality Group", desc: "Hotels and restaurants designed for comfort and memorable experiences.", icon: "🏨", color: "from-emerald-500 to-teal-500" },
              { title: "Real Estate Development", desc: "Residential and mixed-use developments built for long-term value.", icon: "🏙️", color: "from-sky-500 to-indigo-500" },
            ].map((seg) => (
              <div key={seg.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${seg.color} text-2xl mb-4`}>
                  {seg.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{seg.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{seg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-[0.3em] text-amber-600 uppercase">Our Ventures</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Sister companies and signature destinations.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Xpeed Energy Resources", subtitle: "Energy", image: "/images/xpeed_energy_resources.jpeg" },
              { title: "ECO Hotel @ BBCC", subtitle: "Hospitality", image: "/images/eco_and_orkid_hills_hotel.jpeg" },
              { title: "Orkid Hills Hotel", subtitle: "Hospitality", image: "/images/eco_and_orkid_hills_hotel.jpeg" },
              { title: "BeRempah Restaurants", subtitle: "Dining", image: "/images/berempahh.jpeg" },
              { title: "Takwa Tower", subtitle: "Real Estate", image: "/images/takwa_tower_and_blue_heights.jpeg" },
              { title: "Orkid Hills Residences", subtitle: "Real Estate", image: "/images/orkidhills_1.jpeg" },
            ].map((v) => (
              <div key={v.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48">
                  <Image src={v.image} alt={v.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <span className="inline-block rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 uppercase">{v.subtitle}</span>
                  <h3 className="mt-2 font-bold text-slate-900">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-[0.3em] text-amber-600 uppercase">Leadership</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              A forward-looking team driving the group's next chapter.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Executive Leadership", role: "Strategic Vision", bio: "Guiding the group with long-term planning and sustainable growth." },
              { name: "Operations Team", role: "Service Excellence", bio: "Ensuring each venture delivers dependable performance and consistency." },
              { name: "Development & Hospitality", role: "Brand Experience", bio: "Shaping premium property and hospitality standards." },
            ].map((m) => (
              <div key={m.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
                  {m.name.charAt(0)}
                </div>
                <div className="text-xs font-bold text-amber-600 uppercase">{m.role}</div>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{m.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-amber-600 uppercase">Let's Connect</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900">
                  Partner with a group built on trust, scale, and vision.
                </h2>
                <p className="mt-4 text-slate-600">
                  Whether exploring collaboration, hospitality, or real-estate partnerships, Xpeed Group is ready to engage.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-bold tracking-[0.22em] text-slate-500 uppercase">Email</div>
                  <a href="mailto:hamad.ismail.gub@gmail.com" className="text-base font-semibold text-slate-900">hamad.ismail.gub@gmail.com</a>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.22em] text-slate-500 uppercase">Phone</div>
                  <a href="tel:+8801816401515" className="text-base font-semibold text-slate-900">+880 1816401515</a>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.22em] text-slate-500 uppercase">Location</div>
                  <div className="text-base font-semibold text-slate-900">Malaysia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-slate-500">© 2025 Xpeed Group. All rights reserved.</div>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link href="/privacy-policy" className="hover:text-slate-900 transition">Privacy Policy</Link>
              <Link href="/xpeed-salary" className="hover:text-slate-900 transition">Employee Portal</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}