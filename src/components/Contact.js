import React from 'react';
import '../styles/contact.scss';
const Contact = () => {
  return (
    <section className="contact-page" id="contact">
      <article className="contact-form">
        <h3>İletişim</h3>
        <form action="#">
          <div className="form-group">
            <label htmlFor="name">Ad - Soyad:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Ad - Soyad"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <label htmlFor="message">Mesajınız:</label>
            <textarea
              rows="10"
              className="form-control"
              name="name"
              id="message"
              placeholder="Mesajınız:"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn btn" title="Submit">
            Gönder
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
