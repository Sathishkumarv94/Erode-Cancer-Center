import React, { useState } from "react";
import "./ContactPage.css";
import { MapPin, Phone, Mail, User } from 'lucide-react';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "809b8189-acca-4850-b210-d8ace89a554e"); // Replace with your key
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        });
  
        const data = await res.json();
  
        if (data.success) {
          setSubmitted(true);               // show thank you message
          event.target.reset();             // clear form
          console.log("Success", data);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Submission failed.");
      }
    };

    return (
        <div>
        <div className="contact-wrapper">
            <div className="contact-form-section">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you.</p>
                {submitted && (
            <div className="success-message" style={{ color: 'green', marginBottom: '10px' }}>
              ✅ Thank you for contacting us. We'll get back to you shortly.
            </div>
          )}

                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                    
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>

            <div className="contact-info-section">
                <h3>Contact Information</h3>
                <p><MapPin size={16} /><strong> Address</strong>:<br /><h4> No 370, Roundana, Kondalampatti, Salem, Tamil Nadu 636010</h4></p>
                <p><Phone size={16} /> <strong>Phone</strong>:<h4> 0427 227 3477</h4></p>
                <p><Mail size={16} /><strong> Email</strong>:<h4> salem@erodecancercentre.com</h4></p>
                <p ><strong>PROs</strong>:</p>
                <h4>Mr. Anbarasu: +91 90473 09191</h4>
                <h4>Mr. Arunraj: +91 95668 75990</h4>
                <h4>Mr. Mayilvaganan: +91 94426 46691</h4>
            </div>
        </div>

        <div className="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15631.47204732181!2d78.126891!3d11.632754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef17ca13e20f%3A0x558d989e1da92002!2sKondalampatti%20bus%20stop!5e0!3m2!1sen!2sin!4v1744977696364!5m2!1sen!2sin" width="800" height="1000" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    );
};

export default ContactPage;
