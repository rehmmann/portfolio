import React from "react";
import emailjs from "emailjs-com";
import {
  makeStyles,
  TextField,
  Divider,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    color: "#FFFFFF",
  },
  container: {
    // display: 'flex',
    flexDirection: "column",
    padding: "5%",
    // color: "#FFAEBC",
    // backgroundImage: `url(${Image})`
    background: "#151515;",
  },
  field: {
    width: "70%",
    // borderRadius: 15,
    display: "flex",
    // color: "#FFAEBC",
    backgroundColor: "#FFFFFF",
    marginLeft: "15%",
    marginTop: "4%",
  },
  button: {
    borderRadius: 15,
    marginLeft: "15%",
    marginTop: "4%",
    // marginLeft: "3%",
    // marginTop:'3%',
    // backgroundColor: "#FFFFFF",
    "&:hover": {
      transform: "scale(1.05)",
      transitionDuration: 2
    },
  },
});

function Contact() {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ve2emdi",
        "template_v7ix0sa",
        e.target,
        "user_wiUeBluxgHfn8y23Vihwj"
      )
      .then(
        (result) => {
          // alert('message sent');
          console.log(result.text);
        },
        (error) => {
          // alert('Error');
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="Contact">
      <Divider variant="middle" />

      <div className={classes.container}>
        <Typography className={classes.title} variant="h5" align="center">
          Contact Me
        </Typography>
        <form className="contact-form" onSubmit={sendEmail}>
          {/* <input type="number" name="contact_number" /> */}
          {/* <label>Name</label> */}
          <TextField
            name="user_name"
            id="standard-secondary"
            label="Name"
            className={classes.field}
            variant="filled"
          />
          {/* <input type="text" name="user_name" /> */}
          {/* <label>Email</label> */}
          <TextField
            // color = 'secondary'
            name="user_email"
            id="standard-secondary"
            label="Email"
            className={classes.field}
            variant="filled"
          />

          <TextField
            multiline
            name="message"
            id="message"
            label="Message"
            className={classes.field}
            variant="filled"
            rows={4}
          />
          {/* <input type="submit" value="Send" /> */}
          <Button
            size="large"
            variant="contained"
            className={classes.button}
            type="submit"
            value="Send"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
