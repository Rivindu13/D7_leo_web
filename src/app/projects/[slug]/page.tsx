import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { CTA, Eyebrow } from '@/components/Shared';
import { projects } from '@/lib/data';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(x=>x.slug===slug);return {title:p?.title || 'Project'};}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();return <><section className="detail-hero"><div className="container"><Link className="back-link" href="/projects"><ArrowLeft size={16}/> All projects</Link><Eyebrow>{p.tag}</Eyebrow><h1>{p.title}<em>.</em></h1><p>{p.summary}</p></div></section><section className="section detail-body"><div className="container"><div className="detail-cover"><Image src={p.image} alt={`Illustrative image for ${p.title}`} fill sizes="100vw"/></div><div className="detail-grid"><div><Eyebrow>A STORY WORTH SHARING</Eyebrow><h2>The difference we <em>make together.</em></h2></div><div><p>{p.description}</p><div className="notice-row"><span>DEMO</span><p>This is an example story; not an official report of a district project.</p></div><Link className="text-link" href="/contact">Submit official content <ArrowUpRight size={17}/></Link></div></div></div></section><CTA compact/></>}
