// All site copy, in English and French. Facts come from Rahil's CV.

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const profile = {
  name: "Rahil Mohamed Islam",
  initials: "RI",
  email: "rahilmohamedislam@gmail.com",
  phone: "+213 554 653 341",
  phoneHref: "tel:+213554653341",
  linkedin: "https://www.linkedin.com/in/mohamed-islam-rahil-787a77341/",
  github: "https://github.com/islam-rahil",
  cv: "/Rahil-Mohamed-Islam-CV.pdf",
};

export const ticker = [
  "Java",
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "Angular",
  "Spring Boot",
  "Kotlin",
  "PostgreSQL",
  "Prisma",
  "Python",
  "Tailwind CSS",
  "Docker",
  "Linux & VPS",
];

export const liveSites = [
  { name: "AMS Agency", url: "https://www.agencyams.com", label: "agencyams.com" },
  { name: "TWS El Express", url: "https://twselexpress.com", label: "twselexpress.com" },
  { name: "LUMEA ROYAL", url: "https://lumea-dz.com", label: "lumea-dz.com" },
  { name: "AMS Groupe", url: "https://www.amsgroupes.com", label: "amsgroupes.com" },
];

const en = {
  meta: {
    title: "Rahil Mohamed Islam — Full-Stack Developer & Data Engineer",
    description:
      "Full-stack developer and data engineer based in Algiers. Websites, SaaS and mobile apps with Node.js, Next.js, React, Java, Spring Boot and Angular.",
  },
  nav: {
    work: "Work",
    stack: "Stack",
    experience: "Experience",
    contact: "Contact",
    available: "Available for work",
    cta: "Get in touch",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    headline: "I build whole products — from the database to the last pixel.",
    intro:
      "Full-stack developer & data engineer. Node.js, Next.js and React for fast-moving products; Java, Spring Boot and Angular for the big ones. I take ideas to production — web, SaaS and mobile.",
    seeWork: "See the work",
    downloadCv: "Download CV",
  },
  about: {
    label: "02 / About",
    text: "I’m Rahil Mohamed Islam — software engineer (Master’s, University of Boumerdès) based in Algiers. I design websites, SaaS platforms and mobile apps with two stacks: Node.js, Next.js and React for small and mid-size projects, Java, Spring Boot and Angular for large ones. On the data side, I built an unsupervised SIM-fraud detection model at Djezzy, published at IEEE AIIA 2025.",
    facts: ["Algiers, Algeria", "UTC+1", "Arabic · French · English"],
    available: "Available for new projects",
  },
  numbers: {
    label: "03 / By the numbers",
    title: "Numbers I can back up",
    items: [
      { value: "1.5M", caption: "transactions analysed for SIM-fraud detection" },
      { value: "0.885", caption: "AUC-ROC of my deep autoencoder model" },
      { value: "7", caption: "projects taken to production" },
      { value: "4k+", caption: "anomaly patterns surfaced at Djezzy" },
    ],
  },
  work: {
    label: "04 / Selected work",
    title: "Projects I built end to end",
    items: [
      {
        title: "B2B maintenance platform",
        year: "",
        stack: ["Node.js", "Next.js", "Tailwind", "Prisma", "PostgreSQL"],
        description:
          "Client companies submit and track maintenance requests; service providers plan and manage interventions from one central space.",
        role: "Full-stack",
      },
      {
        title: "Property management SaaS + mobile app",
        year: "",
        stack: ["SaaS", "Kotlin", "Jetpack"],
        description:
          "Manage properties, report breakdowns and follow interventions. Centralises the follow-up of residences for faster, better service.",
        role: "Web + Android",
      },
      {
        title: "HR management SaaS",
        year: "",
        stack: ["Java", "Spring Boot", "Angular"],
        description:
          "Staff records, attendance, leave and absences in one place — less admin work, more reliable HR data.",
        role: "Full-stack",
      },
      {
        title: "SIM-card fraud detection — Djezzy",
        year: "2025",
        stack: ["Python", "Autoencoders", "SHAP", "HDBSCAN", "t-SNE"],
        description:
          "Unsupervised deep learning on 1.5M real transactions, no labelled fraud needed. 26 engineered features, AUC-ROC 0.885.",
        role: "Data science · Internship",
      },
      {
        title: "E-learning platform — Expert Petroleum Services",
        year: "2025",
        stack: ["Web platform"],
        description:
          "Centralises course material and makes remote learning easier for the company’s trainees.",
        role: "Design & development",
      },
      {
        title: "Employee & IP-phone manager — Sonelgaz SPE",
        year: "2023",
        stack: ["JEE", "Java"],
        description:
          "One tool for employee accounts and their IP phone lines, simplifying assignment tracking for the IT team.",
        role: "Web development · Internship",
      },
    ],
  },
  stack: {
    label: "05 / Stack by layer",
    title: "The stack I actually ship with",
    layers: [
      {
        name: "Languages",
        items: "Java, JavaScript / TypeScript, Python, Kotlin, SQL, C / C++",
      },
      {
        name: "Web, mobile & back-end",
        items:
          "Node.js, Next.js, React, Angular, Spring Boot, REST APIs, HTML / CSS / Tailwind CSS, Jetpack (Android)",
      },
      {
        name: "Data & AI",
        items:
          "PostgreSQL, relational modelling, SQL optimisation, Prisma, Hibernate, Machine Learning, Deep Learning (autoencoders), t-SNE, SHAP, HDBSCAN",
      },
      {
        name: "Architecture & tools",
        items:
          "Application architecture, OOP, UML, design patterns, testing, Docker, Git / GitHub, Linux & VPS",
      },
    ],
  },
  experience: {
    label: "06 / Experience",
    title: "From data models to production apps",
    present: "Present",
    roles: [
      {
        role: "Full-Stack Developer",
        company: "AMS Groupe",
        period: "Jan 2026 — Present",
        points: [
          "Involved in every stage of digital projects, from needs analysis to delivery",
          "Builds websites, SaaS applications and mobile apps, front-end and back-end",
          "Runs the infrastructure: VPS servers, domain names and cloud environments",
          "Owns the security of applications and websites",
        ],
      },
      {
        role: "Substitute Lecturer (part-time)",
        company: "UMBB",
        period: "Oct 2025 — Dec 2025",
        points: [
          "Taught algorithms and programming fundamentals to Science & Technology students",
          "Coached student groups on logic, core CS concepts and problem solving",
        ],
      },
      {
        role: "Web Developer",
        company: "Expert Petroleum Services",
        period: "Sep 2025 — Jan 2026",
        points: [
          "Designed and built an e-learning platform for remote training",
          "Trained students in web development with a hands-on approach",
          "Contributed to technical design and project architecture",
        ],
      },
      {
        role: "Data Science Intern",
        company: "Djezzy — Optimum Telecom Algérie",
        period: "Feb 2025 — Jul 2025",
        points: [
          "Unsupervised deep learning to detect SIM-card fraud on 1.5M real transactions",
          "Engineered 26 behavioural and temporal features; deep autoencoder reached AUC-ROC 0.885",
          "Used t-SNE, SHAP and HDBSCAN to explain results — 4,000+ anomaly patterns identified",
          "Work published at the IEEE AIIA 2025 international conference",
        ],
      },
      {
        role: "JEE Web Developer Intern",
        company: "SPE — Sonelgaz",
        period: "Feb 2023 — Apr 2023",
        points: [
          "Built an app to manage employee accounts and their IP phone lines",
          "Centralised the data and simplified assignment tracking for the IT team",
        ],
      },
    ],
  },
  sites: {
    label: "07 / Live websites",
    title: "Sites running in production",
    visit: "Visit",
  },
  research: {
    label: "08 / Research & education",
    title: "Published, and properly trained",
    paperTag: "IEEE AIIA 2025 · Boumerdès",
    paper:
      "Unsupervised Anomaly Detection for SIM Card Fraud Using Autoencoder-Based Reconstruction Error Analysis",
    paperNote:
      "Built during my internship at Djezzy: a deep autoencoder that flags unusual SIM-card behaviour without labelled fraud examples.",
    education: [
      {
        degree: "Master — Software Engineering & Information Processing",
        school: "University of Boumerdès",
        period: "2023 — 2025",
      },
      {
        degree: "Bachelor — Information Systems & Software Engineering",
        school: "University of Boumerdès",
        period: "2020 — 2023",
      },
      {
        degree: "Introduction to Web Development (certificate)",
        school: "GOMYCODE",
        period: "2022",
      },
    ],
  },
  process: {
    label: "09 / How I work",
    title: "Four steps, from brief to production",
    steps: [
      {
        name: "Analyse",
        text: "I start from your needs and constraints, not from a framework. Output: a clear scope and plan.",
      },
      {
        name: "Architect",
        text: "Data model, API contracts and the right stack for the size of the project — agreed before the first screen.",
      },
      {
        name: "Build",
        text: "Front-end and back-end together: modern, easy-to-use interfaces on top of reliable, fast services.",
      },
      {
        name: "Deploy & secure",
        text: "VPS, domain names, cloud environments and security handled — the product goes live and stays up.",
      },
    ],
  },
  faq: {
    label: "10 / FAQ",
    title: "Questions I get before the first call",
    ask: "Ask me a question",
    askNote: "If yours is not here, write — I’ll get back to you quickly.",
    items: [
      {
        q: "Do you take whole projects or join a team?",
        a: "Both. I can take a product from needs analysis to deployment on my own, or join an existing team on the front-end, back-end or data side.",
      },
      {
        q: "Which stack will you use?",
        a: "It depends on the size of the project: Node.js, Next.js and React for small and mid-size products; Java, Spring Boot and Angular for large ones; Kotlin and Jetpack for Android.",
      },
      {
        q: "Do you handle hosting and domains?",
        a: "Yes. I set up and manage VPS servers, domain names and cloud environments, and take care of application security.",
      },
      {
        q: "Can you help with data and machine learning?",
        a: "Yes. I build data pipelines and ML models in Python — my SIM-fraud detection work at Djezzy was published at IEEE AIIA 2025.",
      },
      {
        q: "Which languages do you work in?",
        a: "Arabic (native), French (bilingual) and English (B2).",
      },
    ],
  },
  contact: {
    label: "11 / Contact",
    titleMuted: "Got a product that needs",
    titleStrong: "to start moving?",
    cta: "Send an email",
    rights: "All rights reserved",
  },
};

