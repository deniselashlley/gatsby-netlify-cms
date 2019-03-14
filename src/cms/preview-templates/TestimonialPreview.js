import React from "react";
import PropTypes from "prop-types";

import { TestimonialsTemplate } from "../../components/Testimonials";

const TestimonialPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <TestimonialsTemplate data={data} />;
};

TestimonialPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default TestimonialPreview;