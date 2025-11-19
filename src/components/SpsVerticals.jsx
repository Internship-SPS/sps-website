import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SpsVerticals  = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const verticals = [
    {
      id: 'public-sector',
      title: 'Public Sector',
      bgImage: '/images/Verticals_img_1.webp',
      bgColor: 'from-orange-900/80 to-orange-700/80',
      shortDescription: 'Now more than ever, governments need to adapt to changing environments. The coronavirus pandemic has demonstrated the urgency for advancing digital transformation and IT modernization across all levels',
      fullDescription: 'Now more than ever, governments need to adapt to changing environments. The coronavirus pandemic has demonstrated the urgency for advancing digital transformation and IT modernization across all levels of government. To support citizens with greater confidence and speed, government agencies must build smart cities and communities using new technologies that help boost agility, scale for operational resilience and provide actionable insights.',
      links: [
        { label: 'Government', url: '#' },
        { label: 'Public Safety', url: '#' },
        { label: 'Education', url: '#' },
        { label: 'Healthcare – Mid All', url: '#' },
        { label: 'County Government', url: '#' }
      ]
    },
    {
      id: 'industrials',
      title: 'Industrials',
      bgImage: '/images/Verticals_img_2.webp',
      bgColor: 'from-purple-900/80 to-purple-700/80',
      shortDescription: 'Many industrial enterprises are prime for analytics and IoT because they struggle with antiquated infrastructure that negatively affects business processes, security posture, and growth. Manufacturers',
      fullDescription: 'Many industrial enterprises are prime for analytics and IoT because they struggle with antiquated infrastructure that negatively affects business processes, security posture, and growth. Manufacturers are accelerating digital transformation using an integrated approach, applying AI, hybrid cloud and automation to achieve new levels of agility, efficiency, quality and sustainability.',
      links: [
        { label: 'Manufacturing', url: '#' },
        { label: 'Textile', url: '#' },
        { label: 'Utilities', url: '#' }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      bgImage: '/images/Verticals_img_3.webp',
      bgColor: 'from-teal-900/80 to-teal-600/80',
      shortDescription: 'We support the healthcare industry and those who deliver health and human services, via telehealth or in person, to drive improvements in cost and quality, innovation',
      fullDescription: 'We support the healthcare industry and those who deliver health and human services, via telehealth or in person, to drive improvements in cost and quality, innovation and outcomes. We offer a unique combination of advanced technology solutions to help you drive impactful change, services to digitally transform organizations, and the ability to implement at scale, with the support of a trusted partner.',
      links: [
        { label: 'Telehealth & Remote Patient Monitoring', url: '#' },
        { label: 'Multi-Clinic Consolidation', url: '#' },
        { label: 'Compliance Requirements', url: '#' },
        { label: 'Patient Experience', url: '#' },
        { label: 'Health Systems Interoperability', url: '#' },
        { label: 'Retail', url: '#' }
      ]
    },
    {
      id: 'retail',
      title: 'Retail',
      bgImage: '/images/Verticals_img_4.webp',
      bgColor: 'from-pink-900/80 to-pink-700/80',
      shortDescription: 'The challenges facing retailers can be overwhelming, including navigating the disruption caused by the current COVID-19 pandemic. The future of retail requires overcoming the complexity in',
      fullDescription: 'The challenges facing retailers can be overwhelming, including navigating the disruption caused by the current COVID-19 pandemic. The future of retail requires overcoming the complexity in your business and to persevere, consider the opportunity to rethink your business model and the role of the store. Retail technology trends are towards powerful, contactless digital customer engagements and e-commerce to safer workplaces and more agile operations and supply chains. Now is the time to unlock the potential for a more resilient and sustainable business model and ecosystem. Technologies such as hybrid cloud, automation, IoT and artificial intelligence can help accelerate your transformation and position you to emerge smarter, more agile and ready to meet changing consumer needs',
      links: [
        { label: 'Supply Chain', url: '#' },
        { label: 'Marketing/Merchandising', url: '#' },
        { label: 'Personalization & Localization', url: '#' },
        { label: 'Omni-channel Operations', url: '#' },
        { label: 'Convenience Stores', url: '#' }
      ]
    },
    {
      id: 'energy',
      title: 'Energy',
      bgImage: '/images/Verticals_img_5.webp',
      bgColor: 'from-blue-900/80 to-blue-700/80',
      shortDescription: 'In today\'s changing energy landscape, business leaders recognize that sustainability is fundamental to remain competitive. As the energy industry shifts to a more ecosystem-centric model to combat',
      fullDescription: 'In today\'s changing energy landscape, business leaders recognize that sustainability is fundamental to remain competitive. As the energy industry shifts to a more ecosystem-centric model to combat climate change, investing in sustainable energy sources helps engage business and people to participate in the change. Utilize the latest technologies to ensure your utility is ready for the new energy ecosystem',
      links: [
        { label: 'Electric', url: '#' },
        { label: 'Oil & Gas', url: '#' }
      ]
    },
    {
      id: 'financial',
      title: 'Financial',
      bgImage: '/images/Verticals_img_6.webp',
      bgColor: 'from-green-900/80 to-green-700/80',
      shortDescription: 'Financial services firms require real-time modernization to change how they work. From banking to capital markets, payments to insurance, scalable technology drives innovation, service and security.',
      fullDescription: 'Financial services firms require real-time modernization to change how they work. From banking to capital markets, payments to insurance, scalable technology drives innovation, service and security. Financial institutions occupy a unique space within society and require modern financial services IT solutions. To gain a competitive advantage, organizations need to provide business continuity, achieve customer-centricity, meet regulatory compliance requirements and stay ahead of cybersecurity risks while offering exceptional customer experiences. A digital transformation helps organizations take advantage of existing data, improve automation and build the tools needed to promote new revenue growth. But to keep up with constantly changing needs, an efficient, secure and agile cloud that leverages the latest technologies, including artificial intelligence, IoT, blockchain and big data is crucial. Let SPS\'s long-standing financial services industry expertise help you get started',
      links: [
        { label: 'Insurance', url: '#' },
        { label: 'Banking', url: '#' }
      ]
    },
    {
      id: 'telecommunications',
      title: 'Telecommunications',
      bgImage: '/images/Verticals_img_7.jpg',
      bgColor: 'from-cyan-900/80 to-blue-600/80',
      shortDescription: 'Telecommunications is experiencing a seismic shift and communications service providers are evolving to adapt. As connectivity services become more commoditized—limiting room for',
      fullDescription: 'Telecommunications is experiencing a seismic shift and communications service providers are evolving to adapt. As connectivity services become more commoditized—limiting room for differentiation—the opportunity for reinvention is massive thanks to technological innovation. Operators today aim to capitalize with bold, value-adding enterprise services. SPS helps telcos unlock new revenue potential through business and delivery transformation by optimizing network operations, enabling differentiated enterprise experiences at the edge and beyond, and fortifying cybersecurity. At SPS, we are committed to helping our customers solve some of networking\'s biggest challenges.',
      links: [
        { label: 'Telcos', url: '#' }
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">SPS Verticals</h2>
        
        {/* First Row - 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {verticals.slice(0, 5).map((vertical) => (
            <div key={vertical.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              {/* Image Section with Overlay */}
              <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${expandedCards[vertical.id] ? 'min-h-[400px] h-auto' : 'h-48'}`}>
                <img 
                  src={vertical.bgImage} 
                  alt={vertical.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Text Content on Image */}
                <div className="absolute inset-0 p-4 text-white flex flex-col bg-black/30">
                  <h3 className="text-lg font-bold mb-2 drop-shadow-lg">{vertical.title}</h3>
                  <p className="text-xs leading-relaxed drop-shadow-md">
                    {expandedCards[vertical.id] ? vertical.fullDescription : vertical.shortDescription}
                    {' '}
                    <button 
                      onClick={() => toggleExpand(vertical.id)}
                      className="text-white text-xs font-bold hover:underline inline-block ml-1 drop-shadow-lg"
                    >
                      {expandedCards[vertical.id] ? 'Read Less' : '...'}
                    </button>
                  </p>
                </div>
              </div>
              
              {/* Links Section */}
              <div className="p-4 flex-grow bg-white">
                <ul className="space-y-2">
                  {vertical.links.map((link, index) => (
                    <li key={index} className="flex items-center justify-between group">
                      <Link 
                        to={link.url} 
                        className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex-grow"
                      >
                        {link.label}
                      </Link>
                      <svg 
                        className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="flex justify-center gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {verticals.slice(5, 7).map((vertical) => (
              <div key={vertical.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full md:w-80">
                {/* Image Section with Overlay */}
                <div className={`relative overflow-hidden transition-all duration-700 ease-in-out ${expandedCards[vertical.id] ? 'min-h-[400px] h-auto' : 'h-48'}`}>
                  <img 
                    src={vertical.bgImage} 
                    alt={vertical.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Text Content on Image */}
                  <div className="absolute inset-0 p-4 text-white flex flex-col bg-black/30">
                    <h3 className="text-lg font-bold mb-2 drop-shadow-lg">{vertical.title}</h3>
                    <p className="text-xs leading-relaxed drop-shadow-md">
                      {expandedCards[vertical.id] ? vertical.fullDescription : vertical.shortDescription}
                      {' '}
                      <button 
                        onClick={() => toggleExpand(vertical.id)}
                        className="text-white text-xs font-bold hover:underline inline-block ml-1 drop-shadow-lg"
                      >
                        {expandedCards[vertical.id] ? 'Read Less' : '...'}
                      </button>
                    </p>
                  </div>
                </div>                {/* Links Section */}
                <div className="p-4 flex-grow bg-white">
                  <ul className="space-y-2">
                    {vertical.links.map((link, index) => (
                      <li key={index} className="flex items-center justify-between group">
                        <Link 
                          to={link.url} 
                          className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex-grow"
                        >
                          {link.label}
                        </Link>
                        <svg 
                          className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpsVerticals;
