
import { districtClubs } from '@/lib/legacy-content';
import { Eyebrow } from '@/components/Shared';

export function DistrictClubs() {
  const alpha = districtClubs.filter(
    (club) => club.division === 'Alpha'
  );

  const omega = districtClubs.filter(
    (club) => club.division === 'Omega'
  );

  return (
    <section
      id="district-clubs"
      className="section tone-section district-clubs"
    >
      <div className="container">
        <Eyebrow>OUR DISTRICT NETWORK</Eyebrow>

        <h2 className="district-clubs__title">
          36 clubs. <em>One district.</em>
        </h2>

        <p className="section-desc">
          Together, our Alpha and Omega Leo clubs
          form a network of young leaders dedicated
          to service and fellowship.
        </p>

        <div className="district-clubs__grid">
          {[
            { title: 'Alpha Leo Clubs', clubs: alpha },
            { title: 'Omega Leo Clubs', clubs: omega },
          ].map((group) => (
            <div
              className="district-clubs__group"
              key={group.title}
            >
              <div className="district-clubs__header">
                <h3>{group.title}</h3>
                <span>{group.clubs.length}</span>
              </div>

              <ul>
                {group.clubs.map((club) => (
                  <li key={club.id}>
                    {club.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
