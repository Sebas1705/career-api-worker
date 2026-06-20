export const SEED = {
  personal: {
    name: "Sebastián Entrerrios García",
    greeting_en: "Hi, I'm",
    greeting_es: "Hola, soy",
    role_en: "Full Stack & Mobile Developer",
    role_es: "Desarrollador Full Stack & Móvil",
    tagline_en: "Full stack and mobile engineer: design fast frontends, solid APIs and production-ready mobile experiences.",
    tagline_es: "Ingeniero full stack y móvil: diseño frontends rápidos, APIs sólidas y experiencias móviles listas para producción.",
    bio_en: "Based in Madrid, Spain. I build digital products with care — from native mobile apps to full-stack web systems.",
    bio_es: "Con base en Madrid, España. Construyo productos digitales con cuidado — desde apps móviles nativas hasta sistemas web full-stack.",
    email: "sebssgarcia502580@gmail.com",
    location_en: "Madrid, Spain",
    location_es: "Madrid, España",
    cv_url: "/data/cv.pdf",
    github: "https://github.com/Sebas1705",
    linkedin: "https://www.linkedin.com/in/sebastián-ramiro-entrerrios-garcía-b1a713217/",
    codewars: "https://www.codewars.com/users/Sebas1705"
  },

  jobs: [
    {
      id: "senior-solusoft",
      role: { en: "Senior Full Stack & Mobile Developer", es: "Senior Desarrollador Full Stack & Móvil" },
      company: "Solusoft",
      companyUrl: "https://www.solusoft.es/",
      period: { en: "January 2026 – Present", es: "Enero 2026 – Presente" },
      type: { en: "Hybrid", es: "Híbrido" },
      desc: { en: "Leading development and architectural decisions on full stack and mobile applications.", es: "Liderazgo técnico y de decisiones arquitectónicas en aplicaciones full stack y móviles." },
      projects: [
        { en: "AGEDI System", es: "Sistema AGEDI" },
        { en: "Sisley System", es: "Sistema Sisley" },
        { en: "Iberext App", es: "App Iberext" },
        { en: "EPDM Music Portal", es: "Portal Musical EPDM" }
      ],
      achievements: [
        { en: "Promoted to Senior within the same team after demonstrated technical growth and ownership", es: "Promoción a Senior dentro del mismo equipo tras demostrar crecimiento técnico y responsabilidad" },
        { en: "Led architectural refactors across multiple projects", es: "Lideré refactorizaciones arquitectónicas en varios proyectos" },
        { en: "Drove adoption of clean multimodular architecture patterns across the mobile codebase", es: "Impulsé la adopción de arquitectura limpia y multimodular en el código móvil" },
        { en: "Continued full ownership of the EPDM and Iberext mobile application lifecycle", es: "Ownership completo del ciclo de vida de las aplicaciones móviles EPDM e Iberext" }
      ]
    },
    {
      id: "junior-solusoft",
      role: { en: "Junior Full Stack & Mobile Developer", es: "Junior Desarrollador Full Stack & Móvil" },
      company: "Solusoft",
      companyUrl: "https://www.solusoft.es/",
      period: { en: "March 2025 – December 2025", es: "Marzo 2025 – Diciembre 2025" },
      type: { en: "Hybrid", es: "Híbrido" },
      desc: { en: "Development and maintenance of full stack and mobile applications following agile methodologies.", es: "Desarrollo y mantenimiento de aplicaciones full stack y móviles siguiendo metodologías ágiles." },
      projects: [
        { en: "AGEDI System", es: "Sistema AGEDI" },
        { en: "Sisley System", es: "Sistema Sisley" },
        { en: "Iberext App", es: "App Iberext" },
        { en: "EPDM Music Portal", es: "Portal Musical EPDM" }
      ],
      achievements: [
        { en: "Full development of EPDM mobile app – Music Portal, published on Google Play Store", es: "Desarrollo completo de la app móvil EPDM – Portal de la Música, publicada en Google Play Store" },
        { en: "Built Iberext mobile app from scratch, migrating a legacy Windows tablet application", es: "Desarrollo desde cero de la app Iberext, migrando una aplicación legacy Windows" }
      ]
    },
    {
      id: "intern-solusoft",
      role: { en: "Full Stack & Mobile Developer Intern", es: "Prácticas Desarrollador Full Stack & Móvil" },
      company: "Solusoft",
      companyUrl: "https://www.solusoft.es/",
      period: { en: "October 2024 – February 2025", es: "Octubre 2024 – Febrero 2025" },
      type: { en: "Hybrid", es: "Híbrido" },
      desc: { en: "Supervised learning and development in full stack and mobile projects.", es: "Aprendizaje y desarrollo bajo supervisión en proyectos full stack y móviles." },
      projects: [
        { en: "AGEDI System", es: "Sistema AGEDI" },
        { en: "Sisley System", es: "Sistema Sisley" },
        { en: "Iberext App", es: "App Iberext" }
      ],
      achievements: [
        { en: "Implemented new features across multiple AGEDI projects", es: "Implementé nuevas funcionalidades en varios proyectos AGEDI" },
        { en: "Maintenance of Sisley frontend and backend", es: "Mantenimiento del frontend y backend de Sisley" },
        { en: "Built Iberext mobile app from scratch", es: "Desarrollo desde cero de Iberext" }
      ]
    }
  ],

  projects: [
    { id: "agedi", name: "AGEDI System", context: "work", desc: { en: "Enterprise management platform for AGEDI.", es: "Plataforma de gestión empresarial para AGEDI." }, long_desc: { en: "Full-stack enterprise management platform built with C# / .NET and SQL Server.", es: "Plataforma empresarial full-stack construida con C# / .NET y SQL Server." }, tags: ["C#", ".NET", "SQL Server", "Azure", "Power BI", "JavaScript"], github: null, demo: null },
    { id: "axiomnode", name: "AxiomNode", context: "academic", desc: { en: "Master's TFM: production-grade multi-repo microservices platform.", es: "TFM del Máster: plataforma de microservicios multi-repo." }, long_desc: { en: "16-repository platform built as the AI Development Masters final project.", es: "Plataforma de 16 repositorios construida como proyecto final del Master en IA." }, tags: ["TypeScript", "Python", "Kotlin", "Kubernetes", "Docker", "React", "LLM"], github: "https://github.com/AxiomNode", demo: null },
    { id: "sisley", name: "Sisley System", context: "work", desc: { en: "Web application and backend for Sisley content management.", es: "Aplicación web y backend para la gestión de contenido de Sisley." }, long_desc: { en: "Content management system built with C# / .NET following the MVC pattern.", es: "Sistema de gestión de contenido construido con C# / .NET siguiendo el patrón MVC." }, tags: ["C#", ".NET", "SQL Server", "Azure", "MVC"], github: null, demo: null },
    { id: "youknow", name: "YouKnow", context: "academic", desc: { en: "Android social network app for educational games and chat.", es: "App Android de red social para juegos educativos y chat." }, long_desc: { en: "Bachelor's final project. Full-featured Android app integrating Firebase.", es: "Proyecto final de grado. App Android completa con Firebase." }, tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "MVI", "Figma"], github: "https://github.com/Sebas1705/YouKnow", demo: null },
    { id: "iberext", name: "Iberext System", context: "work", desc: { en: "Android mobile app for fire prevention systems management.", es: "App móvil Android para gestión de sistemas de prevención de incendios." }, long_desc: { en: "Built from scratch in Kotlin with Jetpack Compose, migrating a Windows tablet application.", es: "Desarrollada desde cero en Kotlin con Jetpack Compose." }, tags: ["Kotlin", "Jetpack Compose", "C#", ".NET", "Firebase", "Clean Architecture"], github: null, demo: null },
    { id: "impostor", name: "Impostor Android Game", context: "personal", desc: { en: "Native Android game with multimodular architecture.", es: "Juego Android nativo con arquitectura multimodular." }, long_desc: { en: "Personal Android project built as a production-grade template and game.", es: "Proyecto Android personal como plantilla de nivel producción." }, tags: ["Kotlin", "Jetpack Compose", "Firebase", "Multi-Module", "Detekt", "CI/CD"], github: "https://github.com/Sebas1705/ImpostorAndroidGame", demo: "https://play.google.com/store/apps/details?id=es.sebas1705.impostorandroidgame" },
    { id: "epdm", name: "EPDM – Music Portal", context: "work", desc: { en: "Android mobile app for managing music content.", es: "App móvil Android para gestionar contenido musical." }, long_desc: { en: "Native Android app built with Kotlin and Jetpack Compose for the AGEDI Music Portal.", es: "App nativa Android para el Portal de la Música de AGEDI." }, tags: ["Kotlin", "Jetpack Compose", "C#", ".NET", "Firebase", "SQL Server"], github: null, demo: "https://play.google.com/store/apps/details?id=es.solusoft.epdm" },
    { id: "vpsorchestrator", name: "Local VPS Orchestrator", context: "academic", desc: { en: "Production-ready REST API to orchestrate VPS resources.", es: "API REST lista para producción para orquestar recursos VPS." }, long_desc: { en: "Node.js + Express + TypeScript REST API with RBAC, AES encryption and 555 automated tests.", es: "API REST en Node.js + Express + TypeScript con RBAC, cifrado AES y 555 tests." }, tags: ["Node.js", "Express", "TypeScript", "Docker", "MongoDB", "RBAC"], github: "https://github.com/Sebas1705/VPSLocalOrchestrator", demo: null },
    { id: "portfolio", name: "Personal Portfolio v1", context: "personal", desc: { en: "Previous portfolio: Astro + Clean Architecture, VPS-hosted.", es: "Portafolio anterior: Astro + Arquitectura Limpia." }, long_desc: { en: "Multi-language Astro website (14 locales) with Clean Architecture.", es: "Web Astro multiidioma (14 idiomas) con Arquitectura Limpia." }, tags: ["Astro", "TypeScript", "Clean Architecture", "Docker", "Vitest", "Playwright"], github: "https://github.com/Sebas1705/my-portfolio", demo: null },
    { id: "codewars", name: "Codewars Katas", context: "personal", desc: { en: "Repository with solutions to Codewars katas in multiple languages.", es: "Repositorio con soluciones a katas de Codewars en múltiples lenguajes." }, long_desc: { en: "Ongoing personal repo focused on sharpening algorithmic thinking.", es: "Repositorio personal centrado en agudizar el pensamiento algorítmico." }, tags: ["Kotlin", "C#", "Java", "JavaScript", "Python", "Bash", "TypeScript"], github: "https://github.com/Sebas1705/Codewars", demo: null }
  ],

  education: [
    { id: "big-school", degree: { en: "Master's in AI Development", es: "Máster de Desarrollo con IA" }, school: "BigSchool & Isabel I University", period: { en: "October 2025 – June 2026", es: "Octubre 2025 – Junio 2026" }, detail: { en: "11-module postgraduate program covering Software Engineering, Architecture, AI Fundamentals, DevSecOps.", es: "Posgrado de 11 módulos: Ingeniería de Software, Arquitectura, Fundamentos de IA, DevSecOps." }, icon: "🎓" },
    { id: "urjc", degree: { en: "Computer Engineering", es: "Ingeniería de Computadores" }, school: "Universidad Rey Juan Carlos", period: { en: "September 2020 – July 2025", es: "Septiembre 2020 – Julio 2025" }, detail: { en: "Information Technology degree. Mostoles, Madrid, Spain. Final project: YouKnow.", es: "Grado en Informática. Móstoles, Madrid. TFG: YouKnow." }, icon: "🏛️" },
    { id: "baccalaureate", degree: { en: "Baccalaureate - Technology", es: "Bachillerato - Tecnológico" }, school: "IES Maestro Matias Bravo", period: { en: "Sept 2018 - June 2020", es: "Sept 2018 - Junio 2020" }, detail: { en: "Valdemoro, Madrid, Spain.", es: "Valdemoro, Madrid, España." }, icon: "📚" }
  ],

  certifications: [
    { id: "jetpack-compose-appcademy", name: { en: "Jetpack Compose: Definitive Course from Scratch", es: "Jetpack Compose: Curso Definitivo desde 0" }, issuer: "AppCademy", date: "Dec 2025", desc: { en: "Building native Android interfaces with Jetpack Compose.", es: "Creación de interfaces nativas con Jetpack Compose." }, url: "https://www.appcademy.dev/certificates/cert_JGzFpajl" },
    { id: "firebase-kotlin-appcademy", name: { en: "Firebase for Android with Kotlin: Definitive Course", es: "Firebase para Android con Kotlin: Curso Definitivo" }, issuer: "AppCademy", date: "Dec 2025", desc: { en: "Firebase integration with Android/Kotlin.", es: "Integración de Firebase con Android/Kotlin." }, url: "https://www.appcademy.dev/certificates/cert_ZKrT1jVn" },
    { id: "android-kotlin-compose-gemini", name: { en: "Master Android with Kotlin, Compose & Gemini AI", es: "Domina Android con Kotlin, Compose y Gemini AI" }, issuer: "Udemy", date: "Aug 2025", desc: { en: "Advanced Android development with Kotlin and Jetpack Compose.", es: "Android avanzado con Kotlin y Jetpack Compose." }, url: "https://www.udemy.com/certificate/UC-71fadc11-b2f1-4176-a7d4-a8bd2c316471/" },
    { id: "aspnet-rest-api", name: { en: "Master RESTful APIs with ASP.NET Core Web API (.NET 9)", es: "Master API RESTful con ASP.NET Core Web API (.NET 9)" }, issuer: "Udemy", date: "Aug 2025", desc: { en: "Building REST APIs with ASP.NET Core 9.", es: "Construcción de APIs REST con ASP.NET Core 9." }, url: "https://www.udemy.com/certificate/UC-2e061584-9523-4aca-a702-ae19fa3d740f/" },
    { id: "gemini-google", name: { en: "Master AI with Gemini", es: "Domina la IA con Gemini" }, issuer: "Google Skillshop", date: "Aug 2025", desc: { en: "Foundations and hands-on practice with Gemini.", es: "Fundamentos y práctica con Gemini." }, url: "https://skillshop.exceedlms.com/student/award/AABEEJWZFTCii853HLjNBGsR" },
    { id: "mobile-dev-google", name: { en: "Mobile App Development Course", es: "Curso de Desarrollo de Apps Móviles" }, issuer: "Google Skillshop", date: "Jun 2024", desc: { en: "Fundamentals of mobile app development.", es: "Bases del desarrollo de aplicaciones móviles." }, url: "https://skillshop.exceedlms.com/student/award/ZSJhx2VgJ4RNYaPHz7DfZaZw" },
    { id: "cloud-computing-google", name: { en: "Cloud Computing", es: "Cloud Computing" }, issuer: "Google Skillshop", date: "Jun 2024", desc: { en: "Core cloud concepts and deployment models.", es: "Conceptos de nube y modelos de despliegue." }, url: "https://skillshop.exceedlms.com/student/award/uKLeK9o3mMLXUCxotp5xB6S8" },
    { id: "ecommerce-google", name: { en: "E-commerce", es: "Comercio Electrónico" }, issuer: "Google Skillshop", date: "Jul 2023", desc: { en: "E-commerce strategies and digital presence.", es: "Estrategias de e-commerce y presencia digital." }, url: "https://skillshop.exceedlms.com/student/award/jyHmnH2Di4hoWC9LgKDXWKfp" }
  ],

  "soft-skills": [
    { id: "adaptability", icon: "🔄", name_en: "Adaptability", name_es: "Adaptabilidad" },
    { id: "attention-to-detail", icon: "🔍", name_en: "Attention to Detail", name_es: "Atención al detalle" },
    { id: "communication", icon: "💬", name_en: "Communication", name_es: "Comunicación" },
    { id: "continuous-learning", icon: "📚", name_en: "Continuous Learning", name_es: "Aprendizaje continuo" },
    { id: "creativity", icon: "💡", name_en: "Creativity", name_es: "Creatividad" },
    { id: "critical-thinking", icon: "🤔", name_en: "Critical Thinking", name_es: "Pensamiento crítico" },
    { id: "empathy", icon: "❤️", name_en: "Empathy", name_es: "Empatía" },
    { id: "proactivity", icon: "🚀", name_en: "Proactivity", name_es: "Proactividad" },
    { id: "problem-solving", icon: "🧩", name_en: "Problem Solving", name_es: "Resolución de problemas" },
    { id: "resilience", icon: "💪", name_en: "Resilience", name_es: "Resiliencia" },
    { id: "teamwork", icon: "🤝", name_en: "Teamwork", name_es: "Trabajo en equipo" },
    { id: "time-management", icon: "⏰", name_en: "Time Management", name_es: "Gestión del tiempo" }
  ]
}
