export type AscentIssue = {
  id: string;
  title: string;
  publishedAt: string; // YYYY-MM-DD
  description: string;
  readerUrl: string; // Official Heyzine or PDF link
  coverImage?: string; // Image inside public/images/ascent/
};

/**
 * Add verified Ascent editions here, newest first.
 *
 * Only add editions after checking their publication
 * title, date, cover, and reader URL.
 */
export const ascentIssues: AscentIssue[] = [
  {
    id: 'issue-01',
    title: 'Official Ascent Issue Title',
    publishedAt: '2026-01-01',
    description: 'Official description of this issue.',
    readerUrl: 'OFFICIAL_READER_URL',
    coverImage: '/images/ascent/issue-01.jpg',
  },
];