import {Avatar, Typography} from '@mui/material'
import {Timeline,TimelineItem,TimelineOppositeContent,TimelineSeparator,TimelineConnector,TimelineDot, TimelineContent } from '@mui/lab';
import tvb from '../img/tvb.png';
import aswatson from '../img/aswatson.png';
import mekim from '../img/mekim.png'
import hkt from '../img/hkt.png'
import airPublish from '../img/airpublishing.jpeg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    HomeTitle: {
        width: 'auto'
    },
});

function timelineItemClasses(name, item, index){
    return (
        <TimelineItem key={index} id={index} className={`${name}`}>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">{item.timeRange}</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    <Avatar src={item.src} />
                </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span">{item.title}</Typography> <Typography variant="h6" component="span"> - {item.company}</Typography>
                <Typography paragraph={true}>{item.desc}</Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

const professionalLive = [
    {
        timeRange: 'Apr 2022 - Present',
        company: 'Air Publishing Limited',
        title: 'Web developer',
        src: airPublish,
        desc: 'Help migrating web service to cloud, and use the prevous cloud knowledge helps any code change.'
    },
    {
        timeRange: 'May 2020 - Jan 2022',
        company: 'TVB New Media Group',
        title: 'Software Analyst',
        src: tvb,
        desc: 'Provide a stable environment for client and colleague via AWS Services; Replacing existing function with cloudfunction like lambda'
    },
    {
        timeRange: 'Sep 2019 - Apr 2020',
        company: 'AS Watson Group',
        title: 'Developer',
        src: aswatson,
        desc: 'Negotiated scope with vendors, Help achieved and collaborating with different sales market, calling api services between warehouse and allocate stock to different sales channels in different region in GOMS. Maintain stock level count, and reserved stock number count in OMS'
    },
    {
        timeRange: 'Jan 2019 - Aug 2019',
        company: 'TVB New Media Group',
        title: 'Senior Software Engineer',
        src: tvb,
        desc: 'take adventage on AWS Cloud Services; combine the existsing service system with cloud technologies;'
    },
    {
        timeRange: 'Apr 2017 - Dec 2018',
        company: 'TVB New Media Group',
        title: 'Software Engineer',
        src: tvb,
        desc: 'Design & Implement systems, for online OTT platform; pack existsing system into container via docker;'
    },
    {
        timeRange: 'Aug 2016 - Dec 2017',
        company: 'Mekim Ltd.',
        title: 'Programme; Application Engineer',
        src: mekim,
        desc: 'using Objective-C & C# & ABAP for ERP mobilize development; Breakdown the blueprint and into function specification; Help training Junior Programmer;'
    },
    {
        timeRange: 'May 2015 - Jul 2016',
        company: 'HKT Ltd',
        title: 'Programmer',
        src: hkt,
        desc: 'Design and Develop web-based system;'
    }
]

function Career(){
    const classes = useStyles();
    let list = professionalLive.map((professional, index)=> timelineItemClasses(classes.HomeTitle, professional, index))
    return (
        <div>
            <Typography className={`${classes.HomeTitle}`} variant="h3">Career Life</Typography>
            <Timeline position="alternate">
                {list}
            </Timeline>
        </div>
    );
}
export default Career;