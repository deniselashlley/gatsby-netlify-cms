import React from "react";
import PropTypes from "prop-types";

import { ScheduleTemplate } from "../../components/Schedule";

const SchedulePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <ScheduleTemplate data={data} />;
};

SchedulePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default SchedulePreview;