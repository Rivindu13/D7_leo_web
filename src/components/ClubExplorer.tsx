'use client';
import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, UsersRound, X } from 'lucide-react';
import { districtClubs, legacySources } from '@/lib/legacy-content';
type Division = 'All clubs' | 'Alpha' | 'Omega';
const divisions: Division[] = ['All clubs','Alpha','Omega'];
export function ClubExplorer() {
  const [search, setSearch] = useState('');
  const [division, setDivision] = useState<Division>('All clubs');
  const results = useMemo(() => districtClubs.filter(club =>
    (division === 'All clubs' || club.division === division) &&
    club.name.toLowerCase().includes(search.trim().toLowerCase())
  ), [division,search]);
  const reset = () => {setSearch('');setDivision('All clubs');};
  return <div className="club-explorer">
    <div className="directory-controls directory-controls--compact">
      <label className="directory-search"><Search size={19} aria-hidden="true"/><span className="sr-only">Search Leo clubs</span><input type="search" placeholder="Search Leo clubs by name" value={search} onChange={e => setSearch(e.target.value)}/></label>
      <label className="directory-select"><span>Club division</span><select value={division} onChange={e=>setDivision(e.target.value as Division)}>{divisions.map(d=><option key={d}>{d}</option>)}</select></label>
      <button className="directory-reset" type="button" onClick={reset}><X size={15}/> Reset</button>
    </div>
    <div className="directory-result-meta"><span>{results.length} clubs listed</span><span>PUBLIC LEGACY LIST • REVIEW FOR CURRENT TERM</span></div>
    {results.length ? <div className="clubs-grid">{results.map((club,index)=><article className="club-card" key={club.id}>
      <div className="club-card__identity"><UsersRound size={46} strokeWidth={1.2}/><span className="club-card__index">{String(index+1).padStart(2,'0')}</span></div>
      <div className="club-card__details"><div className="club-card__meta"><span>{club.division} Leo Club</span></div><h3>{club.name}</h3><p>Listed on the previous district About page. Club logo and official contact/profile details require confirmation.</p><div className="club-card__bottom"><span><UsersRound size={16}/> DISTRICT CLUB</span><ArrowUpRight size={19}/></div></div>
    </article>)}</div>:<div className="directory-empty"><Search size={34}/><h3>No clubs match these filters</h3><p>Try changing the search or division.</p><button type="button" onClick={reset} className="btn btn-gold">Clear filters</button></div>}
    <p className="archive-disclaimer">The previous About page claims 37 clubs but lists 36 by name. The missing or updated club must be confirmed before launch. <a href={legacySources.clubs} target="_blank" rel="noopener noreferrer">View source list ↗</a></p>
  </div>;
}
