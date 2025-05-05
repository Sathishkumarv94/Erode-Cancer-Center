import React, { useEffect } from 'react';
import './CancerScreening.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImg from './Assets/doc4.jpg';
import supportImg from './Assets/cancer.jpg';
import doc from './Assets/doctor1.jpg'


function CancerScreeningPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
 
        <div className="service-page">
          {/* Hero / Banner */}
          <div className="service-hero" data-aos="fade-up">
            <img src={heroImg} alt="Cancer Screening" className="service-hero-img" />
            <div className="service-hero-overlay">
              <h1>Cancer Screening</h1>
            </div>
          </div>
          {/* <div className="service-support-img" data-aos="fade-up">
        <img src={supportImg} alt="Cancer Awareness" />
      </div> */}
    
          {/* Content Section */}
          <div className="service-content">
            <h2 data-aos="fade-up">Early Detection, Better Protection</h2>
            <p data-aos="fade-up">
              Our comprehensive cancer screening program helps detect cancer at an early stage—when it is most treatable. We offer screenings tailored by age, gender, and risk factors.
            </p>
    
            {/* What We Offer */}
            <div className="service-subsection" data-aos="fade-up">
              <h3>What We Offer</h3>
              <ul>
                <li>Breast cancer screening (mammography)</li>
                <li>Cervical cancer screening (Pap smear & HPV test)</li>
                <li>Colorectal cancer screening (Colonoscopy, FOBT)</li>
                <li>Oral and lung cancer assessments</li>
                <li>Full-body checkups & blood markers</li>
              </ul>
            </div>
    
            {/* How the Screening Works */}
            <div className="service-subsection" data-aos="fade-up">
              <h3>How Cancer Screening Works</h3>
              <p>
                Our screening process is designed to be simple, non-invasive, and highly effective. Here’s what you can expect:
              </p>
              <ol>
                <li><strong>Step 1:</strong> Personal Risk Assessment by our specialists.</li>
                <li><strong>Step 2:</strong> Appropriate test recommendation (blood tests, scans, etc.).</li>
                <li><strong>Step 3:</strong> Test performed with expert support & care.</li>
                <li><strong>Step 4:</strong> Consultation to explain your results and next steps.</li>
              </ol>
            </div>
    
            {/* Meet the Expert */}
            <div className="service-subsection doctor-highlight" data-aos="fade-left">
              <h3>Meet Your Screening Specialist</h3>
              <div className="doctor-info">
                <img src={doc} alt="Dr. Dr K.Velavan MD.,RT.," />
                <div>
                  <h4>Dr. K.Velavan MD.,RT.,</h4>
                  <p>
                  Dr. K. Velavan is a seasoned Radiation Oncologist and Chemotherapist with a rich clinical and academic background in oncology. During his Senior Residency at the Department of Radiotherapy, JIPMER, he was entrusted with the comprehensive planning and execution of radiation therapy for a wide range of cancers including uterine cervix, breast, oral cavity, ENT, oesophagus, ano-rectum, and soft tissue sarcomas. 
                  </p>
                </div>
              </div>
            </div>
    
            {/* Patient Testimonials */}
            <div className="service-subsection" data-aos="fade-right">
              <h3>What Patients Say</h3>
              <blockquote className="testimonial">
                “Thanks to early screening, I caught breast cancer at stage 1. Dr. Meena and her team were incredible.”
                <span>- Priya M.</span>
              </blockquote>
              <blockquote className="testimonial">
                “I was nervous at first, but the process was smooth and professional. I highly recommend their services.”
                <span>- Karthik R.</span>
              </blockquote>
            </div>
    
            {/* FAQs Section */}
            <div className="service-subsection" data-aos="fade-up">
              <h3>Frequently Asked Questions</h3>
              <ul>
                <li><strong>Is the screening painful?</strong> No, most are non-invasive and quick.</li>
                <li><strong>Do I need a doctor’s referral?</strong> Not necessarily—walk-ins are welcome.</li>
                <li><strong>How long does it take?</strong> Most tests are done in under an hour.</li>
              </ul>
            </div>
    
            {/* Call to Action */}
            <div className="service-cta">
              <h3>Book a Screening</h3>
              <p>Take control of your health today. Contact us to schedule your cancer screening.</p>
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

export default CancerScreeningPage;
