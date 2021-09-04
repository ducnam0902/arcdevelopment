import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = '#868686'
export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        },
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        },
        h2: {
            fontFamily: 'Haleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: `${arcBlue}`
        },
        h4: {
            fontFamily: 'Raleway',
            fontSize: '1.75rem',
            color: `${arcBlue}`,
            fontWeight: 700
        },
        subtitle1: {
            color: `${arcGrey}`,
            fontSize: '1.25rem',
            fontWeight: 300
        },
        learnButton: {
            borderColor: `${arcBlue}`,
            color: `${arcBlue}`,
            borderWidth: 2,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        }
    }
})
