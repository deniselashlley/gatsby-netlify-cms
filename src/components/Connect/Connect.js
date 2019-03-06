import React from "react";
import "./styles.scss";

export const ConnectTemplate = ({data}) => {
  const { title, contact, } = data.sectionConnect;
  return (
    <section id="connect" className="section-block section-block--connect">
    <div className="container">
      <h2 className="section-title">{title}</h2>
      <ul className="contact-list">
        {contact.map(contactItems => (
          <li key={contactItems.linkURL}>
            <a 
              href={contactItems.linkURL}
              aria-label={contactItems.linkText}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="contact-label">{contactItems.subHeading}</h4>
              <span className="contact-link-name">{contactItems.linkText}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};

const Connect = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <ConnectTemplate data={data} />;
};

export { Connect };
