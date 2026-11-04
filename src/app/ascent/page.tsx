
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Feather,
  Newspaper,
} from 'lucide-react';

import {
  CTA,
  Eyebrow,
  PageHero,
} from '@/components/Shared';

import { ascentIssues } from '@/lib/ascent-data';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Ascent Magazine',
  description:
    'Discover Ascent, the digital newsletter of Leo District 306 D7.',
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function AscentPage() {
  const latestIssue = ascentIssues[0];
  const previousIssues = ascentIssues.slice(1);

  return (
    <>
      <PageHero
        kicker="THE VOICE OF OUR DISTRICT"
        title="Stories that"
        accent="take flight."
        description="Explore Ascent, the district's collection of stories, achievements, leadership experiences and creative perspectives."
      />

      {/* FEATURED PUBLICATION */}
      <section className="section ascent-section">
        <div className="container magazine-grid">
          <div
            className={`magazine-cover ${
              latestIssue?.coverImage
                ? 'ascent-cover--image'
                : ''
            }`}
          >
            {latestIssue?.coverImage ? (
              <Image
                src={latestIssue.coverImage}
                alt={`Cover of ${latestIssue.title}`}
                fill
                sizes="(max-width: 800px) 100vw, 410px"
                priority
              />
            ) : (
              <>
                <div className="magazine-cover__top">
                  <Feather size={22} />
                  <span>LEO DISTRICT 306 D7</span>
                </div>

                <div className="magazine-cover__orb" />

                <strong>ASCENT</strong>

                <p>
                  STORIES THAT INSPIRE
                  THE NEXT GENERATION
                </p>

                <span className="magazine-cover__bottom">
                  PUBLICATION ARTWORK PREVIEW
                </span>
              </>
            )}
          </div>

          <div className="magazine-copy">
            <Eyebrow>ASCENT DISTRICT NEWSLETTER</Eyebrow>

            <h2>
              Every story deserves to be{' '}
              <em>heard.</em>
            </h2>

            {latestIssue ? (
              <>
                <span className="ascent-edition-label">
                  LATEST AVAILABLE ISSUE
                </span>

                <h3 className="ascent-issue-title">
                  {latestIssue.title}
                </h3>

                <p className="ascent-issue-date">
                  <CalendarDays size={17} />
                  {formatDate(latestIssue.publishedAt)}
                </p>

                <p>{latestIssue.description}</p>

                <a
                  className="btn btn-gold"
                  href={latestIssue.readerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read this issue
                  <ArrowUpRight size={18} />
                </a>
              </>
            ) : (
              <>
                <p>
                  Ascent celebrates the creativity,
                  achievements and experiences of
                  our Leo community.
                </p>

                <p>
                  Official digital editions will
                  appear here once their publication
                  details and reader links have
                  been added.
                </p>

                <a
                  className="btn btn-gold"
                  href={site.currentAscentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit existing Ascent page
                  <ArrowUpRight size={18} />
                </a>

                <div className="notice-row">
                  <BookOpen
                    size={20}
                    aria-hidden="true"
                  />

                  <p>
                    The artwork shown is a design
                    preview, not an official
                    published magazine cover.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* PREVIOUS EDITIONS */}
      {previousIssues.length > 0 && (
        <section className="section ascent-archive">
          <div className="container">
            <div className="section-top">
              <div>
                <Eyebrow>PUBLICATION ARCHIVE</Eyebrow>

                <h2>
                  Previous <em>editions.</em>
                </h2>

                <p className="section-desc">
                  Explore stories and highlights
                  from earlier Ascent publications.
                </p>
              </div>
            </div>

            <div className="ascent-archive__grid">
              {previousIssues.map((issue) => (
                <a
                  key={issue.id}
                  className="ascent-archive__card"
                  href={issue.readerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="ascent-archive__art">
                    {issue.coverImage ? (
                      <Image
                        src={issue.coverImage}
                        alt={`Cover of ${issue.title}`}
                        fill
                        sizes="(max-width: 700px) 100vw, 33vw"
                      />
                    ) : (
                      <Newspaper
                        size={54}
                        strokeWidth={1.1}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="ascent-archive__details">
                    <span>
                      {formatDate(issue.publishedAt)}
                    </span>

                    <h3>{issue.title}</h3>

                    <p>{issue.description}</p>

                    <strong>
                      Read edition
                      <ArrowUpRight size={16} />
                    </strong>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA compact />
    </>
  );
}
