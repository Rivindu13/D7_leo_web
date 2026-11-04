
import Image from 'next/image';
import Link from 'next/link';
import { districtMedia } from '@/lib/district-media';

type BrandProps = {
  compact?: boolean;
};

export function Brand({ compact = false }: BrandProps) {
  return (
    <Link
      href="/"
      className={`brand ${compact ? 'brand--small' : ''}`}
      aria-label="Leo District 306 D7 — Home"
    >
      <Image
        src={districtMedia.crest.src}
        alt=""
        width={185}
        height={197}
        className="brand__mark"
        priority={!compact}
      />

      <span className="brand__words">
        <strong>
          LEO DISTRICT <em>306 D7</em>
        </strong>
        <small>
          LEAD <b>·</b> SERVE <b>·</b> GROW
        </small>
      </span>
    </Link>
  );
}
