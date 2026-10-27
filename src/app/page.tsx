import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronDown, Globe2, HeartHandshake, Sparkles, Users, Zap } from 'lucide-react';
import { CTA, Eyebrow, FeaturedProjects, SectionHeading } from '@/components/Shared';
import { projects } from '@/lib/data';

export default function Home() {
  return <>
    <section className="hero"><div className="hero-beam hero-beam--left"/><div className="hero-beam hero-beam--right"/>
      <div className="container hero-content">
        <div className="hero-copy"><Eyebrow>WELCOME TO LEO DISTRICT 306 D7</Eyebrow>
          <h1>THE FUTURE <span>IS OURS TO</span> <em>SHAPE.</em></h1>
          <p>A generation of changemakers. United by purpose, powered by passion, and driven to make a difference.</p>
          <div className="hero-buttons"><Link className="btn btn-gold" href="/projects">Explore our impact <ArrowUpRight size={19}/></Link><Link className="btn btn-outline" href="/about">Discover D7 <ArrowRight size={17}/></Link></div>
          <div className="hero-footnote"><span className="hero-footnote__symbol">✳</span><span>LEADERSHIP<br/>EXPERIENCE<br/>OPPORTUNITY</span></div>
        </div>
        <div className="hero-visual"><div className="hero-visual__glow"/><div className="hero-photo"><Image src="/images/hero-community.webp" alt="Illustrative scene of young Leo volunteers together at sunset" fill priority sizes="(max-width: 900px) 100vw, 50vw"/></div><div className="hero-photo__label"><span>THE POWER OF</span><strong>WE.</strong><ArrowDownRight size={36}/></div><div className="hero-visual__vertical">TOGETHER FOR A BETTER TOMORROW / 306 D7</div></div>
      </div>
      <div className="container hero-bottom"><span>SCROLL TO EXPLORE <ChevronDown size={15}/></span><span>SRI LANKA <span className="gold-spark">✦</span> YOUNG PEOPLE. REAL IMPACT.</span></div>
    </section>
    
    <section className="marquee-bar" aria-label="Our values"><div className="container"><span>LEAD WITH PURPOSE</span><span className="sep">✧</span><span>CREATE IMPACT</span><span className="sep">✧</span><span>GROW TOGETHER</span><span className="sep">✧</span><span>SHAPE TOMORROW</span></div></section>
    <section className="section section-projects" id="impact"><div className="container"><SectionHeading eyebrow="OUR MOVEMENT IN ACTION" title="Small actions." accent="Extraordinary impact." description="Explore activities preserved from the previous district website, with verified titles and dates from the public archive." href="/projects" linkLabel="All projects"/><FeaturedProjects/><p className="sample-note">Archived titles and dates are preserved; detailed galleries and additional records require the original CMS or source export.</p></div></section>
    <section className="section feature-section"><div className="container feature-grid"><div className="feature-art"><div className="feature-orbit feature-orbit--one"/><div className="feature-orbit feature-orbit--two"/>
          <div className="feature-center"><span>THE LEO SPIRIT</span><strong>LEAD.<br/><em>SERVE.</em><br/>GROW.</strong></div><span className="feature-tiny feature-tiny--one">LEO<br/>306 D7</span>\
          <span className="feature-tiny feature-tiny--two">✳</span></div><div className="feature-copy"><Eyebrow>MORE THAN A DISTRICT</Eyebrow><h2>Young hearts.<br/><em>Limitless possibilities.</em></h2><p>Leo District 306 D7 brings together young people who are ready to build friendships, develop leadership, and take meaningful action for their communities.</p>
          <div className="value-list"><div><Users size={21}/><span><strong>Discover your people</strong><small>Connect with a community that shares your passion.</small></span></div><div><Zap size={21}/><span><strong>Grow through leadership</strong><small>Develop confidence, skills, and new perspectives.</small></span></div>
          <div><HeartHandshake size={21}/><span><strong>Serve with purpose</strong>
          <small>Be part of initiatives that truly matter.</small></span></div></div><Link className="text-link" href="/about">Our story <ArrowUpRight size={18}/></Link></div></div></section>
    
    <section className="section initiatives" id="district-archive">
      <div className="container">
        <SectionHeading
          eyebrow="DISTRICT HIGHLIGHTS"
          title="Moments that"
          accent="matter."
          description="Look back at recent activities recorded in the district's previous website archive. These are past activities, not upcoming event announcements."
          href="/projects"
          linkLabel="View project archive"
        />

        <div className="event-grid">
          <div className="event-lead">
            <div className="event-lead__top">
              <span className="pill">FROM THE ARCHIVE</span>
              <Sparkles size={27} />
            </div>

            <div>
              <small>LEADERSHIP THROUGH ACTION</small>
              <h3>Every effort leaves a story.</h3>
              <p>
                Explore the district's previous initiatives,
                gatherings, and community projects.
              </p>
              <Link href="/projects" className="btn btn-outline">
                Explore projects <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="event-list">
            {projects.slice(0, 3).map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="event-row"
              >
                <time className="event-date" dateTime={project.date}>
                  <span>{project.date.slice(8, 10)}</span>
                  <small>
                    {project.date.slice(5, 7)}/{project.date.slice(0, 4)}
                  </small>
                </time>

                <div>
                  <span className="event-category">
                    {project.category} · Archived
                  </span>
                  <h3>{project.title}</h3>
                  <p>View the activity record and its original source.</p>
                </div>

                <ArrowUpRight size={21} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section numbers-section"><div className="container numbers-inner"><div><Eyebrow>ONE DISTRICT. MANY POSSIBILITIES.</Eyebrow><h2>Made of people.<br/><em>Driven by purpose.</em></h2></div><div className="numbers-cards"><Link href="/clubs"><Globe2 size={27}/><strong>Our clubs</strong><span>Explore the district <ArrowUpRight size={16}/></span></Link><Link href="/all-rounders"><Sparkles size={27}/><strong>All-Rounders</strong><span>Celebrate achievement <ArrowUpRight size={16}/></span></Link></div></div></section>
    <CTA />
  </>;
}
