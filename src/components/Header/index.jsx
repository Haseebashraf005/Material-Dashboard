import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchBox from '../SearchBox';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


// for account menu
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

// for account menu


const Header = () => {

    // for account menu

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    // for account menu
    const [cartAnchorEl, setCartAnchorEl] = React.useState(null);
    const cartMenuOpen = Boolean(cartAnchorEl);

    const handleCartClick = (event) => {
        setCartAnchorEl(event.currentTarget);
    };

    const handleCartClose = () => {
        setCartAnchorEl(null);
    };




    return (
        <header className='d-flex align-items-center'>
            <div className="container-fluid">
                <div className="row d-flex align-items-center">

                    {/* Logo Wrapper */}
                    <div className="col-sm-2">
                        <div className="div d-flex">
                            <Link to={'/'} className='d-flex align-items-center underline-none'>
                                <img src={logo} className='logo' alt="logo" />
                                <span className='m-2 header-title'>Dashboard</span>
                            </Link>
                        </div>
                    </div>

                    {/* Icon and search Container */}
                    <div className="col-sm-3 d-flex align-items-center gap-3 ">
                        <Button variant="contained" className='rounded-circle'><MenuOpenIcon /></Button>
                        <SearchBox />
                    </div>

                    <div className="col-sm-7 d-flex align-items-center gap-3 justify-content-end">
                        <Button variant="contained" className='rounded-circle'  ><WbSunnyOutlinedIcon /></Button>


                        <Button variant="contained" className='rounded-circle'><LanguageIcon /></Button>
                        <Button variant="contained" className='rounded-circle' onClick={handleCartClick}><ShoppingCartIcon /></Button>
                        <Menu
                            anchorEl={cartAnchorEl}
                            id="cart-menu"
                            open={cartMenuOpen}
                            onClose={handleCartClose}
                            onClick={handleCartClose}
                            slotProps={{
                                paper: {
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>Your cart is empty</MenuItem>
                            {/* Example items */}
                            <MenuItem>
                                <div className="d-flex flex-column">
                                    <span>Product 1</span>
                                    <span className="text-muted small">Qty: 2</span>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="d-flex flex-column">
                                    <span>Product 2</span>
                                    <span className="text-muted small">Qty: 1</span>
                                </div>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <Link to="/cart" className="text-decoration-none text-primary">
                                    View Cart
                                </Link>
                            </MenuItem>
                        </Menu>


                        <Button variant="contained" className='rounded-circle'><MailOutlineIcon /></Button>
                        <Button variant="contained" className='rounded-circle'><NotificationsOutlinedIcon /></Button>


                        <Button className="myAcc d-flex align-items-center gap-2" onClick={handleClick}>
                            <div className="userImg">
                                <div className="rounded-circle">
                                    <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                                </div>
                            </div>
                            <div className="userInfo d-flex flex-column ">
                                <span><h6 className='mb-0 userName'>Haseeb Ashraf</h6></span>
                                <span className='userSocialDetails'>@Haseeb05</span>
                            </div>
                        </Button>

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            slotProps={{
                                paper: {
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>


                    </div>


                </div>
            </div>


        </header>

    )
}

export default Header