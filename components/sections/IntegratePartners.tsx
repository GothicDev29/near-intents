import Image from 'next/image';

const LOGOS = [
  { src: '/images/slider-logos/near-protocol-near-logo.png', alt: 'NEAR Protocol' },
];

export function IntegratePartners() {
  // Duplicamos para loop infinito sin salto
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="py-16 bg-[#1E1E1E] overflow-hidden">
      <div className="flex animate-marquee gap-16 w-max">
        {track.map((logo, i) => (
          <div key={i} className="flex items-center justify-center h-12 w-32 shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={128}
              height={48}
              className="object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
