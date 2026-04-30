import { useEffect } from "react";
import blufyLogo from "../assets/logo-blufy.svg";

function App() {
  const year = new Date().getFullYear();

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
    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let observer;
    if (nodes.length && !prefersReduced) {
      observer = new IntersectionObserver(
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
    } else {
      nodes.forEach((el) => el.classList.add("is-visible"));
    }

    const layers = document.querySelectorAll("[data-sky-parallax]");
    let ticking = false;

    const updateParallax = () => {
      const y = window.scrollY || 0;
      layers.forEach((el) => {
        const speed = parseFloat(el.dataset.skyParallax || "0");
        const offset = -y * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    if (layers.length && !prefersReduced) {
      window.addEventListener("scroll", onScroll, { passive: true });
      updateParallax();
    }

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleSearchClick = () => {
    document.getElementById("soluções")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="skyscape" aria-hidden="true">
        <div className="skyscape__layer skyscape__layer--haze" data-sky-parallax="0.025"></div>
        <div className="skyscape__layer skyscape__layer--cloud-far" data-sky-parallax="0.055"></div>
        <div className="skyscape__layer skyscape__layer--cloud-mid" data-sky-parallax="0.105"></div>
        <div className="skyscape__layer skyscape__layer--cloud-near" data-sky-parallax="0.165"></div>
        <div className="skyscape__birds" data-sky-parallax="0.085">
          <svg className="skyscape__bird skyscape__bird--a" viewBox="0 0 96 32" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M48 15c-6-5-16-8-26-4 8 3 7 9 2 12 10-1 18-2 26 0 8-2 14-1 24 3 4-1 3-7-1-10-6-8-6-14-6z"
            />
          </svg>
          <svg className="skyscape__bird skyscape__bird--b" viewBox="0 0 96 32" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M44 14L12 16c-4-1-6-4-4-7 12-3 22 2 30-1 14-4 22 4 24 8 2 6-2 4-8-2-8-8-10-14-8z"
            />
          </svg>
          <svg className="skyscape__bird skyscape__bird--c" viewBox="0 0 96 32" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M52 16c-8-6-20-9-30-5 9 4 8 10 3 13 12 0 20 1 28 4 10 2 12-2 10-7-4-9-10-15-9z"
            />
          </svg>
          <svg className="skyscape__bird skyscape__bird--d" viewBox="0 0 96 32" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M46 13c-14-2-24 6-20 12 6-2 12 1 18 6 8-3 16-5 24-2 6 3 4 7-2 8-12 2-24-8-40-10z"
            />
          </svg>
          <svg className="skyscape__bird skyscape__bird--e" viewBox="0 0 96 32" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M50 14L20 17c-5 0-8-3-6-7 10-4 20 1 28-2 12-3 20 5 22 10 0 5-4 3-9-2-10-5-12-7-19-7z"
            />
          </svg>
        </div>
      </div>

      <header className="site-header">
        <nav className="nav" aria-label="Principal">
          <a className="nav__brand" href="#">
            <img className="nav__brand-logo" src={blufyLogo} alt="Blufy" width={340} height={62} />
          </a>
          <ul className="nav__links">
            <li>
              <a href="#soluções">Soluções</a>
            </li>
            <li>
              <a href="#serviços">Serviços</a>
            </li>
            <li>
              <a href="#diferenciais">Diferenciais</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <div className="nav__actions">
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
            <span className="hero__title-line">Transformando ideias</span>
            <span className="hero__title-line hero__title-line--bridge">em</span>
            <span className="hero__title-glow">software de elite</span>
          </h1>
          <p className="hero__subtitle hero__enter hero__enter--3">
            Arquitetura sólida, interfaces impecáveis e entrega contínua. Construímos produtos que escalam com o seu negócio.
          </p>
          <div className="hero__actions hero__enter hero__enter--4">
            <a className="btn btn--primary" href="#contato">
              Fale conosco
            </a>
            <a className="btn btn--ghost" href="#soluções">
              Ver soluções
            </a>
          </div>
          <p className="hero__meta hero__enter hero__enter--5">Projetos sob medida · Cloud · IA integrada</p>
        </section>

        <section id="soluções" className="feature-grid" aria-labelledby="feature-grid-title">
          <h2 id="feature-grid-title" className="visually-hidden">
            Destaques
          </h2>
          <div className="feature-grid__row">
            <article className="feature-card feature-card--gradient-a reveal reveal--delay-0">
              <h3 className="feature-card__title">Soluções sob medida para o seu produto</h3>
              <p className="feature-card__text">Da descoberta à produção: web, mobile e APIs com código limpo e documentação clara.</p>
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
              <h3 className="feature-card__title">Veja nosso trabalho em ação</h3>
              <p className="feature-card__text">Cases reais, performance medida e experiências pensadas para converter.</p>
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
            <p className="feature-banner__text">Um time técnico alinhado ao seu roadmap. Da ideia ao deploy, com transparência total.</p>
            <ul className="feature-banner__icons" aria-label="Áreas de atuação">
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
                <span className="feature-banner__icon-wrap" title="Segurança">
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
            <p className="section__lead">Menos ruído, mais resultado. Princípios que guiam cada entrega.</p>
          </div>
          <div className="cards-grid cards-grid--6">
            <article className="info-card reveal reveal--delay-0">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="code-xml"></i>
              </div>
              <h3 className="info-card__title">Código limpo</h3>
              <p className="info-card__text">Padrões claros, revisões e testes para manter velocidade no longo prazo.</p>
            </article>
            <article className="info-card reveal reveal--delay-1">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="rocket"></i>
              </div>
              <h3 className="info-card__title">Entrega rápida</h3>
              <p className="info-card__text">Ciclos curtos, demos frequentes e priorização alinhada ao negócio.</p>
            </article>
            <article className="info-card reveal reveal--delay-2">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="layers"></i>
              </div>
              <h3 className="info-card__title">Arquitetura escalável</h3>
              <p className="info-card__text">Cloud-native quando faz sentido, sem over-engineering.</p>
            </article>
            <article className="info-card reveal reveal--delay-3">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="layout-template"></i>
              </div>
              <h3 className="info-card__title">Design centrado no usuário</h3>
              <p className="info-card__text">UX que reduz atrito e eleva a percepção da sua marca.</p>
            </article>
            <article className="info-card reveal reveal--delay-4">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="scan-eye"></i>
              </div>
              <h3 className="info-card__title">Transparência</h3>
              <p className="info-card__text">Acesso ao progresso, métricas e decisões técnicas explicadas.</p>
            </article>
            <article className="info-card reveal reveal--delay-5">
              <div className="info-card__icon" aria-hidden="true">
                <i data-lucide="headphones"></i>
              </div>
              <h3 className="info-card__title">Suporte contínuo</h3>
              <p className="info-card__text">Evolução do produto após o go-live, com SLA combinado.</p>
            </article>
          </div>
        </section>

        <section id="serviços" className="section" aria-labelledby="services-title">
          <div className="section__head reveal">
            <h2 id="services-title" className="section__title">
              Nossos serviços
            </h2>
            <p className="section__lead">Três pilares para levar seu software do conceito à operação.</p>
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
              <h3 className="service-card__title">Apps e integrações</h3>
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
              <h3 className="service-card__title">IA &amp; automação</h3>
              <p className="service-card__text">Assistentes, pipelines de dados e fluxos inteligentes no seu produto.</p>
              <ul className="service-card__tags">
                <li>LLMs</li>
                <li>RAG</li>
                <li>Data</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="stats" aria-label="Números">
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
              <span className="stat__label">Usuários impactados</span>
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
              Roadmap compartilhado, squad dedicado e visão de produto. Tudo que você precisa é uma ideia e vontade de executar.
            </p>
          </div>
        </section>

        <section className="links-grid-section" aria-labelledby="quick-links-title">
          <h2 id="quick-links-title" className="visually-hidden">
            Links rápidos
          </h2>
          <div className="links-grid">
            <a className="link-tile reveal reveal--delay-0" href="#contato">
              <span className="link-tile__icon" aria-hidden="true">
                <i data-lucide="download"></i>
              </span>
              <span className="link-tile__label">Briefing</span>
            </a>
            <a className="link-tile reveal reveal--delay-1" href="#serviços">
              <span className="link-tile__icon" aria-hidden="true">
                <i data-lucide="file-text"></i>
              </span>
              <span className="link-tile__label">Propostas</span>
            </a>
            <a className="link-tile reveal reveal--delay-2" href="#soluções">
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
        <p className="site-footer__legal reveal reveal--delay-2">© {year} Blufy. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
