import Typography from '@mui/material/Typography';
import About from './About'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    divHome: {
        width: '100%;'
    },
    HomeTitle: {
        width: 'auto',
        padding: '30px'
    },
    HomeDescription: {
        margin: '30px',
        display: 'block',
        padding: '30px'
    }
});

function Home() {
    const classes = useStyles();
    return (
        <div className={`${classes.divHome}`}>
            <Typography className={`${classes.HomeTitle}`} variant="h1">Build Things</Typography>
            <Typography className={`${classes.HomeDescription}`} variant="h6">
                This is BcnChsBrgr, responses to build backend service,
                
            </Typography>
            <About />
        </div>
    );
}
export default Home;
