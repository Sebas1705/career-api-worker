/**
 * Initial seed data for all career API entities.
 *
 * i18n convention — all localizable fields use LocalizedString:
 *   { en: "...", es: "...", [anyLangCode]: "..." }
 *
 * To add a new language:
 *   1. Add it to SEED.languages.supported
 *   2. Add the new lang code to every LocalizedString field below
 *   3. Re-seed: node seed-kv.mjs
 */
import type { LocalizedString } from './types'

export const SEED = {
  // ── Supported languages ──────────────────────────────────────────────────
  languages: {
    default: 'en',
    supported: [
      { code: 'en', label: 'English', label_native: 'English' },
      { code: 'es', label: 'Spanish', label_native: 'Español' },
    ],
  },

  // ── Personal (singular) ──────────────────────────────────────────────────
  personal: {
    name:     'Sebastian Entrerrios Garcia',
    email:    'sebssgarcia502580@gmail.com',
    cv_url:   '/data/cv.pdf',
    github:   'https://github.com/Sebas1705',
    linkedin: 'https://www.linkedin.com/in/sebastian-ramiro-entrerrios-garcia-b1a713217/',
    codewars: 'https://www.codewars.com/users/Sebas1705',

    greeting: { en: "Hi, I'm",   es: 'Hola, soy' } as LocalizedString,
    role:     { en: 'Full Stack & Mobile Developer', es: 'Desarrollador Full Stack & Movil' } as LocalizedString,
    tagline:  { en: 'Full stack and mobile engineer: design fast frontends, solid APIs and production-ready mobile experiences.',
                es: 'Ingeniero full stack y movil: diseno frontends rapidos, APIs solidas y experiencias moviles listas para produccion.' } as LocalizedString,
    bio:      { en: 'Based in Madrid, Spain. I build digital products with care — from native mobile apps to full-stack web systems.',
                es: 'Con base en Madrid, Espana. Construyo productos digitales con cuidado — desde apps moviles nativas hasta sistemas web full-stack.' } as LocalizedString,
    location: { en: 'Madrid, Spain', es: 'Madrid, Espana' } as LocalizedString,
  },

  // ── Jobs ─────────────────────────────────────────────────────────────────
  jobs: [
    {
      id:         'senior-solusoft',
      company:    'Solusoft',
      companyUrl: 'https://www.solusoft.es/',
      startDate:  '2026-01',
      endDate:    null as string | null,
      role:       { en: 'Senior Full Stack & Mobile Developer', es: 'Senior Desarrollador Full Stack & Movil' } as LocalizedString,
      type:       { en: 'Hybrid', es: 'Hibrido' } as LocalizedString,
      period:     { en: 'January 2026 - Present', es: 'Enero 2026 - Presente' } as LocalizedString,
      desc:       { en: 'Leading development and architectural decisions.',
                    es: 'Liderazgo tecnico y de decisiones arquitectonicas.' } as LocalizedString,
      projects:   ['AGEDI', 'Sisley', 'Iberext', 'EPDM', 'ApiMovil', 'Wemob', 'Transportes Chinchón'],
      achievements: {
        en: ['Promoted to Senior within the same team', 'Led architectural refactors across multiple projects',
             'Drove adoption of clean multimodular architecture', 'Continued full ownership of EPDM and Iberext lifecycle'],
        es: ['Promocion a Senior dentro del mismo equipo', 'Lidere refactorizaciones arquitectonicas en multiples proyectos',
             'Impulse la arquitectura limpia y multimodular', 'Ownership completo de EPDM e Iberext'],
      } as Record<string, string[]>,
    },
    {
      id:         'junior-solusoft',
      company:    'Solusoft',
      companyUrl: 'https://www.solusoft.es/',
      startDate:  '2025-03',
      endDate:    '2025-12' as string | null,
      role:       { en: 'Junior Full Stack & Mobile Developer', es: 'Junior Desarrollador Full Stack & Movil' } as LocalizedString,
      type:       { en: 'Hybrid', es: 'Hibrido' } as LocalizedString,
      period:     { en: 'March 2025 - December 2025', es: 'Marzo 2025 - Diciembre 2025' } as LocalizedString,
      desc:       { en: 'Development and maintenance following agile methodologies.',
                    es: 'Desarrollo y mantenimiento siguiendo metodologias agiles.' } as LocalizedString,
      projects:   ['AGEDI', 'Sisley', 'Iberext', 'EPDM'],
      achievements: {
        en: ['Full development of EPDM mobile app published on Play Store', 'Built Iberext mobile app from scratch'],
        es: ['Desarrollo completo de la app EPDM publicada en Play Store', 'Desarrollo desde cero de Iberext'],
      } as Record<string, string[]>,
    },
    {
      id:         'intern-solusoft',
      company:    'Solusoft',
      companyUrl: 'https://www.solusoft.es/',
      startDate:  '2024-10',
      endDate:    '2025-02' as string | null,
      role:       { en: 'Full Stack & Mobile Developer Intern', es: 'Practicas Desarrollador Full Stack & Movil' } as LocalizedString,
      type:       { en: 'Hybrid', es: 'Hibrido' } as LocalizedString,
      period:     { en: 'October 2024 - February 2025', es: 'Octubre 2024 - Febrero 2025' } as LocalizedString,
      desc:       { en: 'Supervised learning and development.',
                    es: 'Aprendizaje y desarrollo bajo supervision.' } as LocalizedString,
      projects:   ['AGEDI', 'Sisley', 'Iberext'],
      achievements: {
        en: ['Implemented new features across AGEDI projects', 'Maintenance of Sisley frontend and backend', 'Built Iberext mobile app from scratch'],
        es: ['Implemente nuevas funcionalidades en AGEDI', 'Mantenimiento de Sisley', 'Desarrollo desde cero de Iberext'],
      } as Record<string, string[]>,
    },
  ],

  // ── Projects ─────────────────────────────────────────────────────────────
  projects: [
    { id: 'agedi',          name: 'AGEDI System',            context: 'work',
      desc: { en: 'Enterprise management platform for AGEDI.',                                    es: 'Plataforma de gestion empresarial para AGEDI.'            } as LocalizedString,
      tags: ['C#', '.NET', 'SQL Server', 'Azure', 'Power BI', 'JavaScript'],     github: null,    demo: null },
    { id: 'axiomnode',      name: 'AxiomNode',               context: 'academic',
      desc: { en: "Master's TFM: production-grade microservices platform.",                       es: 'TFM del Master: plataforma de microservicios.'            } as LocalizedString,
      tags: ['TypeScript', 'Python', 'Kotlin', 'Kubernetes', 'Docker', 'React', 'LLM'],          github: 'https://github.com/AxiomNode', demo: null },
    { id: 'sisley',         name: 'Sisley System',           context: 'work',
      desc: { en: 'Web application for Sisley content management.',                               es: 'Aplicacion web para gestion de contenido de Sisley.'     } as LocalizedString,
      tags: ['C#', '.NET', 'SQL Server', 'Azure', 'MVC'],                         github: null,    demo: null },
    { id: 'youknow',        name: 'YouKnow',                 context: 'academic',
      desc: { en: 'Android social network app for educational games.',                            es: 'App Android de red social para juegos educativos.'       } as LocalizedString,
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM', 'MVI', 'Figma'],                   github: 'https://github.com/Sebas1705/YouKnow', demo: null },
    { id: 'iberext',        name: 'Iberext System',          context: 'work',
      desc: { en: 'Android app for fire prevention systems.',                                     es: 'App Android para sistemas de prevencion de incendios.'   } as LocalizedString,
      tags: ['Kotlin', 'Jetpack Compose', 'C#', '.NET', 'Firebase', 'Clean Architecture'],       github: null, demo: null },
    { id: 'impostor',       name: 'Omni-Impostor',   context: 'personal',
      desc: { en: 'Native Android game with multimodular architecture.',                          es: 'Juego Android nativo con arquitectura multimodular.'     } as LocalizedString,
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Multi-Module', 'Detekt', 'CI/CD'],
      github: null,
      demo:   'https://play.google.com/store/apps/details?id=es.sebas1705.impostorandroidgame' },
    { id: 'epdm',           name: 'EPDM Music Portal',       context: 'work',
      desc: { en: 'Android app for managing music content with AGEDI rights.',                    es: 'App Android para gestionar contenido musical de AGEDI.'  } as LocalizedString,
      tags: ['Kotlin', 'Jetpack Compose', 'C#', '.NET', 'Firebase', 'SQL Server'],               github: null,
      demo: 'https://play.google.com/store/apps/details?id=es.solusoft.epdm' },
    { id: 'vpsorchestrator', name: 'Local VPS Orchestrator', context: 'academic',
      desc: { en: 'REST API to orchestrate VPS resources with RBAC and 555 automated tests.',    es: 'API REST para orquestar recursos VPS con RBAC y 555 tests.'} as LocalizedString,
      tags: ['Node.js', 'Express', 'TypeScript', 'Docker', 'MongoDB', 'RBAC'],                   github: 'https://github.com/Sebas1705/VPSLocalOrchestrator', demo: null },
    { id: 'portfolio',      name: 'Personal Portfolio v1',   context: 'personal',
      desc: { en: 'Previous portfolio: Astro + Clean Architecture, 14 locales.',                 es: 'Portafolio anterior: Astro + Arquitectura Limpia, 14 idiomas.'} as LocalizedString,
      tags: ['Astro', 'TypeScript', 'Clean Architecture', 'Docker', 'Vitest', 'Playwright'],     github: 'https://github.com/Sebas1705Carreer/carreerV1', demo: null },
    { id: 'codewars',       name: 'Codewars Katas',          context: 'personal',
      desc: { en: 'Codewars katas in multiple languages.',                                        es: 'Katas de Codewars en multiples lenguajes.'               } as LocalizedString,
      tags: ['Kotlin', 'C#', 'Java', 'JavaScript', 'Python', 'Bash', 'TypeScript'],              github: 'https://github.com/Sebas1705/Codewars', demo: null },
    { id: 'apimovil',       name: 'ApiMovil',                context: 'work',
      desc: { en: 'Internal .NET API powering Solusoft mobile applications.',                     es: 'API .NET interna que da servicio a las aplicaciones móviles de Solusoft.' } as LocalizedString,
      tags: ['C#', '.NET', 'REST', 'SQL Server'],                                                github: null, demo: null },
    { id: 'wemob',          name: 'Wemob API',               context: 'work',
      desc: { en: '.NET backend API for the Wemob platform.',                                     es: 'API backend .NET para la plataforma Wemob.'              } as LocalizedString,
      tags: ['C#', '.NET', 'REST', 'SQL Server'],                                                github: null, demo: null },
    { id: 'chinchon-android', name: 'Transportes Chinchón Android', context: 'work',
      desc: { en: 'Native Android app for Transportes Chinchón.',                                 es: 'App Android nativa para Transportes Chinchón.'           } as LocalizedString,
      tags: ['Kotlin', 'Jetpack Compose', 'Android'],                                            github: null, demo: null },
    { id: 'chinchon-ios',   name: 'Transportes Chinchón iOS', context: 'work',
      desc: { en: 'Native iOS app for Transportes Chinchón.',                                     es: 'App iOS nativa para Transportes Chinchón.'               } as LocalizedString,
      tags: ['Swift', 'SwiftUI', 'iOS'],                                                         github: null, demo: null },
    { id: 'templetry',      name: 'Templetry',               context: 'personal',
      desc: { en: 'Project scaffolding for every platform: pure Go engine + CLI, native desktop app (Wails) and a CI-verified template catalog.',
              es: 'Scaffolding de proyectos multiplataforma: engine en Go + CLI, app de escritorio nativa (Wails) y catálogo de plantillas verificado por CI.' } as LocalizedString,
      tags: ['Go', 'Wails', 'React', 'TypeScript', 'Kotlin Multiplatform', 'CI/CD'],             github: 'https://github.com/Templetry', demo: null },
    { id: 'career-ecosystem', name: 'Career Ecosystem (Folio)', context: 'personal',
      desc: { en: 'Portfolio as a product: Cloudflare Workers API as single source of truth, React portfolio and a KMP editor for Android and Desktop.',
              es: 'Portfolio como producto: API en Cloudflare Workers como fuente única de verdad, portfolio en React y editor KMP para Android y Escritorio.' } as LocalizedString,
      tags: ['Cloudflare Workers', 'TypeScript', 'React', 'Kotlin Multiplatform', 'Ktor'],       github: 'https://github.com/Sebas1705Carreer', demo: null },
    { id: 'kmp-native-base', name: 'KMP Native Base',        context: 'personal',
      desc: { en: 'Kotlin Multiplatform template — Android + Desktop + iOS — modular clean architecture, convention plugins and CI.',
              es: 'Plantilla Kotlin Multiplatform — Android + Desktop + iOS — arquitectura limpia modular, convention plugins y CI.' } as LocalizedString,
      tags: ['Kotlin Multiplatform', 'Compose Multiplatform', 'Clean Architecture', 'CI/CD'],    github: 'https://github.com/Sebas1705/KMPNativeBase', demo: null },
    { id: 'profesores-a-casa', name: 'TutorsAtHome',         context: 'academic',
      desc: { en: 'Distributed web app connecting private tutors with students — Spring Boot, RabbitMQ, HAProxy, Docker.',
              es: 'App web distribuida que conecta profesores particulares con alumnos — Spring Boot, RabbitMQ, HAProxy, Docker.' } as LocalizedString,
      tags: ['Java', 'Spring Boot', 'RabbitMQ', 'HAProxy', 'Docker', 'MySQL'],                   github: 'https://github.com/Sebas1705/ProfesoresACasa', demo: null },
    { id: 'computer-vision-labs', name: 'Computer Vision Labs', context: 'academic',
      desc: { en: 'Road sign detection (MSER + HSV) and OCR pipeline (LDA/PCA + sklearn) in Python/OpenCV.',
              es: 'Detección de señales de tráfico (MSER + HSV) y pipeline OCR (LDA/PCA + sklearn) en Python/OpenCV.' } as LocalizedString,
      tags: ['Python', 'OpenCV', 'Machine Learning', 'scikit-learn'],                            github: 'https://github.com/Sebas1705/ComputerVisionLab1', demo: null },
    { id: 'enigma',         name: 'Enigma HPC',              context: 'academic',
      desc: { en: 'Parallel Enigma machine decryption in C++ — MPI master-slave vs sequential/OpenMP.',
              es: 'Descifrado paralelo de la máquina Enigma en C++ — MPI maestro-esclavo vs secuencial/OpenMP.' } as LocalizedString,
      tags: ['C++', 'MPI', 'OpenMP', 'HPC'],                                                     github: 'https://github.com/Sebas1705/Enigma', demo: null },
  ],

  // ── Education ─────────────────────────────────────────────────────────────
  education: [
    {
      id: 'big-school', school: 'BigSchool & Isabel I University', icon: 'graduation',
      degree: { en: "Master's in AI Development", es: 'Master de Desarrollo con IA'   } as LocalizedString,
      period: { en: 'October 2025 - June 2026',   es: 'Octubre 2025 - Junio 2026'    } as LocalizedString,
      detail: { en: '11-module postgraduate: Software Engineering, Architecture, AI, DevSecOps.',
                es: 'Posgrado de 11 modulos: Ingenieria de Software, Arquitectura, IA, DevSecOps.' } as LocalizedString,
    },
    {
      id: 'urjc', school: 'Universidad Rey Juan Carlos', icon: 'university',
      degree: { en: 'Computer Engineering',        es: 'Ingenieria de Computadores'   } as LocalizedString,
      period: { en: 'September 2020 - July 2025',  es: 'Septiembre 2020 - Julio 2025' } as LocalizedString,
      detail: { en: 'Information Technology degree. Mostoles, Madrid. TFG: YouKnow.',
                es: 'Grado en Informatica. Mostoles, Madrid. TFG: YouKnow.'            } as LocalizedString,
    },
    {
      id: 'baccalaureate', school: 'IES Maestro Matias Bravo', icon: 'school',
      degree: { en: 'Baccalaureate - Technology',  es: 'Bachillerato - Tecnologico'   } as LocalizedString,
      period: { en: 'Sept 2018 - June 2020',       es: 'Sept 2018 - Junio 2020'       } as LocalizedString,
      detail: { en: 'Valdemoro, Madrid, Spain.',   es: 'Valdemoro, Madrid, Espana.'   } as LocalizedString,
    },
  ],

  // ── Certifications ────────────────────────────────────────────────────────
  certifications: [
    { id: 'jetpack-compose-appcademy',    name: 'Jetpack Compose: Definitive Course',              issuer: 'AppCademy',        date: 'Dec 2025', url: 'https://www.appcademy.dev/certificates/cert_JGzFpajl' },
    { id: 'firebase-kotlin-appcademy',    name: 'Firebase for Android with Kotlin',                issuer: 'AppCademy',        date: 'Dec 2025', url: 'https://www.appcademy.dev/certificates/cert_ZKrT1jVn' },
    { id: 'ios-swiftui-uikit-udemy',      name: 'iOS App Development with SwiftUI and UIKit',                issuer: 'Udemy', date: 'In progress', url: null },
    { id: 'kmp-android-ios-udemy',        name: 'Kotlin Multiplatform: Intensive Course for Android and iOS', issuer: 'Udemy', date: 'Apr 2026', url: 'https://www.udemy.com/certificate/UC-8c52c3ca-a258-410f-b126-5c1e1a43f0e5/' },
    { id: 'android-kotlin-compose-gemini',name: 'Master Android with Kotlin and Compose',          issuer: 'Udemy',            date: 'Aug 2025', url: 'https://www.udemy.com/certificate/UC-71fadc11-b2f1-4176-a7d4-a8bd2c316471/' },
    { id: 'aspnet-rest-api',              name: 'Master RESTful APIs with ASP.NET Core',            issuer: 'Udemy',            date: 'Aug 2025', url: 'https://www.udemy.com/certificate/UC-2e061584-9523-4aca-a702-ae19fa3d740f/' },
    { id: 'gemini-google',                name: 'Master AI with Gemini',                            issuer: 'Google Skillshop', date: 'Aug 2025', url: 'https://skillshop.exceedlms.com/student/award/AABEEJWZFTCii853HLjNBGsR' },
    { id: 'mobile-dev-google',            name: 'Mobile App Development Course',                    issuer: 'Google Skillshop', date: 'Jun 2024', url: 'https://skillshop.exceedlms.com/student/award/ZSJhx2VgJ4RNYaPHz7DfZaZw' },
    { id: 'cloud-computing-google',       name: 'Cloud Computing',                                  issuer: 'Google Skillshop', date: 'Jun 2024', url: 'https://skillshop.exceedlms.com/student/award/uKLeK9o3mMLXUCxotp5xB6S8' },
    { id: 'ecommerce-google',             name: 'E-commerce',                                       issuer: 'Google Skillshop', date: 'Jul 2023', url: 'https://skillshop.exceedlms.com/student/award/jyHmnH2Di4hoWC9LgKDXWKfp' },
  ],

  // ── Skills (technical) ───────────────────────────────────────────────────
  // level: 1=Básico · 2=Intermedio · 3=Avanzado · 4=Experto
  skills: [
    // Android
    { id: 'kotlin',             name: 'Kotlin',               level: 4, category: 'Android',      icon_url: null },
    { id: 'jetpack-compose',    name: 'Jetpack Compose',      level: 4, category: 'Android',      icon_url: null },
    { id: 'android-sdk',        name: 'Android SDK',          level: 4, category: 'Android',      icon_url: null },
    { id: 'mvvm',               name: 'MVVM',                 level: 4, category: 'Architecture', icon_url: null },
    { id: 'clean-architecture', name: 'Clean Architecture',   level: 4, category: 'Architecture', icon_url: null },
    { id: 'firebase',           name: 'Firebase',             level: 3, category: 'Cloud',        icon_url: null },
    { id: 'gradle',             name: 'Gradle',               level: 3, category: 'Android',      icon_url: null },
    { id: 'detekt',             name: 'Detekt',               level: 3, category: 'Android',      icon_url: null },
    // iOS (en formación)
    { id: 'swiftui',            name: 'SwiftUI',              level: 1, category: 'iOS',          icon_url: null },
    { id: 'uikit',              name: 'UIKit',                level: 1, category: 'iOS',          icon_url: null },
    { id: 'visionkit',          name: 'VisionKit',            level: 1, category: 'iOS',          icon_url: null },
    { id: 'admob',              name: 'AdMob',                level: 1, category: 'iOS',          icon_url: null },
    { id: 'mapkit',             name: 'MapKit',               level: 1, category: 'iOS',          icon_url: null },
    { id: 'tipkit',             name: 'TipKit',               level: 1, category: 'iOS',          icon_url: null },
    { id: 'xcode',              name: 'Xcode',                level: 1, category: 'iOS',          icon_url: null },
    // Multiplataforma
    { id: 'kmp',                name: 'Kotlin Multiplatform', level: 2, category: 'Multiplatform', icon_url: null },
    // Backend & Cloud
    { id: 'csharp',             name: 'C#',                   level: 3, category: 'Backend',      icon_url: null },
    { id: 'dotnet',             name: '.NET / ASP.NET Core',  level: 3, category: 'Backend',      icon_url: null },
    { id: 'typescript',         name: 'TypeScript',           level: 3, category: 'Backend',      icon_url: null },
    { id: 'nodejs',             name: 'Node.js',              level: 3, category: 'Backend',      icon_url: null },
    { id: 'docker',             name: 'Docker',               level: 2, category: 'DevOps',       icon_url: null },
    { id: 'kubernetes',         name: 'Kubernetes',           level: 2, category: 'DevOps',       icon_url: null },
    { id: 'git',                name: 'Git',                  level: 4, category: 'Tools',        icon_url: null },
    { id: 'github-actions',     name: 'GitHub Actions',       level: 3, category: 'DevOps',       icon_url: null },
    // IA
    { id: 'llm-integration',    name: 'LLM Integration',      level: 2, category: 'AI',           icon_url: null },
    { id: 'gemini-api',         name: 'Gemini API',           level: 2, category: 'AI',           icon_url: null },
  ],

  // ── Soft Skills ───────────────────────────────────────────────────────────
  'soft-skills': [
    { id: 'adaptability',      name: { en: 'Adaptability',        es: 'Adaptabilidad'          } as LocalizedString },
    { id: 'attention-detail',  name: { en: 'Attention to Detail', es: 'Atencion al detalle'    } as LocalizedString },
    { id: 'communication',     name: { en: 'Communication',       es: 'Comunicacion'           } as LocalizedString },
    { id: 'cont-learning',     name: { en: 'Continuous Learning', es: 'Aprendizaje continuo'   } as LocalizedString },
    { id: 'creativity',        name: { en: 'Creativity',          es: 'Creatividad'            } as LocalizedString },
    { id: 'critical-thinking', name: { en: 'Critical Thinking',   es: 'Pensamiento critico'    } as LocalizedString },
    { id: 'empathy',           name: { en: 'Empathy',             es: 'Empatia'                } as LocalizedString },
    { id: 'proactivity',       name: { en: 'Proactivity',         es: 'Proactividad'           } as LocalizedString },
    { id: 'problem-solving',   name: { en: 'Problem Solving',     es: 'Resolucion de problemas'} as LocalizedString },
    { id: 'resilience',        name: { en: 'Resilience',          es: 'Resiliencia'            } as LocalizedString },
    { id: 'teamwork',          name: { en: 'Teamwork',            es: 'Trabajo en equipo'      } as LocalizedString },
    { id: 'time-management',   name: { en: 'Time Management',     es: 'Gestion del tiempo'     } as LocalizedString },
  ],
}
