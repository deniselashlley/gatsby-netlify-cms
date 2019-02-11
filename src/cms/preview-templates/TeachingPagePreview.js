import React from "react";
import PropTypes from "prop-types";
import { TeachingsPageTemplate } from "../../templates/teachings-page";

const ClassesPagePreview = ({ entry, widgetFor }) => (
  <TeachingPageTemplate
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  />
);

TeachingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TeachingPagePreview;
