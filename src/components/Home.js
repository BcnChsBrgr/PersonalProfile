import Typography from '@mui/material/Typography';
import SkillSet from './SkillSet'
import Career from './Career'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    divHome: {
        width: '100%'
    },
    HomeTitle: {
        width: '80%',
        paddingTop: '30px',
        paddingBottom: '10px'
    },
    HomeDescription: {
        width: '100%',
        margin: '30px',
        display: 'block',
        paddingTop: '30px',
        paddingBottom: '30px'
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
            <SkillSet />
            <Typography className={`${classes.HomeTitle}`} variant="h3">SELFIE</Typography>
            <Typography className={`${classes.HomeDescription}`} variant="h6">
                I started my professional career as a programme in <a href="https://www.hkt.com/for-your-home/hkt-premier?locale=en">HKT Ltd</a> in 2015. 
                Back in the days, I help develop web-based system for customer-service department. 
                That helps CS persons accessing the customer records for help quickly. After that, 
                I have trued my career to be a app developer in <a href="http://www.mekim.com/en/index">Mekim</a>. 
                In Mekim, I start using develop a application that use SAP function in mobile. We have build a stock take mobile application, that helps 
                warehourse worker for locate the items and packing them. After a while, I've decided to become a backend developer in <a href="https://www.tvb.com/">TVB New Media Group</a>.
                In NMG, I have learn that build a mordon application on cloud, and take adventage on cloud resource. Although the cloud resource is powerful, 
                we need to avoid spending too much on 
            </Typography>
            <Career />
        </div>
    );
}
export default Home;
