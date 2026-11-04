
export type CouncilMember = {
  id: string;
  name: string;
  role: string;
  photo?: string;
  photoPosition?: string;
};

export type CouncilGroup = {
  title: string;
  members: CouncilMember[];
};

// Official 2026–2027 roster.

export const currentCouncil: CouncilGroup[] = [
  {
    title: 'District Executives',
    members: [
        {
        id: 'district-president',
        name: 'Leo Lion Nipuni Wijesekara',
        role: 'District President',
        photo: '/images/council/2026-2027/district-president.png',
        photoPosition: 'center 25%',
        },
    ],
  },
  {
    title: 'District Directors',
    members: [],
  },
  {
    title: 'Region Directors',
    members: [],
  },
  {
    title: 'Zone Directors',
    members: [],
  },
  {
    title: 'District Coordinators',
    members: [],
  },
  {
    title: 'Support Team',
    members: [],
  },
];
