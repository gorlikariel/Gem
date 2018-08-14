import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, ButtonBase } from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "flex"
  },
  button: {
    width: "100%",
    height: "6rem"
  }
});

class GenericCard extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Typography variant="subheading" color="primary">
          {this.props.subheading}
        </Typography>
        <Card className={classes.card} raised>
          <ButtonBase className={classes.button}>
            <Typography variant="subheading" color="textSecondary">
              {this.props.content}
            </Typography>
          </ButtonBase>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GenericCard);
