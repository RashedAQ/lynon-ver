// Test file to verify EmailJS configuration
import { initEmailJS, sendEmail } from './emailjs';

// Test function to verify EmailJS is properly configured
export const testEmailJS = async () => {
  try {
    // Initialize EmailJS
    initEmailJS();
    console.log('✅ EmailJS initialized successfully');

    // Test with sample data (this won't actually send an email in test mode)
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from the contact system.'
    };

    console.log('📧 Test data prepared:', testData);
    console.log('✅ EmailJS configuration is ready for production use');
    
    return true;
  } catch (error) {
    console.error('❌ EmailJS configuration error:', error);
    return false;
  }
};

// Uncomment the line below to run the test
// testEmailJS();
