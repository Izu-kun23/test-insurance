import emailjs from "@emailjs/browser";

// EmailJS configuration template
// Copy this file to emailjs.js and fill in your actual values
// OR use environment variables (recommended for production)
// Environment variables:
// - VITE_EMAILJS_SERVICE_ID
// - VITE_EMAILJS_TEMPLATE_ID_CONTACT
// - VITE_EMAILJS_TEMPLATE_ID_CLAIMS
// - VITE_EMAILJS_PUBLIC_KEY

// Get values from environment variables or use placeholders
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || "YOUR_CONTACT_TEMPLATE_ID";
const EMAILJS_TEMPLATE_ID_CLAIMS = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CLAIMS || "YOUR_CLAIMS_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

// Initialize EmailJS only if we have a valid key
if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Contact form submission
export const sendContactEmail = async (formData) => {
  try {
    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || 
        !EMAILJS_TEMPLATE_ID_CONTACT || EMAILJS_TEMPLATE_ID_CONTACT === "YOUR_CONTACT_TEMPLATE_ID" ||
        !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      console.warn("EmailJS is not configured. Please set up environment variables.");
      return { 
        success: false, 
        error: "Email service is not configured. Please contact us directly at titpakinsbrokersltd@gmail.com" 
      };
    }

    const now = new Date();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: "titpakinsbrokersltd@gmail.com",
      current_date: now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      current_time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { success: false, error };
  }
};

// Claims form submission
export const sendClaimsEmail = async (formData) => {
  try {
    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" || 
        !EMAILJS_TEMPLATE_ID_CLAIMS || EMAILJS_TEMPLATE_ID_CLAIMS === "YOUR_CLAIMS_TEMPLATE_ID" ||
        !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
      console.warn("EmailJS is not configured. Please set up environment variables.");
      return { 
        success: false, 
        error: "Email service is not configured. Please contact us directly at titpakinsbrokersltd@gmail.com" 
      };
    }

    const now = new Date();
    const templateParams = {
      name: formData.fullName,
      policy_number: formData.policyNumber,
      date_of_loss: formData.dateOfLoss
        ? formData.dateOfLoss.toLocaleDateString()
        : "",
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      nature_of_loss: formData.natureOfLoss,
      narration: formData.narration,
      to_email: "titpakinsbrokersltd@gmail.com",
      current_date: now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      current_time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CLAIMS,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error("Error sending claims email:", error);
    return { success: false, error };
  }
};

export default emailjs;
