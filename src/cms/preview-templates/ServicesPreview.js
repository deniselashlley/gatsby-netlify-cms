import React from "react";
import PropTypes from "prop-types";

import { ServicesTemplate } from "../../components/Services";

const ServicesPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <ServicesTemplate data={data} />;
};

ServicesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ServicesPreview;