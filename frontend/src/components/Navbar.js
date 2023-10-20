import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';
import flipkart_logo from "../assets/flipkart.jpg";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "../styles/Navbar.css"
import { Divider, Typography } from '@mui/material';
import Menu from "../components/subComponents/Menu.js"
// import { shadows } from '@mui/system';


function Navbar() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    return (
        <Box sx={{ minWidth: "100%", backgroundColor: "#FFFFFF", boxShadow: 3, display: 'flex', flexDirection: "row", p: 2 }} >
            <div className='parent_left' style={{ boxShadow: "20px", minWidth: "50%", display: 'flex', justifyContent: "space-evenly", alignItems: "center" }}>
                <span className='flipkart_img' > <img src={flipkart_logo} style={{ height: "25px" }} alt="" srcset="" /></span>
                <Search sx={{ width: "100%", minWidth: "30vw", display: "flex", background: "#f0f5ff", ":hover": { background: "#f0f5ff" }, borderRadius: "8px" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            minWidth: "19vw",
                            maxWidth: "fit-content",

                        }}
                    />
                </Search>
            </div>
            <div className='parent_right '>
                <div className="store nav_btn" >
                    <FontAwesomeIcon icon={faStore} size='xl' />
                    <Typography sx={{ pl: 1 }}>
                        Become a Seller
                    </Typography>

                </div>
                <Divider orientation="vertical" className='nav_btn' variant="middle" flexItem />
                <div className="user nav_btn">   <FontAwesomeIcon icon={faUser} size="xl" />
                    <Typography sx={{ pl: 1 }}>
                        Sign in
                    </Typography></div>
                <Divider orientation="vertical" className='nav_btn' variant="middle" flexItem />
                <div className="car nav_btn" ><FontAwesomeIcon icon={faCartShopping} size="xl" />
                    <Typography sx={{ pl: 1 }}>
                        Cart
                    </Typography></div>
                {/* menu -- hidden */}
                <div className="menu"> <Menu /></div>


            </div>
        </Box >
    )
}

export default Navbar
