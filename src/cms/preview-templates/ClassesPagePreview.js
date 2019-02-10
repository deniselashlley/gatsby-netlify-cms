import React from "react";
import PropTypes from "prop-types";
import { ClassesPageTemplate } from "../../templates/classes-page";

const ClassesPagePreview = ({ entry, widgetFor }) => (
  <ClassesPageTemplate
    page={{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  />
);

ClassesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ClassesPagePreview;
