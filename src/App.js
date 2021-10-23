import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';
import {AppBar, Avatar, Box, IconButton, Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import avatar from "./img/avatar.jpeg";
import startlight from "./img/startlight.jpeg";
import Home from "./components/Home";
import About from "./components/About";

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
    backgroundImage: `url(${startlight})`,
    transform: 'translate3d(0px, 0px, 0px)',
    height: '80vh',
  },
  personal: {
    display: 'block',
    width: '90hv',
    minWidth: '90vh',
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
    minWidth: '90hv',
    zIndex: '1',
    boxShadow: '1px 5px 5px #C8C8C8'
  },
  Home: {
    backgroundColor: 'black'
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Link to="/">
                <IconButton
                  size="large"
                  edge="start"
                  style={{color: "white"}}
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <HomeIcon />
                </IconButton>
              </Link>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  sx={{mr:2}}
                  href="https://www.linkedin.com/in/yu-hin-ng-4797aa141/"
                >
                  <Avatar src={avatar}></Avatar>
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
          
        <div className={`${classes.TopperDown}`}>
          <div className={`${classes.personal}`}>
            <Typography className={`${classes.personalInfo}`} variant="h1">BcnChsBrgr</Typography>
            <Typography className={`${classes.personalInfo}`} variant="h4">Backend Engineer</Typography>
          </div>
          <div className={`${classes.containerBox}`}>
            <Switch>
              <Route path='/'>
                <Home />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
