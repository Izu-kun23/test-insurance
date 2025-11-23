// import React, { useState } from "react";
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   Stack,
//   Divider,
//   Chip,
//   Grid,
//   Card,
//   CardContent,
//   Avatar,
//   TextField,
//   Paper,
//   CircularProgress,
// } from "@mui/material";
// import { keyframes } from "@mui/system";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import PhoneIcon from "@mui/icons-material/Phone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import SendIcon from "@mui/icons-material/Send";
// import BusinessIcon from "@mui/icons-material/Business";
// import Footer from "../components/Footer";
// import NotificationToast from "../components/NotificationToast";
// import { sendContactEmail } from "../config/emailjs";

// // Fade-in animation
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// export default function Contact() {
//   const [contactForm, setContactForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [notification, setNotification] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleContactFormChange = (field) => (event) => {
//     setContactForm((prev) => ({
//       ...prev,
//       [field]: event.target.value,
//     }));
//   };

//   const handleContactSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const result = await sendContactEmail(contactForm);
      
//       if (result.success) {
//         setNotification({
//           open: true,
//           message: "Your message has been sent successfully! Our team will review your inquiry and respond within 24 hours. We appreciate your interest in Titpak Insurance.",
//           severity: "success",
//         });
//         // Reset form
//         setContactForm({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         setNotification({
//           open: true,
//           message: "We're sorry, but there was an issue sending your message. Please check your internet connection and try again, or contact us directly at titpakinsbrokersltd@gmail.com.",
//           severity: "error",
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting contact form:", error);
//       setNotification({
//         open: true,
//         message: "We're experiencing technical difficulties. Please try again in a few moments or contact us directly at +234 (0) 913-752-9774.",
//         severity: "error",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCloseNotification = () => {
//     setNotification({ ...notification, open: false });
//   };

//   const officeLocations = [
//     {
//       city: "Lagos",
//       address:
//         "Nigeria Railway Compound, Off Moshood Abiola Rd, P.M.B. 1037, Ebute Metta",
//       phone: "+234 (0) 913-752-9774",
//       email: "titpakinsbrokersltd@gmail.com",
//       hours: "Mon–Fri, 9:00–17:00",
//       isMain: true,
//     },
//   ];

//   return (
//     <Container maxWidth="xl" sx={{ mt: 6, mb: 10, px: { xs: 2, md: 4 } }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           textAlign: "center",
//           mb: 8,
//           p: { xs: 4, md: 6 },
//           borderRadius: 4,
//           background: "linear-gradient(135deg, #f7fbff 0%, #eaf3ff 100%)",
//           border: "1px solid #e6eef8",
//           animation: `${fadeIn} 0.7s ease-in-out`,
//         }}
//       >
//         <Chip
//           label="Get In Touch"
//           color="primary"
//           variant="outlined"
//           sx={{
//             mb: 3,
//             borderColor: "#003366",
//             color: "#003366",
//             fontWeight: 700,
//             fontSize: "1rem",
//             py: 1,
//           }}
//         />
//         <Typography
//           variant="h2"
//           sx={{
//             color: "#003366",
//             fontWeight: 800,
//             lineHeight: 1.15,
//             mb: 3,
//             fontSize: { xs: "2.5rem", md: "3.5rem" },
//           }}
//         >
//           Contact Us
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: "rgba(0,0,0,0.72)",
//             mb: 2,
//             fontWeight: 500,
//           }}
//         >
//           We're here to help with all your insurance needs
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             color: "rgba(0,0,0,0.6)",
//             maxWidth: 700,
//             mx: "auto",
//             fontSize: "1.1rem",
//             lineHeight: 1.6,
//           }}
//         >
//           Have questions about our services, need a quote, or want to file a
//           claim? Reach out through any of the methods below or fill out our
//           contact form.
//         </Typography>
//       </Box>

