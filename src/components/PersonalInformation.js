import {Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Icon} from '@mui/material';
import Eyore from '../img/eyore.jpeg';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import DomainVerificationTwoToneIcon from '@mui/icons-material/DomainVerificationTwoTone';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    PersonalCard: {
        maxWidth: '285px',
        width: '100%'
    },
});

function listItem(item, index){
    let str
    if(typeof item.icon == 'string'){
        str = (<Avatar variant="circular" alt="complex" src={item.src} sx={{width: '100%', minWidth:'200px', minHeight: '200px', padding: '15px auto'}}/>)
    } else {
        str = (<ListItemAvatar><Avatar variant="circular"><Icon>{item.icon}</Icon></Avatar></ListItemAvatar>)
    }
    
    return (
        <div>
            <ListItem key={index}> {str} <ListItemText primary={item.primary} secondary={item.secondary} /> </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    )
}

const aboutMe = [
    { icon: 'personalImage', src: Eyore },
    { icon: <AccountCircleTwoToneIcon />, primary: 'BcnChsBrgr', secondary: 'Software Analyst' },
    { icon: <LocationOnTwoToneIcon />, primary: 'Hong Kong', secondary: 'will visit UK shortly' },
    { icon: <DomainVerificationTwoToneIcon />, primary: 'Developer-Associate', secondary: 'AWS Certificated' }
]

function PersonalInformation(){
    const classes = useStyles();
    let list = aboutMe.map((item, index) => listItem(item, index))
    
    return (
        <Card className={`${classes.PersonalCard}`}>
            <List sx={{width: '100%', maxWidth: '250px', bgcolor: 'background.paper'}}>
                {list}
            </List>
        </Card>
    );
}
export default PersonalInformation;