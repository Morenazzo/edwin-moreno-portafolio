"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('en');

  const t = {
    en: {
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        publications: "Publications",
        education: "Education",
        contact: "Contact"
      },
      hero: {
        available: "Available for Opportunities",
        title: "Strategic Innovation Leader | AI | Partnerships",
        tagline: "Exponential Innovation Projects for a Better World",
        description: "Purpose-driven innovator helping organizations navigate the wave of exponential technologies. Expert in AI-powered innovation platforms, strategic partnerships, and building high-impact ventures.",
        cta1: "Get in Touch",
        cta2: "View LinkedIn"
      },
      about: {
        title: "About Me",
        cards: [
          { emoji: "🚀", title: "Innovation Leader", desc: "Co-founder & CEO at Surfing Digital, building AI-based platforms for mid-market companies" },
          { emoji: "💡", title: "Strategic Thinker", desc: "Led innovation strategy for 7,800+ employee media conglomerate, launched 25+ initiatives" },
          { emoji: "✍️", title: "Thought Leader", desc: "Forbes Mexico contributor writing about exponential technologies and business innovation" },
          { emoji: "🎓", title: "Continuous Learner", desc: "Singularity University alumni, multiple master's degrees, EdX AI instructor" }
        ],
        languages: "Languages"
      },
      experience: {
        title: "Experience",
        present: "Present"
      },
      projects: {
        title: "Featured Projects"
      },
      publications: {
        title: "Publications & Courses"
      },
      education: {
        title: "Education & Certifications"
      },
      contact: {
        title: "Let's Connect",
        subtitle: "Open to new opportunities and collaborations. Based in Mexico City, open to relocate.",
        email: "Email",
        github: "GitHub",
        instagram: "Instagram"
      }
    },
    es: {
      nav: {
        about: "Sobre Mí",
        experience: "Experiencia",
        projects: "Proyectos",
        publications: "Publicaciones",
        education: "Educación",
        contact: "Contacto"
      },
      hero: {
        available: "Disponible para Oportunidades",
        title: "Líder de Innovación Estratégica | IA | Alianzas",
        tagline: "Proyectos de Innovación Exponencial para un Mundo Mejor",
        description: "Innovador con propósito ayudando a organizaciones a navegar la ola de tecnologías exponenciales. Experto en plataformas de innovación impulsadas por IA, alianzas estratégicas y construcción de ventures de alto impacto.",
        cta1: "Contáctame",
        cta2: "Ver LinkedIn"
      },
      about: {
        title: "Sobre Mí",
        cards: [
          { emoji: "🚀", title: "Líder de Innovación", desc: "Co-fundador & CEO en Surfing Digital, construyendo plataformas basadas en IA para empresas medianas" },
          { emoji: "💡", title: "Pensador Estratégico", desc: "Lideré estrategia de innovación para conglomerado de medios con 7,800+ empleados, lancé 25+ iniciativas" },
          { emoji: "✍️", title: "Líder de Pensamiento", desc: "Colaborador de Forbes México escribiendo sobre tecnologías exponenciales e innovación empresarial" },
          { emoji: "🎓", title: "Aprendiz Continuo", desc: "Alumni de Singularity University, múltiples maestrías, instructor de IA en EdX" }
        ],
        languages: "Idiomas"
      },
      experience: {
        title: "Experiencia",
        present: "Presente"
      },
      projects: {
        title: "Proyectos Destacados"
      },
      publications: {
        title: "Publicaciones y Cursos"
      },
      education: {
        title: "Educación y Certificaciones"
      },
      contact: {
        title: "Conectemos",
        subtitle: "Abierto a nuevas oportunidades y colaboraciones. Basado en Ciudad de México, dispuesto a relocalizarme.",
        email: "Correo",
        github: "GitHub",
        instagram: "Instagram"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-teal-600 hover:text-teal-700 transition-colors">
              EM
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-700 hover:text-slate-900 transition-colors">{t[language].nav.about}</a>
              <a href="#experience" className="text-slate-700 hover:text-slate-900 transition-colors">{t[language].nav.experience}</a>
              <a href="#projects" className="text-slate-700 hover:text-slate-900 transition-colors">{t[language].nav.projects}</a>
              <a href="#publications" className="text-slate-700 hover:text-slate-900 transition-colors">{t[language].nav.publications}</a>
              <a href="#education" className="text-slate-700 hover:text-slate-900 transition-colors">{t[language].nav.education}</a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">{t[language].nav.contact}</a>
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-600 hover:bg-teal-100 transition-colors text-sm font-medium"
              >
                {language === 'es' ? '🇲🇽 ES' : '🇺🇸 EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative w-[380px] h-[380px]">
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-teal-500/40 shadow-2xl">
        <Image
                    src="/edwin.png"
                    alt="Edwin Moreno"
                    width={380}
                    height={380}
                    className="object-cover object-[center_15%] scale-110"
          priority
        />
                </div>
              </div>
            </div>
            <div className="order-2 lg:order-2">
              <div className="inline-block mb-4 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full">
                <span className="text-teal-400 text-sm font-medium">{t[language].hero.available}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Edwin Moreno
          </h1>
              <h2 className="text-2xl md:text-3xl text-teal-400 font-semibold mb-4">
                {t[language].hero.title}
              </h2>
              <p className="text-xl text-slate-300 mb-8 italic">
                "{t[language].hero.tagline}"
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                {t[language].hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg shadow-teal-500/30"
                >
                  {t[language].hero.cta1}
                </a>
                <a 
                  href="https://www.linkedin.com/in/disruptionwithpurpose/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-slate-700 text-white rounded-full font-semibold hover:bg-slate-600 transition-all"
                >
                  {t[language].hero.cta2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            {t[language].about.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t[language].about.cards.map((card, idx) => (
              <div key={idx} className="bg-slate-50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all hover:transform hover:scale-105">
                <div className="text-3xl mb-4">{card.emoji}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t[language].about.languages}</h3>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-teal-50 border border-teal-200 rounded-full">
                <span className="text-teal-700 font-medium">🇲🇽 {language === 'en' ? 'Spanish: Native' : 'Español: Nativo'}</span>
              </div>
              <div className="px-6 py-3 bg-teal-50 border border-teal-200 rounded-full">
                <span className="text-teal-700 font-medium">🇺🇸 {language === 'en' ? 'English: Advanced' : 'Inglés: Avanzado'}</span>
              </div>
              <div className="px-6 py-3 bg-teal-50 border border-teal-200 rounded-full">
                <span className="text-teal-700 font-medium">🇧🇷 {language === 'en' ? 'Portuguese: Basic' : 'Portugués: Básico'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            {t[language].experience.title}
          </h2>
          <div className="space-y-8">
            {/* Surfing Digital */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Co-founder & CEO</h3>
                  <p className="text-teal-600 text-lg font-semibold">Surfing Digital</p>
                </div>
                <span className="text-slate-500 mt-2 md:mt-0">{language === 'en' ? 'Aug 2015 – Present' : 'Ago 2015 – Presente'}</span>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Designed and launched an AI-based innovation platform for mid-market companies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Raised $50K via crowdfunding in 6 days; led consulting projects in Spain, Mexico, Peru, and the US.</span>
                </li>
              </ul>
            </div>

            {/* MVS Exponencial */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">CEO, MVS Exponencial</h3>
                  <p className="text-teal-600 text-lg font-semibold">MVS Capital Mexico</p>
                </div>
                <span className="text-slate-500 mt-2 md:mt-0">{language === 'en' ? 'Sep 2022 – Mar 2025' : 'Sep 2022 – Mar 2025'}</span>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Led innovation strategy in a media conglomerate with 7,800 employees.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Created an internal incubator that launched 25+ initiatives; 3 became business units with {'>'}$2M USD in revenue.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Managed C-level relationships, internal stakeholders, and execution of high-impact innovation projects.</span>
                </li>
              </ul>
            </div>

            {/* OpenExO */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Director of Marketing and Media</h3>
                  <p className="text-teal-600 text-lg font-semibold">OpenExO Global</p>
                </div>
                <span className="text-slate-500 mt-2 md:mt-0">{language === 'en' ? 'Feb 2019 – Dec 2019' : 'Feb 2019 – Dic 2019'}</span>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Scaled community from 150 to 1,000+ coaches.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Led marketing for global workshops in Dubai, Barcelona, Mexico City, and UN HQ in NYC.</span>
                </li>
              </ul>
            </div>

            {/* Growth Institute */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Director of Exponential Growth</h3>
                  <p className="text-teal-600 text-lg font-semibold">Growth Institute Global</p>
                </div>
                <span className="text-slate-500 mt-2 md:mt-0">{language === 'en' ? 'May 2018 – Jan 2019' : 'May 2018 – Ene 2019'}</span>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Partnered with Singularity University executives to expand exponential methodologies in LATAM.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Led cross-functional collaboration and generated $150K+ revenue in the first year.</span>
                </li>
              </ul>
            </div>

            {/* Garage Video */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Co-founder</h3>
                  <p className="text-teal-600 text-lg font-semibold">Garage Video LATAM</p>
                </div>
                <span className="text-slate-500 mt-2 md:mt-0">{language === 'en' ? 'Aug 2012 – Aug 2015' : 'Ago 2012 – Ago 2015'}</span>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>{language === 'en' ? 'Built a startup supporting corporate videos for 200+ clients across the Americas.' : 'Construí una startup de apoyo a videos corporativos para 200+ clientes en las Américas.'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>{language === 'en' ? 'Led negotiations, product rollout, and regional operations.' : 'Lideré negociaciones, lanzamiento de productos y operaciones regionales.'}</span>
                </li>
              </ul>
            </div>

            {/* Flexi Shoes */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{language === 'en' ? 'Key Account Manager' : 'Gerente de Cuentas Clave'}</h3>
                  <p className="text-teal-600 text-lg font-semibold">Flexi Shoes Mexico</p>
                </div>
                <span className="text-slate-500 mt-2 md:mt-0">{language === 'en' ? 'Jun 2010 – Jul 2012' : 'Jun 2010 – Jul 2012'}</span>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>{language === 'en' ? 'Increased B2B sales from $12.8M to $20M USD in two years through strategic retail and trade marketing initiatives.' : 'Incrementé ventas B2B de $12.8M a $20M USD en dos años mediante iniciativas estratégicas de retail y trade marketing.'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>{language === 'en' ? 'Implemented national expo and retail display strategies that boosted product visibility and distributor engagement.' : 'Implementé estrategias nacionales de expos y displays retail que aumentaron visibilidad del producto y engagement con distribuidores.'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>{language === 'en' ? 'Managed 60+ wholesale accounts and optimized product mix, improving sell-through and revenue consistency.' : 'Gestioné 60+ cuentas mayoristas y optimicé el mix de productos, mejorando sell-through y consistencia de ingresos.'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            {t[language].projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <a 
              href="https://www.surfing.digital/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all group"
            >
              <div className="text-4xl mb-4">🏄</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                Surfing Digital
              </h3>
              <p className="text-slate-700 mb-4">
                AI-based innovation platform helping companies launch high-impact projects. Successfully supported 20+ crowdfunding campaigns and corporate innovation programs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm">Innovation Platform</span>
                <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm">Crowdfunding</span>
                <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm">AI</span>
              </div>
              <span className="text-teal-600 font-semibold">Learn More →</span>
            </a>

            <a 
              href="https://verymuch.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all group"
            >
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                VeryMuch.AI
              </h3>
              <p className="text-slate-700 mb-4">
                Marketplace connecting companies with verified AI talent. Helping businesses implement AI projects with specialized experts, ensuring measurable results.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm">AI Talent</span>
                <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm">Marketplace</span>
                <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm">GenAI</span>
              </div>
              <span className="text-teal-600 font-semibold">Visit Platform →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Publications & Courses Section */}
      <section id="publications" className="py-20 px-6 bg-slate-900 border-t-4 border-emerald-500/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            {t[language].publications.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="https://forbes.com.mx/author/edwin-moreno/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all group hover:shadow-xl hover:shadow-emerald-500/20"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                Forbes Mexico
              </h3>
              <p className="text-slate-300 mb-4">
                Columnist writing about exponential technologies, AI, innovation, and the future of business in Latin America.
              </p>
              <span className="text-teal-400 font-semibold">Read Articles →</span>
            </a>

            <a 
              href="https://www.edx.org/learn/artificial-intelligence/universidades-anahuac-impacto-de-la-inteligencia-artificial-en-la-innovacion-de-negocios" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all group hover:shadow-xl hover:shadow-emerald-500/20"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                EdX Course
              </h3>
              <p className="text-slate-300 mb-4">
                "Impacto de la Inteligencia Artificial en la Innovación de Negocios" - Universidad Anáhuac.
              </p>
              <span className="text-teal-400 font-semibold">View Course →</span>
            </a>

            <a 
              href="https://www.coursera.org/learn/mejora-tu-negocio-con-inteligencia-artificial" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all group hover:shadow-xl hover:shadow-emerald-500/20"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                Coursera Course
              </h3>
              <p className="text-slate-300 mb-4">
                "Mejora tu negocio con Inteligencia Artificial" - Teaching business improvement through AI implementation.
              </p>
              <span className="text-teal-400 font-semibold">Enroll Now →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-950 border-t-4 border-blue-500/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            {t[language].education.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "Master's in Digital Business" : "Maestría en Negocios Digitales"}</h3>
              <p className="text-blue-400 mb-2">The Valley Barcelona</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "Master's in Business Dynamics" : "Maestría en Dinámica de Negocios"}</h3>
              <p className="text-blue-400 mb-2">Growth Institute</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "Bachelor's in Economics (Finance)" : "Licenciatura en Economía (Finanzas)"}</h3>
              <p className="text-blue-400 mb-2">Universidad Iberoamericana Mexico</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "Executive Program on Exponential Technologies" : "Programa Ejecutivo en Tecnologías Exponenciales"}</h3>
              <p className="text-emerald-400 mb-2">Singularity University</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "Python for Everybody Specialization" : "Especialización en Python para Todos"}</h3>
              <p className="text-emerald-400 mb-2">University of Michigan — Coursera</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">Introduction to Computer Science CS50</h3>
              <p className="text-emerald-400 mb-2">Harvard edX</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "Entrepreneurship Tecnológico" : "Emprendimiento Tecnológico"}</h3>
              <p className="text-emerald-400 mb-2">Tecnológico de Monterrey — Coursera</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "AI for Everyone" : "IA para Todos"}</h3>
              <p className="text-emerald-400 mb-2">Andrew Ng — Coursera</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "ExO Ambassador, Foundations, Coach & Sprint Coach Certifications" : "Certificaciones ExO Ambassador, Foundations, Coach & Sprint Coach"}</h3>
              <p className="text-teal-400 mb-2">OpenExO Global</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "Leadership & Faith Program" : "Programa de Liderazgo y Fe"}</h3>
              <p className="text-purple-400 mb-2">Haggai International</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">{language === 'en' ? "AI Safety & Ethics Society — Winter 2025 Cohort" : "Sociedad de Seguridad y Ética en IA — Cohorte Invierno 2025"}</h3>
              <p className="text-purple-400 mb-2">AI Safety & Ethics Society</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            {t[language].contact.title}
          </h2>
          <p className="text-xl text-slate-700 mb-12">
            {t[language].contact.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:edwinmorenοmarun@gmail.com"
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-2">📧</div>
              <h3 className="text-slate-900 font-semibold mb-1 group-hover:text-teal-600">{t[language].contact.email}</h3>
              <p className="text-slate-600 text-xs break-all">edwinmorenοmarun@gmail.com</p>
            </a>
            <a 
              href="https://github.com/Morenazzo"
            target="_blank"
            rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-2">💻</div>
              <h3 className="text-slate-900 font-semibold mb-1 group-hover:text-teal-600">{t[language].contact.github}</h3>
              <p className="text-slate-600 text-sm">@Morenazzo</p>
          </a>
          <a
              href="https://www.instagram.com/Morenazzo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-2">📸</div>
              <h3 className="text-slate-900 font-semibold mb-1 group-hover:text-teal-600">{t[language].contact.instagram}</h3>
              <p className="text-slate-600 text-sm">@Morenazzo</p>
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/disruptionwithpurpose/"
            target="_blank"
            rel="noopener noreferrer"
              className="px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto text-center text-slate-600">
          <p>© 2025 Edwin Moreno. All rights reserved.</p>
          <p className="mt-2 text-sm">Strategic Innovation Leader | AI | Partnerships</p>
        </div>
      </footer>
    </div>
  );
}
