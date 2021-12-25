import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Divider,
  IconButton,
  CardContent,
  Card,
  Container,
} from "@material-ui/core";
import React from "react";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
// import {MenuTwoToneIcon, GitHubIcon} from "@material-ui/icons/MenuTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "../greg-rakozy-oMpAz-DN-9I-unsplash.jpg";
const headersData = [
  {
    label: "About Me",
    href: "/account",
  },
  {
    label: "Modules",
    href: "/listings",
  },
  {
    label: "Projects",
    href: "/mentors",
  },

  {
    label: "Contact Me",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000C66",
    paddingRight: "79px",
    paddingLeft: "118px",
    backgroundImage: `url(${Image})`,
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  },
  container: {
    textAlign: "center",
  },
  name: {
    fontFamily: "Work Sans",
    fontWeight: 700,
    fontSize: 50,
    textAlign: "center",
    marginTop: 50,
  },
  titles: {
    fontFamily: "Open Sans",
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  icons: {
    marginTop: 10,
    paddingLeft: 10,
  },
  menuButton: {
    fontFamily: "sans-serif",
    fontWeight: 700,
    size: "18px",
    padding: "20px",
  },
  toolbar: {
    display: "flex",
    // position:'sticky',
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
}));
//menu buttons are modules/projects ...
export default function Header() {
  const { header, container, name, titles, icons, menuButton, toolbar } = useStyles(); //destructuring

  const test = (label) => {
    if (label == "Modules") {
      document.getElementById("Modules").scrollIntoView({ behavior: "smooth" });
    }
    if (label == "Projects") {
      document
        .getElementById("Projects")
        .scrollIntoView({ behavior: "smooth" });
    }
    if (label == "Contact Me") {
      document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
    }
    if (label == "About Me") {
      document
        .getElementById("About Me")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  const displayDesktop = () => {
    const handleGitHubIcon = () => {
      window.location.href = "https://github.com/rehmmann"
   }
   const handleLinkedInIcon = () => {
    window.location.href = "https://linkedin.com/in/rehman-sajid"
 }
    return (
      <div>
        <Toolbar
          {...{
            className: toolbar,
          }}
        >
          <div>{getMenuButtons()}</div>
          <Divider />
        </Toolbar>
        <Container className={container}>
          <Typography className={name}>Rehman Sajid</Typography>
          <Typography className={titles}>
            Software Engineer | Data Analyst
          </Typography>
          <GitHubIcon className={icons} onClick={handleGitHubIcon}/>
          <LinkedInIcon className={icons} onClick={handleLinkedInIcon}/>
        </Container>
      </div>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <BrowserRouter>
          <Button
            onClick={() => {
              test(label);
            }}
            // {...{
            //   key: label,
            color="inherit"
            //   to: href,
            //   component: RouterLink,
            className={menuButton}
            // }}
          >
            {label}
          </Button>
        </BrowserRouter>
      );
    });
  };

  return (
    <AppBar className={header} position="relative">
      {displayDesktop()}
    </AppBar>
  );
}
