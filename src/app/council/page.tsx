
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
  
const populatedGroups = currentCouncil.flatMap((group) => {
  if (group.title !== 'Executive Board Members') {
    return group.members.length > 0 ? [group] : [];
  }

  // District Directors currently listed under EXCO
  const districtDirectors = group.members.filter(
    (member) => member.role.startsWith('Director of ')
  );

    // Executive Board members excluding District Directors
    const executiveMembers = group.members.filter(
      (member) => !member.role.startsWith('Director of ')
    );

    return [
      {
        title: 'Executive Board Members',
        members: executiveMembers,
      },
      {
        title: 'District Directors',
        members: districtDirectors,
      },
    ].filter((item) => item.members.length > 0);
  });


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
          populatedGroups.map((group) => {
            const isExecutiveGroup =
              group.title === 'Executive Board Members';

            const featuredRoles = [
              'District President',
              'Immediate Past District President',
            ];

            // President first, Immediate Past President second.
            const featuredMembers = isExecutiveGroup
              ? featuredRoles.flatMap((role) =>
                  group.members.filter(
                    (member) => member.role === role
                  )
                )
              : [];

            const regularMembers = isExecutiveGroup
              ? group.members.filter(
                  (member) =>
                    !featuredRoles.includes(member.role)
                )
              : group.members;

            return (
              <section
                key={group.title}
                className="current-council__group"
              >
                <div className="current-council__heading">
                  <h3>{group.title}</h3>
                  <span>{group.members.length} members</span>
                </div>

                {/* First row: two featured leaders */}
                {featuredMembers.length > 0 && (
                  <div className="current-council__featured-grid">
                    {featuredMembers.map((member) => (
                      <CouncilMemberCard
                        key={member.id}
                        member={member}
                        featured
                      />
                    ))}
                  </div>
                )}
 
                {regularMembers.length > 0 && (
                  <div
                    className={
                      isExecutiveGroup
                        ? 'current-council__grid'
                        : 'council-text-grid'
                    }
                  >
                    {regularMembers.map((member) =>
                      isExecutiveGroup ? (
                        // EXCO members: keep photo cards
                        <CouncilMemberCard
                          key={member.id}
                          member={member}
                        />
                      ) : (
                        // All other members: name and position only
                        <article
                          className="council-text-card"
                          key={member.id}
                        >
                          <span className="council-text-card__role">
                            {member.role}
                          </span>

                          <h4 className="council-text-card__name">
                            {member.name}
                          </h4>
                        </article>
                      )
                    )}
                  </div>
                )}
              </section>
            );
          })
        ) : (
          <div className="current-council__empty">
            <UsersRound size={34} />

            <div>
              <h3>Preparing the 2026–2027 council gallery</h3>
              <p>
                Official council photographs and profiles
                will appear as records are entered.
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
