import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.lucide) {
      window.lucide.createIcons({
        attrs: {
          "stroke-width": 1.5,
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        },
      });
    }

    const nodes = document.querySelectorAll(".reveal");
    if (!nodes.length) return undefined;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.08,
      }
    );

    nodes.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSearchClick = () => {
    document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Principal">
          <a className="nav__brand" href="#">
            <img className="nav__brand-logo" src="assets/logo-blufy.png" alt="" aria-hidden="true" />
            <span>Blufy</span>
          </a>
          <ul className="nav__links">
            <li>
              <a href="#solucoes">Solucoes</a>
            </li>
            <li>
              <a href="#servicos">Servicos</a>
            </li>
            <li>
              <a href="#diferenciais">Diferenciais</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <div className="nav__actions">
            <button type="button" className="nav__icon-btn" aria-label="Buscar" data-nav-search onClick={handleSearchClick}>
              <i data-lucide="search" aria-hidden="true"></i>
            </button>
            <a className="nav__icon-btn" href="#contato" aria-label="Area do cliente">
              <i data-lucide="user-round" aria-hidden="true"></i>
            </a>
            <a className="nav__cta" href="#contato">
              Fale conosco
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__glow" aria-hidden="true"></div>
          <p className="hero__eyebrow hero__enter">Software house</p>
          <h1 id="hero-title" className="hero__title hero__enter hero__enter--2">
            <span className="hero__title-line">Transformando ideias em</span>
            <span className="hero__title-glow">software de elite</span>
          </h1>
          <p className="hero__subtitle hero__enter hero__enter--3">
            Arquitetura solida, interfaces impecaveis e entrega continua. Construimos produtos que escalam com o seu negocio.
          </p>
          <div className="hero__actions hero__enter hero__enter--4">
            <a className="btn btn--primary" href="#contato">
              Fale conosco
            </a>
            <a className="btn btn--ghost" href="#solucoes">
              Ver solucoes
            </a>
          </div>
          <p className="hero__meta hero__enter hero__enter--5">Projetos sob medida - Cloud - IA integrada</p>
        </section>

        <section id="solucoes" className="feature-grid" aria-labelledby="feature-grid-title">
          <h2 id="feature-grid-title" className="visually-hidden">
            Destaques
          </h2>
          <div className="feature-grid__row">
            <article className="feature-card feature-card--gradient-a reveal reveal--delay-0">
              <h3 className="feature-card__title">Solucoes sob medida para o seu produto</h3>
              <p className="feature-card__text">Da descoberta a producao: web, mobile e APIs com codigo limpo e documentacao clara.</p>
              <div className="feature-card__visual" aria-hidden="true">
                <div className="mock mock--code">
                  <span className="mock__dot"></span>
                  <span className="mock__dot"></span>
                  <span className="mock__dot"></span>
                  <pre className="mock__pre">
                    <code>
                      blufy.<span className="mock__hl">ship</span>()
                    </code>
                  </pre>
                </div>
              </div>
            </article>
            <article className="feature-card feature-card--gradient-b reveal reveal--delay-1">
              <h3 className="feature-card__title">Veja nosso trabalho em acao</h3>
              <p className="feature-card__text">Cases reais, performance medida e experiencias pensadas para converter.</p>
              <div className="feature-card__visual" aria-hidden="true">
                <div className="mock mock--player">
                  <div className="mock__play"></div>
                  <div className="mock__bar"></div>
                </div>
              </div>
            </article>
          </div>
          <div className="feature-banner reveal reveal--delay-2">
            <h3 className="feature-banner__title">Comece com a Blufy</h3>
            <p className="feature-banner__text">
              Um time tecnico alinhado ao seu roadmap. Da ideia ao deploy, com transparencia total.
            </p>
            <ul className="feature-banner__icons" aria-label="Areas de atuacao">
              <li>
                <span className="feature-banner__icon-wrap" title="Cloud">
                  <i data-lucide="cloud" aria-hidden="true"></i>
                </span>
              </li>
              <li>
                <span className="feature-banner__icon-wrap" title="Mobile">
                  <i data-lucide="smartphone" aria-hidden="true"></i>
                </span>
              </li>
              <li>
                <span className="feature-banner__icon-wrap" title="Web">
                  <i data-lucide="monitor" aria-hidden="true"></i>
                </span>
              </li>
              <li>
                <span className="feature-banner__icon-wrap" title="APIs">
                  <i data-lucide="brackets" aria-hidden="true"></i>
                </span>
              </li>
              <li>
                <span className="feature-banner__icon-wrap" title="IA">
                  <i data-lucide="sparkles" aria-hidden="true"></i>
                </span>
              </li>
              <li>
                <span className="feature-banner__icon-wrap" title="Seguranca">
                  <i data-lucide="shield" aria-hidden="true"></i>
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section id="diferenciais" className="section section--tight" aria-labelledby="why-title">
          <div className="section__head reveal">
            <h2 id="why-title" className="section__title">
              Por que a <span className="text-accent">Blufy</span>?
            </h2>
            <p className="section__lead">Menos ruido, mais resultado. Principios que guiam cada entrega.</p>
          </div>
          <div className="cards-grid cards-grid--6">
            <article className="info-card reveal reveal--delay-0">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="code-xml"></i>
              </div>
              <h3 className="info-card__title">Codigo limpo</h3>
              <p className="info-card__text">Padroes claros, revisoes e testes para manter velocidade no longo prazo.</p>
            </article>
            <article className="info-card reveal reveal--delay-1">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="rocket"></i>
              </div>
              <h3 className="info-card__title">Entrega rapida</h3>
              <p className="info-card__text">Ciclos curtos, demos frequentes e priorizacao alinhada ao negocio.</p>
            </article>
            <article className="info-card reveal reveal--delay-2">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="layers"></i>
              </div>
              <h3 className="info-card__title">Arquitetura escalavel</h3>
              <p className="info-card__text">Cloud-native quando faz sentido, sem over-engineering.</p>
            </article>
            <article className="info-card reveal reveal--delay-3">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="layout-template"></i>
              </div>
              <h3 className="info-card__title">Design centrado no usuario</h3>
              <p className="info-card__text">UX que reduz atrito e eleva a percepcao da sua marca.</p>
            </article>
            <article className="info-card reveal reveal--delay-4">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="scan-eye"></i>
              </div>
              <h3 className="info-card__title">Transparencia</h3>
              <p className="info-card__text">Acesso ao progresso, metricas e decisoes tecnicas explicadas.</p>
            </article>
            <article className="info-card reveal reveal--delay-5">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="headphones"></i>
              </div>
              <h3 className="info-card__title">Suporte continuo</h3>
              <p className="info-card__text">Evolucao do produto apos o go-live, com SLA combinado.</p>
            </article>
          </div>
        </section>

        <section id="servicos" className="section" aria-labelledby="services-title">
          <div className="section__head reveal">
            <h2 id="services-title" className="section__title">
              Nossos servicos
            </h2>
            <p className="section__lead">Tres pilares para levar seu software do conceito a operacao.</p>
          </div>
          <div className="cards-grid cards-grid--3">
            <article className="service-card reveal reveal--delay-0">
              <div className="service-card__icon" aria-hidden="true">
                <i data-lucide="app-window"></i>
              </div>
              <h3 className="service-card__title">Desenvolvimento web</h3>
              <p className="service-card__text">SPAs, portais e plataformas com performance e SEO em mente.</p>
              <ul className="service-card__tags">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
              </ul>
            </article>
            <article className="service-card reveal reveal--delay-1">
              <div className="service-card__icon service-card__icon--alt" aria-hidden="true">
                <i data-lucide="plug-2"></i>
              </div>
              <h3 className="service-card__title">Apps e integracoes</h3>
              <p className="service-card__text">Mobile, APIs REST/GraphQL e conectores com sistemas legados.</p>
              <ul className="service-card__tags">
                <li>Node</li>
                <li>APIs</li>
                <li>Cloud</li>
              </ul>
            </article>
            <article className="service-card reveal reveal--delay-2">
              <div className="service-card__icon service-card__icon--alt" aria-hidden="true">
                <i data-lucide="bot"></i>
              </div>
              <h3 className="service-card__title">IA and automacao</h3>
              <p className="service-card__text">Assistentes, pipelines de dados e fluxos inteligentes no seu produto.</p>
              <ul className="service-card__tags">
                <li>LLMs</li>
                <li>RAG</li>
                <li>Data</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="stats" aria-label="Numeros">
          <div className="stats__inner">
            <div className="stat reveal reveal--delay-0">
              <span className="stat__glyph" aria-hidden="true">
                <i data-lucide="folder-kanban"></i>
              </span>
              <span className="stat__value">100+</span>
              <span className="stat__label">Projetos entregues</span>
            </div>
            <div className="stat reveal reveal--delay-1">
              <span className="stat__glyph" aria-hidden="true">
                <i data-lucide="users"></i>
              </span>
              <span className="stat__value">20+</span>
              <span className="stat__label">Especialistas</span>
            </div>
            <div className="stat reveal reveal--delay-2">
              <span className="stat__glyph" aria-hidden="true">
                <i data-lucide="activity"></i>
              </span>
              <span className="stat__value">1M+</span>
              <span className="stat__label">Usuarios impactados</span>
            </div>
            <div className="stat reveal reveal--delay-3">
              <span className="stat__glyph" aria-hidden="true">
                <i data-lucide="badge-check"></i>
              </span>
              <span className="stat__value">99.9%</span>
              <span className="stat__label">Foco em qualidade</span>
            </div>
          </div>
        </section>

        <section className="cta-strip" aria-labelledby="cta-strip-title">
          <div className="cta-strip__gradient" aria-hidden="true"></div>
          <div className="cta-strip__content reveal">
            <span className="cta-strip__icon" aria-hidden="true">
              <i data-lucide="users-round"></i>
            </span>
            <h2 id="cta-strip-title" className="cta-strip__title">
              Programa Blufy para parceiros
            </h2>
            <p className="cta-strip__text">
              Roadmap compartilhado, squad dedicado e visao de produto. Tudo que voce precisa e uma ideia e vontade de executar.
            </p>
          </div>
        </section>

        <section className="links-grid-section" aria-labelledby="quick-links-title">
          <h2 id="quick-links-title" className="visually-hidden">
            Links rapidos
          </h2>
          <div className="links-grid">
            <a className="link-tile reveal reveal--delay-0" href="#contato">
              <span className="link-tile__icon" aria-hidden="true">
                <i data-lucide="download"></i>
              </span>
              <span className="link-tile__label">Briefing</span>
            </a>
            <a className="link-tile reveal reveal--delay-1" href="#servicos">
              <span className="link-tile__icon" aria-hidden="true">
                <i data-lucide="file-text"></i>
              </span>
              <span className="link-tile__label">Propostas</span>
            </a>
            <a className="link-tile reveal reveal--delay-2" href="#solucoes">
              <span className="link-tile__icon" aria-hidden="true">
                <i data-lucide="circle-play"></i>
              </span>
              <span className="link-tile__label">Demo</span>
            </a>
            <a className="link-tile reveal reveal--delay-3" href="#contato">
              <span className="link-tile__icon" aria-hidden="true">
                <i data-lucide="messages-square"></i>
              </span>
              <span className="link-tile__label">Suporte</span>
            </a>
          </div>
        </section>
      </main>

      <footer id="contato" className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand reveal reveal--delay-0">
            <strong className="site-footer__logo">Blufy</strong>
            <p className="site-footer__tagline">Transformando ideias em software de elite.</p>
          </div>
          <div className="site-footer__contact reveal reveal--delay-1">
            <p className="site-footer__label">Contato</p>
            <a href="mailto:contato@blufy.com">contato@blufy.com</a>
            <p className="site-footer__location">Brasil</p>
          </div>
        </div>
        <p className="site-footer__legal">
          Copyright {new Date().getFullYear()} Blufy. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
