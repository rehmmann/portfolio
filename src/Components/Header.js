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
} from "@material-ui/core";
import React from "react";
import { BrowserRouter, Link as RouterLink } from "react-router-dom";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";

const headersData = [
  {
    label: "Modules",
    href: "/listings",
  },
  {
    label: "Projects",
    href: "/mentors",
  },
  {
    label: "About Me",
    href: "/account",
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
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    // color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginRight: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
//menu buttons are modules/projects ...
export default function Header() {
  const { header, logo, menuButton, toolbar } = useStyles(); //destructuring

  const displayDesktop = () => {
    return (
      <Toolbar
        {...{
          className: toolbar,
        }}
      >
        {/* <IconButton>
          <MenuTwoToneIcon color="secondary" />
        </IconButton> */}
        {welcomeLogo}

        <div>{getMenuButtons()}</div>
        <Divider />
      </Toolbar>
    );
  };

  const welcomeLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Welcome
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <BrowserRouter>
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        </BrowserRouter>
      );
    });
  };

  return (
    <AppBar className={header} position="sticky">
      {displayDesktop()}
    </AppBar>
  );
}
