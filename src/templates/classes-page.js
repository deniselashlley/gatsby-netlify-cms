import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/classes-page.scss";

export const ClassesPageTemplate = props => {
  const { page } = props;

  return (
    <article className="classes">
        <section className="banner">
          <img src={page.frontmatter.mainImage.image} alt={page.frontmatter.mainImage.imageAlt} />
        </section>
        <section className="section-block container">
          <h1>{page.frontmatter.title}</h1>
          {/* The page.html is actually markdown when viewing the page from the netlify CMS,
              so we must use the ReactMarkdown component to parse the mardown in that case  */}
          {page.bodyIsMarkdown ? (
            <ReactMarkdown source={page.html} />
          ) : (
            <HTMLContent content={page.html} />
          )}
        </section>
    </article>
  );
};

const ClassesPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <ClassesPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

ClassesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ClassesPage;

export const classesPageQuery = graphql`
  query ClassesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mainImage {
          image
          imageAlt
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`;
