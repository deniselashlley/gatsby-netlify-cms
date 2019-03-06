import React from "react";
import ReactMarkdown from "react-markdown";
import "./styles.scss";

export const ServicesTemplate = ({data}) => { 
  const { title, serviceList } = data.sectionConnect.services;
  const { subHeading, body } = data.sectionConnect.subscribe;
  return (
<section id="services" className="section-block section-block--services">
        <div className="container">
          <h2 className="section-title">{title}</h2>
          <div>
            <ul className="services-list">
            {serviceList.map(services => (
              <li key={services.title}>
                <img src={services.image} alt="" className="service-list-image" />
                <div className="service-text-overlay">
                  <p className="service-title">{services.title}</p>
                  <p>{services.description}</p>
                  { services.linkText !== '' && (
                    <a href={services.linkURL}>{services.linkText}</a>
                  )}
                </div>
              </li>
            ))}
          </ul>
          </div>
          <div>
            <h3>{subHeading}</h3>
            <ReactMarkdown source={body} />
          </div>
        </div>
      </section>
  );
};

const Services = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <ServicesTemplate data={data} />;
};

export { Services};
