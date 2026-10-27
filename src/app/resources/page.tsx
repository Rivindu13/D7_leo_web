import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, ExternalLink, GraduationCap, Mail, Newspaper, ShoppingBag, Users } from 'lucide-react';
import { CTA, Eyebrow, PageHero, SectionHeading } from '@/components/Shared';
import { site } from '@/lib/data';
export const metadata: Metadata = { title: 'District Resources', description: 'Quick links to the district directory, learning system, Ascent, merchandise and more.' };
const resources = [
 { index: '01', tag: 'DISTRICT', title: 'District directory', copy: 'Browse the existing digital directory to find official district contacts.', url: site.districtDirectoryUrl, icon: Users },
 { index: '02', tag: 'LEARNING', title: 'Member LMS', copy: 'Continue to the existing learning system and its normal sign-in process.', url: site.existingLmsUrl, icon: GraduationCap },
 { index: '03', tag: 'READING', title: 'Ascent magazine', copy: 'Explore district stories and past issues on the current district website.', url: site.currentAscentUrl, icon: Newspaper },
 { index: '04', tag: 'DISTRICT SHOP', title: 'District merch', copy: 'View the official current merchandise destination.', url: site.currentMerchUrl, icon: ShoppingBag },
];
export default function Resources() {
 return <><PageHero kicker="EXPLORE / LEARN / CONNECT" title="Everything you need." accent="One place." description="A streamlined gateway to essential district links, information, and opportunities."/>
 <section className="section resources-section"><div className="container"><SectionHeading eyebrow="QUICK ACCESS" title="Your district" accent="toolkit." description="These cards link to existing public resources. They do not replace real LMS access or shopping functionality."/>
 <div className="resource-grid">{resources.map(r => <a className="resource-card" href={r.url} target="_blank" rel="noopener noreferrer" key={r.title}><div className="resource-card__top"><span>{r.index} / {r.tag}</span><ExternalLink size={21}/></div><r.icon className="resource-card__icon" size={40} strokeWidth={1.4}/><div><h3>{r.title}</h3><p>{r.copy}</p><strong>Open resource <ArrowUpRight size={17}/></strong></div></a>)}</div>
 <div className="resources-assist"><div><Eyebrow>LOOKING FOR SOMETHING ELSE?</Eyebrow><h3>We're here to help.</h3><p>Contact district leadership for up-to-date documents or other resources not yet listed.</p></div><Link className="btn btn-gold" href="/contact">Get in touch <Mail size={18}/></Link></div>
 </div></section><CTA compact/></>;
}
