import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {AppBar, Avatar, Box, IconButton, Toolbar} from '@mui/material'
import avatar from "./img/avatar.jpeg";
import Home from "./components/Home";
// import About from "./components/About";
import './App.css';

function App() {
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
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
