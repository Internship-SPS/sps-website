import React from "react";

const HeroSection = () => {
  return (
    <>
    <section className="relative bg-white overflow-hidden ">
     
      <div className="container mx-auto px-5 py-16 flex flex-col md:flex-row items-center relative z-10">
 
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">What if</h1>

          <ul className="list-disc pl-6 text-gray-800 space-y-3 mb-6 leading-relaxed">
            <li>You could enhance your Identity Management</li>
            <li>You could modernize your legacy enterprise information systems</li>
            <li>You could have Security Operations Center 24x7</li>
            <li>You could have your Cyber Security environment managed for you</li>
            <li>You could have Compliance Artifacts for your Auditors at click of a button</li>
          </ul>

          <button className="rounded-full border border-indigo-900 text-indigo-900 px-5 py-2 hover:bg-indigo-900 hover:text-white transition">
            Request Consultation
          </button>
        </div>

   
        <div
          className="md:w-1/2 w-full h-72 md:h-[520px] rounded-lg relative flex items-center justify-center"
          style={{
            backgroundImage: "url('../images/hero-image.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
          <div className="text-center px-6 md:px-12">
            <h2 className="text-white text-xl md:text-2xl font-semibold leading-tight">
              We are an <span className="text-cyan-300">IT Solutions Provider</span>
            </h2>
            <p className="text-white text-lg md:text-2xl font-bold mt-3">
              focused on <span className="text-cyan-300">Solving Business Problems</span>
            </p>
            <p className="text-white mt-2 md:mt-3">
              leveraging
            </p>
            <p className="text-yellow-300 font-semibold text-lg md:text-xl mt-1">
              AI, Cloud, Automation & Cybersecurity
            </p>

            <div className="mt-6">
              <button className="bg-white text-gray-800 rounded-full px-6 py-2 shadow-sm hover:shadow-md transition">
                How can we help you today?
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div className="absolute inset-x-1 -bottom-6 flex justify-end z-20 pointer-events-none">
        <img
          src="/images/Hero-curve-overlay.svg"
          alt="curve overlay"
          className="w-full md:w-3/5 lg:w-2/3 object-cover"
        />sectionasdfasdfasd
      </div>

     
      <div className="relative z-10">
        <div className="bg-[#24123f] text-center text-white py-6 px-4 text-sm md:text-base">
          Whether you are an entrepreneur looking for an engineering team or an
          enterprise pursuing digital transformation we can help you bring your
          vision to reality.
        </div>
      </div>
    </section>



    <section className="bg-gray-50 ">
      <div className="container mx-auto px-5 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
      
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI & Automation</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We develop AI based solutions for corporates & startups. From strategy to execution,
              we guide our clients through their next digital transformation leveraging technologies
              like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning,
              Deep Learning & IoT. We go beyond analytics to give our customers the content they crave.
            </p>
            <p className="text-sm italic text-gray-700 font-medium">
              Innovation enthusiasts: Think, design, implement better ways.
            </p>
          </div>

        
          <div className="md:col-span-2 flex justify-center">
            <div className="flex flex-col sm:flex-row gap-8">
         
              <div className="relative bg-white rounded-2xl shadow-lg w-64 sm:w-72 p-6">
             
                <div className="absolute -top-3 left-6 right-6 h-3 bg-[#0b2347] rounded-t-xl"></div>

                <h4 className="text-gray-800 font-semibold mb-4">Data Science</h4>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 list-none pl-3">
                  <li className="before:content-['\2022'] before:text-sm before:text-gray-400">Generative AI</li>
                  <li className="before:content-['\2022'] before:text-sm before:text-gray-400">Internet of Things</li>
                  <li className="before:content-['\2022'] before:text-sm before:text-gray-400">Data Analytics</li>
                </ul>

                
                <div className="flex justify-center mb-4">
                  <img src="public\images\DataScience-logo.webp" alt="data" className="w-24 h-24 object-contain" />
                </div>

                <a className="text-blue-500 text-sm font-medium block text-center">Read More</a>
              </div>

           
              <div className="relative bg-white rounded-2xl shadow-lg w-64 sm:w-72 p-6">
                <div className="absolute -top-3 left-6 right-6 h-3 bg-[#0b2347] rounded-t-xl"></div>

                <h4 className="text-gray-800 font-semibold mb-4">Automation</h4>
                <ul className="text-sm text-gray-600 space-y-2 mb-6 list-none pl-3">
                  <li className="before:content-['\2022'] before:text-sm before:text-gray-400">Business Process Modeling Using ARIS</li>
                  <li className="before:content-['\2022'] before:text-sm before:text-gray-400">Business Process Automation Using webMethods</li>
                  <li className="before:content-['\2022'] before:text-sm before:text-gray-400">Code Application Development Using Appi</li>
                </ul>

                <div className="flex justify-center mb-4">
                  <img src="public\images\Automation-logo.webp" alt="automation" className="w-24 h-24 object-contain" />
                </div>

                <a className="text-blue-500 text-sm font-medium block text-center">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="bg-gradient-to-r from-[#26113f] via-[#3a245f] to-[#5d3ea8] text-white py-4">
        <div className="container mx-auto px-5 text-center">
          <h3 className="text-2xl font-semibold mb-2">Our Startups</h3>
          <p className="font-medium mb-4">Digital solutions we have built for ourselves and our customers</p>
          <p className="text-sm  mx-auto">
            We develop AI based solutions for corporate & startups. From strategy to execution, we guide our clients through their next digital transformation leveraging technologies like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning & IoT.
          </p>
        </div>
      </div>
    </section>


    <section className="bg-gray-50">

    <div className="container mx-auto  grid grid-cols-2">
          
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      <br className="hidden lg:inline-block" />readymade gluten
    </h1>
    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    <div className="flex justify-center">
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
    </div>
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
  </div>
</div>




          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      <br className="hidden lg:inline-block" />readymade gluten
    </h1>
    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    <div className="flex justify-center">
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
    </div>
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
  </div>
</div>





          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      <br className="hidden lg:inline-block" />readymade gluten
    </h1>
    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    <div className="flex justify-center">
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
    </div>
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
  </div>
</div>





          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      <br className="hidden lg:inline-block" />readymade gluten
    </h1>
    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    <div className="flex justify-center">
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
    </div>
  </div>
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
  </div>
</div>

    </div>  
    </section>
</>
    
  );
};

export default HeroSection;
