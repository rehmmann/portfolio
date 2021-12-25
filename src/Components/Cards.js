import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 40,
    marginBottom: 30,
    height: 270,
    borderRadius: 15,
    backgroundColor: "#5e60ce",
    // display:'block'
   
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    // color: "#fff",
    "&:hover": {
      backgroundColor: "#000C66",
      color: "#fff",
    },
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card raised={true} className={classes.root} >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
          <Typography variant="body2" component="p">
            {props.details}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <BrowserRouter>
            <Button href={props.url} className={classes.button}>
              More details
            </Button>
          </BrowserRouter>
        </CardActions>
      </Card>
    </div>
  );
}
