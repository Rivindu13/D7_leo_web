
import Image from 'next/image';
import { UserRound } from 'lucide-react';
import type { CouncilMember } from '@/lib/council-data';

type Props = {
  member: CouncilMember;
};

export function CouncilMemberCard({ member }: Props) {
  const isPresident = member.role === 'District President';

  return (
    <article
      className={`current-council__card ${
        isPresident
          ? 'current-council__card--president'
          : ''
      }`}
    >
      <div className="current-council__portrait">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
              objectPosition:
                member.photoPosition ?? 'center 25%',
            }}
          />
        ) : (
          <UserRound
            size={80}
            strokeWidth={1}
            aria-hidden="true"
          />
        )}

        {isPresident && (
          <span className="current-council__featured">
            DISTRICT PRESIDENT
          </span>
        )}
      </div>

      <div className="current-council__details">
        <span>{member.role}</span>
        <h3>{member.name}</h3>
      </div>
    </article>
  );
}