export type Dict = typeof en;

const fr: Dict = {
  meta: {
    title: "Rahil Mohamed Islam — Développeur Full Stack & Data Engineer",
    description:
      "Développeur full stack et data engineer basé à Alger. Sites web, SaaS et applications mobiles avec Node.js, Next.js, React, Java, Spring Boot et Angular.",
  },
  nav: {
    work: "Projets",
    stack: "Stack",
    experience: "Parcours",
    contact: "Contact",
    available: "Disponible",
    cta: "Me contacter",
    menu: "Menu",
    close: "Fermer",
  },
  hero: {
    headline: "Je construis des produits complets — de la base de données au dernier pixel.",
    intro:
      "Développeur full stack & data engineer. Node.js, Next.js et React pour les produits rapides ; Java, Spring Boot et Angular pour les grands projets. J’amène les idées jusqu’en production — web, SaaS et mobile.",
    seeWork: "Voir les projets",
    downloadCv: "Télécharger le CV",
  },
  about: {
    label: "02 / À propos",
    text: "Je suis Rahil Mohamed Islam — ingénieur en génie logiciel (Master, Université de Boumerdès) basé à Alger. Je conçois des sites web, des solutions SaaS et des applications mobiles avec deux stacks : Node.js, Next.js et React pour les petits et moyens projets, Java, Spring Boot et Angular pour les grands. Côté data, j’ai développé chez Djezzy un modèle non supervisé de détection de fraude SIM, publié à IEEE AIIA 2025.",
    facts: ["Alger, Algérie", "UTC+1", "Arabe · Français · Anglais"],
    available: "Disponible pour de nouveaux projets",
  },
  numbers: {
    label: "03 / En chiffres",
    title: "Des chiffres que je peux défendre",
    items: [
      { value: "1,5M", caption: "transactions analysées pour la détection de fraude SIM" },
      { value: "0,885", caption: "AUC-ROC de mon modèle d’autoencodeur profond" },
      { value: "7", caption: "projets mis en production" },
      { value: "4k+", caption: "typologies d’anomalies identifiées chez Djezzy" },
    ],
  },
  work: {
    label: "04 / Projets",
    title: "Des projets menés de bout en bout",
    items: [
      {
        title: "Plateforme B2B de maintenance",
        year: "",
        stack: ["Node.js", "Next.js", "Tailwind", "Prisma", "PostgreSQL"],
        description:
          "Les entreprises clientes soumettent et suivent leurs demandes ; les prestataires planifient et gèrent les interventions depuis un espace centralisé.",
        role: "Full stack",
      },
      {
        title: "SaaS de gestion immobilière + appli mobile",
        year: "",
        stack: ["SaaS", "Kotlin", "Jetpack"],
        description:
          "Gérer les biens, signaler les pannes et suivre les interventions. Centralise le suivi des résidences pour un service plus réactif.",
        role: "Web + Android",
      },
      {
        title: "SaaS de gestion RH",
        year: "",
        stack: ["Java", "Spring Boot", "Angular"],
        description:
          "Dossiers du personnel, présences, congés et absences au même endroit — moins d’administratif, des données RH plus fiables.",
        role: "Full stack",
      },
      {
        title: "Détection de fraude SIM — Djezzy",
        year: "2025",
        stack: ["Python", "Autoencodeurs", "SHAP", "HDBSCAN", "t-SNE"],
        description:
          "Deep learning non supervisé sur 1,5 M de transactions réelles, sans fraudes étiquetées. 26 indicateurs, AUC-ROC de 0,885.",
        role: "Data science · Stage",
      },
      {
        title: "Plateforme d’e-learning — Expert Petroleum Services",
        year: "2025",
        stack: ["Plateforme web"],
        description:
          "Centralise les ressources pédagogiques et facilite l’apprentissage à distance des apprenants de l’entreprise.",
        role: "Conception & développement",
      },
      {
        title: "Gestion des comptes & lignes IP — Sonelgaz SPE",
        year: "2023",
        stack: ["JEE", "Java"],
        description:
          "Un seul outil pour les comptes des employés et leurs lignes téléphoniques IP, avec un suivi des affectations simplifié.",
        role: "Développement web · Stage",
      },
    ],
  },
  stack: {
    label: "05 / Stack par couche",
    title: "La stack que j’utilise vraiment",
    layers: [
      {
        name: "Langages",
        items: "Java, JavaScript / TypeScript, Python, Kotlin, SQL, C / C++",
      },
      {
        name: "Web, mobile & back-end",
        items:
          "Node.js, Next.js, React, Angular, Spring Boot, API REST, HTML / CSS / Tailwind CSS, Jetpack (Android)",
      },
      {
        name: "Data & IA",
        items:
          "PostgreSQL, modélisation relationnelle, optimisation SQL, Prisma, Hibernate, Machine Learning, Deep Learning (autoencodeurs), t-SNE, SHAP, HDBSCAN",
      },
      {
        name: "Architecture & outils",
        items:
          "Architecture applicative, POO, UML, design patterns, tests, Docker, Git / GitHub, Linux & VPS",
      },
    ],
  },
  experience: {
    label: "06 / Expérience",
    title: "Des modèles de données aux applis en production",
    present: "Aujourd’hui",
    roles: [
      {
        role: "Développeur Full Stack",
        company: "AMS Groupe",
        period: "Janv. 2026 — Aujourd’hui",
        points: [
          "Participe à toutes les étapes des projets, de l’analyse des besoins à la mise en place",
          "Conçoit et développe sites web, applications SaaS et mobiles, front-end et back-end",
          "Gère l’infrastructure : serveurs VPS, noms de domaine et environnements cloud",
          "Veille à la sécurité des applications et des sites web",
        ],
      },
      {
        role: "Professeur remplaçant (temps partiel)",
        company: "UMBB",
        period: "Oct. 2025 — Déc. 2025",
        points: [
          "Enseignement de l’algorithmique et des bases de la programmation en Sciences et Techniques",
          "Accompagnement des groupes sur la logique, les concepts fondamentaux et la résolution de problèmes",
        ],
      },
      {
        role: "Développeur web",
        company: "Expert Petroleum Services",
        period: "Sept. 2025 — Janv. 2026",
        points: [
          "Conception et développement d’une plateforme d’e-learning",
          "Formation des étudiants aux bases du développement web, approche pratique",
          "Participation à la conception technique et à l’architecture des projets",
        ],
      },
      {
        role: "Data science (stage)",
        company: "Djezzy — Optimum Telecom Algérie",
        period: "Févr. 2025 — Juil. 2025",
        points: [
          "Deep learning non supervisé pour détecter la fraude SIM sur 1,5 M de transactions réelles",
          "26 indicateurs comportementaux et temporels ; autoencodeur profond à 0,885 d’AUC-ROC",
          "t-SNE, SHAP et HDBSCAN pour l’interprétation — plus de 4 000 typologies d’anomalies",
          "Travaux publiés à la conférence internationale IEEE AIIA 2025",
        ],
      },
      {
        role: "Développeur web JEE (stage)",
        company: "SPE — Sonelgaz",
        period: "Févr. 2023 — Avr. 2023",
        points: [
          "Application de gestion des comptes des employés et de leurs lignes téléphoniques IP",
          "Centralisation des informations et suivi des affectations simplifié pour l’équipe IT",
        ],
      },
    ],
  },
  sites: {
    label: "07 / Sites en ligne",
    title: "Des sites en production",
    visit: "Visiter",
  },
  research: {
    label: "08 / Recherche & formation",
    title: "Publié, et bien formé",
    paperTag: "IEEE AIIA 2025 · Boumerdès",
    paper:
      "Unsupervised Anomaly Detection for SIM Card Fraud Using Autoencoder-Based Reconstruction Error Analysis",
    paperNote:
      "Issu de mon stage chez Djezzy : un autoencodeur profond qui repère les comportements SIM inhabituels sans exemples de fraude étiquetés.",
    education: [
      {
        degree: "Master — Ingénierie du logiciel et traitement de l’information",
        school: "Université de Boumerdès",
        period: "2023 — 2025",
      },
      {
        degree: "Licence — Ingénierie des systèmes d’information et logiciels",
        school: "Université de Boumerdès",
        period: "2020 — 2023",
      },
      {
        degree: "Introduction au développement web (certificat)",
        school: "GOMYCODE",
        period: "2022",
      },
    ],
  },
  process: {
    label: "09 / Méthode",
    title: "Quatre étapes, du besoin à la production",
    steps: [
      {
        name: "Analyser",
        text: "Je pars de vos besoins et de vos contraintes, pas d’un framework. Résultat : un périmètre et un plan clairs.",
      },
      {
        name: "Architecturer",
        text: "Modèle de données, contrats d’API et la bonne stack selon la taille du projet — validés avant le premier écran.",
      },
      {
        name: "Construire",
        text: "Front-end et back-end ensemble : des interfaces modernes et simples sur des services fiables et performants.",
      },
      {
        name: "Déployer & sécuriser",
        text: "VPS, noms de domaine, cloud et sécurité pris en charge — le produit est en ligne et y reste.",
      },
    ],
  },
  faq: {
    label: "10 / FAQ",
    title: "Les questions avant le premier appel",
    ask: "Poser une question",
    askNote: "Si la vôtre n’est pas ici, écrivez-moi — je réponds rapidement.",
    items: [
      {
        q: "Vous prenez des projets complets ou vous rejoignez une équipe ?",
        a: "Les deux. Je peux mener un produit de l’analyse des besoins au déploiement, ou renforcer une équipe côté front-end, back-end ou data.",
      },
      {
        q: "Quelle stack allez-vous utiliser ?",
        a: "Selon la taille du projet : Node.js, Next.js et React pour les petits et moyens ; Java, Spring Boot et Angular pour les grands ; Kotlin et Jetpack pour Android.",
      },
      {
        q: "Vous gérez l’hébergement et les noms de domaine ?",
        a: "Oui. J’installe et je gère les serveurs VPS, les noms de domaine et les environnements cloud, ainsi que la sécurité des applications.",
      },
      {
        q: "Pouvez-vous aider sur la data et le machine learning ?",
        a: "Oui. Je construis des modèles de ML en Python — mes travaux sur la fraude SIM chez Djezzy ont été publiés à IEEE AIIA 2025.",
      },
      {
        q: "Dans quelles langues travaillez-vous ?",
        a: "Arabe (langue maternelle), français (bilingue) et anglais (B2).",
      },
    ],
  },
  contact: {
    label: "11 / Contact",
    titleMuted: "Un produit qui doit",
    titleStrong: "enfin avancer ?",
    cta: "Envoyer un e-mail",
    rights: "Tous droits réservés",
  },
};

const dictionaries: Record<Locale, Dict> = { en, fr };

export const getDictionary = (locale: Locale) => dictionaries[locale];
