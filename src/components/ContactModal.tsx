import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { sendEmail } from '@/lib/emailjs';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Close modal when clicking outside
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant w-full max-w-md animate-in fade-in-0 zoom-in-95 duration-300"
      >
        {/* Header with background image */}
        <div 
          className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start"
          style={{
            backgroundImage: "url('/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Removed "Free consultation" badge */}
          <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
            Let's Create Something Amazing Together
          </h2>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-8 w-8 p-0 text-white hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Form */}
        <div 
          className="bg-white p-4 sm:p-8"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div>
              <input
                ref={firstInputRef}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            {/* Message Field */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent resize-none"
                rows={4}
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-green-600 text-sm">
                <CheckCircle className="h-4 w-4" />
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                {errorMessage}
              </div>
            )}
            
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative overflow-hidden w-full px-6 py-4 text-white font-medium rounded-full transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                style={{
                  background: isSubmitting 
                    ? 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 50%, #9CA3AF 100%)'
                    : 'linear-gradient(135deg, #FE5C02 0%, #FF6B1A 50%, #FE5C02 100%)',
                  boxShadow: isSubmitting 
                    ? '0 2px 8px rgba(156, 163, 175, 0.3)'
                    : '0 4px 15px rgba(254, 92, 2, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get in Touch
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
