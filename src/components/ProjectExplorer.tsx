'use client';
import { useState } from 'react';
import { ProjectCard } from '@/components/Shared';
import { projects, type Project } from '@/lib/data';
const categories:('All projects' | Project['category'])[] = ['All projects','Meetings','Orientations','Youth','Religious','Service','Events'];
export function ProjectExplorer(){
 const [category,setCategory]=useState<(typeof categories)[number]>('All projects');
 const [search,setSearch]=useState('');
 const visible=projects.filter(p=>(category==='All projects'||p.category===category) && [p.title,p.summary,p.category,p.date].join(' ').toLowerCase().includes(search.trim().toLowerCase()));
 return <><div className="filter-row"><div role="group" aria-label="Filter projects" className="filter-pills">{categories.map(c=><button type="button" key={c} className={category===c?'selected':''} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="search-label"><span className="sr-only">Search projects</span><input type="search" placeholder="Search archive..." value={search} onChange={e=>setSearch(e.target.value)}/></label></div><p className="archive-disclaimer">Displaying {visible.length} of {projects.length} public archived activities. Categories are provisionally assigned by title; detailed write-ups and approved galleries still live on the previous site.</p>{visible.length?<div className="projects-grid">{visible.map(p=><ProjectCard key={p.slug} project={p} index={projects.indexOf(p)}/>)}</div>:<div className="empty-state">No matching activity. Try another category or search term.</div>}</>;
}
