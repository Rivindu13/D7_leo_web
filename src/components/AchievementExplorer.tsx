'use client';
import { useState } from 'react';
import { Award, Search } from 'lucide-react';
import { archivedAchievements } from '@/lib/legacy-content';
export function AchievementExplorer(){
 const [month,setMonth]=useState('all'); const [search,setSearch]=useState('');
 const months=Array.from(new Set(archivedAchievements.map(a=>a.month)));
 const visible=archivedAchievements.filter(a=>(month==='all'||month===a.month) && `${a.name} ${a.achievement}`.toLowerCase().includes(search.toLowerCase()));
 return <div><div className="achievement-controls"><label className="directory-search"><Search size={18}/><span className="sr-only">Search achievements by name or award</span><input type="search" placeholder="Search Leos or achievements" value={search} onChange={e=>setSearch(e.target.value)}/></label><label className="directory-select"><span>Month (2025)</span><select value={month} onChange={e=>setMonth(e.target.value)}><option value="all">All months</option>{months.map(m=><option value={m} key={m}>{new Date(`${m}-01T00:00:00Z`).toLocaleDateString('en-GB',{month:'long',year:'numeric',timeZone:'UTC'})}</option>)}</select></label></div><p className="archive-disclaimer">{visible.length} historical recognitions from July–December 2025 on the previous D7 All-Rounders page. Source portraits and complete stories have not yet been transferred.</p><div className="achievement-grid">{visible.map(a=><article className="achievement-card" key={a.id}><div className="achievement-card__icon"><Award size={28}/></div><div><small>{new Date(`${a.month}-01T00:00:00Z`).toLocaleDateString('en-GB',{month:'long',year:'numeric',timeZone:'UTC'})}</small><h3>{a.name}</h3><p>{a.achievement}</p>{'date' in a&&<span>{a.date}</span>}</div></article>)}</div>{!visible.length&&<p>No matching achievements. Clear the filter or try a shorter term.</p>}</div>
}
