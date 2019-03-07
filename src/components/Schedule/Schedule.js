import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const ScheduleTemplate = ({data}) => {
  const { 
    title, 
    subHeading, 
    thisMonth, 
    comingUp, 
    classesTimetable,
    pageLink 
  } = data.sectionSchedule;
  return (
    <section id="schedule" className="section-block section-block--schedule">
    <div className="container">
       <h2 className="section-title">{title}</h2>
       <div className="container-row">
         <div className="block">
           <h3>{classesTimetable.subHeading}</h3>
           <div 
             data-tockify-component="calendar" 
             data-tockify-calendar="denise.lashlley" 
             className="embed-calender"
           />
           <ReactMarkdown source={classesTimetable.body} />
         </div>
       <div className="block">
       <h3>{thisMonth.sectionHeading}</h3>
         <div className="block--events">
           <h4>{thisMonth.subHeading}</h4>
           <ReactMarkdown source={thisMonth.body} />
         </div>
         <div className="block--events">
           <h4>{comingUp.subHeading}</h4>
           <ReactMarkdown source={comingUp.body} />
         </div>
       </div>
     </div>
     <CustomLink
         linkType="internal"
         linkURL={pageLink.linkURL}
         className="link link-btn"
       >
         {pageLink.text}
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
