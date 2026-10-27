'use client';
import { useState } from 'react';
import { ProjectCard } from '@/components/Shared';
import { projects } from '@/lib/data';
const categories = ['All projects','Environment','Education','Community'] as const;
export function ProjectExplorer(){
 const [category,setCategory]=useState<typeof categories[number]>('All projects');
 const [search,setSearch]=useState('');
 const visible=projects.filter(p=>(category==='All projects'||p.category===category) && [p.title,p.summary,p.category].join(' ').toLowerCase().includes(search.toLowerCase()));
 return <><div className="filter-row"><div role="group" aria-label="Filter projects" className="filter-pills">{categories.map(c=><button type="button" key={c} className={category===c?'selected':''} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><label className="search-label"><span className="sr-only">Search projects</span><input placeholder="Search projects..." value={search} onChange={e=>setSearch(e.target.value)}/></label></div>{visible.length>0?<div className="projects-grid">{visible.map(p=><ProjectCard key={p.slug} project={p} index={projects.indexOf(p)}/>)}</div>:<div className="empty-state">No matching project in this preview. Try a different filter.</div>}</>;
}
