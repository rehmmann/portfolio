import { Divider, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import * as React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ebeeee",
  },
  projects: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
  },
  headerText: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
  },
  slider: {
    height: 400,
    width: 500,
  },
  tabs: {
    color: "#151515",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 100,
  },
});

function Projects() {
  const classes = useStyles();

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Divider variant="middle" />
      <Typography
        id="Projects"
        className={classes.headerText}
        variant="h5"
        align="center"
      >
        Projects
      </Typography>
      <Box
        className={classes.root}
        sx={{
          flexGrow: 1,
          // bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          // color: "#FF5C5C",
        }}
      >
        <div className={classes.tabs}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            textColor="inherit"
            indicatorColor=""
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Pepper" {...a11yProps(0)} />
            <Tab label="Union" {...a11yProps(1)} />
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </div>

        <TabPanel value={value} index={0}>
          {/* <div className={classes.projects}> */}
          <Container className={classes.slider}>
            <Slider
              dots={true}
              autoplaySpeed={2000}
              autoplay={true}
              arrows={true}
              pauseOnHover={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={2}
              focusOnSelect={true}
              // fade={true}
              // centerMode={true}
            >
              <img alt="" height={315} src={"Pepper1.jpg"}></img>
              <img alt="" height={315} src={"Pepper2.jpg"}></img>
              <img alt="" height={315} src={"Pepper3.jpg"}></img>
              <img alt="" height={315} src={"Pepper4.jpg"}></img>
              <img alt="" height={315} src={"Pepper5.jpg"}></img>
              <img alt="" height={315} src={"Pepper6.jpg"}></img>
            </Slider>
          </Container>
          {/* </div> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Container className={classes.slider}>
            {/* <Typography
              className={classes.headerText}
              variant="h6"
              align="center"
            >
              Union
            </Typography> */}
            <Slider
              dots={true}
              // autoplaySpeed={2000}
              // autoplay={true}
              // arrows={true}
              // pauseOnHover={true}
              // speed={500}
              // slidesToShow={3}
              // slidesToScroll={2}
              // focusOnSelect={true}
            >
              <img alt="" height={315} src={"Union1.jpg"}></img>
            </Slider>
          </Container>
        </TabPanel>
      </Box>
      <div className={classes.projects}></div>
    </div>
  );
}

export default Projects;
