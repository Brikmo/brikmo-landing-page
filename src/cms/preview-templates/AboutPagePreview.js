import React from "react";
import PropTypes from "prop-types";
import { PrivacyPageTemplate } from "../../templates/privacy-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <PrivacyPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
