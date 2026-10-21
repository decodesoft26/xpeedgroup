import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Xpeed Group | Building businesses that move us forward",
  description:
    "Discover Xpeed Group, a Malaysian group of companies creating lasting value across energy, hospitality, and real estate.",
}

const sectors = [
  {
    number: "01",
    name: "Energy & infrastructure",
    description:
      "Keeping people and businesses moving with dependable energy solutions and infrastructure.",
    image: "/images/energy-fallback.svg",
    imageAlt: "Illustrated energy infrastructure at dusk",
    link: "#ventures",
  },
  {
    number: "02",
    name: "Hospitality & dining",
    description:
      "Thoughtful stays and welcoming dining experiences, made memorable by the details.",
    image: "/images/hospitality-fallback.svg",
    imageAlt: "Illustrated hotel and hospitality destination",
    link: "#ventures",
  },
  {
    number: "03",
    name: "Real estate",
    description:
      "Places designed to bring people together and support the communities around them.",
    image: "/images/real-estate-fallback.svg",
    imageAlt: "Illustrated residential and commercial development",
    link: "#ventures",
  },
]

const ventures = [
  { name: "Xpeed Energy Resources", category: "Energy", image: sectors[0].image },
  { name: "ECO Hotel @ BBCC", category: "Hospitality", image: sectors[1].image },
  { name: "Orkid Hills Hotel", category: "Hospitality", image: sectors[1].image },
  { name: "BeRempah Restaurants", category: "Dining", image: sectors[1].image },
  { name: "Takwa Tower", category: "Real estate", image: sectors[2].image },
  { name: "Orkid Hills Residences", category: "Real estate", image: sectors[2].image },
]

export default function HomePage() {
  return (
    <main id="top">
      <div className="announcement">
        <p>Growing with purpose across Malaysia</p>
        <a href="#contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>

      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="Xpeed Group home">
            <span className="brand-mark" aria-hidden="true">
              X
            </span>
            <span className="brand-name">
              XPEED<span>GROUP</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#sectors">What we do</a>
            <a href="#ventures">Our ventures</a>
            <a href="#contact">Contact</a>
          </nav>

          <Link className="header-cta" href="/privacy-policy">
            Privacy policies <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/images/group-hero-fallback.svg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow eyebrow-light">
            <span /> A diversified Malaysian group
          </p>
          <h1 id="hero-title">
            Building what
            <br />
            moves us <em>forward.</em>
          </h1>
          <p className="hero-description">
            From the energy that powers progress to the places where life
            happens, we build businesses with purpose and a long view.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#sectors">
              Discover Xpeed Group <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link text-link-light" href="#ventures">
              Explore our ventures <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-caption">
          <span>Energy</span>
          <i />
          <span>Hospitality</span>
          <i />
          <span>Real estate</span>
        </div>
        <a className="hero-scroll" href="#about" aria-label="Scroll to about">
          <span>Scroll to explore</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="intro-label">
          <p className="eyebrow">The Xpeed Group</p>
          <span className="intro-index">01 / 04</span>
        </div>
        <div className="intro-copy">
          <h2>
            Different industries.
            <br />
            <span>One shared ambition.</span>
          </h2>
          <div className="intro-lower">
            <p>
              We bring together a diverse portfolio of businesses connected by
              a simple belief: lasting progress comes from doing the everyday
              things exceptionally well.
            </p>
            <p>
              With roots in Malaysia and an eye on what comes next, we pair
              practical experience with thoughtful growth to create value for
              customers, partners, and communities.
            </p>
          </div>
        </div>
      </section>

      <section className="sectors section-wrap" id="sectors">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Where we make a difference</p>
            <h2>Our business pillars</h2>
          </div>
          <p className="section-aside">
            Essential industries. Real-world impact. A future built together.
          </p>
        </div>
        <div className="sector-grid">
          {sectors.map((sector) => (
            <a className="sector-card" href={sector.link} key={sector.name}>
              <div className="sector-image">
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <span className="sector-number">{sector.number}</span>
                <span className="sector-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="sector-copy">
                <h3>{sector.name}</h3>
                <p>{sector.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="ventures section-wrap" id="ventures">
        <div className="ventures-intro">
          <p className="eyebrow">The people behind the promise</p>
          <h2>
            A portfolio of
            <br />
            <em>possibility.</em>
          </h2>
          <p>
            Each venture has its own character. Together, they reflect the
            breadth of what Xpeed Group can do.
          </p>
          <a className="text-link" href="#contact">
            Talk to our team <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="venture-grid">
          {ventures.map((venture, index) => (
            <article className="venture-card" key={venture.name}>
              <div className="venture-image">
                <Image
                  src={venture.image}
                  alt={`${venture.category} placeholder artwork`}
                  fill
                  sizes="(max-width: 760px) 100vw, 25vw"
                />
                <span className="venture-count">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="venture-meta">
                <div>
                  <p>{venture.category}</p>
                  <h3>{venture.name}</h3>
                </div>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="values">
        <div className="values-inner">
          <div>
            <p className="eyebrow eyebrow-light">What guides us</p>
            <h2>Good business is built on good principles.</h2>
          </div>
          <div className="value-list">
            <article>
              <span>01</span>
              <div>
                <h3>Trust, earned daily</h3>
                <p>We keep our word and show up for the people we serve.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Progress with purpose</h3>
                <p>We grow thoughtfully, creating value that stands the test of time.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>People at the heart</h3>
                <p>Better experiences begin with understanding what matters to people.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-main">
          <p className="eyebrow">Let’s build something meaningful</p>
          <h2>
            The next chapter
            <br />
            starts <em>together.</em>
          </h2>
          <a className="button button-dark" href="mailto:hamad.ismail.gub@gmail.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-details">
          <p>For partnerships, opportunities, and general enquiries.</p>
          <a href="mailto:hamad.ismail.gub@gmail.com">
            hamad.ismail.gub@gmail.com
          </a>
          <a href="tel:+8801816401515">+880 1816401515</a>
          <span>Malaysia</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <Link className="brand brand-footer" href="/" aria-label="Xpeed Group home">
            <span className="brand-mark" aria-hidden="true">
              X
            </span>
            <span className="brand-name">
              XPEED<span>GROUP</span>
            </span>
          </Link>
          <p>Building businesses that move us forward.</p>
          <a href="#top">
            Back to top ↑
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Xpeed Group. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/privacy-policy/xpeed-salary">Salary privacy policy</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
