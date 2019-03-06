import React from "react";
import ReactMarkdown from "react-markdown";
import CustomLink from "../CustomLink";
import "./styles.scss";

export const MyStoryTemplate = ({data}) => {
  const { title, body, quote, pageLink } = data.sectionMyStory;
  return (
    <section id="mystory" className="section-block section-block--mystory">
        <div className="container">
          <h2 className="section-title">{title}</h2>
            <ReactMarkdown source={body} />
            <ReactMarkdown source={quote} className="quote"/>
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

const MyStory = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data;

  return <MyStoryTemplate data={data} />;
};

export { MyStory };
