import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1562,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    width: "4em",
    height: "4em",
    [theme.breakpoints.down('xs')]:{
      height: '2.5em',
      width: '2.5em',
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]:{
     right: '0.5em'
    }
  }
}));
const Footer = (props) => {
  const {  setValue, setSelectedIndex } = props;
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => setValue(0)}
                component={Link}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                component={Link}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                component={Link}
                to="/customsoftware"
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                component={Link}
                to="/mobileapps"
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                component={Link}
                to="/websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => setValue(3)}
                component={Link}
                to="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                onClick={() => setValue(3)}
                component={Link}
                to="/about"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                onClick={() => setValue(3)}
                component={Link}
                to="/about"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                onClick={() => setValue(3)}
                component={Link}
                to="/about"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => setValue(4)}
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        alt="black decorative slash"
        src={footerAdornment}
      ></img>
      <Grid container spacing={2} justifyContent="flex-end" className={classes.socialContainer}>
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src={facebook}
            className={classes.icon}
          ></img>
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon}></img>
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src={instagram}
            className={classes.icon}
          ></img>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
