import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import CustomLink from "../components/CustomLink";

import Layout from "../components/Layout";
import "../styles/home.scss";

export const HomePageTemplate = ({ home }) => {
  return (
    <>
      <section className="hero-banner">
        <ul>
          {home.bannerText.map(imageItems => (
          <li key={imageItems.itemText}>{imageItems.itemText}</li>
          ))}
        </ul>
        <AnchorLink href="#intro" className="down-link">
          <span>Introduction</span>
        </AnchorLink>
      </section>
      <section id="intro" className="section-block section-block--introduction">
        <div className="container">
          <h1 className="section-title">{home.sectionWelcome.title}</h1>
          <div className="container-row">
            <div className="block block-profile">
              <img src={home.sectionWelcome.image} alt={home.sectionWelcome.imageAlt} className="profile" />
            </div>
            <div className="block block-context">
              <ReactMarkdown source={home.sectionWelcome.body} />
              <p className="highlightedText">{home.sectionWelcome.highlightedText}</p>
            <CustomLink
              linkType="internal"
              linkURL={home.sectionWelcome.pageLink.linkURL}
              className="link link-btn"
            >
            {home.sectionWelcome.pageLink.text}
          </CustomLink>
            </div>
            <blockquote className="quote">{home.sectionWelcome.quote}</blockquote>
          </div> 
        </div>
      </section>
      <section id="schedule" className="section-block section-block--schedule">
       <div className="container">
          <h2 className="section-title">{home.sectionSchedule.title}</h2>
          <div className="container-row">
            <div className="block">
              <h3>{home.sectionSchedule.classesTimetable.subHeading}</h3>
              <ReactMarkdown source={home.sectionSchedule.classesTimetable.body} />
              <CustomLink
            linkType="internal"
            linkURL={home.sectionSchedule.pageLink.linkURL}
            className="link link-btn"
          >
            {home.sectionSchedule.pageLink.text}
          </CustomLink>
            </div>
          <div className="block">
            <h3>{home.sectionSchedule.eventSchedule.subHeading}</h3>
            <ReactMarkdown source={home.sectionSchedule.eventSchedule.body} />
            <h3>{home.sectionSchedule.workshopSchedule.subHeading}</h3>
            <ReactMarkdown source={home.sectionSchedule.workshopSchedule.body} />
          </div>
        </div>
      </div>
      </section>
      <section id="mystory" className="section-block section-block--mystory">
        <div className="container">
          <h2 className="section-title">{home.sectionMyStory.title}</h2>
            <ReactMarkdown source={home.sectionMyStory.body} /> 
            <blockquote className="quote">
              {home.sectionMyStory.quote}
            </blockquote>
            <CustomLink
              linkType="internal"
              linkURL={home.sectionMyStory.pageLink.linkURL}
              className="link link-btn"
            >
            {home.sectionMyStory.pageLink.text}
          </CustomLink>
        </div>
      </section>
      <section id="connect" className="section-block section-block--connect">
        <div className="container">
          <h2 className="section-title">{home.sectionConnect.title}</h2>
          <ul className="contact-list">
            {home.sectionConnect.contact.map(contactItems => (
              <li key={contactItems.linkURL}>
                <a 
                  href={contactItems.linkURL}
                  aria-label={contactItems.linkText}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-label">{contactItems.subHeading}</span>
                  <span className="contact-link-name">{contactItems.linkText}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="container-row">
            <div className="block connect-service">
              <h3>{home.sectionConnect.services.title}</h3>
              <ReactMarkdown source={home.sectionConnect.services.body} />
            </div>
            <div className="block connect-links">
              <h3>{home.sectionConnect.subscribe.title}</h3>
              <ReactMarkdown source={home.sectionConnect.subscribe.body} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      data: { footerData, navbarData },
    } = this.props;
    const { frontmatter: home } = data.homePageData.edges[0].node;
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home;

    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name="title" content={seoTitle} />
          <meta name="description" content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
      edges {
        node {
          frontmatter {
            bannerText {
              itemText
            }
            sectionWelcome {
              title
              body
              quote
              image
              imageAlt
              highlightedText
              pageLink {
                text
                linkURL
              }
            }
            sectionSchedule {
              title
              classesTimetable {
                subHeading
                body
              }
              workshopSchedule {
                subHeading
                body
              }
              eventSchedule {
                subHeading
                body
              }
              pageLink {
                text
                linkURL
              }
            }
            sectionMyStory {
              title
              body
              quote
              pageLink {
                text
                linkURL
              }
            }
            sectionConnect {
              title
              contact {
                linkText
                linkURL
                subHeading
              }
              services {
                body
                title
              }
              subscribe {
                title
                body
              }
            }
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`;
