import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
    return (
        <>
            <div className="navbar_main">
                <h2><Link exact to="/" className="anchor">Automobiles</Link></h2>
                <h2><Link exact to="/Entertainment" className="anchor">Entertainment</Link></h2>
                <h2><Link exact to="/Applications" className="anchor">Applications</Link></h2>
                <h2><Link exact to="/Electronics" className="anchor">Electronics</Link></h2>
                <h2><Link exact to="/Furniture" className="anchor">Furniture</Link></h2>
                <h2><a className="anchor">Rentolic for Business</a></h2>
                <PhoneIcon className="phone_icon" />
                <h3 className="number">+91-9035601924</h3>
            </div>
        </>
    );
};
export default Navbar;
