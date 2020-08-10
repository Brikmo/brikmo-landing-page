import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import style from "./style.module.scss";

export default function ContactForm({ formSectionTitle }) {
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email, {
      FNAME: fullname,
      MESSAGE: message,
    })
      .then((data) => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data);
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      });
  };

  return (
    <div className={style.formContent}>
      <p className={style.title}>{formSectionTitle}</p>
      <div className={style.divider}></div>
      <div className={style.formArea}>
        <div className={style.formField}>
          <label>Full Name</label>
          <input
            name="full-name"
            type="text"
            placeholder="Julia William"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className={style.formField}>
          <label>E-mail Address</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`${style.formField} ${style.messageBox}`}>
          <label>Your message*</label>
          <textarea
            name="message"
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
