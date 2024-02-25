import React from "react";
import ImageLeft from "../assets/code.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ImageLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Kontakt oss med din tilbakemelding</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Fult navn</label>
          <input name="name" placeholder="Skriv inn fult navn..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Skriv inn email..." type="email" />
          <label htmlFor="message">Tilbakemelding</label>
          <textarea
            rows="6"
            placeholder="Skriv inn din tilbakemelding..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send tilbakemelding</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


