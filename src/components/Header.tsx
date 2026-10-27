'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Brand } from './Brand';
import { navigation, site } from '@/lib/data';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
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
        {navigation.map(item => <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>{item.label}</Link>)}
      </nav>
      <div className="header-actions">
        <a href={site.joinUrl} target="_blank" rel="noopener noreferrer" className="header-join">JOIN US <ArrowUpRight size={15} /></a>
        <button type="button" className="menu-trigger" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(o => !o)}>{open ? <X size={24}/> : <Menu size={24}/>}</button>
      </div>
    </div>
    <nav id="mobile-navigation" className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
      {navigation.map((item, index) => <Link key={item.href} tabIndex={open ? 0 : -1} href={item.href}><span>{String(index+1).padStart(2,'0')}</span>{item.label}<ArrowUpRight size={17}/></Link>)}
      <Link tabIndex={open ? 0 : -1} href="/contact"><span>10</span>Contact<ArrowUpRight size={17}/></Link>
    </nav>
  </header>;
}
