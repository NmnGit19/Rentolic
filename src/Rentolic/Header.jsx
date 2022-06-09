import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
    return (
        <>
            <div className="header_main">
                <div className="first_div">
                    <AccountCircleIcon className="profile_icon" />
                    <h1 className="head_heading">Rentolic</h1>
                </div>

                <div className="search_div">
                    <InputBase placeholder="Search for products, brands more you want to rent" className="search" />
                    <IconButton type="submit">
                        <SearchIcon className="search_icon" />
                    </IconButton>
                </div>


                <div className="location_div">
                    <LocationOnIcon className="location" />
                    <h3>Delhi, NCR</h3>
                </div>

                <a href="#"><button className="header_btn">LOGIN/SIGN UP</button></a>
            </div>
        </>
    );
};
export default Header;