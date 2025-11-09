import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-white overflow-hidden w-full">

        <div className=" px-5 py-16 flex flex-col md:flex-row items-center relative z-10">

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



      <section className="bg-gray-50  ">
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
        <section className=" pt-10 mb-10">

          <div className="mx-20 grid grid-cols-2 gap-8">

            <div className="flex p-5" style={{ backgroundColor: "#FEF8E6" }}>
              <div className="container">
                <h4 className="mb-3 font-semibold text-2xl">AZALIO</h4>
                <p className="mb-3">Keep your frontline employees happy, Reward Employees. Track employee engagement. Manage workforce operations.</p>
                <button className="bg-[#201942] text-white px-6 py-2.5 rounded-full border border-[#201942] hover:bg-white hover:text-[#201942] transition-colors duration-300">View App</button>
              </div>
              <div className="px-6 flex items-center justify-center">
                <img src="public\images\azalio.webp" alt="" />
              </div>

            </div>



            <div className="flex p-5" style={{ backgroundColor: "#DEFFFB" }}>
              <div className="container">
                <h4 className="mb-2 font-semibold text-2xl">MYID Self Verify</h4>
                <p className="mb-2 text-lg font-medium text-gray-700">Manage. Protect. Learn.</p>
                <p className="mb-3">MYID helps organizations allow their employees to manage their corporate identity through secure and easy-to-use mobile application.</p>
                <button className="bg-[#201942] text-white px-6 py-2.5 rounded-full border border-[#201942] hover:bg-white hover:text-[#201942] transition-colors duration-300">View App</button>
              </div>
              <div className="px-6 flex items-center justify-center">
                <img src="public\images\myid.webp" alt="MYID" className="object-contain" />
              </div>
            </div>

            <div className="flex p-5" style={{ backgroundColor: "#E9E7E7" }}>
              <div className="container">
                <h4 className="mb-3 font-semibold text-2xl">CSM</h4>
                <p className="mb-3">CSM helps organizations augment security management by standardizing it around NIST. It helps Identify, Protect, Detect, Respond, Recover maturity of People, Processes & Technology of an organization, conduct risk assessment, create System Security Plan (SSP) and update Plan of Actions and Milestones on a quarterly basis.</p>
              </div>
              <div className="px-6 flex items-center justify-center">
                <img src="public\images\csm.webp" alt="CSM" className="object-contain" />
              </div>
            </div>

            <div className="flex p-5" style={{ backgroundColor: "#9ADFF8" }}>
              <div className="container">
                <h4 className="mb-3 font-semibold text-2xl">BMS</h4>
                <p className="mb-3">Get real-time insights into every aspect of your company's performance, optimize processes and streamline business with our Business Management System.</p>
              </div>
              <div className="px-6 flex items-center justify-center">
                <img src="public\images\bms.png" alt="BMS" className="object-contain" />
              </div>
            </div>


          </div>
        </section>


        <section className="pt-20 pb-16">
          <div className="mx-auto max-w-[1500px] px-8 grid grid-cols-3 gap-8">

           
            <div className=" relative text-center px-6 pb-7 mb-10  bg-white w-100 shadow-lg rounded-2xl" >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="images/prod_1_logo.png"
                  alt="CREyield Icon"
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <h4 className="mb-5 mt-20 font-semibold text-2xl">CREyield</h4>
              <p className="mb-10">Bill Quinn wanted a system efficient enough to enable Owners and Investors in their every concern regarding real estate. The main idea was to design a system that could help users gain an insight about the ongoing fluctuations in the real estate trends and could henceforth valuate their property. SPS delivered a solution that enabled the CREyield system users in every aspect of managing real estate. The system allowed its users to estimate taxes, appeal against government calculated tax, prepare and submit income and expense reports, rent rolls for the property, assign properties to agents, view financial and property status reports, and manage tax rules and tax appeals</p>
              <a className="text-[#007BFF] font-medium">Learn More</a>
            </div>

           
            <div className=" relative text-center px-6 pb-7 mb-10 bg-white w-100 shadow-lg rounded-2xl" >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="images/prod_2_logo.png"
                  alt="CS Icon"
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <h4 className="mb-5 mt-20 font-semibold text-2xl">CS</h4>
              <p className="mb-10">We empower organizations to fortify their security management through our comprehensive CSM. Our approach is rooted in standardization, specifically around the NIST framework. CSM serves as a powerful tool to elevate your security posture, focusing on the critical domains of Identify, Protect, Detect, Respond, and Recover. Key Features of Our CSM Services: Maturity Augmentation: CSM enables organizations to enhance the maturity levels of People, Processes, and Technology, ensuring a holistic approach to cybersecurity that aligns with industry best practices.</p>
              <a className="text-[#007BFF] font-medium">Learn More</a>
            </div>

        
            <div className=" relative text-center px-6 pb-7 mb-10 bg-white w-100 shadow-lg rounded-2xl" >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="images/prod_3_logo.png"
                  alt="MyHealthChart Icon"
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <h4 className="mb-5 mt-20 font-semibold text-2xl">MyHealthChart</h4>
              <p className="mb-10">Dr. Qasim Aziz had a vision to develop an application that could help patients manage and communicate their personal health data to Healthcare Professionals (HCPs) anytime and anywhere. SPS team worked with Dr. Aziz to understand his vision, architect a solution, and built an app to make his vision a reality. Please visit MyHealthChart website for details</p>
              <a className="text-[#007BFF] font-medium">Learn More</a>
            </div>

            
            <div className=" relative text-center px-6 pb-7 mb-10 bg-white w-100 shadow-lg rounded-2xl" >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="images/prod_4_logo.png"
                  alt="Analytics Dashboard Icon"
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <h4 className="mb-5 mt-20 font-semibold text-2xl">Analytics Dashboard</h4>
              <p className="mb-10">Aggregate and display critical metrics and key performance indicators (KPIs) in a single screen, enabling users to monitor and examine business performance at a glance. Extract and communicate high-level insights such as anomalies, issues and trends for end-users of all skill levels.</p>
              <a className="text-[#007BFF] font-medium">Learn More</a>
            </div>

           
            <div className=" relative text-center px-6 pb-7 mb-10 bg-white w-100 shadow-lg rounded-2xl" >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="images/prod_5_logo.png"
                  alt="AIMY Icon"
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <h4 className="mb-5 mt-20 font-semibold text-2xl">AIMY</h4>
              <p className="mb-10">AIMY - My AI Friend. is a recipient of IBM Watson Build challenge 2018 and received Special Recognition for Social Justice award. AIMY is an interactive device that can talk and hold conversation with people via voice-user interface. AIMY is specifically targeted to those who suffer from depression and loneliness.</p>
              <a className="text-[#007BFF] font-medium">Learn More</a>
            </div>

            
            <div className=" relative text-center px-6 pb-7 mb-10 bg-white w-100 shadow-lg rounded-2xl" >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="images/prod_6_logo.png"
                  alt="HerDomain Icon"
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <h4 className="mb-5 mt-20 font-semibold text-2xl">HerDomain</h4>
              <p className="mb-10">HerDomain is a non-profit working in South Asia and the Middle East to increase women's entry and advancement in the digital economy. We are committed to supporting women to earn a fair income, shape their communities and excel in their careers.</p>
              <a className="text-[#007BFF] font-medium">Learn More</a>
            </div>

           
            <div className=" relative text-center px-6 pb-7 mb-10 bg-white w-100 shadow-lg rounded-2xl" >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="images/prod_7_logo.png"
                  alt="Watch Over Icon"
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <h4 className="mb-5 mt-20 font-semibold text-2xl">Watch Over</h4>
              <p className="mb-10">Many parents use apps to keep tabs on their children starting the day those children get their first smartphones. Working parents can see that their children got on the bus in the morning and check on them after school, without needing to call or text. Parents of new drivers can have peace of mind knowing their children arrived safely where they said they would go.</p>
              <a className="text-[#007BFF] font-medium">Learn More</a>
            </div>

            
            <div className=" relative text-center px-6 pb-7 mb-10 bg-white w-100 shadow-lg rounded-2xl" >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="images/prod_8_logo.png"
                  alt="Watch Over Icon"
                  className="w-16 h-16 rounded-md"
                />
              </div>
              <h4 className="mb-5 mt-20 font-semibold text-2xl">Watch Over</h4>
              <p className="mb-10">Many parents use apps to keep tabs on their children starting the day those children get their first smartphones. Working parents can see that their children got on the bus in the morning and check on them after school, without needing to call or text. Parents of new drivers can have peace of mind knowing their children arrived safely where they said they would go.</p>
              <a className="text-[#007BFF] font-medium">Learn More</a>
            </div>

          </div>

        </section>
      </section>
    </>

  );
};

export default HeroSection;
