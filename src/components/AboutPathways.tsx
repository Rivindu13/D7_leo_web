
import Link from 'next/link';
import {
  ArrowUpRight,
  Compass,
  UsersRound,
  MessageCircle,
} from 'lucide-react';

import { SectionHeading } from '@/components/Shared';

const pathways = [
  {
    number: '01 / EXPLORE',
    title: 'Find your Leo club',
    description:
      'Explore Alpha and Omega Leo clubs in the district directory.',
    href: '/about#district-clubs',
    action: 'Explore clubs',
    icon: Compass,
  },
  {
    number: '02 / LEAD',
    title: 'Meet our leaders',
    description:
      'Discover the district leadership structure and council archive.',
    href: '/council',
    action: 'Meet the council',
    icon: UsersRound,
  },
  {
    number: '03 / CONNECT',
    title: 'Get involved',
    description:
      'Connect with the district to learn about opportunities and collaborations.',
    href: '/contact',
    action: 'Contact us',
    icon: MessageCircle,
  },
];

export function AboutPathways() {
  return (
    <section className="section about-pathways">
      <div className="container">
        <SectionHeading
          eyebrow="DISCOVER YOUR PLACE"
          title="Explore our"
          accent="district."
          description="Discover opportunities to connect, lead and serve with Leo District 306 D7."
        />

        <div className="about-pathways__grid">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;

            return (
              <Link
                href={pathway.href}
                key={pathway.href}
                className="about-pathways__card"
              >
                <Icon size={34} strokeWidth={1.5} />

                <small>{pathway.number}</small>

                <h3>{pathway.title}</h3>

                <p>{pathway.description}</p>

                <span className="about-pathways__action">
                  {pathway.action}
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
