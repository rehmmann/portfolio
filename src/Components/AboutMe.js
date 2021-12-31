import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
import "typeface-roboto";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Image from "../greg-rakozy-oMpAz-DN-9I-unsplash.jpg";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "typeface-roboto",
    paddingTop: "20px",
    backgroundColor: "  #000204  ",
    color: "#fff",
  },
  bigContainer: {
    height: "180px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "180px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginInline: 90,
    // backgroundImage: 'linear-gradient(to right top, #0b1c34, #171526, #180d1a, #11060d, #000000)'
  },
  img: {
    position: "relative",
    top: 40,
    borderRadius: "50%",
    // maxHeight: "20rem",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  headerText: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
  },
  bodyText: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100,
    width: 300,
    paddingTop: 100,
    paddingLeft: 20,
    color: "#cacfd6",
  },
  button: {
    borderRadius: 10,
    width: 120,
    height: 45,
    marginLeft: 20,
    backgroundColor: "#FF5C5C",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
  modulesContainer: {
    backgroundColor: "#fff",
    color: "#000",
    width: "100%",
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow(props) {
    return (
      <>
        <Grid item xs={12} lg={4}>
          <Cards
            title="CS2040S"
            name="Data Structure & Algo"
            details="The module covers basic data structures (linked lists, stacks, queues, hash tables, binary heaps, trees, and graphs), searching and sorting algorithms, and basic analysis of algorithms."
            url="https://nusmods.com/modules/CS2040S/data-structures-and-algorithms"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Cards
            title="CS2030S"
            name="Programming Methodolgy II"
            details="Learn to develop medium-scale software programs in the order of thousands of lines of code and tens of classes using object-oriented design principles and advanced programming constructs available in the two paradigms."
            url="https://nusmods.com/modules/CS2030S/programming-methodology-ii"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Cards
            title="CS2103"
            name="Software Engineering"
            details="This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. "
            url="https://nusmods.com/modules/CS2103/software-engineering"
          />
        </Grid>
      </>
    );
  }

  const hireMe = (label) => {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="About Me" className={classes.root}>
      <Container>
        <Typography
          className={classes.headerText}
          id="Modules"
          variant="h5"
          align="center"
        >
          About Myself
        </Typography>
        <Container className={classes.bigContainer}>
          <Avatar src="Cycling_pic.png" className={classes.img} />
          <Typography
            align="center"
            className={classes.bodyText}
            variant="subtitle1"
            paragraph="true"
          >
            A Computer Science undergrad passionate about using technology to
            solve problems faced by people. Currently searching for an
            internship.
          </Typography>
        </Container>
        <Container className={classes.container}>
          <Button
            size="small"
            className={classes.button}
            href="https://drive.google.com/file/d/17i6T5cLB5h1Bz94XXVAHM8B839IeXGp7/view?usp=sharing"
          >
            View Resume
          </Button>
          <Button
            size="small"
            className={classes.button}
            onClick={() => {
              hireMe();
            }}
          >
            Hire Me
          </Button>
        </Container>
      </Container>

      {/* Code for Modules Section STARTS HERE */}
      <div className={classes.modulesContainer}>
        <Divider variant="middle" />
        <Typography
          id="Modules"
          className={classes.headerText}
          variant="h5"
          align="center"
        >
          Modules
        </Typography>
        <Container>
          <Grid container spacing={2}>
            <Grid container spacing={3}>
              <FormRow />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
