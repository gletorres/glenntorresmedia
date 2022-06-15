import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f0z43b4",
        "template_tk5cwbw",
        form.current,
        "eC3hAvysVZ6GCPokE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>glenntorres.video.editor@gmail.com</h5>

            <a
              href="mailto:glenntorres.video.editor@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </article>
          {/* END */}
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>GlennTorres</h5>
            <a
              href="https://m.me/glenntorres34"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send A Message
            </a>
          </article>
          {/* END */}
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>ClickSendMessage</h5>
            <a
              href='https://api.WhatsApp.com/send?phone="+639294834731"'
              target="_blank"
              rel="noopener noreferrer"
            >
              Send A Message
            </a>
          </article>
        </div>
        {/* END of CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
