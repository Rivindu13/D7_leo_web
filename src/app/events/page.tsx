import type { Metadata } from 'next';
import { CTA, Eyebrow, PageHero } from '@/components/Shared';
import { EventExplorer } from '@/components/EventExplorer';
export const metadata: Metadata = { title: 'Events' };
export default function Events() {
 return <><PageHero kicker="GATHER / CONNECT / CELEBRATE" title="The moments that" accent="move us." description="From service days to leadership gatherings, discover spaces where young people come together."/>
 <section className="section"><div className="container"><div className="section-top"><div><Eyebrow>EVENTS & EXPERIENCES</Eyebrow><h2>Where we <em>meet.</em></h2><p className="section-desc">Search by title or filter by interest. Official event information will replace this preview data.</p></div><span className="preview-chip">DATES TO BE CONFIRMED</span></div><EventExplorer/></div></section><CTA compact/></>;
}
