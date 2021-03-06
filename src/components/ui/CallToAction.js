import React from 'react'
import { Grid, Typography, makeStyles, useTheme, Button, useMediaQuery } from '@material-ui/core'
import ButtonArrow from './ButtonArrow';
import {Link} from 'react-router-dom'
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'
const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: 'inherit',
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 15,
        height: 80,
        width: 205,
        background: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0',
            marginLeft: '0'
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

const CallToAction = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid container direction={matchesSM ? 'column' : 'row'} justifyContent={matchesSM ? 'center' : "space-between"} alignItems="center" className={classes.background}>
            <Grid item style={{ marginLeft: matchesSM ? '0' : '5em', textAlign: matchesSM ? 'center' : 'inherit' }}>
                <Grid container direction="column" >
                    <Grid item>
                        <Typography variant="h2"> Simple Software. <br /> Revolutionary Results.</Typography>
                        <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}> Take advantage of the 21st Century</Typography>
                        <Grid container item justifyContent={matchesSM ? 'center' : 'inherit'} >
                            <Button onClick={() => props.setValue(2)} component={Link} to="/revolution" variant="outlined" className={classes.learnButton}>
                                <span style={{ marginRight: 5 }}>Learn More</span>
                                <ButtonArrow width="10" height="10" fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button onClick={() => props.setValue(5)} component={Link} to="/estimate" variant="contained" className={classes.estimateButton} >Free Estimate</Button>
            </Grid>
        </Grid>
    )
}

export default CallToAction
