import React from "react";
import PropTypes from "prop-types";

import { TestimonialsTemplate } from "../../components/Testimonials";

const TestimonialsPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <TestimonialsTemplate data={data} />;
};

TestimonialsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default TestimonialsPreview;