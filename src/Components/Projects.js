import { Divider, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const useStyles = makeStyles({
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
});
function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Divider variant="middle" />
      <Typography
        id="Projects"
        className={classes.headerText}
        variant="h5"
        align="center"
      >
        Projects
      </Typography>
      <div className={classes.projects}>
        <Container className={classes.slider}>
          <Typography
            className={classes.headerText}
            variant="h6"
            align="center"
          >
            Pepper
          </Typography>
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
            <img alt="" height={300} src={"Pepper1.jpg"}></img>
            <img alt="" height={300} src={"Pepper2.jpg"}></img>
            <img alt="" height={300} src={"Pepper3.jpg"}></img>
            <img alt="" height={300} src={"Pepper4.jpg"}></img>
            <img alt="" height={300} src={"Pepper5.jpg"}></img>
            <img alt="" height={300} src={"Pepper6.jpg"}></img>
          </Slider>
        </Container>
        <Container className={classes.slider}>
          <Typography
            className={classes.headerText}
            variant="h6"
            align="center"
          >
            Union
          </Typography>
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
            <img alt="" height={300} src={"Union1.jpg"}></img>

          </Slider>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
