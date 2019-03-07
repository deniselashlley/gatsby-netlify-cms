import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from "../components/Layout";
import { Introduction } from '../components/Introduction'
import { Schedule } from '../components/Schedule'
import { MyStory } from '../components/MyStory'
import { Services } from '../components/Services'
import { Connect } from '../components/Connect'
import { Testimonials } from '../components/Testimonials'

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
      <Introduction data={home} />
      <Schedule data={home} />
      <MyStory data={home} />
      <Services data={home} />
      <Connect data={home} />
      <Testimonials data={home} />
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
          <script 
            defer
            async
            data-cfasync="false" 
            data-tockify-script="embed" 
            src="https://public.tockify.com/browser/embed.js"
          />
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
              comingUp {
                subHeading
                body
              }
              thisMonth {
                sectionHeading
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
                title
                subHeading
                serviceList {
                  title
                  image
                  description
                  linkText
                  linkURL
                }
              }
              subscribe {
                subHeading
                body
              }
            }
            sectionTestimonial {
              title
              testimonialList {
                author
                description
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
