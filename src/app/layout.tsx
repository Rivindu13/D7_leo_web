import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
 title: {default:'Leo District 306 D7 | Lead · Serve · Grow',template:'%s | Leo District 306 D7'},
 description:'A next-generation website concept for Leo District 306 D7 — young leaders creating impact across Sri Lanka.',
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><div className="app-shell"><Header/><main id="main-content">{children}</main><Footer/></div></body></html>;
}
