
'use client';

import { useMemo, useState } from 'react';
import { Search, UsersRound, X } from 'lucide-react';
import { districtClubs } from '@/lib/legacy-content';

type Division = 'All clubs' | 'Alpha' | 'Omega';

const divisions: Division[] = [
  'All clubs',
  'Alpha',
  'Omega',
];

const clubGroups = ['Alpha', 'Omega'] as const;

export function ClubExplorer() {
  const [search, setSearch] = useState('');
  const [division, setDivision] =
    useState<Division>('All clubs');

  const filteredClubs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return districtClubs
      .filter((club) => {
        const matchesDivision =
          division === 'All clubs' ||
          club.division === division;

        const matchesSearch = club.name
          .toLowerCase()
          .includes(query);

        return matchesDivision && matchesSearch;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [division, search]);

  const groups = clubGroups
    .map((name) => ({
      name,
      clubs: filteredClubs.filter(
        (club) => club.division === name
      ),
    }))
    .filter((group) => group.clubs.length > 0);

  const resetFilters = () => {
    setSearch('');
    setDivision('All clubs');
  };

  return (
    <div className="club-explorer">
      {/* SEARCH + FILTER */}
      <div className="club-toolbar">
        <label className="directory-search">
          <Search size={18} aria-hidden="true" />

          <span className="sr-only">
            Search district clubs
          </span>

          <input
            type="search"
            value={search}
            placeholder="Search club names..."
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </label>

        <label className="club-toolbar__filter">
          <span className="sr-only">
            Filter by division
          </span>

          <select
            value={division}
            onChange={(event) =>
              setDivision(
                event.target.value as Division
              )
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
            !search && division === 'All clubs'
          }
        >
          <X size={15} aria-hidden="true" />
          Reset
        </button>
      </div>

      <div
        className="directory-result-meta"
        role="status"
        aria-live="polite"
      >
        <span>
          Showing {filteredClubs.length} of{' '}
          {districtClubs.length} district clubs
        </span>
      </div>

      {/* CLUB DIRECTORY */}
      {filteredClubs.length > 0 ? (
        <div className="club-directory-columns">
          {groups.map((group) => (
            <section
              className="club-directory-group"
              key={group.name}
            >
              <div className="club-directory-group__header">
                <UsersRound
                  size={23}
                  aria-hidden="true"
                />

                <h3>{group.name} Leo Clubs</h3>
              </div>

              <ul className="club-directory-list">
                {group.clubs.map((club) => (
                  <li key={club.id}>
                    <span
                      className="club-directory-dot"
                      aria-hidden="true"
                    />

                    <span>{club.name}</span>
                  </li>
                ))}
              </ul>
            </section>
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
            Try another club name or division.
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
