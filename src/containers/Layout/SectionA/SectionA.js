import React from "react";
import { Typography, Paper } from "@material-ui/core";
import GenericCard from "../../GenericCard/GenericCard";
const SectionA = props => {
  return (
    <section id="section-a" className="grid">
      <div className="content-wrap">
        <Typography variant="subheading" color="primary">
          Pill Taken
        </Typography>
        <GenericCard content="pill scheduled to: 23:00pm" />
      </div>
    </section>
  );
};

export default SectionA;
