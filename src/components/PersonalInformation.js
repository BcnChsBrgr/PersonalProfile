import {Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Icon} from '@mui/material';
import Eyore from '../img/eyore.jpeg';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import DomainVerificationTwoToneIcon from '@mui/icons-material/DomainVerificationTwoTone';
import SchoolIcon from '@mui/icons-material/School';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    PersonalCard: {
        width: '100%',
        margin: '10px auto'
    },
    personalUl:{
        width: '100%',
        margin: '1px auto'
    },
    personalList: {
        width: '100%',
        margin: '5px auto'
    }
});

function listItem(item, index){
    let str
    if(typeof item.icon == 'string'){
        str = (<Avatar variant="circular" alt="complex" src={item.src} sx={{display: 'block', width: '100%', height: '100%', margin: '15px auto'}}/>)
    } else {
        str = (<ListItemAvatar key={`st_${index}`}><Avatar variant="circular"><Icon>{item.icon}</Icon></Avatar></ListItemAvatar>)
    }
    
    return (
        <div key={`div_${index}`}>
            <ListItem key={`list_${index}`}> {str} <ListItemText primary={item.primary} secondary={item.secondary} key={`lit_${index}`}/> </ListItem>
            <Divider variant="inset" component="li" key={`div_${index}`}/>
        </div>
    )
}

const aboutMe = [
    { icon: 'personalImage', src: Eyore },
    { icon: <AccountCircleTwoToneIcon />, primary: 'BcnChsBrgr', secondary: 'Software Analyst' },
    { icon: <LocationOnTwoToneIcon />, primary: 'Hong Kong', secondary: 'will visit UK shortly' },
    { icon: <DomainVerificationTwoToneIcon />, primary: 'Developer-Associate', secondary: 'AWS Certificated' },
    { icon: <SchoolIcon />, primary: 'BCs in Computing Science', secondary: 'Staffordshire University'}
]

function PersonalInformation(){
    const classes = useStyles();
    let list = aboutMe.map((item, index) => listItem(item, index))
    
    return (
        <Card className={`${classes.PersonalCard}`}>
            <List sx={{width: '100%', maxWidth: '250px', margin: '1px auto', bgcolor: 'background.paper'}}>
                {list}
            </List>
        </Card>
    );
}
export default PersonalInformation;