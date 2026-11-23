import Console from './components/Console'
import CopyEmail from './components/CopyEmail'
import ThemeToggle from './components/ThemeToggle'
import {
  certifications,
  clientWork,
  education,
  jobs,
  person,
  products,
  publications,
  stack,
} from './data'

const external = { target: '_blank', rel: 'noreferrer noopener' } as const

const mailto = `mailto:${person.email}?subject=${encodeURIComponent('Hello from your portfolio')}`
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(person.email)}`

const nav = [
  { href: '#projects', label: 'Projects' },
  { href: '#clients', label: 'Clients' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function App() {
  return (
    <>
      <a className="skip" href="#projects">
        Skip to projects
      </a>

      <header className="topbar">
        <div className="wrap top">
          <a className="brand" href="#top">
            {person.name}
          </a>
          <div className="top-right">
            <nav aria-label="Primary">
              {nav.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="wrap hero">
          <div className="hero-copy">
            <h1>From database to interface, web or mobile app, I build the whole product.</h1>
            <p className="lede">
              I'm {person.name}, a full stack developer in Dhaka. For three years I've built and scaled
              web apps and APIs across fintech, e-commerce and enterprise systems with Laravel, Spring Boot
              and React, and taken projects from architecture to production.
            </p>
            <div className="actions">
              <a className="btn" href={mailto}>
                Email me
              </a>
              <a className="link" href={person.github} {...external}>
                GitHub
              </a>
              <a className="link" href={person.linkedin} {...external}>
                LinkedIn
              </a>
            </div>
          </div>
          <Console />
        </section>

        <section className="section" id="projects" aria-labelledby="projects-h">
          <div className="wrap split">
            <div className="section-head">
              <h2 id="projects-h">Live projects</h2>
              <p>Products I build and run in production today.</p>
            </div>
            <ul className="rows">
              {products.map((p) => (
                <li className="row" key={p.name}>
                  <div className="row-head">
                    <h3>{p.name}</h3>
                    <a href={p.href} {...external}>
                      {p.hrefLabel}
                    </a>
                  </div>
                  <p className="headline">{p.headline}</p>
                  <p>{p.summary}</p>
                  <p className="meta">{p.stack}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="clients" aria-labelledby="clients-h">
          <div className="wrap split">
            <div className="section-head">
              <h2 id="clients-h">Client and enterprise projects</h2>
              <p>Systems delivered for clients and employers.</p>
            </div>
            <dl className="work-list">
              {clientWork.map((w) => (
                <div key={w.name}>
                  <dt>
                    {w.name}
                    <span>{w.where}</span>
                  </dt>
                  <dd>
                    <strong className="headline">{w.headline}</strong>
                    {w.summary}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="exp-h">
          <div className="wrap split">
            <div className="section-head">
              <h2 id="exp-h">Experience</h2>
              <p>{jobs.length} roles, most recent first.</p>
            </div>
            <ol className="jobs">
              {jobs.map((j) => {
                const projects = j.hideProjectTags
                  ? []
                  : clientWork.filter((w) => w.where === j.company)
                return (
                  <li className="job" key={j.company}>
                    <div className="job-head">
                      <h3>{j.company}</h3>
                      <p className="period">{j.period}</p>
                    </div>
                    <p className="job-role">{j.role}</p>
                    <ul className="job-points">
                      {j.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    {projects.length > 0 && (
                      <ul className="job-projects" aria-label={`Projects at ${j.company}`}>
                        {projects.map((p) => (
                          <li key={p.name}>{p.name}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-h">
          <div className="wrap split">
            <div className="section-head">
              <h2 id="stack-h">Stack</h2>
              <p>Tools I use to design, build and ship.</p>
            </div>
            <div className="stack-grid">
              {stack.map((g) => (
                <div className="stack-card" key={g.label}>
                  <h3>{g.label}</h3>
                  <p>{g.note}</p>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="edu-h">
          <div className="wrap split">
            <div className="section-head">
              <h2 id="edu-h">Education</h2>
            </div>
            <div>
              <ul className="edu-list">
                {education.map((e) => (
                  <li key={e.degree + e.school}>
                    <p className="period">{e.period}</p>
                    <h3>{e.degree}</h3>
                    <p className="edu-school">{e.school}</p>
                    {e.details && (
                      <ul>
                        {e.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <dl className="also">
                {certifications.map((c) => (
                  <div key={c.name}>
                    <dt>Certification</dt>
                    <dd>
                      {c.name}, {c.issuer}
                    </dd>
                  </div>
                ))}
                {publications.map((p) => (
                  <div key={p.title}>
                    <dt>Publication</dt>
                    <dd>
                      <a href={p.href} {...external}>
                        {p.title}
                      </a>
                      , {p.venue}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <div className="wrap">
          <h2>Have something to build?</h2>
          <a className="mail" href={mailto}>
            {person.email}
          </a>
          <div className="mail-tools">
            <CopyEmail email={person.email} />
            <a href={gmail} {...external}>
              Open in Gmail
            </a>
          </div>
          <div className="contact-links">
            <a href={person.github} {...external}>
              GitHub
            </a>
            <a href={person.linkedin} {...external}>
              LinkedIn
            </a>
          </div>
          <p className="fine">© 2026 {person.name}. Dhaka, Bangladesh.</p>
        </div>
      </footer>
    </>
  )
}
