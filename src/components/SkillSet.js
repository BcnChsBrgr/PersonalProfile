import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {Avatar, Chip, Stack} from '@mui/material';

import nodejs from '../img/nodejs.png';
import php from '../img/php.png';
import aws from '../img/aws.png';
import mysql from '../img/mysql.png';
import es from '../img/elasticsearch.svg';
import git from '../img/git.png';

const useStyles = makeStyles({
    SkillsetClass: {
        width: '100%',
    },
    HomeTitle: {
        width: '100%'
    },
    StackBedge: {
        width: '100%'
    },
    badgechil: {
        float: 'left',
        display: 'block'
    },
    ulClass:{
        listStyle: 'none',
        display: 'block',
        padding: '0px',
        width: '100%',
        float: 'left'
    }
});

const bedgeList = [
    { name: 'Node.js', src: nodejs },
    { name: 'php', src: php },
    { name: 'aws', src: aws },
    { name: 'mysql', src: mysql },
    { name: 'elastic search', src: es },
    { name: 'git', src: git }
]

function bedge(badgechil, displayBedge, index){
    let ava = typeof displayBedge.src == String ? <Avatar> `{displayBedge.src}` </Avatar>: <Avatar alt={displayBedge.name} src={displayBedge.src} />
    return (
        <li key={index}><Chip className={`${badgechil}`} avatar={ava} label={displayBedge.name} /></li>
    )
}

function SkillSet() {
    const classes = useStyles();
    let list = bedgeList.map((item, index) => bedge(classes.badgechil, item, index))
    return (
        <div className={`${classes.SkillsetClass}`}>
            <Typography className={`${classes.HomeTitle}`} variant="h3">Skill Set</Typography>
            <Stack className={`${classes.StackBedge}`} direction="row" spacing={1}>
                <ul className={`${classes.ulClass}`}>{list}</ul>
            </Stack>
        </div>
    );
}
export default SkillSet;
