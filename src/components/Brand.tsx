import Image from 'next/image';
import Link from 'next/link';
export function Brand({ compact = false }: {compact?: boolean}) {
  return <Link href="/" className={`brand ${compact ? 'brand--small' : ''}`} aria-label="Leo District 306 D7 — home">
    <Image src="/leo-crest.png" alt="Leo District crest cropped from supplied palette reference" width={53} height={57} className="brand__mark" priority />
    <span className="brand__words"><strong>LEO DISTRICT <em>306 D7</em></strong><small>LEAD <b>·</b> SERVE <b>·</b> GROW</small></span>
  </Link>;
}
