import Link from 'next/link';
import { ArrowUpRight, Instagram, Mail, MapPin } from 'lucide-react';
import { Brand } from './Brand';
import { site } from '@/lib/data';

export function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-head"><div><p className="eyebrow">OUR NEXT CHAPTER STARTS HERE</p><h2>Let&apos;s make <em>impact.</em></h2></div><a className="btn btn-gold" href={site.joinUrl} target="_blank" rel="noopener noreferrer">Join the movement <ArrowUpRight size={18}/></a></div>
    <div className="footer-grid">
      <div><Brand compact/><p className="footer-description">A community of young changemakers. United through service, leadership, and opportunity.</p></div>
      <div><strong>Explore</strong><Link href="/about">About district</Link><Link href="/council">Our council</Link><Link href="/projects">Projects</Link><Link href="/events">Events</Link></div>
      <div><strong>Discover</strong><Link href="/all-rounders">D7 All-Rounders</Link><Link href="/ascent">Ascent magazine</Link><Link href="/merch">District merch</Link><Link href="/lms">LMS</Link></div>
      <div><strong>Stay connected</strong><a href={`mailto:${site.email}`}><Mail size={15}/>{site.email}</a><span><MapPin size={15}/>Sri Lanka</span><Link href="/contact"><Instagram size={15}/>Contact & social links</Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Leo District 306 D7. Redesign preview.</span><span>DESIGNED TO LEAD • BUILT TO SERVE</span></div>
  </div></footer>;
}
