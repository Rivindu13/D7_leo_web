import type { Metadata } from 'next';
import { Award } from 'lucide-react';
import { CTA, Eyebrow, PageHero } from '@/components/Shared';
import { AchievementExplorer } from '@/components/AchievementExplorer';
import { legacySources } from '@/lib/legacy-content';
export const metadata:Metadata={title:'D7 All-Rounders'};
export default function AllRounders(){return <><PageHero kicker="CELEBRATING LEOS" title="Excellence has" accent="many faces." description="Celebrating Leos whose accomplishments make our district proud."/><section className="section"><div className="container"><div className="awards-feature"><div className="awards-feature__medal"><Award size={120} strokeWidth={0.8}/><div className="awards-feature__glow"/></div><div><Eyebrow>RECOGNITION / IMPACT / GROWTH</Eyebrow><h2>Every achievement <em>has a story.</em></h2><p>Explore records published in the previous district All-Rounders archive for the July 2025–June 2026 term. The available historical list includes nine named recognitions.</p><a className="text-link" href={legacySources.allRounders} target="_blank" rel="noopener noreferrer">Read original stories ↗</a></div></div><div className="section-top"><div><Eyebrow>THE DISTRICT ARCHIVE</Eyebrow><h2>Made to <em>inspire.</em></h2></div><span className="preview-chip">HISTORICAL CONTENT</span></div><AchievementExplorer/></div></section><CTA compact/></>}
