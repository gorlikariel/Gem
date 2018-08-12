import React from "react";
import { Typography } from "@material-ui/core";

const SectionA = props => {
  return (
    <section id="section-a" className="grid">
      <div className="content-wrap">
        <Typography variant="headline" color="primary">
          Monthly Streak
        </Typography>
      </div>
    </section>
  );
};

export default SectionA;
