import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Grid, Typography, Button, useMediaQuery, useTheme } from '@material-ui/core'
import ButtonArrow from '../ui/ButtonArrow'
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'
const useStyles = makeStyles(theme => ({
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        }
    },
    serviceContainer: {
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25,
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
}))
const Services = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h2" gutterBottom align={matchesSM ? 'center' : undefined} style={{marginLeft: matchesSM ? 0 :'5em', marginTop: matchesSM ? '1em' : '2em'}}>Services</Typography>
            </Grid>
            {/* ---------- iOS/Android Block */}
            <Grid item>
                <Grid style={{marginTop: matchesSM ?  '1em': '5em'}} container justifyContent={matchesSM ? 'center' : 'flex-end'} direction="row" className={classes.serviceContainer}>
                    <Grid item style={{textAlign: matchesSM ? 'center' : undefined , width: matchesSM ? undefined : '35em'}}>
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app
                            {matchesSM ? null : <br />} with either mobile platforms
                        </Typography>
                        <Button onClick={() => { props.setValue(1); props.setSelectedIndex(2) }} component={Link} to="/mobileapps" variant="outlined" className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width="10" height="10" fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                        <img width="250em" className={classes.icon} alt='mobile app icon' src={mobileAppsIcon} />
                    </Grid>
                </Grid>
            </Grid>
            {/* Custom Software Development*/}
            <Grid item>
                <Grid container justifyContent={matchesSM ? 'center' : undefined} direction="row" className={classes.serviceContainer}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to{" "}
                            <span className={classes.specialText}>celebration </span>
                        </Typography>
                        <Button onClick={() => { props.setValue(1); props.setSelectedIndex(1) }} component={Link} to="/customsoftware" variant="outlined" className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width="10" height="10" fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt='custom software icon' src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            {/* -------- Websites Block */}
            <Grid item>
                <Grid container justifyContent={matchesSM ? 'center' : "flex-end"} direction="row" className={classes.serviceContainer}>
                    <Grid item style={{ width: matchesSM ? undefined : '35em', textAlign: matchesSM ? 'center' : 'left' }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Read More. Discover More. Sell More
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button onClick={() => { props.setValue(1); props.setSelectedIndex(3) }} component={Link} to="/websites" variant="outlined" className={classes.learnButton}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width="10" height="10" fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                        <img width="250em" className={classes.icon} alt='website icon' src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Services
