import type { Metadata } from 'next';
import { CTA, Eyebrow, PageHero } from '@/components/Shared';
import { ProjectExplorer } from '@/components/ProjectExplorer';
export const metadata: Metadata = {title:'Projects'};
export default function Projects(){return <><PageHero kicker="THE IMPACT WE CREATE" title="Service is our" accent="superpower." description="Explore the ideas, people, and initiatives that help move communities forward."/><section className="section"><div className="container"><div className="section-top"><div><Eyebrow>PROJECT SHOWCASE</Eyebrow><h2>Impact starts <em>here.</em></h2><p className="section-desc">Filter the demo stories below. Official district project records can replace this sample data.</p></div><span className="preview-chip">SAMPLE PROJECTS</span></div><ProjectExplorer/></div></section><CTA compact/></>}
