export default {
  // UI labels
  resume: 'RESUME',
  downloadResume: 'Download Resume',
  downloadResumeAria: 'Download resume (PDF, opens in a new tab)',
  switchLanguage: 'Cambiar a Español',
  switchToLight: 'Switch to light mode',
  switchToDark: 'Switch to dark mode',
  headline: 'Software Engineer',
  linkedinProfile: 'LinkedIn Profile',
  profile: 'Profile',
  profileText: 'Software Engineer with 5+ years of experience designing and delivering scalable backend and full-stack solutions. Currently developing AI-powered systems using Python, Next.js, and Anthropic Claude, building on a strong foundation in Java Spring Boot, SQL databases, and cloud-based CI/CD. Driven by curiosity and a passion for adopting emerging technologies to build modern, maintainable software.',
  technicalSkills: 'Technical Skills',
  programmingLanguages: 'Programming Languages',
  frameworksLibraries: 'Frameworks/Libraries',
  databases: 'Databases',
  toolsPlatforms: 'AI/Tools/Platforms',
  softSkills: 'Soft Skills',
  languages: 'Languages',
  workExperience: 'Work Experience',
  current: 'Current',
  education: 'Education',
  certificates: 'Certificates',
  personalProjects: 'Personal Projects',
  techStack: 'Tech Stack',
  findMeOn: 'Find me on',
  issued: 'Issued',
  credentialId: 'Credential ID',
  verifyCredential: 'verify credential, opens in a new tab',

  // Content
  softSkillsList: ['Communication', 'Problem-solving', 'Self-learning', 'Leadership', 'Teamwork'],

  spokenLanguages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Intermediate' }
  ],

  // Grouped by company, most recent first. Set `current: true` on an ongoing role.
  experience: [
    {
      company: 'Intenova AI',
      location: 'Remote',
      roles: [
        {
          title: 'AI Software Architect',
          start: 'Mar 2026',
          current: true,
          bullets: [
            'Architect and build AI-powered software solutions using Python and Anthropic Claude.',
            'Develop full-stack web applications with Next.js, delivering server-rendered React front ends backed by Python services.',
            'Design scalable system architectures that integrate LLM capabilities with backend services and data layers.'
          ]
        }
      ]
    },
    {
      company: 'NearLinx',
      location: 'Remote',
      roles: [
        {
          title: 'Lead Software Developer',
          start: 'Mar 2023',
          end: 'Mar 2026',
          bullets: [
            'Led backend projects using Java Spring Boot, integrating with relational databases (MSSQL, MySQL) and implementing unit/integration tests with JUnit to deliver robust, scalable APIs.',
            'Managed API integrations between internal/external platforms, enabling seamless communication between systems.',
            'Led full database migration impacting 5+ services, improving query performance, and ensuring long-term scalability.',
            'Worked as a full-stack developer using Python (Flask/FastAPI) and React, supported by Claude AI to enhance development productivity and code quality.'
          ]
        },
        {
          title: 'Software Developer',
          start: 'Sep 2022',
          end: 'Mar 2023',
          bullets: [
            'Developed Java Spring Boot solutions backed by Microsoft SQL Server.',
            'Collaborated with the front-end team to ship intuitive, user-friendly features to enhance the user experience.'
          ]
        }
      ]
    },
    {
      company: 'Freelance',
      location: '',
      roles: [
        {
          title: 'Software Developer',
          start: 'Nov 2021',
          end: 'Mar 2023',
          bullets: [
            'Designed and delivered Java Spring Boot solutions tailored to each client\'s requirements.'
          ]
        }
      ]
    }
  ],

  educationList: [
    { degree: 'Bachelor of Business Informatics', school: 'University of Costa Rica', dates: '2018 – 2021' }
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
      name: 'Personal Productivity',
      issuer: 'Google Actívate',
      date: 'Dec 2020',
      credentialId: '882 T3J MV4'
    },
    {
      name: 'Developing Mobile Apps',
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
      name: '360° VR Video Pipeline',
      year: '2026',
      stack: ['Python', 'Blender (Cycles)', 'ffmpeg', 'Three.js', 'Claude Code'],
      bullets: [
        'Built a code-only pipeline that generates 360° VR relaxation videos for YouTube, with no filming or manual 3D modeling.',
        'Created 100+ procedurally generated environments with headless Blender scripting in Python, all sharing one standard for camera speed, pacing and render settings.',
        'Automated the full flow: equirectangular rendering, ffmpeg encoding, spherical metadata injection and vertical Shorts.',
        'Cut render time for long videos about 6x with an intro, cross-faded seamless loop and outro structure, so a 30-minute video costs the same to render as a 5-minute one.',
        'Tuned output to YouTube\'s measured 360° delivery limits and verified scenes in a Three.js web player and a VR headset.'
      ]
    },
    {
      name: 'Wedding Manager App',
      year: '2025',
      stack: ['Java Spring Boot', 'React', 'MongoDB', 'DigitalOcean', 'GitFlow', 'CI/CD'],
      bullets: [
        'Developed a full-stack web application as the digital invitation to my own wedding.',
        'Enabled RSVP (accept/decline) functionality, with data stored in MongoDB via a Spring Boot REST API.',
        'Implemented real-time guest management features to monitor responses.',
        'Deployed on DigitalOcean with a custom domain and CI/CD pipeline for auto-redeployment via GitFlow.',
        'Delivered a stable, mobile-first solution that simplified guest tracking and improved UX.'
      ]
    },
    {
      name: 'Crazy Lazy Sloth Generator',
      year: '2021',
      stack: ['Python', 'Custom Algorithm', 'OpenSea'],
      bullets: [
        'Created an NFT collection during the NFT boom, uploading unique images to OpenSea marketplace.',
        'Developed a custom generative algorithm with randomized features to create diverse sloth characters.',
        'Implemented a tier system (Simple, Rare, Limited, Selected, Epic, and Legendary) based on feature combinations.',
        'Successfully deployed the collection on the OpenSea platform.'
      ]
    }
  ]
};
