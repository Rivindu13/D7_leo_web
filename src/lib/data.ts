export const site = {
  name: 'Leo District 306 D7',
  tagline: 'Leadership. Experience. Opportunity.',
  email: 'leodistrict306d7@gmail.com',
  joinUrl: 'https://forms.gle/NK8PtVKqZAapSUft5',
  existingLmsUrl: 'https://d7leos.org/lms',
  currentMerchUrl: 'https://d7leos.org/merch',
  currentAscentUrl: 'https://d7leos.org/ascent',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Council', href: '/council' },
  { label: 'Projects', href: '/projects' },
  { label: 'Events', href: '/events' },
  { label: 'All-Rounders', href: '/all-rounders' },
  { label: 'Ascent', href: '/ascent' },
  { label: 'Merch', href: '/merch' },
  { label: 'LMS', href: '/lms' },
];

export type Project = { slug: string; title: string; category: 'Environment' | 'Education' | 'Community'; summary: string; image: string; description: string; tag: string };
// These are illustrative story concepts. Replace with verified district projects before launch.
export const projects: Project[] = [
  { slug: 'greener-tomorrow', title: 'Greener Tomorrow', category: 'Environment', tag: 'Environmental action', image: '/images/project-green.webp', summary: 'Small acts of care can grow into something extraordinary.', description: 'A sample project page demonstrating how a real environmental initiative could be presented, with a compelling story, verified outcomes and an image gallery. Replace this text with approved district content.' },
  { slug: 'bright-minds', title: 'Bright Minds', category: 'Education', tag: 'Education & opportunity', image: '/images/project-education.webp', summary: 'Creating more opportunities for young learners to thrive.', description: 'This is placeholder project copy. In the final site, include the verified club name, project date, location, story and measurable outcomes.' },
  { slug: 'helping-hands', title: 'Helping Hands', category: 'Community', tag: 'Community care', image: '/images/project-care.webp', summary: 'Service is strongest when communities stand together.', description: 'Illustrative content for the project-detail template. Update with a real district project and permission-cleared photography before production.' },
];

export const demoEvents = [
  { month: 'TBA', title: 'District Leadership Gathering', category: 'Leadership', description: 'Connect, learn, and exchange ideas with fellow Leos.' },
  { month: 'TBA', title: 'Community Action Day', category: 'Service', description: 'A collective opportunity to make an impact together.' },
  { month: 'TBA', title: 'Leo Creative Showcase', category: 'Fellowship', description: 'Celebrate stories, ideas, and the talents of our district.' },
];
