import type { Metadata } from 'next';
import { CTA, Eyebrow, PageHero } from '@/components/Shared';
import { ProjectExplorer } from '@/components/ProjectExplorer';
export const metadata:Metadata={title:'Projects'};
export default function Projects(){return <><PageHero kicker="THE IMPACT WE CREATE" title="Service is our" accent="superpower." description="Browse district activities published on the previous official website."/><section className="section"><div className="container"><div className="section-top"><div><Eyebrow>DISTRICT PROJECT ARCHIVE</Eyebrow><h2>Impact starts <em>here.</em></h2><p className="section-desc">Explore 20 historical entries with titles and dates from the district's previous public project listing.</p></div><span className="preview-chip">LEGACY DATA IMPORTED</span></div><ProjectExplorer/></div></section><CTA compact/></>}
