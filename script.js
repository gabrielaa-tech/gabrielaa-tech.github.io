// ===================== MOBILE NAV =====================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===================== TRANSLATIONS (EN / PT) =====================
// Add or edit text here — every data-i18n="key" in index.html reads from this object.
const translations = {
  'nav.about':        { en: 'About',       pt: 'Sobre' },
  'nav.skills':       { en: 'Skills',      pt: 'Habilidades' },
  'nav.projects':     { en: 'Projects',    pt: 'Projetos' },
  'nav.experience':   { en: 'Experience',  pt: 'Experiência' },
  'nav.contact':      { en: 'Contact',     pt: 'Contato' },

  'hero.eyebrow':     { en: 'Front-End Developer', pt: 'Desenvolvedora Front-End' },
  'hero.title1':      { en: 'I build fast, clean',      pt: 'Crio interfaces rápidas' },
  'hero.title2':      { en: 'interfaces for the web.',  pt: 'e bem cuidadas pra web.' },
  'hero.sub':         { en: 'Information Systems student and front-end developer working with HTML, CSS, JavaScript, PHP and WordPress. Based in Brazil, open to remote roles with international teams.',
                         pt: 'Estudante de Sistemas de Informação e desenvolvedora front-end, trabalhando com HTML, CSS, JavaScript, PHP e WordPress. Baseada no Brasil, aberta a vagas remotas com equipes internacionais.' },
  'hero.btnPrimary':  { en: 'See my work',   pt: 'Ver meu trabalho' },
  'hero.btnGhost':    { en: 'Get in touch',  pt: 'Entrar em contato' },

  'about.heading':    { en: 'About', pt: 'Sobre' },
  'about.p1':         { en: "I'm a front-end developer and Information Systems student, currently building responsive, production websites with HTML, CSS, JavaScript, PHP and WordPress. I turn Figma designs into pixel-accurate, cross-device interfaces, with a strong focus on usability and performance.",
                         pt: 'Sou desenvolvedora front-end e estudante de Sistemas de Informação, construindo sites responsivos e em produção com HTML, CSS, JavaScript, PHP e WordPress. Transformo designs do Figma em interfaces com fidelidade visual, com foco forte em usabilidade e performance.' },
  'about.p2':         { en: 'Before development, I spent time in customer support and administrative roles across healthcare, education and telecom — work that sharpened how I communicate, solve problems, and manage priorities under pressure. I bring that same care to how I build and ship interfaces.',
                         pt: 'Antes do desenvolvimento, passei um tempo em atendimento ao cliente e funções administrativas nos setores de saúde, educação e telecom — experiências que aprimoraram minha comunicação, resolução de problemas e organização sob pressão. Trago esse mesmo cuidado para como construo e entrego interfaces.' },
  'about.p3':         { en: "I'm actively looking for remote front-end opportunities with international teams, where I can keep growing technically while contributing from day one.",
                         pt: 'Estou buscando ativamente oportunidades remotas de front-end com equipes internacionais, onde possa continuar evoluindo tecnicamente enquanto contribuo desde o primeiro dia.' },

  'pets.heading':     { en: 'My QA team', pt: 'Minha equipe de QA' },
  'pets.text':        { en: 'Every deploy gets reviewed by two very strict code reviewers. They mostly nap on the job, but morale is high.',
                         pt: 'Todo deploy passa pela revisão de duas revisoras bem rígidas. Elas dormem na maior parte do expediente, mas o clima da equipe é ótimo.' },
  'pets.cat1':        { en: 'Senior Napper',              pt: 'Sonecas Sênior' },
  'pets.cat2':        { en: 'Chief Distraction Officer',  pt: 'Diretora de Distração' },

  'skills.heading':   { en: 'Skills', pt: 'Habilidades' },
  'skills.card1':     { en: 'Languages & Markup', pt: 'Linguagens & Marcação' },
  'skills.card2':     { en: 'CMS & Tools',        pt: 'CMS & Ferramentas' },
  'skills.card3':     { en: 'Practices',          pt: 'Boas práticas' },

  'projects.heading': { en: 'Projects',   pt: 'Projetos' },
  'projects.live':    { en: 'Live site →', pt: 'Ver site →' },
  'projects.code':    { en: 'Code →',      pt: 'Código →' },

  'experience.heading':   { en: 'Experience', pt: 'Experiência' },
  'experience.job1Title': { en: 'Web Developer · JA WEB - Soluções Online', pt: 'Desenvolvedora Web · JA WEB - Soluções Online' },
  'experience.job1Desc':  { en: 'Develop and maintain responsive institutional websites with HTML, CSS, JavaScript, PHP and WordPress, converting Figma designs into pixel-accurate pages.',
                             pt: 'Desenvolvo e mantenho sites institucionais responsivos com HTML, CSS, JavaScript, PHP e WordPress, convertendo designs do Figma em páginas com fidelidade visual.' },
  'experience.job2Title': { en: 'Customer Service Representative · Giga+ Fibra', pt: 'Atendente de Suporte ao Cliente · Giga+ Fibra' },
  'experience.job2Desc':  { en: 'Provided customer service and technical support, resolving connectivity issues with clear, efficient communication.',
                             pt: 'Prestei atendimento ao cliente e suporte técnico, resolvendo problemas de conexão com comunicação clara e eficiente.' },
  'experience.job3Title': { en: 'Intern · CNA Idiomas Oficial', pt: 'Estagiária · CNA Idiomas Oficial' },
  'experience.job3Desc':  { en: 'Handled customer service and administrative/financial support tasks in a fast-paced school environment.',
                             pt: 'Realizei atendimento ao cliente e tarefas administrativas/financeiras em um ambiente escolar dinâmico.' },
  'experience.linkedin':  { en: 'Full experience on LinkedIn →', pt: 'Experiência completa no LinkedIn →' },

  'contact.eyebrow':  { en: '04 / Get in touch',      pt: '04 / Vamos conversar' },
  'contact.heading':  { en: "Let's work together.",  pt: 'Vamos trabalhar juntos?' },
  'contact.sub':      { en: 'Open to remote front-end roles and freelance projects. Based in Brazil, GMT-3, flexible with international schedules.',
                         pt: 'Aberta a vagas remotas de front-end e projetos freelance. Baseada no Brasil, GMT-3, com flexibilidade para horários internacionais.' },

  'footer.text':      { en: '© {year} Gabriela Godoy. Built with HTML, CSS & JavaScript.',
                         pt: '© {year} Gabriela Godoy. Feito com HTML, CSS e JavaScript.' },
};

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const entry = translations[el.getAttribute('data-i18n')];
    if (!entry) return;
    let text = entry[lang] || entry.en;
    if (text.includes('{year}')) {
      text = text.replace('{year}', new Date().getFullYear());
    }
    el.innerHTML = text;
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('site-lang', lang); } catch (e) { /* ignore */ }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// Load saved preference, default to English
let startLang = 'en';
try {
  startLang = localStorage.getItem('site-lang') || 'en';
} catch (e) { /* ignore */ }

applyLanguage(startLang);
