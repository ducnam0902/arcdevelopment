import React from 'react'
import Lottie from 'react-lottie'
import { Grid, makeStyles, Button } from '@material-ui/core'
import ButtonArrow from '../component'
import animationData from '../../animations/landinganimation/data'

const useStyles = makeStyles(theme => ({

}));

const LandingPage = () => {
    const classes = useStyles();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container direction="row">
                    <Grid item >
                    <div>Bringing West Coast Technology <br/> to the Midwest</div>
                    <Grid container>
                        <Grid item>
                            <Button variant="contained">Free Estimate</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained">Learn More
                            <ButtonArrow width="15" height="15" fill="red"/>
                            </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item >
                    <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
                    </Grid>
                </Grid>
            </Grid>

           
        </Grid>



    )
}

export default LandingPage
