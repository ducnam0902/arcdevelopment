import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  makeStyles,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import airplane from "../../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 15,
    height: 80,
    width: 205,
    background: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
      marginLeft: "0",
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    background: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]:{
      height: 40,
      width: 225
    }
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else setPhoneHelper("");
        break;
      default:
        break;
    }
  };
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1em" }}
                >
                  {" "}
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelop"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1em" }}
                >
                  <a
                    href="mailto:zachary@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    zachary@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  fullWidth
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  helperText={emailHelper}
                  value={email}
                  error={emailHelper.length !== 0}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  fullWidth
                  value={phone}
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                id="message"
                multiline
                rows={10}
                className={classes.message}
                value={message}
                InputProps={{ disableUnderline: true }}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message{" "}
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={{ zIndex: 2000 }}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            paddingLeft: matchesMD ? 0 :"10em",
            paddingRight: matchesMD ? 0 :"10em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                {" "}
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                value={name}
                fullWidth
                onChange={(event) => setName(event.target.value)}
              />
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  helperText={emailHelper}
                  value={email}
                  error={emailHelper.length !== 0}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  fullWidth
                  value={phone}
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ maxWidth: matchesXS ? '100%' :"20em" }}>
                <TextField
                  id="message"
                  multiline
                  rows={10}
                  className={classes.message}
                  value={message}
                  InputProps={{ disableUnderline: true }}
                  onChange={(event) => setMessage(event.target.value)}
                  style={{marginTop: '1em'}}
                />
              </Grid>
              <Grid
                item
                container
                style={{ marginTop: "2em" }}
                alignItems="center"
                direction={matchesSM ? 'column' : 'row'}
              >
                <Grid item>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.sendButton}
                    onClick={() => setOpen(true)}
                  >
                    Send Message{" "}
                    <img
                      src={airplane}
                      alt="paper airplane"
                      style={{ marginLeft: "1em" }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={matchesMD ? "center" : "space-between"}
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? "0" : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                {" "}
                Simple Software. <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                {" "}
                Take advantage of the 21st Century
              </Typography>
              <Grid
                container
                item
                justifyContent={matchesMD ? "center" : "inherit"}
              >
                <Button
                  onClick={() => props.setValue(2)}
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width="10"
                    height="10"
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item justifyContent={matchesMD ? "center" : "inherit"}>
          <Button
            onClick={() => props.setValue(5)}
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
