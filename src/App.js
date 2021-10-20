import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';
import {AppBar, Avatar, Box, IconButton, Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import avatar from "./img/avatar.jpeg";
import startlight from "./img/startlight.jpeg";
import Home from "./components/Home";

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
  topUnderBanner: {
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
  container: {
    minWidth: '90hv'
  },
  Home: {
    backgroundColor: 'black'
  }
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
                  edge=""
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
          <Switch>
            <div className={`${classes.topUnderBanner}`}>
              <div className={`${classes.personal}`}>
                <Typography className={`${classes.personalInfo}`} variant="h1">Yu Hin NG</Typography>
                <Typography className={`${classes.personalInfo}`} variant="h4">a backend engineer</Typography>
              </div>
            </div>
            <div className={`${classes.container}`}>
              <Route exact path='/'>
                <Home className={`${classes.Home }`}/>
              </Route>
            </div>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
