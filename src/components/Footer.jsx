const Footer = () => {
  return (
    <footer className="bg-[#07080b] text-gray-300">
      <div className="container mx-auto px-5 py-12">
        <div className="grid md:grid-cols-3 gap-8">
         
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Business Groups</h4>
            <ul className="space-y-4">
              <li className="text-sm">AI</li>
              <li className="text-sm">Cloud</li>
              <li className="text-sm">Cybersecurity</li>
              <li className="text-sm">Events &amp; Learning</li>
              <li className="text-sm">Spinnlabs</li>
            </ul>
          </div>

  
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">More</h4>
            <ul className="space-y-4">
              <li className="text-sm">Our Story</li>
              <li className="text-sm">Events</li>
              <li className="text-sm">Careers</li>
              <li className="text-sm">Privacy Policy</li>
            </ul>
          </div>

  
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Details</h4>

            <p className="text-sm mb-3">
              2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.
            </p>

            <p className="text-sm mb-1">
              <span className="font-semibold text-white">Call Us :</span>{" "}
              <span className="text-gray-300">301-337-2290</span>
            </p>

            <p className="text-sm mb-1">
              <span className="font-semibold text-white">Email us :</span>{" "}
              <span className="text-gray-300">support@spsnet.com</span>
            </p>

            <p className="text-sm mb-4">
              <span className="font-semibold text-white">For Internship Queries:</span>{" "}
              <span className="text-gray-300">internship@spsnet.com</span>{" "}
              <span className="text-gray-300">or internqueries@spsnet.com</span>
            </p>

            <div className="flex gap-3 mt-3">
         
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                aria-label="twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 5.8c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.7-.7.4-1.4.6-2.2.8C18.6 4.7 17.7 4 16.6 4c-1.6 0-2.8 1.2-2.8 2.7 0 .2 0 .4.1.6C10 7.2 7.1 5.8 5.1 3.6c-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.5 2.7-.6 0-1.1-.2-1.6-.4v.1c0 1.4 1 2.6 2.3 2.9-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3-1.7 1.3-3.8 2-6 2-.4 0-.8 0-1.1-.1 2.1 1.3 4.6 2.1 7.3 2.1 8.7 0 13.4-7.3 13.4-13.6v-.6c.9-.7 1.6-1.6 2.2-2.6-.8.4-1.6.7-2.4.8z" fill="currentColor"/>
                </svg>
              </a>

            
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
                aria-label="linkedin"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h4.98V24H0V8.98zm7.98 0H13v2.07h.07c.72-1.36 2.48-2.8 5.1-2.8C22.6 8.25 24 10.7 24 14.7V24h-4.98v-8.1c0-1.93-.03-4.41-2.69-4.41-2.69 0-3.1 2.1-3.1 4.27V24H7.98V8.98z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-5 py-4">
          <div className="text-sm text-gray-400">© 2025 SPS, All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
