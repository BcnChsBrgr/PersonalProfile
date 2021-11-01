import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {Avatar, Chip, Stack} from '@mui/material';

import nodejs from '../img/nodejs.png';
import php from '../img/php.png';
import aws from '../img/aws.png';
import mysql from '../img/mysql.png';
import es from '../img/elasticsearch.svg';

const useStyles = makeStyles({
    HomeTitle: {
        width: 'auto',
        padding: '30px'
    },
    StackBedge: {
        paddingLeft: '30px'
    }
});

const bedgeList = [
    { name: 'Node.js', src: nodejs },
    { name: 'php', src: php },
    { name: 'aws', src: aws },
    { name: 'mysql', src: mysql },
    { name: 'elastic search', src: es }
]

function bedge(displayBedge){
    let ava = typeof displayBedge.src == String ? <Avatar> `{displayBedge.src}` </Avatar>: <Avatar alt={displayBedge.name} src={displayBedge.src} />
    return (
        <Chip avatar={ava} label={displayBedge.name} />
    )
}

function SkillSet() {
    const classes = useStyles();
    let list = bedgeList.map(item => bedge(item))
    return (
        <div>
            <Typography className={`${classes.HomeTitle}`} variant="h3">Skill Set</Typography>
            <Stack className={`${classes.StackBedge}`} direction="row" spacing={1}>
                {list}
            </Stack>
        </div>
    );
}
export default SkillSet;
