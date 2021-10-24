import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    
});

function Cert() {
    const classes = useStyles();
    return (
        <div>
        <Typography className={`${classes.HomeTitle}`} variant="h3">Objective</Typography>
        </div>
    );
}
export default Cert;
