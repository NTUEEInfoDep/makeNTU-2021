import React from "react";
import PropTypes from "prop-types";
import About from "sections/about";
import Contact from "sections/contact";
import Hero from "sections/hero";
import MatUITimeline from "sections/matuitimeline";
import PageNotFound from "sections/pageNotFound";
import Pricing from "sections/pricing";
import Services from "sections/services";
import Testimonials from "sections/testimonials";

// Dynamically import or require sections inside the section folder
const components = {
  Hero,
  About,
  Testimonials,
  Services,
  Pricing,
  Contact,
  PageNotFound,
  MatUITimeline,
};

const Section = ({ contentModuleId, type }) => {
  const component = type.split("Layout")[1];

  if (typeof components[component] === "undefined") {
    return "";
  }

  return React.createElement(components[component], {
    contentModuleId,
  });
};

Section.prototype = {
  contentModuleId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Section;
