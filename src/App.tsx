import Console from './components/Console'
import ThemeToggle from './components/ThemeToggle'
import { clientWork, jobs, person, products, stack } from './data'

const external = { target: '_blank', rel: 'noreferrer noopener' } as const

export default function App() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to projects
      </a>

      <header className="topbar">
        <div className="wrap top">
          <a className="brand" href="#top">
            {person.name}
          </a>
          <div className="top-right">
            <nav aria-label="Primary">
              <a href="#work">Work</a>
              <a href="#experience">Experience</a>
              <a href="#stack">Stack</a>
              <a href="#contact">Contact</a>
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
              <a className="btn" href={`mailto:${person.email}`}>
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

        <section className="section" id="work" aria-labelledby="work-h">
          <div className="wrap split">
            <h2 id="work-h">Selected work</h2>
            <div>
              <h3 className="group">Live products</h3>
              <ul className="rows">
                {products.map((p) => (
                  <li className="row" key={p.name}>
                    <div className="row-head">
                      <h4>{p.name}</h4>
                      <a href={p.href} {...external}>
                        {p.hrefLabel}
                      </a>
                    </div>
                    <p>{p.summary}</p>
                    <p className="meta">{p.stack}</p>
                  </li>
                ))}
              </ul>

              <h3 className="group">Client and enterprise projects</h3>
              <dl className="work-list">
                {clientWork.map((w) => (
                  <div key={w.name}>
                    <dt>
                      {w.name}
                      <span>{w.where}</span>
                    </dt>
                    <dd>{w.summary}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="exp-h">
          <div className="wrap split">
            <h2 id="exp-h">Experience</h2>
            <ol className="timeline">
              {jobs.map((j) => (
                <li key={j.company}>
                  <p className="period">{j.period}</p>
                  <h3>
                    {j.role}, {j.company}
                  </h3>
                  <ul>
                    {j.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="stack" aria-labelledby="stack-h">
          <div className="wrap split">
            <h2 id="stack-h">Stack</h2>
            <div>
              <dl className="stack">
                {stack.map((g) => (
                  <div key={g.label}>
                    <dt>{g.label}</dt>
                    <dd>
                      <ul>
                        {g.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>

              <dl className="also">
                <div>
                  <dt>Education</dt>
                  <dd>B.Sc. in Computer Science &amp; Engineering, North South University, 2022</dd>
                </div>
                <div>
                  <dt>Certification</dt>
                  <dd>Data Analytics Hire and Train Program, ADN Diginet Limited and University of Dhaka (IIT)</dd>
                </div>
                <div>
                  <dt>Publication</dt>
                  <dd>
                    <a
                      href="https://link.springer.com/chapter/10.1007/978-981-16-6369-7_21"
                      {...external}
                    >
                      Detecting Urbanization Changes in Tangail District Using Machine Learning and Remote
                      Sensing
                    </a>
                    , Springer
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <div className="wrap">
          <h2>Have something to build?</h2>
          <a className="mail" href={`mailto:${person.email}`}>
            {person.email}
          </a>
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
