import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CalendarDays } from 'lucide-react';
import { CTA, Eyebrow } from '@/components/Shared';
import { projects } from '@/lib/data';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(x=>x.slug===slug);return {title:p?.title||'Project'};}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();return <><section className="detail-hero"><div className="container"><Link className="back-link" href="/projects"><ArrowLeft size={16}/> All projects</Link><Eyebrow>{p.tag}</Eyebrow><h1>{p.title}<em>.</em></h1><p>{p.summary}</p></div></section><section className="section detail-body"><div className="container"><div className="detail-cover archive-detail-art"><CalendarDays size={80}/><span>ARCHIVED · {p.date}</span></div><div className="detail-grid"><div><Eyebrow>PUBLIC LEGACY ENTRY</Eyebrow><h2>An activity worth <em>remembering.</em></h2></div><div><p>{p.description}</p><div className="notice-row"><span>INFO</span><p>Historic date and title are sourced from the prior district website. Full gallery, impact measures and details need original data export.</p></div><a className="text-link" href={p.sourceUrl} target="_blank" rel="noopener noreferrer">View original archive <ArrowUpRight size={17}/></a></div></div></div></section><CTA compact/></>}
