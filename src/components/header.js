import React from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/cart.svg";
import Whishlist from "../assets/wishlist.svg";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return (
        <div className="header-container">
            <img src={Logo} />
            <div className="left-container">
                <TextField variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }} placeholder="Search for products" size="small" />
                <img src={Whishlist} style={{ margin: "0px 10px" }} />{" "}
                <img src={Cart} style={{ margin: "0px 10px" }} />{" "}
                <button className="custom-button">Get Start</button>
            </div>
        </div>
    );
}
