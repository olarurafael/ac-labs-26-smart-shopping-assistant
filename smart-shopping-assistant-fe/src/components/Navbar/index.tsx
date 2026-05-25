import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

function NavBar() {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Link to="/">
                    <Box 
                     component="img"
                     src={logo}
                     alt="Smart Shopping Assistant Logo"
                     sx={{ height: 56, mr: 2 }}
                    />
                </Link>
                <Button component={NavLink} to="/" variant="contained" sx={{mr: 2, ml: 2}}>Home</Button>
                <Button component={NavLink} to="/categories" variant="contained" sx={{mr: 2, ml: 2}}>Categories</Button>
                <Button component={NavLink} to="/products" variant="contained"sx={{mr: 2, ml: 2}} >Products</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;