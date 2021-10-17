import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {AppBar, Avatar, Box, IconButton, Toolbar} from '@mui/material'
import avatar from "./img/avatar.jpeg";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                href="/"
              >
                <HomeIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                  size="large"
                  edge=""
                  color="inherit"
                  sx={{mr:2}}
                  href="/about"
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
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
