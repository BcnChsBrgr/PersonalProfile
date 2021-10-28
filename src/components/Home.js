import Typography from '@mui/material/Typography';
import Cert from './Cert'
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
            <Typography className={`${classes.HomeTitle}`} variant="h3">Objective</Typography>
            <Typography className={`${classes.HomeDescription}`} variant="h6">
                Software Analyst; Backend developer
            </Typography>
            <Typography className={`${classes.HomeTitle}`} variant="h3">SELFIE</Typography>
            <Typography className={`${classes.HomeDescription}`} variant="h6">
                I started my professional career as a programme in <a href="https://www.hkt.com/for-your-home/hkt-premier?locale=en">HKT Ltd</a> in 2015. 
                Back in the days, I help develop web-based system for customer-service department. 
                That system helps CS persons accessing the customer records for help quickly. 
            </Typography>
            <Cert />
        </div>
    );
}
export default Home;
