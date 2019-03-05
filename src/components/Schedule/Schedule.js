import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const ScheduleTemplate = ({data}) => {
  return (
    <section id="schedule" className="section-block section-block--schedule">
    <div className="container">
       <h2 className="section-title">{data.sectionSchedule.title}</h2>
       <div className="container-row">
         <div className="block">
           <h3>{data.sectionSchedule.classesTimetable.subHeading}</h3>
           <div 
             data-tockify-component="calendar" 
             data-tockify-calendar="denise.lashlley" 
             className="embed-calender"
           />
           <ReactMarkdown source={data.sectionSchedule.classesTimetable.body} />
         </div>
       <div className="block">
       <h3>{data.sectionSchedule.thisMonth.sectionHeading}</h3>
         <div className="block--events">
           <h4>{data.sectionSchedule.thisMonth.subHeading}</h4>
           <ReactMarkdown source={data.sectionSchedule.thisMonth.body} />
         </div>
         <div className="block--events">
           <h4>{data.sectionSchedule.comingUp.subHeading}</h4>
           <ReactMarkdown source={data.sectionSchedule.comingUp.body} />
         </div>
       </div>
     </div>
     <CustomLink
         linkType="internal"
         linkURL={data.sectionSchedule.pageLink.linkURL}
         className="link link-btn"
       >
         {data.sectionSchedule.pageLink.text}
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
  console.log("DATA", data);
  return <ScheduleTemplate data={data} />;
};

export { Schedule };
