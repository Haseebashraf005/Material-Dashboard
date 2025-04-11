import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SearchBox from '../SearchBox';


const Header = () => {
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
                        <Button variant="contained" className='rounded-circle'><MenuOpenIcon/></Button>
                        <SearchBox />

                    </div>


                </div>
            </div>


        </header>

    )
}

export default Header