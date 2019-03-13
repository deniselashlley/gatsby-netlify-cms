import React from "react";
import PropTypes from "prop-types";

import { ContactTemplate } from "../../components/Contact";

const ContactPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <ContactTemplate data={data} />;
};

ContactPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ContactPreview;