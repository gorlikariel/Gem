import React from "react";
import { Typography } from "@material-ui/core";
import GenericCard from "../../GenericCard/GenericCard";

const SectionB = props => {
  return (
    <section id="section-c" className="grid">
      <div className="content-wrap">
        <GenericCard subheading={"Statistics"} />
        <GenericCard subheading={"Settings"} />
      </div>
    </section>
  );
};

export default SectionB;
