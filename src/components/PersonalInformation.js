import {Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import Eyore from '../img/eyore.jpeg';
import { makeStyles } from '@mui/styles';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import DomainVerificationTwoToneIcon from '@mui/icons-material/DomainVerificationTwoTone';

const useStyles = makeStyles({
    profilePic: {
        margin: '15px auto'
    }
});

function PersonalInformation(){
    const classes = useStyles();    
    return (
        <Card sx={{p:2, display: 'flex'}}>
            <List sx={{width: '100%',maxWidth: 360,bgcolor: 'background.paper'}}>
                <ListItem >
                    <Avatar variant="circular" className={`${classes.profilePic}`} alt="complex" src={Eyore} sx={{width: '80%', minHeight: '200px'}}/>
                </ListItem>
                <Divider variant="inset" component="li" />
                
                <ListItem>
                    <ListItemAvatar>
                        <Avatar><AccountCircleTwoToneIcon /></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="BcnChsBrgr" secondary="Software Analyst" />
                </ListItem>
                
                <Divider variant="inset" component="li" />
                
                <ListItem>
                    <ListItemAvatar>
                        <Avatar><LocationOnTwoToneIcon /></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hong Kong" secondary="will visit UK shortly" />
                </ListItem>
                <Divider variant="inset" component="li" /> 
               
               <ListItem>
                   <ListItemAvatar>
                       <Avatar><DomainVerificationTwoToneIcon /></Avatar>
                    </ListItemAvatar>
                   <ListItemText primary="Developer-Associate" secondary="AWS Certificated" />
               </ListItem>
            </List>
            
        </Card>

    );
}
export default PersonalInformation;