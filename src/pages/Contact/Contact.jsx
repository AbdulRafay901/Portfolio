import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}

        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>abdulrafay700000@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+92 3493332883</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Pakistan</span>
          </div>

        </div>

        {/* RIGHT FORM */}

        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
           <input type="hidden" name="access_key" value="00700cfd-7a65-4207-8819-80b142351211"></input>
          <input
            type="text"
            placeholder="Your Name"
            required
            name="name"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            email="email"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
            name="message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );

}

export default Contact;