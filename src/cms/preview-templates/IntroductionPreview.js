import React from "react";
import PropTypes from "prop-types";

import { IntroductionTemplate } from "../../components/Introduction";

const IntroductionPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <IntroductionTemplate data={data} />;
};

IntroductionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IntroductionPreview;