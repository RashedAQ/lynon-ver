import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_nrqim9w',
  templateId: 'template_utzfue8',
  publicKey: 'RSWBjp2rU8dm5LiHP'
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString()
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
