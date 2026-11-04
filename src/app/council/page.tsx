
import type { Metadata } from 'next';
import { ChevronDown, UsersRound } from 'lucide-react';

import {
  CTA,
  Eyebrow,
  PageHero,
} from '@/components/Shared';

import { CouncilMemberCard } from '@/components/CouncilMemberCard';
import { currentCouncil } from '@/lib/council-data';
import { historicalCouncil } from '@/lib/legacy-content';

export const metadata: Metadata = {
  title: 'District Council 2026–2027',
  description:
    'Meet the 2026–2027 leadership team of Leo District 306 D7.',
};

export default function CouncilPage() {
  const populatedGroups = currentCouncil.filter(
    (group) => group.members.length > 0
  );

  const previousCount = historicalCouncil.reduce(
    (total, group) => total + group.members.length,
    0
  );

  return (
    <>
      <PageHero
        kicker="2026 / 2027 DISTRICT COUNCIL"
        title="Meet our"
        accent="leaders."
        description="The people leading Leo District 306 D7 through service, leadership and fellowship."
      />

      <section className="section current-council">
        <div className="container">
          <div className="section-top">
            <div>
              <Eyebrow>OUR DISTRICT LEADERSHIP</Eyebrow>

              <h2>
                Leading by <em>example.</em>
              </h2>

              <p className="section-desc">
                Meet the members of the 2026–2027
                District Council.
              </p>
            </div>

            <span className="preview-chip">
              2026–2027
            </span>
          </div>

          {populatedGroups.length > 0 ? (
            populatedGroups.map((group) => (
              <section
                key={group.title}
                className="current-council__group"
              >
                <div className="current-council__heading">
                  <h3>{group.title}</h3>
                  <span>
                    {group.members.length} members
                  </span>
                </div>

                <div className="current-council__grid">
                  {group.members.map((member) => (
                    <CouncilMemberCard
                      key={member.id}
                      member={member}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="current-council__empty">
              <UsersRound size={34} />
              <div>
                <h3>
                  Preparing the 2026–2027 council gallery
                </h3>
                <p>
                  Official council photographs and
                  profiles will appear as records
                  are entered.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section council-history">
        <div className="container">
          <Eyebrow>COUNCIL ARCHIVE</Eyebrow>

          <div className="section-top">
            <div>
              <h2>
                Previous <em>leadership.</em>
              </h2>

              <p className="section-desc">
                A record of officers from the
                previous district term.
              </p>
            </div>
          </div>

          <details className="council-history__accordion">
            <summary>
              <span>View previous council roster</span>
              <span>{previousCount} records</span>
              <ChevronDown size={19} />
            </summary>

            <div className="council-history__content">
              {historicalCouncil.map((group) => (
                <div key={group.group}>
                  <h3>{group.group}</h3>

                  <ul>
                    {group.members.map((member) => (
                      <li
                        key={`${group.group}-${member.name}`}
                      >
                        <strong>{member.name}</strong>
                        <span>{member.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      <CTA compact />
    </>
  );
}
