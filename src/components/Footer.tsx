
import React, { useState } from "react";
import { ContactModal } from "./ContactModal";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <footer id="footer" className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-revamped-bold text-3xl text-white mb-4">Lynon Solution</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We help businesses work smarter, not harder. Our AI solutions automate tasks, streamline processes, and grow your revenue.
              </p>
              
              {/* Social Media Icons */}
              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://linkedin.com/company/lynon-solution" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com/@lynon-solution" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20">
              <h4 className="text-xl font-semibold text-white mb-3">Ready to Transform Your Business?</h4>
              <p className="text-gray-300 text-sm mb-4">Get a free consultation and discover how our solutions can boost your productivity.</p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-white font-medium rounded-full transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #FE5C02 0%, #FF6B1A 50%, #FE5C02 100%)',
                  boxShadow: '0 4px 15px rgba(254, 92, 2, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="relative z-10 flex items-center">
                  Get in Touch
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></div>
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Custom AI Solutions</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">AI Integrations</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Graphic Design</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Solution Architecture</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">RAG Systems</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Business Software</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Technologies</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">RPA UiPath</span></li>
              <li><span className="text-gray-300">N8N Automation</span></li>
              <li><span className="text-gray-300">AI Agentic Systems</span></li>
              <li><span className="text-gray-300">Web Development</span></li>
              <li><span className="text-gray-300">Custom Solutions</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="section-container py-6">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400 text-center">© 2025 Lynon Solution. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  );
};
export default Footer;
