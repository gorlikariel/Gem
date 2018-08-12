import React from "react";
import { Typography } from "@material-ui/core";
import GenericCard from "../../GenericCard/GenericCard";

const SectionB = props => {
  return (
    <section id="section-b" className="grid">
      <div className="content-wrap">
        <Typography variant="subheading" color="primary">
          Monthly Streak
        </Typography>
        <GenericCard />
      </div>
    </section>
  );
};

export default SectionB;
