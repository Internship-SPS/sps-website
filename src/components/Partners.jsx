import React from 'react'

import LogoLoop from './LogoLoop/LogoLoop';



// Alternative with image sources
const imageLogos = [
  { src: "/images/partners_logo_1.webp", alt: "Partner 1", href: "#" },
  { src: "/images/partners_logo_2.webp", alt: "Partner 2", href: "#" },
  { src: "/images/partners_logo_3.webp", alt: "Partner 3", href: "#" },
  { src: "/images/partners_logo_4.webp", alt: "Partner 4", href: "#" },
  { src: "/images/partners_logo_5.webp", alt: "Partner 5", href: "#" },
  { src: "/images/partners_logo_6.webp", alt: "Partner 6", href: "#" },
  { src: "/images/partners_logo_7.webp", alt: "Partner 7", href: "#" },
  { src: "/images/partners_logo_8.webp", alt: "Partner 8", href: "#" },
  { src: "/images/partners_logo_9.webp", alt: "Partner 9", href: "#" },
  { src: "/images/partners_logo_10.webp", alt: "Partner 10", href: "#" },
  { src: "/images/partners_logo_11.webp", alt: "Partner 11", href: "#" },
  { src: "/images/partners_logo_12.webp", alt: "Partner 12", href: "#" },
  { src: "/images/partners_logo_13.webp", alt: "Partner 13", href: "#" },
  { src: "/images/partners_logo_14.webp", alt: "Partner 14", href: "#" },
  { src: "/images/partners_logo_15.png", alt: "Partner 15", href: "#" },
  { src: "/images/partners_logo_16.png", alt: "Partner 16", href: "#" },
  { src: "/images/partners_logo_17.png", alt: "Partner 17", href: "#" },
  { src: "/images/partners_logo_18.png", alt: "Partner 18", href: "#" },
];


const Partners = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-30 px-5">Our Technology Partners</h2>
        <div className="w-full" style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#f9fafb"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  )
}

export default Partners
