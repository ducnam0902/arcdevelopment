import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, useScrollTrigger, Tab, Tabs, Button, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em'
    },
    logo: {
        height: '7em'
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px'
    },
    logoContainer:{
        padding:0,
        "&:hover": {
            backgroundColor: 'transparent'
        }
    }
}))
const Header = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0)
            setValue(0);
        else if (window.location.pathname === "/services" && value !== 1)
            setValue(1);
        else if (window.location.pathname === "/revolution" && value !== 2)
            setValue(2);
        else if (window.location.pathname === "/about" && value !== 3)
            setValue(3);
        else if (window.location.pathname === "/contact" && value !== 4)
            setValue(4);
        else if (window.location.pathname === "/estimate" && value !== 5)
            setValue(5);
    }, [value]);
    const handleChange = (e, value) => {
        setValue(value);
    }

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button disableRipple onClick={() => setValue(0)} component={Link} to="/" className={classes.logoContainer}> 
                            <img src={logo} alt="company logo" className={classes.logo} />
                        </Button>

                        <Tabs indicatorColor="primary" value={value} onChange={handleChange} className={classes.tabContainer}>
                            <Tab className={classes.tab} component={Link} to="/" label="Home" />
                            <Tab className={classes.tab} component={Link} to="/services" label="Services" />
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                            <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                        </Tabs>
                        <Button variant="contained" color="secondary" component={Link} to="/estimate" className={classes.button}>
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    )
}

export default Header
