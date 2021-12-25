import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles({
  headerText:{
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
  }
})
function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Divider variant="middle" />
      <Typography id="Projects" className={classes.headerText} variant="h5" align="center">
        Projects
      </Typography>
    </div>
  );
}

export default Projects;
