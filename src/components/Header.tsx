'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Brand } from './Brand';
import { navigation, site } from '@/lib/data';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const moreRef = useRef<HTMLDetailsElement>(null);
  const primaryNavigation = navigation.filter(item => !['/ascent', '/resources', '/merch', '/lms'].includes(item.href));
  const moreNavigation = navigation.filter(item => ['/ascent', '/resources', '/merch', '/lms'].includes(item.href));
  useEffect(() => { setOpen(false); if (moreRef.current) moreRef.current.open = false; }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {primaryNavigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} className={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/')) ? 'active' : ''}>{item.label}</Link>)}
        <details className="nav-more" ref={moreRef}><summary>Explore <ChevronDown size={14}/></summary>
          <div className="nav-more__panel">{moreNavigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}<ArrowUpRight size={14}/></Link>)}
            <Link href="/contact">Contact <ArrowUpRight size={14}/></Link></div></details>
      </nav>
      <div className="header-actions">
        <a href={site.joinUrl} target="_blank" rel="noopener noreferrer" className="header-join">JOIN US <ArrowUpRight size={15} /></a>
        <button type="button" className="menu-trigger" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(o => !o)}>{open ? <X size={24}/> : <Menu size={24}/>}</button>
      </div>
    </div>
    <nav id="mobile-navigation" className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
      {navigation.map((item, index) => <Link key={item.href} tabIndex={open ? 0 : -1} aria-current={pathname === item.href ? 'page' : undefined} href={item.href}><span>{String(index+1).padStart(2,'0')}</span>{item.label}<ArrowUpRight size={17}/></Link>)}
      <Link tabIndex={open ? 0 : -1} href="/contact"><span>{String(navigation.length + 1).padStart(2,'0')}</span>Contact<ArrowUpRight size={17}/></Link>
    </nav>
  </header>;
}
