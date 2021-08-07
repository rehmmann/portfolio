import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
import { Container,Divider, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // display:'block'
  },
  parent: {
    // display:'inside'
  },
  container: {
    width: "100%",
    overflow: "hidden",

    // backgroundColor: "#4a41cd",
  },
  img: {
    position: "relative",
    top: 30,
    // marginRight:'auto',

    // marginLeft: "auto",
    paddingBottom: 50,
    borderRadius: "30%",
    maxHeight: "50rem",
    width: "70%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow(props) {
    return (
      <>
        <Grid item xs={6} lg={4}>
          <Cards
            title="CS2040S"
            name="Data Structure & Algo"
            details="The module covers basic data structures (linked lists, stacks, queues, hash tables, binary heaps, trees, and graphs), searching and sorting algorithms, and basic analysis of algorithms."
            url="https://nusmods.com/modules/CS2040S/data-structures-and-algorithms"
          />
        </Grid>
        <Grid item xs={6} lg={4}>
          <Cards
            title="CS2030S"
            name="Programming Methodolgy II"
            details="Learn to develop medium-scale software programs in the order of thousands of lines of code and tens of classes using object-oriented design principles and advanced programming constructs available in the two paradigms."
            url="https://nusmods.com/modules/CS2030S/programming-methodology-ii"
          />
        </Grid>
        <Grid item xs={6} lg={4}>
          <Cards
            title="CS2103"
            name="Software Engineering"
            details="This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. "
            url="https://nusmods.com/modules/CS2103/software-engineering"
          />
        </Grid>
        {/* <Grid item xs={4}>
          <Paper elevation={5} className={classes.paper}>
            item
          </Paper>
        </Grid> */}
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <img
          src="Cycling_pic.jpg"
          alt="Italian Trulli"
          className={classes.img}
        />
      </Container>
      <Divider variant='middle' />
      <Typography variant='h6' align='center'>
        Modules
      </Typography>
      <Container>
        
        <Grid container spacing={2}>
          <Grid container  spacing={3}>
            <FormRow />
          </Grid>
          {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}
