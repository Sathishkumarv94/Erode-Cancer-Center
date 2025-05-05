import React, { useEffect } from 'react';
import './CancerScreening.css';
import heroImg from './Assets/doc4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function HDRBrachytherapy() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
        <div className="service-page">
            {/* Hero Section */}
            <div className="service-hero">
                <img src={heroImg} alt="HDR Brachytherapy" className="service-hero-img" />
                <div className="service-hero-overlay">
                    <h1>HDR Brachytherapy</h1>
                </div>
            </div>



            {/* Main Content */}
            <div className="service-content">
                <h2 data-aos="fade-right">Targeted Internal Radiation Therapy</h2>
                <p data-aos="fade-left">
                    High Dose Rate (HDR) Brachytherapy delivers concentrated radiation directly into or near the tumor using tiny applicators. This technique is highly effective while minimizing damage to nearby healthy tissue.
                </p>

                <div className="service-subsection" data-aos="fade-up">
                    <h3>How It Works</h3>
                    <p>
                        A radioactive source is temporarily placed within body cavities or directly into tumor tissues using applicators. The source emits precise radiation in a short period before being safely removed.
                    </p>
                </div>

                <div className="service-subsection" data-aos="fade-up">
                    <h3>Advantages of HDR Brachytherapy</h3>
                    <ul>
                        <li>Short, outpatient treatment sessions</li>
                        <li>Minimally invasive and highly focused</li>
                        <li>Less recovery time and fewer side effects</li>
                        <li>Ideal for gynecologic, breast, and prostate cancers</li>
                    </ul>
                </div>

                <div className="service-subsection" data-aos="fade-up">
                    <h3>Who Should Consider It?</h3>
                    <p>
                        HDR Brachytherapy is an excellent option for patients with localized tumors and can be used as a standalone treatment or in combination with external radiation therapy.
                    </p>
                </div>

                <div className="service-cta" data-aos="zoom-in">
                    <h3>Consult Our Experts</h3>
                    <p>Learn more about how HDR Brachytherapy can be part of your personalized cancer treatment plan.</p>
                    <a
  href="https://api.whatsapp.com/send?phone=919842922443"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button"
>
  Book Appointment
</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default HDRBrachytherapy;
