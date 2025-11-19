import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Home component
import Home from './pages/Home';

// Import Product pages
import Spm from './pages/products/Spm';
import IBM from './pages/products/IBM';
import ProductOthers from './pages/products/Others';

// Import Service pages
import CyberSecurity from './pages/services/CyberSecurity';
import Cloud from './pages/services/Cloud';
import AiAutomation from './pages/services/AiAutomation';
import Collaboration from './pages/services/Collaboration';
import ServiceTraining from './pages/services/Training';

// Import Vertical pages
import PublicSector from './pages/verticals/PublicSector';
import Industrials from './pages/verticals/Industrials';
import Healthcare from './pages/verticals/Healthcare';
import Retail from './pages/verticals/Retail';
import Energy from './pages/verticals/Energy';
import Financial from './pages/verticals/Financial';
import Telecommunications from './pages/verticals/Telecommunications';

// Import SpinnLabs pages
import Academia from './pages/spinnLabs/Academia';
import Industry from './pages/spinnLabs/Industry';
import CentersOfExpertise from './pages/spinnLabs/CentersOfExpertise';
import Startups from './pages/spinnLabs/Startups';

// Import Activities pages
import Internship2025 from './pages/activities/Internship2025';
import Webinars from './pages/activities/Webinars';
import Workshops from './pages/activities/Workshops';
import SpecialInterestGroups from './pages/activities/SpecialInterestGroups';
import ActivityTraining from './pages/activities/Training';

// Import About pages
import OurStory from './pages/about/OurStory';
import Careers from './pages/about/Careers';

// Import Contact page
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Product Routes */}
          <Route path="/products/spm" element={<Spm />} />
          <Route path="/products/ibm" element={<IBM />} />
          <Route path="/products/others" element={<ProductOthers />} />
          
          {/* Service Routes */}
          <Route path="/services/cybersecurity" element={<CyberSecurity />} />
          <Route path="/services/cloud" element={<Cloud />} />
          <Route path="/services/ai-automation" element={<AiAutomation />} />
          <Route path="/services/collaboration" element={<Collaboration />} />
          <Route path="/services/training" element={<ServiceTraining />} />
          
          {/* Vertical Routes */}
          <Route path="/verticals/public-sector" element={<PublicSector />} />
          <Route path="/verticals/industrials" element={<Industrials />} />
          <Route path="/verticals/healthcare" element={<Healthcare />} />
          <Route path="/verticals/retail" element={<Retail />} />
          <Route path="/verticals/energy" element={<Energy />} />
          <Route path="/verticals/financial" element={<Financial />} />
          <Route path="/verticals/telecommunications" element={<Telecommunications />} />
          
          {/* SpinnLabs Routes */}
          <Route path="/spinnlabs/academia" element={<Academia />} />
          <Route path="/spinnlabs/industry" element={<Industry />} />
          <Route path="/spinnlabs/centers-of-expertise" element={<CentersOfExpertise />} />
          <Route path="/spinnlabs/startups" element={<Startups />} />
          
          {/* Activities Routes */}
          <Route path="/activities/internship-2025" element={<Internship2025 />} />
          <Route path="/activities/webinars" element={<Webinars />} />
          <Route path="/activities/workshops" element={<Workshops />} />
          <Route path="/activities/special-interest-groups" element={<SpecialInterestGroups />} />
          <Route path="/activities/training" element={<ActivityTraining />} />
          
          {/* About Routes */}
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/careers" element={<Careers />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
