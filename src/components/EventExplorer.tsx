'use client';
import { useState } from 'react';
import { CalendarDays, MapPin, Search } from 'lucide-react';
import { demoEvents } from '@/lib/data';
const tabs = ['All events', 'Leadership', 'Service', 'Fellowship'] as const;
type Tab = (typeof tabs)[number];
export function EventExplorer() {
  const [tab, setTab] = useState<Tab>('All events');
  const [search, setSearch] = useState('');
  const shown = demoEvents.filter(e => (tab === 'All events' || tab === e.category) && `${e.title} ${e.category} ${e.description}`.toLowerCase().includes(search.toLowerCase()));
  return <div className="events-explorer">
    <div className="events-controls"><div className="event-pills" role="group" aria-label="Filter events by category">{tabs.map(t => <button type="button" className={tab === t ? 'selected' : ''} aria-pressed={tab === t} onClick={() => setTab(t)} key={t}>{t}</button>)}</div>
      <label className="directory-search event-search"><Search size={18}/><span className="sr-only">Search events</span><input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search events..."/></label>
    </div>
    <p className="event-demo-note">These are demonstration event concepts. No dates, registrations or venues have been announced through this preview.</p>
    {shown.length ? <div className="events-page-grid">{shown.map((e,i) => <article className="event-page-card" key={e.title}><div className="event-page-card__art"><CalendarDays size={54} strokeWidth={1.1}/><span>{String(i+1).padStart(2,'0')}</span></div><div className="event-page-card__text"><span className="event-category">{e.category}</span><h3>{e.title}</h3><p>{e.description}</p><div className="event-page-meta"><span><CalendarDays size={15}/> Date TBA</span><span><MapPin size={15}/> Venue TBA</span></div></div></article>)}</div> : <div className="directory-empty"><h3>No example events match your search.</h3><p>Try another category or a shorter search term.</p><button className="btn btn-gold" type="button" onClick={() => {setTab('All events');setSearch('');}}>Reset filters</button></div>}
  </div>;
}
