import React from "react";
import "./styles.scss";

export const ContactTemplate = ({
  data: {
    title,
    contactList,
  }}) => {
  return (
    <section id="connect" className="section-block section-block--connect">
    <div className="container">
      <h2 className="section-title">{title}</h2>
      <ul className="contact-list">
        {contactList.map(contact => (
          <li key={contact.link}>
            <a 
              href={contact.link}
              aria-label={contact.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="contact-label">{contact.subHeading}</h4>
              <span className="contact-link-name">{contact.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};

const Contact = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <ContactTemplate data={data} />;
};

export { Contact };
