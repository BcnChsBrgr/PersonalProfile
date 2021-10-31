import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { makeStyles } from '@mui/styles';
import {Box,Grid, Typography} from '@mui/material';
import startlight from "./img/startlight.jpeg";
import Home from "./components/Home";
import About from "./components/About";
import MenuBar from './components/MenuBar';
import Career from './components/Career';
import PersonalInformation from "./components/PersonalInformation";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    TopperDown: {
        width: '100%',
        position: 'absolate',
        backgroundImage: `url(${startlight})`,
        transform: 'translate3d(0px, 0px, 0px)',
        height: '80vh',
    },
    personal: {
        display: 'block',
        width: '100%',
        minWidth: '400px',
        paddingTop: '50px',
        paddingLeft: '15px',
        zIndex: '-1'
    },
    personalInfo: {
        color: '#FFFFFF',
        padding: '15px 15px 15px 15px',
    },
    containerBox: {
        display: 'block',
        margin: '30px 15px 15px',
        padding: '15px',
        borderRadius: '25px 25px 0 0',
        background: '#F8F8F8',
        midWidth: '370px',
        zIndex: '1',
        boxShadow: '1px 5px 5px #C8C8C8'
    },
    Home: {
        backgroundColor: 'black'
    },
    paperClas:{
        marginTop: '15px',
    },
    profilePic:{
        margin: 'auto',
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        maxHeight: '100%'
    }
});

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <Router>
                <Box sx={{ flexGrow: 1 }}>
                    <MenuBar />
                </Box>
                <div className={`${classes.TopperDown}`}>
                    <div className={`${classes.personal}`}>
                        <Typography className={`${classes.personalInfo}`} variant="h1">BcnChs Brgr</Typography>
                        <Typography className={`${classes.personalInfo}`} variant="h4">Backend Engineer</Typography>
                    </div>
                    <div className={`${classes.containerBox}`}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item sm={9}>
                                <Switch>
                                    <Route path='/'>
                                        <Home />
                                    </Route>
                                    <Route path="/Career">
                                        <Career />
                                    </Route>
                                    <Route path='/about'>
                                        <About />
                                    </Route>
                                </Switch>
                                
                            </Grid>
                            <Grid item sm={3}>
                                <PersonalInformation />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
