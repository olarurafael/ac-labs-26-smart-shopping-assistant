import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';

function Navbar(){
    return (
    <AppBar position = "static">
        <Toolbar >
            <Link to="/">
                <Box
                component="img"
                src={logo}
                alt="SmartShoppingAssistantLogo"
                sx={{height:56, mr:2}}
                />
            </Link>
            <Button component={NavLink} to="/" variant = "contained">Home</Button>
            <Button component={NavLink} to="/categories" variant = "contained">Categories</Button>
            <Button component={NavLink} to="/products" variant = "contained">Products</Button>
        </Toolbar>
    </AppBar>)
}

export default Navbar;