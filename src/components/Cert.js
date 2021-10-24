import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    HomeTitle: {
        width: 'auto',
        padding: '30px'
    },
});

function Cert() {
    const classes = useStyles();
    return (
        <div>
            <Typography className={`${classes.HomeTitle}`} variant="h3">Certificate</Typography>
        </div>
    );
}
export default Cert;
