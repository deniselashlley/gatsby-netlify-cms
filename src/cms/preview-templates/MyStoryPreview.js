import React from "react";
import PropTypes from "prop-types";

import { MyStoryTemplate } from "../../components/MyStory";

const MyStoryPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <MyStoryTemplate data={data} />;
};

MyStoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default MyStoryPreview;