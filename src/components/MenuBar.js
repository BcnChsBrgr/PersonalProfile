import HomeIcon from '@mui/icons-material/Home';
import avatar from "../img/avatar.jpeg";
import {AppBar, Avatar, Box, IconButton, Toolbar} from '@mui/material';
import {Link} from "react-router-dom";

function MenuBar(){
    return (
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
                <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
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
    );
}
export default MenuBar