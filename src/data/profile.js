export const profile = {
  name: 'Aadarsh Gupta',
  first: 'Aadarsh',
  roles: ['Full-Stack Developer', 'UI/UX Designer', 'App Builder'],
  tagline: 'I design it, then I ship it.',
  blurb:
    "B.Tech CSE at KIIT. I live in the gap between the Figma file and the pull request — designing interfaces and then building them in Flutter, React and Go. Currently designing for GDG KIIT and Coding Ninjas KIIT, and building a career-discovery platform for students who keep missing the deadlines nobody told them about.",
  location: 'Bhubaneswar, Odisha',
  org: 'GDG KIIT',
  // Confirmed as the address to use publicly; the résumé PDF still shows an
  // older one, which is tracked in the repo's open issue.
  email: 'aadarshgupta.ag2006@gmail.com',
  github: 'https://github.com/Aadarsh-gupta0',
  linkedin: 'https://linkedin.com/in/aadarshgupta01',
  instagram: 'https://instagram.com/aadarsh._.gupta01',
  // The résumé PDF carries a personal phone number, so it is deliberately not
  // published here. People ask by email and Aadarsh sends it directly.
  resumeRequest: 'mailto:aadarshgupta.ag2006@gmail.com?subject=Resume%20request',
}

export const stats = [
  { value: '16+', label: 'Public repos' },
  { value: '8', label: 'Shipped projects' },
  { value: '2', label: 'Campus design orgs' },
  { value: "'28", label: 'B.Tech, KIIT' },
]

export const education = {
  school: 'Kalinga Institute of Industrial Technology',
  short: 'KIIT',
  degree: 'B.Tech, Computer Science & Engineering',
  period: '2024 — 2028',
  place: 'Bhubaneswar, Odisha',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Object-Oriented Programming',
    'DBMS',
    'Computer Networks',
    'Software Engineering',
    'Machine Learning',
    'Artificial Intelligence',
  ],
}

export const experience = [
  {
    org: 'Google Developer Groups, KIIT',
    role: 'UI/UX Designer',
    period: 'Dec 2025 — Present',
    accent: 'violet',
    points: [
      'Designed and built the chapter website interface, prioritising navigation clarity and accessibility.',
      'Produced high-fidelity wireframes and prototypes in Figma that hold up across breakpoints.',
      'Built the supporting graphic assets, icons and branding in Photoshop and Illustrator.',
    ],
  },
  {
    org: 'Coding Ninjas KIIT Chapter',
    role: 'Design & Branding',
    period: 'Aug 2025 — Present',
    accent: 'aqua',
    points: [
      'Ran digital content and event creative — posters, banners, campaign assets — on a consistent brand system.',
      'Led UI/UX and front-end for a Wordle-based platform: landing pages, auth flows, a competitive dashboard and player progression.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Design',
    accent: 'violet',
    items: ['Figma', 'Illustrator', 'Photoshop', 'InDesign', 'Design Systems', 'Prototyping'],
  },
  {
    title: 'Languages',
    accent: 'aqua',
    items: ['JavaScript', 'TypeScript', 'Java', 'Dart', 'C', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend & Mobile',
    accent: 'amber',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'Riverpod', 'Material 3'],
  },
  {
    title: 'Backend & Data',
    accent: 'violet',
    items: ['Node.js', 'Express', 'Flask', 'Spring Boot', 'Go', 'MongoDB', 'MySQL'],
  },
]
