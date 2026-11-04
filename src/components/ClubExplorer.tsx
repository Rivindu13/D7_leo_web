
'use client';

import { useMemo, useState } from 'react';
import { Search, UsersRound, X } from 'lucide-react';
import {
  districtClubs
} from '@/lib/legacy-content';

type Division = 'All clubs' | 'Alpha' | 'Omega';

const divisions: Division[] = [
  'All clubs',
  'Alpha',
  'Omega',
];

// Counts update automatically when club records change.
const clubCounts: Record<Division, number> = {
  'All clubs': districtClubs.length,
  Alpha: districtClubs.filter(
    (club) => club.division === 'Alpha'
  ).length,
  Omega: districtClubs.filter(
    (club) => club.division === 'Omega'
  ).length,
};

export function ClubExplorer() {
  const [search, setSearch] = useState('');
  const [division, setDivision] =
    useState<Division>('All clubs');

  const results = useMemo(() => {
    const query = search.trim().toLowerCase();

    return districtClubs
      .filter((club) => {
        const matchesDivision =
          division === 'All clubs' ||
          club.division === division;

        const matchesName = club.name
          .toLowerCase()
          .includes(query);

        return matchesDivision && matchesName;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [division, search]);

  const resetFilters = () => {
    setSearch('');
    setDivision('All clubs');
  };

  return (
    <div className="club-explorer">
      {/* Compact club search and filtering */}
      <div className="club-toolbar">
        <label className="directory-search">
          <Search size={18} aria-hidden="true" />

          <span className="sr-only">
            Search Leo clubs
          </span>

          <input
            type="search"
            placeholder="Search club names..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </label>

        <label className="club-toolbar__filter">
          <span className="sr-only">
            Filter by club division
          </span>

          <select
            value={division}
            onChange={(event) =>
              setDivision(event.target.value as Division)
            }
          >
            {divisions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          className="directory-reset"
          onClick={resetFilters}
          disabled={
            search === '' && division === 'All clubs'
          }
        >
          <X size={15} aria-hidden="true" />
          Reset
        </button>
      </div>

      {/* RESULT SUMMARY */}
      <div
        className="directory-result-meta"
        role="status"
        aria-live="polite"
      >
        <span>
          {results.length} of {districtClubs.length}
          {' '}historical clubs shown
        </span>

        <span>
          CURRENT-TERM DETAILS NOT YET VERIFIED
        </span>
      </div>

      {/* CLUB CARDS */}
      {results.length > 0 ? (
        <div className="clubs-grid">
          {results.map((club, index) => (
            <article
              className="club-card"
              key={club.id}
            >
              <div className="club-card__identity">
                <UsersRound
                  size={46}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />

                <span className="club-card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="club-card__details">
                <div className="club-card__meta">
                  <span>
                    {club.division} Leo Club
                  </span>
                </div>

                <h3>{club.name}</h3>

                <p>
                  Listed in the previous district
                  directory. Current-term status,
                  official logo, and contact details
                  are pending confirmation.
                </p>

                <div className="club-card__bottom">
                  <span>
                    <UsersRound
                      size={16}
                      aria-hidden="true"
                    />
                    HISTORICAL LISTING
                  </span>

                  <span>PROFILE PENDING</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="directory-empty">
          <Search
            size={34}
            aria-hidden="true"
          />

          <h3>No matching clubs found</h3>

          <p>
            Try another club name or select a
            different division.
          </p>

          <button
            type="button"
            className="btn btn-gold"
            onClick={resetFilters}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
