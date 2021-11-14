import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import avatar from "../img/avatar.jpeg";
import {AppBar, Avatar, Box, IconButton, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import {Menu, MenuItem} from '@mui/material';

function MenuBar(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton
                    size="large"
                    edge="start"
                    id="basic-button"
                    color="inherit"
                    aria-label="menu"
                    aria-haspopup="true"
                    aria-controls="basic-menu"
                    aria-expanded={open ? 'true' : null}
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
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
                <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        sx={{mr:2}}
                        href="https://www.linkedin.com/in/yu-hin-ng-4797aa141/"
                    >
                        <Avatar src={avatar} variant="circular"></Avatar>
                    </IconButton>
                </Box>
            </Toolbar>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}          
            >
                <Link to="/Career"><MenuItem onClick={handleClose}>Career</MenuItem></Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}
export default MenuBar