//       {/* Office Locations */}
//       <Box sx={{ mb: 8 }}>
//         <Box sx={{ textAlign: "center", mb: 6 }}>
//           <Typography
//             variant="h3"
//             sx={{
//               color: "#003366",
//               mb: 2,
//               fontWeight: 800,
//             }}
//           >
//             Our Office Location
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: "rgba(0,0,0,0.7)",
//               maxWidth: 600,
//               mx: "auto",
//             }}
//           >
//             Visit us at our conveniently located office
//           </Typography>
//         </Box>

//         <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto" }}>
//           {officeLocations.map((office, index) => (
//             <Grid item xs={12} key={index}>
//               <Card
//                 elevation={0}
//                 sx={{
//                   height: "100%",
//                   border: office.isMain
//                     ? "3px solid #003366"
//                     : "1px solid #e6eef8",
//                   backgroundColor: office.isMain ? "#f8fbff" : "#ffffff",
//                   transition: "all 0.3s ease",
//                   cursor: "pointer",
//                   position: "relative",
//                   overflow: "hidden",
//                   "&:hover": {
//                     transform: "translateY(-8px)",
//                     boxShadow: "0 20px 40px rgba(0, 51, 102, 0.15)",
//                     borderColor: "#004a99",
//                   },
//                   "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     height: "4px",
//                     background: "linear-gradient(90deg, #003366, #004a99)",
//                     transform: "scaleX(0)",
//                     transition: "transform 0.3s ease",
//                   },
//                   "&:hover::before": {
//                     transform: "scaleX(1)",
//                   },
//                 }}
//               >
//                 {office.isMain && (
//                   <Chip
//                     label="Office"
//                     color="primary"
//                     size="small"
//                     sx={{
//                       position: "absolute",
//                       top: 20,
//                       right: 20,
//                       backgroundColor: "#003366",
//                       color: "white",
//                       fontWeight: 600,
//                       fontSize: "0.85rem",
//                       py: 0.5,
//                     }}
//                   />
//                 )}
//                 <CardContent sx={{ p: 5 }}>
//                   <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
//                     <Avatar
//                       sx={{
//                         bgcolor: "#e8f1fb",
//                         color: "#003366",
//                         width: 60,
//                         height: 60,
//                         mr: 3,
//                       }}
//                     >
//                       <LocationOnIcon sx={{ fontSize: 28 }} />
//                     </Avatar>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         color: "#003366",
//                         fontWeight: 800,
//                       }}
//                     >
//                       {office.city}
//                     </Typography>
//                   </Box>

//                   <Grid container spacing={3} sx={{ mb: 4 }}>
//                     <Grid item xs={12} md={6}>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "flex-start",
//                           mb: 3,
//                         }}
//                       >
//                         <LocationOnIcon
//                           sx={{
//                             color: "#003366",
//                             mr: 2,
//                             mt: 0.5,
//                             fontSize: 22,
//                           }}
//                         />
//                         <Box>
//                           <Typography
//                             variant="body2"
//                             sx={{ color: "#666", mb: 0.5, fontWeight: 600 }}
//                           >
//                             Address
//                           </Typography>
//                           <Typography
//                             variant="body1"
//                             sx={{ color: "rgba(0,0,0,0.8)", lineHeight: 1.5 }}
//                           >
//                             {office.address}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                       <Box
//                         sx={{ display: "flex", alignItems: "center", mb: 3 }}
//                       >
//                         <PhoneIcon
//                           sx={{ color: "#003366", mr: 2, fontSize: 22 }}
//                         />
//                         <Box>
//                           <Typography
//                             variant="body2"
//                             sx={{ color: "#666", mb: 0.5, fontWeight: 600 }}
//                           >
//                             Phone
//                           </Typography>
//                           <Typography
//                             variant="body1"
//                             sx={{ color: "rgba(0,0,0,0.8)" }}
//                           >
//                             {office.phone}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                       <Box
//                         sx={{ display: "flex", alignItems: "center", mb: 3 }}
//                       >
//                         <ContactMailIcon
//                           sx={{ color: "#003366", mr: 2, fontSize: 22 }}
//                         />
//                         <Box>
//                           <Typography
//                             variant="body2"
//                             sx={{ color: "#666", mb: 0.5, fontWeight: 600 }}
//                           >
//                             Email
//                           </Typography>
//                           <Typography
//                             variant="body1"
//                             sx={{ color: "rgba(0,0,0,0.8)" }}
//                           >
//                             {office.email}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                       <Box
//                         sx={{ display: "flex", alignItems: "center", mb: 3 }}
//                       >
//                         <AccessTimeIcon
//                           sx={{ color: "#003366", mr: 2, fontSize: 22 }}
//                         />
//                         <Box>
//                           <Typography
//                             variant="body2"
//                             sx={{ color: "#666", mb: 0.5, fontWeight: 600 }}
//                           >
//                             Hours
//                           </Typography>
//                           <Typography
//                             variant="body1"
//                             sx={{ color: "rgba(0,0,0,0.8)" }}
//                           >
//                             {office.hours}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Contact Form */}
//       <Box sx={{ mb: 8 }}>
//         <Box sx={{ textAlign: "center", mb: 6 }}>
//           <Typography
//             variant="h3"
//             sx={{
//               color: "#003366",
//               mb: 2,
//               fontWeight: 800,
//             }}
//           >
//             Send Us a Message
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: "rgba(0,0,0,0.7)",
//               maxWidth: 600,
//               mx: "auto",
//             }}
//           >
//             Fill out the form below and we'll get back to you within 24 hours
//           </Typography>
//         </Box>

