import { execSync } from 'child_process'
import { writeFileSync, unlinkSync } from 'fs'
import { tmpdir } from 'os'
import { join } from 'path'

const SEED = {
  personal: {
    name: "Sebastián Entrerrios García",
    greeting_en: "Hi, I'm", greeting_es: "Hola, soy",
    role_en: "Full Stack & Mobile Developer", role_es: "Desarrollador Full Stack & Móvil",
    tagline_en: "Full stack and mobile engineer: design fast frontends, solid APIs and production-ready mobile experiences.",
    tagline_es: "Ingeniero full stack y móvil: diseño frontends rápidos, APIs sólidas y experiencias móviles listas para producción.",
    bio_en: "Based in Madrid, Spain. I build digital products with care — from native mobile apps to full-stack web systems.",
    bio_es: "Con base en Madrid, España. Construyo productos digitales con cuidado — desde apps móviles nativas hasta sistemas web full-stack.",
    email: "sebssgarcia502580@gmail.com",
    location_en: "Madrid, Spain", location_es: "Madrid, España",
    cv_url: "/data/cv.pdf",
    github: "https://github.com/Sebas1705",
    linkedin: "https://www.linkedin.com/in/sebastian-ramiro-entrerrios-garcia-b1a713217/",
    codewars: "https://www.codewars.com/users/Sebas1705"
  },
  jobs: [
    { id:"senior-solusoft", role:{en:"Senior Full Stack Developer",es:"Senior Desarrollador Full Stack"}, company:"Solusoft", companyUrl:"https://www.solusoft.es/", period:{en:"January 2026 - Present",es:"Enero 2026 - Presente"}, type:{en:"Hybrid",es:"Hibrido"}, desc:{en:"Leading development and architectural decisions.",es:"Liderazgo tecnico y de decisiones arquitectonicas."}, projects:["AGEDI","Sisley","Iberext","EPDM"], achievements:["Promoted to Senior within the same team","Led architectural refactors","Clean multimodular architecture","Full ownership of EPDM and Iberext"] },
    { id:"junior-solusoft", role:{en:"Junior Full Stack Developer",es:"Junior Desarrollador Full Stack"}, company:"Solusoft", companyUrl:"https://www.solusoft.es/", period:{en:"March 2025 - December 2025",es:"Marzo 2025 - Diciembre 2025"}, type:{en:"Hybrid",es:"Hibrido"}, desc:{en:"Development and maintenance following agile methodologies.",es:"Desarrollo y mantenimiento siguiendo metodologias agiles."}, projects:["AGEDI","Sisley","Iberext","EPDM"], achievements:["Full development of EPDM mobile app published on Play Store","Built Iberext from scratch"] },
    { id:"intern-solusoft", role:{en:"Full Stack Developer Intern",es:"Practicas Desarrollador Full Stack"}, company:"Solusoft", companyUrl:"https://www.solusoft.es/", period:{en:"October 2024 - February 2025",es:"Octubre 2024 - Febrero 2025"}, type:{en:"Hybrid",es:"Hibrido"}, desc:{en:"Supervised learning and development.",es:"Aprendizaje y desarrollo bajo supervision."}, projects:["AGEDI","Sisley","Iberext"], achievements:["New features in AGEDI","Sisley maintenance","Iberext from scratch"] }
  ],
  projects: [
    { id:"agedi", name:"AGEDI System", context:"work", desc:{en:"Enterprise management platform for AGEDI.",es:"Plataforma de gestion empresarial para AGEDI."}, tags:["C#",".NET","SQL Server","Azure","Power BI","JavaScript"], github:null, demo:null },
    { id:"axiomnode", name:"AxiomNode", context:"academic", desc:{en:"Master TFM: production-grade microservices platform.",es:"TFM del Master: plataforma de microservicios."}, tags:["TypeScript","Python","Kotlin","Kubernetes","Docker","React","LLM"], github:"https://github.com/AxiomNode", demo:null },
    { id:"sisley", name:"Sisley System", context:"work", desc:{en:"Web application for Sisley content management.",es:"Aplicacion web para gestion de contenido de Sisley."}, tags:["C#",".NET","SQL Server","Azure","MVC"], github:null, demo:null },
    { id:"youknow", name:"YouKnow", context:"academic", desc:{en:"Android social network app for educational games.",es:"App Android de red social para juegos educativos."}, tags:["Kotlin","Jetpack Compose","Firebase","MVVM","MVI","Figma"], github:"https://github.com/Sebas1705/YouKnow", demo:null },
    { id:"iberext", name:"Iberext System", context:"work", desc:{en:"Android app for fire prevention systems.",es:"App Android para sistemas de prevencion de incendios."}, tags:["Kotlin","Jetpack Compose","C#",".NET","Firebase","Clean Architecture"], github:null, demo:null },
    { id:"impostor", name:"Impostor Android Game", context:"personal", desc:{en:"Native Android game with multimodular architecture.",es:"Juego Android nativo con arquitectura multimodular."}, tags:["Kotlin","Jetpack Compose","Firebase","Multi-Module","Detekt","CI/CD"], github:"https://github.com/Sebas1705/ImpostorAndroidGame", demo:"https://play.google.com/store/apps/details?id=es.sebas1705.impostorandroidgame" },
    { id:"epdm", name:"EPDM Music Portal", context:"work", desc:{en:"Android app for managing music content.",es:"App Android para gestionar contenido musical."}, tags:["Kotlin","Jetpack Compose","C#",".NET","Firebase","SQL Server"], github:null, demo:"https://play.google.com/store/apps/details?id=es.solusoft.epdm" },
    { id:"vpsorchestrator", name:"Local VPS Orchestrator", context:"academic", desc:{en:"REST API to orchestrate VPS resources.",es:"API REST para orquestar recursos VPS."}, tags:["Node.js","Express","TypeScript","Docker","MongoDB","RBAC"], github:"https://github.com/Sebas1705/VPSLocalOrchestrator", demo:null },
    { id:"portfolio", name:"Personal Portfolio v1", context:"personal", desc:{en:"Previous portfolio: Astro + Clean Architecture.",es:"Portafolio anterior: Astro + Arquitectura Limpia."}, tags:["Astro","TypeScript","Clean Architecture","Docker","Vitest","Playwright"], github:"https://github.com/Sebas1705/my-portfolio", demo:null },
    { id:"codewars", name:"Codewars Katas", context:"personal", desc:{en:"Codewars katas in multiple languages.",es:"Katas de Codewars en multiples lenguajes."}, tags:["Kotlin","C#","Java","JavaScript","Python","Bash","TypeScript"], github:"https://github.com/Sebas1705/Codewars", demo:null }
  ],
  education: [
    { id:"big-school", degree:{en:"Master in AI Development",es:"Master de Desarrollo con IA"}, school:"BigSchool and Isabel I University", period:{en:"October 2025 - June 2026",es:"Octubre 2025 - Junio 2026"}, detail:{en:"11-module postgraduate: Software Engineering, Architecture, AI, DevSecOps.",es:"Posgrado de 11 modulos: Ingenieria de Software, Arquitectura, IA, DevSecOps."}, icon:"graduation" },
    { id:"urjc", degree:{en:"Computer Engineering",es:"Ingenieria de Computadores"}, school:"Universidad Rey Juan Carlos", period:{en:"September 2020 - July 2025",es:"Septiembre 2020 - Julio 2025"}, detail:{en:"Information Technology degree. Mostoles, Madrid. TFG: YouKnow.",es:"Grado en Informatica. Mostoles, Madrid. TFG: YouKnow."}, icon:"university" },
    { id:"baccalaureate", degree:{en:"Baccalaureate Technology",es:"Bachillerato Tecnologico"}, school:"IES Maestro Matias Bravo", period:{en:"Sept 2018 - June 2020",es:"Sept 2018 - Junio 2020"}, detail:{en:"Valdemoro, Madrid, Spain.",es:"Valdemoro, Madrid, Espana."}, icon:"school" }
  ],
  certifications: [
    { id:"jetpack-compose-appcademy", name:"Jetpack Compose: Definitive Course", issuer:"AppCademy", date:"Dec 2025", url:"https://www.appcademy.dev/certificates/cert_JGzFpajl" },
    { id:"firebase-kotlin-appcademy", name:"Firebase for Android with Kotlin", issuer:"AppCademy", date:"Dec 2025", url:"https://www.appcademy.dev/certificates/cert_ZKrT1jVn" },
    { id:"android-kotlin-compose-gemini", name:"Master Android with Kotlin Compose", issuer:"Udemy", date:"Aug 2025", url:"https://www.udemy.com/certificate/UC-71fadc11-b2f1-4176-a7d4-a8bd2c316471/" },
    { id:"aspnet-rest-api", name:"Master RESTful APIs with ASP.NET Core", issuer:"Udemy", date:"Aug 2025", url:"https://www.udemy.com/certificate/UC-2e061584-9523-4aca-a702-ae19fa3d740f/" },
    { id:"gemini-google", name:"Master AI with Gemini", issuer:"Google Skillshop", date:"Aug 2025", url:"https://skillshop.exceedlms.com/student/award/AABEEJWZFTCii853HLjNBGsR" },
    { id:"mobile-dev-google", name:"Mobile App Development Course", issuer:"Google Skillshop", date:"Jun 2024", url:"https://skillshop.exceedlms.com/student/award/ZSJhx2VgJ4RNYaPHz7DfZaZw" },
    { id:"cloud-computing-google", name:"Cloud Computing", issuer:"Google Skillshop", date:"Jun 2024", url:"https://skillshop.exceedlms.com/student/award/uKLeK9o3mMLXUCxotp5xB6S8" },
    { id:"ecommerce-google", name:"E-commerce", issuer:"Google Skillshop", date:"Jul 2023", url:"https://skillshop.exceedlms.com/student/award/jyHmnH2Di4hoWC9LgKDXWKfp" }
  ],
  "soft-skills": [
    {id:"adaptability",name_en:"Adaptability",name_es:"Adaptabilidad"},
    {id:"attention-to-detail",name_en:"Attention to Detail",name_es:"Atencion al detalle"},
    {id:"communication",name_en:"Communication",name_es:"Comunicacion"},
    {id:"continuous-learning",name_en:"Continuous Learning",name_es:"Aprendizaje continuo"},
    {id:"creativity",name_en:"Creativity",name_es:"Creatividad"},
    {id:"critical-thinking",name_en:"Critical Thinking",name_es:"Pensamiento critico"},
    {id:"empathy",name_en:"Empathy",name_es:"Empatia"},
    {id:"proactivity",name_en:"Proactivity",name_es:"Proactividad"},
    {id:"problem-solving",name_en:"Problem Solving",name_es:"Resolucion de problemas"},
    {id:"resilience",name_en:"Resilience",name_es:"Resiliencia"},
    {id:"teamwork",name_en:"Teamwork",name_es:"Trabajo en equipo"},
    {id:"time-management",name_en:"Time Management",name_es:"Gestion del tiempo"}
  ]
}

const KV_ID = '729e49d91e014213abeab4004c75c40e'

for (const [key, value] of Object.entries(SEED)) {
  const json = JSON.stringify(value)
  const tmpFile = join(tmpdir(), `kv-seed-${key}.json`)
  writeFileSync(tmpFile, json, 'utf8')
  console.log(`Seeding: ${key} (${json.length} bytes) via temp file`)
  const cmd = `npx wrangler kv key put --namespace-id=${KV_ID} --remote --path="${tmpFile}" "${key}"`
  try {
    const out = execSync(cmd, { cwd: 'C:\\Users\\sebss\\Documents\\career-api-worker', stdio: ['pipe', 'pipe', 'pipe'] })
    console.log(`  OK ${key}`)
  } catch (e) {
    console.error(`  FAIL ${key}:`, e.stderr?.toString() || e.message)
  } finally {
    try { unlinkSync(tmpFile) } catch {}
  }
}
console.log('Done!')
