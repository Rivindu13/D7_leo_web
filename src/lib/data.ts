export const site = {
  name: 'Leo District 306 D7',
  tagline: 'Leadership. Experience. Opportunity.',
  email: 'leodistrict306d7@gmail.com',
  joinUrl: 'https://forms.gle/NK8PtVKqZAapSUft5',
  existingLmsUrl: 'https://d7leos.org/lms',
  currentMerchUrl: 'https://d7leos.org/merch',
  currentAscentUrl: 'https://d7leos.org/ascent',
  districtDirectoryUrl: 'https://heyzine.com/flip-book/6ac000f48c.html',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Council', href: '/council' },
  { label: 'Clubs', href: '/clubs' },
  { label: 'Projects', href: '/projects' },
  { label: 'Events', href: '/events' },
  { label: 'All-Rounders', href: '/all-rounders' },
  { label: 'Ascent', href: '/ascent' },
  { label: 'Resources', href: '/resources' },
  { label: 'Merch', href: '/merch' },
  { label: 'LMS', href: '/lms' },
];

export type Project = {
  slug: string;
  title: string;
  category: 'Meetings' | 'Orientations' | 'Youth' | 'Religious' | 'Service' | 'Events';
  date: string;
  summary: string;
  description: string;
  tag: string;
  sourceUrl: string;
};
// Archived public records, NOT newly verified project reports. Full galleries pending.
export const projects: Project[] = [
  {
    "slug": "leo-ekka-awurudu-1",
    "title": "Leo Ekka Awurudu",
    "category": "Events",
    "date": "2026-04-26",
    "summary": "Featured in the district project archive on 26 April 2026.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Events",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "d7-saviya-phase-ii-2",
    "title": "D7 Saviya: Phase II",
    "category": "Service",
    "date": "2026-04-13",
    "summary": "Featured in the district project archive on 13 April 2026.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Service",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "third-council-meeting-3",
    "title": "Third Council Meeting",
    "category": "Meetings",
    "date": "2026-03-07",
    "summary": "Featured in the district project archive on 07 March 2026.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Meetings",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "pandama-26-4",
    "title": "Pandama'26",
    "category": "Events",
    "date": "2026-01-25",
    "summary": "Featured in the district project archive on 25 January 2026.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Events",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "ngp-forum-phase-ii-and-council-outing-5",
    "title": "NGP Forum: Phase II and Council Outing",
    "category": "Youth",
    "date": "2026-01-03",
    "summary": "Featured in the district project archive on 03 January 2026.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Youth",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "d7-saviya-cyclone-ditwa-emergency-relief-project-6",
    "title": "D7 Saviya: Cyclone Ditwa Emergency Relief Project",
    "category": "Service",
    "date": "2025-11-30",
    "summary": "Featured in the district project archive on 30 November 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Service",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "second-council-meeting-7",
    "title": "Second Council Meeting",
    "category": "Meetings",
    "date": "2025-11-02",
    "summary": "Featured in the district project archive on 02 November 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Meetings",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "charter-installation-ceremony-8",
    "title": "Charter Installation Ceremony",
    "category": "Events",
    "date": "2025-09-21",
    "summary": "Featured in the district project archive on 21 September 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Events",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "region-5-orientation-at-sivali-central-college-ratnapura-9",
    "title": "Region 5 – Orientation at Sivali Central College, Ratnapura",
    "category": "Orientations",
    "date": "2025-09-06",
    "summary": "Featured in the district project archive on 06 September 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Orientations",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "region-3-orientation-at-nibm-10",
    "title": "Region 3 – Orientation at NIBM",
    "category": "Orientations",
    "date": "2025-08-31",
    "summary": "Featured in the district project archive on 31 August 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Orientations",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "region-1-orientation-at-nibm-11",
    "title": "Region 1 – Orientation at NIBM",
    "category": "Orientations",
    "date": "2025-08-31",
    "summary": "Featured in the district project archive on 31 August 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Orientations",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "second-board-meeting-12",
    "title": "Second Board Meeting",
    "category": "Meetings",
    "date": "2025-08-24",
    "summary": "Featured in the district project archive on 24 August 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Meetings",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "region-4-orientation-at-ananda-college-13",
    "title": "Region 4 – Orientation at Ananda College",
    "category": "Orientations",
    "date": "2025-08-23",
    "summary": "Featured in the district project archive on 23 August 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Orientations",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "presidents-meeting-august-14",
    "title": "Presidents Meeting - August",
    "category": "Meetings",
    "date": "2025-08-18",
    "summary": "Featured in the district project archive on 18 August 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Meetings",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "region-2-orientation-at-vidma-hall-boralesgamuwa-15",
    "title": "Region 2 – Orientation at Vidma Hall, Boralesgamuwa",
    "category": "Orientations",
    "date": "2025-08-16",
    "summary": "Featured in the district project archive on 16 August 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Orientations",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "next-generation-of-prime-ngp-forum-first-session-16",
    "title": "Next Generation of Prime (NGP) Forum – First Session",
    "category": "Youth",
    "date": "2025-07-20",
    "summary": "Featured in the district project archive on 20 July 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Youth",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "district-community-event-17",
    "title": "සර්වරාත්‍රික පිරිත් සජ්ඣායනාමය පිංකම",
    "category": "Religious",
    "date": "2025-07-13",
    "summary": "Featured in the district project archive on 13 July 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Religious",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "first-council-meeting-18",
    "title": "First Council Meeting",
    "category": "Meetings",
    "date": "2025-07-13",
    "summary": "Featured in the district project archive on 13 July 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Meetings",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "district-community-event-19",
    "title": "ආශිර්වාද යාත්‍රා",
    "category": "Religious",
    "date": "2025-07-13",
    "summary": "Featured in the district project archive on 13 July 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Religious",
    "sourceUrl": "https://d7leos.org/projects"
  },
  {
    "slug": "first-board-meeting-and-dinner-20",
    "title": "First Board Meeting and Dinner",
    "category": "Meetings",
    "date": "2025-07-07",
    "summary": "Featured in the district project archive on 07 July 2025.",
    "description": "This title and date were migrated from the public legacy district archive. The original detailed story and approved gallery have not yet been imported; consult the legacy project archive for the complete report.",
    "tag": "District archive · Meetings",
    "sourceUrl": "https://d7leos.org/projects"
  }
];

export const demoEvents = [
  { month: 'TBA', title: 'District Leadership Gathering', category: 'Leadership', description: 'Connect, learn, and exchange ideas with fellow Leos.' },
  { month: 'TBA', title: 'Community Action Day', category: 'Service', description: 'A collective opportunity to make an impact together.' },
  { month: 'TBA', title: 'Leo Creative Showcase', category: 'Fellowship', description: 'Celebrate stories, ideas, and the talents of our district.' },
];