//         <Paper
//           elevation={0}
//           sx={{
//             width: "100%",
//             maxWidth: 1200,
//             mx: "auto",
//             overflow: "hidden",
//             background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
//             border: "1px solid rgba(0, 51, 102, 0.08)",
//             boxShadow: "0 20px 60px rgba(0, 51, 102, 0.08)",
//           }}
//         >
//           {/* Form Header */}
//           <Box
//             sx={{
//               background: "linear-gradient(135deg, #003366 0%, #004a99 100%)",
//               color: "white",
//               p: { xs: 4, md: 5 },
//               textAlign: "center",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 background:
//                   "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
//               }}
//             />
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: 700, mb: 2, position: "relative" }}
//             >
//               Contact Form
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{ opacity: 0.9, fontSize: "1rem", position: "relative" }}
//             >
//               We'd love to hear from you
//             </Typography>
//           </Box>

//           {/* Form Content */}
//           <Box sx={{ p: { xs: 4, md: 6 } }}>
//             <form onSubmit={handleContactSubmit} style={{ width: "100%" }}>
//               <Grid container spacing={4} sx={{ width: "100%" }}>
//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <TextField
//                     fullWidth
//                     label="Full Name"
//                     value={contactForm.name}
//                     onChange={handleContactFormChange("name")}
//                     required
//                     variant="outlined"
//                     placeholder="Enter your full name"
//                     sx={{
//                       width: "100%",
//                       "& .MuiOutlinedInput-root": {
//                         backgroundColor: "rgba(255, 255, 255, 0.8)",
//                         transition: "all 0.3s ease",
//                         height: "56px",
//                         width: "100%",
//                         "&:hover": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.1)",
//                         },
//                         "&.Mui-focused": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.15)",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         fontWeight: 500,
//                       },
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <TextField
//                     fullWidth
//                     label="Email Address"
//                     type="email"
//                     value={contactForm.email}
//                     onChange={handleContactFormChange("email")}
//                     required
//                     variant="outlined"
//                     placeholder="your.email@example.com"
//                     sx={{
//                       width: "100%",
//                       "& .MuiOutlinedInput-root": {
//                         backgroundColor: "rgba(255, 255, 255, 0.8)",
//                         transition: "all 0.3s ease",
//                         height: "56px",
//                         width: "100%",
//                         "&:hover": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.1)",
//                         },
//                         "&.Mui-focused": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.15)",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         fontWeight: 500,
//                       },
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <TextField
//                     fullWidth
//                     label="Phone Number"
//                     type="tel"
//                     value={contactForm.phone}
//                     onChange={handleContactFormChange("phone")}
//                     variant="outlined"
//                     placeholder="+234 xxx xxx xxxx"
//                     sx={{
//                       width: "100%",
//                       "& .MuiOutlinedInput-root": {
//                         backgroundColor: "rgba(255, 255, 255, 0.8)",
//                         transition: "all 0.3s ease",
//                         height: "56px",
//                         width: "100%",
//                         "&:hover": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.1)",
//                         },
//                         "&.Mui-focused": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.15)",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         fontWeight: 500,
//                       },
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <TextField
//                     fullWidth
//                     label="Subject"
//                     value={contactForm.subject}
//                     onChange={handleContactFormChange("subject")}
//                     required
//                     variant="outlined"
//                     placeholder="What is this about?"
//                     sx={{
//                       width: "100%",
//                       "& .MuiOutlinedInput-root": {
//                         backgroundColor: "rgba(255, 255, 255, 0.8)",
//                         transition: "all 0.3s ease",
//                         height: "56px",
//                         width: "100%",
//                         "&:hover": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.1)",
//                         },
//                         "&.Mui-focused": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.15)",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         fontWeight: 500,
//                       },
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <TextField
//                     fullWidth
//                     label="Message"
//                     value={contactForm.message}
//                     onChange={handleContactFormChange("message")}
//                     required
//                     multiline
//                     rows={6}
//                     variant="outlined"
//                     placeholder="Tell us how we can help you..."
//                     sx={{
//                       width: "100%",
//                       "& .MuiOutlinedInput-root": {
//                         backgroundColor: "rgba(255, 255, 255, 0.8)",
//                         transition: "all 0.3s ease",
//                         minHeight: "120px",
//                         width: "100%",
//                         "&:hover": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.1)",
//                         },
//                         "&.Mui-focused": {
//                           backgroundColor: "rgba(255, 255, 255, 1)",
//                           transform: "translateY(-1px)",
//                           boxShadow: "0 4px 12px rgba(0, 51, 102, 0.15)",
//                         },
//                       },
//                       "& .MuiInputLabel-root": {
//                         fontWeight: 500,
//                       },
//                     }}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sx={{ width: "100%" }}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "center",
//                       mt: 4,
//                       width: "100%",
//                     }}
//                   >
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       size="large"
//                       startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
//                       disabled={isSubmitting}
//                       sx={{
//                         background:
//                           "linear-gradient(135deg, #003366 0%, #004a99 100%)",
//                         color: "#fff",
//                         px: { xs: 6, md: 12, lg: 16 },
//                         py: 2.5,
//                         borderRadius: 4,
//                         textTransform: "none",
//                         fontSize: { xs: "1.1rem", md: "1.3rem", lg: "1.4rem" },
//                         fontWeight: 700,
//                         minWidth: { xs: "200px", md: "300px", lg: "400px" },
//                         height: { xs: "48px", md: "56px", lg: "64px" },
//                         boxShadow: "0 8px 24px rgba(0, 51, 102, 0.3)",
//                         "&:hover": {
//                           background:
//                             "linear-gradient(135deg, #004a99 0%, #0066cc 100%)",
//                           transform: "translateY(-3px)",
//                           boxShadow: "0 12px 32px rgba(0, 51, 102, 0.4)",
//                         },
//                         "&:disabled": {
//                           background: "rgba(0, 51, 102, 0.5)",
//                           transform: "none",
//                           boxShadow: "0 8px 24px rgba(0, 51, 102, 0.2)",
//                         },
//                         transition: "all 0.3s ease",
//                       }}
//                     >
//                       {isSubmitting ? "Sending..." : "Send Message"}
//                     </Button>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Paper>
//       </Box>

//       {/* Enhanced Notification Toast */}
//       <NotificationToast
//         open={notification.open}
//         onClose={handleCloseNotification}
//         message={notification.message}
//         severity={notification.severity}
//         duration={8000}
//       />
//     </Container>
//   );
// }
