export default {
  // UI labels
  resume: 'CURRÍCULUM',
  downloadResume: 'Descargar Currículum',
  downloadResumeAria: 'Descargar currículum (PDF, se abre en una pestaña nueva)',
  switchLanguage: 'Switch to English',
  switchToLight: 'Cambiar a modo claro',
  switchToDark: 'Cambiar a modo oscuro',
  headline: 'Ingeniero de Software',
  linkedinProfile: 'Perfil de LinkedIn',
  profile: 'Perfil',
  profileText: 'Ingeniero de Software con más de 5 años de experiencia diseñando y entregando soluciones backend y full-stack escalables. Actualmente desarrollo sistemas impulsados por IA usando Python, Next.js y Anthropic Claude, apoyado en una sólida base en Java Spring Boot, bases de datos SQL y CI/CD en la nube. Impulsado por la curiosidad y la pasión por adoptar tecnologías emergentes para construir software moderno y mantenible.',
  technicalSkills: 'Habilidades Técnicas',
  programmingLanguages: 'Lenguajes de Programación',
  frameworksLibraries: 'Frameworks/Librerías',
  databases: 'Bases de Datos',
  toolsPlatforms: 'IA/Herramientas/Plataformas',
  softSkills: 'Habilidades Blandas',
  languages: 'Idiomas',
  workExperience: 'Experiencia Laboral',
  current: 'Actual',
  education: 'Educación',
  certificates: 'Certificados',
  personalProjects: 'Proyectos Personales',
  techStack: 'Stack Tecnológico',
  findMeOn: 'Encuéntrame en',
  issued: 'Emitido',
  credentialId: 'ID de Credencial',
  verifyCredential: 'verificar credencial, se abre en una pestaña nueva',

  // Content
  softSkillsList: ['Comunicación', 'Resolución de problemas', 'Autoaprendizaje', 'Liderazgo', 'Trabajo en equipo'],

  spokenLanguages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Intermedio' }
  ],

  // Agrupado por empresa, lo más reciente primero. Usar `current: true` en un puesto vigente.
  experience: [
    {
      company: 'Intenova AI',
      location: 'Remoto',
      roles: [
        {
          title: 'Arquitecto de Software de IA',
          start: 'Mar 2026',
          current: true,
          bullets: [
            'Diseño la arquitectura y construyo soluciones de software impulsadas por IA usando Python y Anthropic Claude.',
            'Desarrollo aplicaciones web full-stack con Next.js, entregando front ends en React renderizados en el servidor y respaldados por servicios en Python.',
            'Diseño arquitecturas de sistemas escalables que integran capacidades de LLM con servicios backend y capas de datos.'
          ]
        }
      ]
    },
    {
      company: 'NearLinx',
      location: 'Remoto',
      roles: [
        {
          title: 'Líder en Desarrollo de Software',
          start: 'Mar 2023',
          end: 'Mar 2026',
          bullets: [
            'Lideré proyectos backend usando Java Spring Boot, integrando con bases de datos relacionales (MSSQL, MySQL) e implementando pruebas unitarias/de integración con JUnit para entregar APIs robustas y escalables.',
            'Gestioné integraciones de API entre plataformas internas/externas, permitiendo comunicación fluida entre sistemas.',
            'Lideré la migración completa de base de datos impactando 5+ servicios, mejorando el rendimiento de consultas y asegurando escalabilidad a largo plazo.',
            'Trabajé como desarrollador full-stack usando Python (Flask/FastAPI) y React, apoyado por Claude AI para mejorar la productividad del desarrollo y la calidad del código.'
          ]
        },
        {
          title: 'Desarrollador de Software',
          start: 'Sep 2022',
          end: 'Mar 2023',
          bullets: [
            'Desarrollé soluciones en Java Spring Boot respaldadas por Microsoft SQL Server.',
            'Colaboré con el equipo de front-end para entregar características intuitivas y fáciles de usar que mejoren la experiencia del usuario.'
          ]
        }
      ]
    },
    {
      company: 'Independiente (Freelance)',
      location: '',
      roles: [
        {
          title: 'Desarrollador de Software',
          start: 'Nov 2021',
          end: 'Mar 2023',
          bullets: [
            'Diseñé y entregué soluciones en Java Spring Boot adaptadas a los requerimientos de cada cliente.'
          ]
        }
      ]
    }
  ],

  educationList: [
    { degree: 'Licenciatura en Informática Empresarial', school: 'Universidad de Costa Rica', dates: '2018 – 2021' }
  ],

  certificateList: [
    {
      name: 'Full Stack Web Developer Nanodegree',
      issuer: 'Udacity',
      date: '2021'
    },
    {
      name: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'SCRUMstudy (VMEdu)',
      date: 'May 2021',
      credentialId: '846528',
      url: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=846528'
    },
    {
      name: 'Productividad Personal',
      issuer: 'Google Actívate',
      date: 'Dic 2020',
      credentialId: '882 T3J MV4'
    },
    {
      name: 'Desarrollo de Aplicaciones Móviles',
      issuer: 'Google Actívate',
      date: 'Jul 2020',
      credentialId: '2RR 2YX VKB'
    },
    {
      name: 'IT Essentials: PC Hardware and Software',
      issuer: 'Cisco Networking Academy',
      credentialId: 'EMCI-158-2015'
    }
  ],

  projects: [
    {
      name: 'Pipeline de Videos VR 360°',
      year: '2026',
      stack: ['Python', 'Blender (Cycles)', 'ffmpeg', 'Three.js', 'Claude Code'],
      bullets: [
        'Construí un pipeline 100% en código que genera videos VR 360° de relajación para YouTube, sin filmación ni modelado 3D manual.',
        'Creé más de 100 entornos generados proceduralmente con scripts de Blender en Python sin interfaz gráfica, todos con un estándar común de velocidad de cámara, ritmo y configuración de render.',
        'Automaticé el flujo completo: render equirrectangular, codificación con ffmpeg, inyección de metadatos esféricos y Shorts verticales.',
        'Reduje unas 6 veces el tiempo de render de videos largos con una estructura de intro, loop continuo con fundido cruzado y cierre, de modo que un video de 30 minutos cuesta lo mismo de renderizar que uno de 5.',
        'Ajusté la salida a los límites de entrega 360° medidos en YouTube y verifiqué las escenas en un reproductor web con Three.js y en un visor VR.'
      ]
    },
    {
      name: 'Aplicación de Gestión de Bodas',
      year: '2025',
      stack: ['Java Spring Boot', 'React', 'MongoDB', 'DigitalOcean', 'GitFlow', 'CI/CD'],
      bullets: [
        'Desarrollé una aplicación web full-stack como invitación digital para mi propia boda.',
        'Habilité funcionalidad de RSVP (aceptar/rechazar), con datos almacenados en MongoDB a través de una API REST de Spring Boot.',
        'Implementé características de gestión de invitados en tiempo real para monitorear respuestas.',
        'Desplegué en DigitalOcean con dominio personalizado y pipeline CI/CD para redespliegue automático via GitFlow.',
        'Entregué una solución estable, mobile-first que simplificó el seguimiento de invitados y mejoró la UX.'
      ]
    },
    {
      name: 'Generador de Perezosos Locos',
      year: '2021',
      stack: ['Python', 'Algoritmo Personalizado', 'OpenSea'],
      bullets: [
        'Creé una colección de NFT durante el auge de los NFT, subiendo imágenes únicas al marketplace OpenSea.',
        'Desarrollé un algoritmo generativo personalizado con características aleatorias para crear diversos personajes de perezosos.',
        'Implementé un sistema de niveles (Simple, Raro, Limitado, Seleccionado, Épico y Legendario) basado en combinaciones de características.',
        'Desplegué exitosamente la colección en la plataforma OpenSea.'
      ]
    }
  ]
};
