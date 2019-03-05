import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const IntroductionTemplate = ({data}) => {
  return (
    <section id="intro" className="section-block section-block--introduction">
    <div className="container">
      <h1 className="section-title">{data.sectionWelcome.title}</h1>
      <div className="container-row">
        <div className="block block-profile">
          <img src={data.sectionWelcome.image} alt={data.sectionWelcome.imageAlt} className="profile" />
        </div>
        <div className="block block-context">
          <ReactMarkdown source={data.sectionWelcome.body} />
          <ReactMarkdown source={data.sectionWelcome.quote} className="quote"/>
          <p className="highlightedText">{data.sectionWelcome.highlightedText}</p>
        <CustomLink
          linkType="internal"
          linkURL={data.sectionWelcome.pageLink.linkURL}
          className="link link-btn"
        >
        {data.sectionWelcome.pageLink.text}
      </CustomLink>
        </div>
      </div> 
    </div>
    </section>
  );
};

const Introduction = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;
  console.log("DATA", data);
  return <IntroductionTemplate data={data} />;
};

export { Introduction };
