import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { projects, type Project } from '@/lib/data';
import Image from 'next/image';

export function Eyebrow({children}:{children:ReactNode}){return <p className="eyebrow"><span className="eyebrow-dot"/>{children}</p>}
export function PageHero({kicker,title,accent,description}:{kicker:string,title:string,accent?:string,description:string}) {
  return <section className="page-hero"><div className="page-hero__ring"/><div className="container page-hero__content"><Eyebrow>{kicker}</Eyebrow><h1>{title} {accent && <em>{accent}</em>}</h1><p>{description}</p></div></section>;
}
export function SectionHeading({eyebrow,title,accent,description,href,linkLabel}:{eyebrow:string,title:string,accent?:string,description?:string,href?:string,linkLabel?:string}) {
  return <div className="section-top"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title} {accent && <em>{accent}</em>}</h2>{description && <p className="section-desc">{description}</p>}</div>{href && <Link className="text-link" href={href}>{linkLabel || 'Explore all'} <ArrowUpRight size={17}/></Link>}</div>;
}
export function ProjectCard({project,index}:{project:Project,index:number}){
  return <Link href={`/projects/${project.slug}`} className="project-card">
    <div className="project-card__image"><Image src={project.image} alt={`Illustrative photo for ${project.title}`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"/><span className="project-number">0{index+1}</span></div>
    <div className="project-card__details"><span className="project-tag">{project.category}</span><span className="round-arrow"><ArrowUpRight size={21}/></span><h3>{project.title}</h3><p>{project.summary}</p></div>
  </Link>;
}
export function FeaturedProjects(){return <div className="projects-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div>}
export function CTA({compact=false}:{compact?:boolean}){return <section className={`cta-section ${compact?'cta-section--compact':''}`}><div className="container cta-inner"><div><Eyebrow>YOUR CHANCE TO MAKE A DIFFERENCE</Eyebrow><h2>Become part of <em>something bigger.</em></h2><p>Leadership begins with one step. Discover the opportunities to serve, connect, and grow.</p></div><Link href="/contact" className="btn btn-gold">Get in touch <ArrowRight size={18}/></Link></div></section>}
