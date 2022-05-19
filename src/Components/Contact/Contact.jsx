import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_orpqow8",
        "template_o4h420d",
        form.current,
        "rCiliQbCq_ynzUmG0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="c-left">
        <div className="awesome awesome2">
          <span>Get in touch</span>
          <span>Contact me</span>

          <div className="blur c-blur1" style={{ background: "#ADD8E5" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="e-mail"
          />
          <textarea name="message" className="user" placeholder="message" />
          <input type="submit" value="send" className="button" />
          <span className="email_answer">
            {done && "Tak! I have an email!"}{" "}
          </span>
          <div className="blur c-blur1" style={{ background: "#ADD8E5" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
