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
    marginRight: 30,
    height: 250,
    borderRadius: 15,
    backgroundColor: "#E8EDF4",
    // justifyContent: "center"
   
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  button: {
    
    "&:hover": {
      backgroundColor: "#000",
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
            color="textPrimary"
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
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
