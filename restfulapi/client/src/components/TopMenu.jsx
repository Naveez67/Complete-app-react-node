import React from "react";
import { Link } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import userService from "../services/UserService";
const useStyles = makeStyles((theme) => ({
  media: {
    height:100,
    width:100,

  },
  link: {
    color: "white",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography  >
          <CardMedia
            className={classes.media}
            image="./logo2.png"
            title="logo"
          /> 
        </Typography>
        <Typography  style={{marginRight:"18rem"}}>
          <h2>Academy of Excellence</h2>
           </Typography>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/Admissions" className={classes.link}>
            Admission
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/Aboutus" className={classes.link}>
            Aboutus
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
            Courses
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
