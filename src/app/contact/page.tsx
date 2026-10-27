import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Eyebrow, PageHero } from '@/components/Shared';
import { site } from '@/lib/data';
export const metadata:Metadata={title:'Contact'};
export default function Contact(){return <><PageHero kicker="CONNECT WITH D7" title="Let's create" accent="something good." description="Questions, collaborations, ideas, or a simple hello — the conversation starts here."/><section className="section"><div className="container contact-layout"><div><Eyebrow>REACH OUT</Eyebrow><h2>We&apos;re better <em>together.</em></h2><p>Whether you want to collaborate, join a project, or explore the Leo movement, we'd love to hear from you.</p><div className="contact-methods"><div><Mail size={22}/><span><small>EMAIL US</small><a href={`mailto:${site.email}`}>{site.email}</a></span></div><div><MapPin size={22}/><span><small>FIND US</small><strong>Sri Lanka</strong></span></div><div><MessageCircle size={22}/><span><small>GET INVOLVED</small><a href={site.joinUrl} target="_blank" rel="noopener noreferrer">Official membership form <ArrowUpRight size={15}/></a></span></div></div></div><div className="contact-form-panel"><Eyebrow>DROP US A MESSAGE</Eyebrow><ContactForm/></div></div></section></>}
