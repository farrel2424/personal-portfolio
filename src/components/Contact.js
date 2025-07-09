import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/programmin.jpg"; // Pastikan path ini benar
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logo from "../assets/img/logogo.png"; // Pastikan path ini benar
import navIcon1 from "../assets/img/nav-icon1.svg"; // Pastikan path ini benar
import navIcon3 from "../assets/img/nav-icon3.svg"; // Pastikan path ini benar
import axios from 'axios'; // Import axios untuk EmailJS
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [isVerified, setIsVerified] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleCaptchaChange = (value) => {
    // The 'value' is the reCAPTCHA token. If it exists, the user is verified.
    if (value) {
      setIsVerified(true);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      setStatus({ success: false, message: 'Please verify that you are not a robot.' });
      return;
    }
    setButtonText("Sending...");

    // --- LOGIKA EMAILJS DIMULAI DI SINI ---
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Ganti dengan Service ID Anda
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Ganti dengan Template ID Anda
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;// Ganti dengan Public Key Anda

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        // Mapping dari state 'formDetails' ke variabel template EmailJS
        from_name: `${formDetails.firstName} ${formDetails.lastName}`,
        from_email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
        to_name: 'farrel' // Anda bisa sesuaikan ini atau hapus jika tidak perlu
      }
    };

    try {
      const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      
      // Jika berhasil, gunakan state management yang sudah ada
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      // Perbaikan: 'succes' menjadi 'success' agar class CSS-nya benar
      setStatus({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      
    
      setButtonText("Send");
      
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
    
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Me</h2>
                  <form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        {/* Perbaikan: 'lasttName' menjadi 'lastName' */}
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => {const value = e.target.value; if (/^[0-9]*$/.test(value)) {onFormUpdate('phone', value);}}} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit" disabled={!isVerified}><span>{buttonText}</span></button>
                      </Col>

                      <Col size={12} className="px-1" style={{marginTop: '20px'}}>
                        <ReCAPTCHA
                          sitekey="6LfN7HUrAAAAAPUTmU61uIopLY-rEv1zNycLj9My"
                          onChange={handleCaptchaChange}
                        />
                      </Col>

                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger-message" : "success-message"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <div style={{ minHeight: "10vh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}></div>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ maxWidth: "30%", height: "auto" }} />
          </Col>
          <Col size={6} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/muhammad-farrel-ramadhan-42b26028b/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/00_______rei?utm_source=ig_web_button_share_sheet&igsh=MTFqcnYyY3hrNmN3dA==" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}