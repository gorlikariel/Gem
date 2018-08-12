import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { throws } from "assert";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    height: 151
  }
});

class GenericCard extends Component {
  state = {
    isHovered: false
  };

  hoverOn = () => {
    this.setState({ isHovered: true });
  };
  hoverOff = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div onTouchStart={this.hoverOn} onTouchEnd={this.hoverOff}>
        <Card className={classes.card} raised={this.state.isHovered}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="headline">Live From Space</Typography>
              <Typography variant="subheading" color="textSecondary">
                Mac Miller
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GenericCard);
