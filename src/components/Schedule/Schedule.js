import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const ScheduleTemplate = ({data}) => {
  const { 
    title, 
    classHeading,
    eventsHeading,
    scheduleSection,
    pageLink: {
      label,
      link
    }
  } = data;

  const queryString = `
    https://teamup.com/ksno5a9u3kdnfpupfc?view=a&disableSidepanel=1&showHeader=0&showViewSelector=0
  `
  return (
    <section id="schedule" className="section-block section-block--schedule">
    <div className="container">
       <h2 className="section-title">{title}</h2>
       <div className="container-row">
         <div className="block">
           <h3>{classHeading}</h3>
           <iframe 
            title="yogoschedule"
            src={queryString} 
            frameBorder="0" 
            width="100%" 
            height="700" 
          />
         </div>
        <div className="block">
          <h3>{eventsHeading}</h3>
          {
            scheduleSection.map(section => (
            <div key={section.title} className="block--events">
              <h4>{section.title}</h4>
              <ReactMarkdown source={section.body} />
            </div>
            ))
          }
          </div>
     </div>
     <CustomLink
        linkType="internal"
        linkURL={link}
        className="link link-btn"
       >
        {label}
       </CustomLink>
   </div>
   </section>
  );
};

const Schedule = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  return <ScheduleTemplate data={data} />;
};

export { Schedule };
