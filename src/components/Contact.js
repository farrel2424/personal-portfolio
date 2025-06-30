import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/programmin.jpg"; // Pastikan path ini benar
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logo from "../assets/img/logogo.png"; // Pastikan path ini benar
import navIcon1 from "../assets/img/nav-icon1.svg"; // Pastikan path ini benar
import navIcon3 from "../assets/img/nav-icon3.svg"; // Pastikan path ini benar
import axios from 'axios'; // Import axios untuk EmailJS

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

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // --- LOGIKA EMAILJS DIMULAI DI SINI ---
    const serviceId = 'service_3if7lv5'; // Ganti dengan Service ID Anda
    const templateId = 'template_ib1s668'; // Ganti dengan Template ID Anda
    const publicKey = 'D-sSy5Iaw1qaLF0mM';   // Ganti dengan Public Key Anda

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
      
      // Jika gagal, gunakan state management yang sudah ada
      setButtonText("Send");
      // Perbaikan: 'succes' menjadi 'success' agar class CSS-nya benar
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
    // --- LOGIKA EMAILJS BERAKHIR DI SINI ---
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
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
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