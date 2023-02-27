import { FaHeart } from "react-icons/fa";
import React from "react";

function Footer() {
    return(
        <>
            <footer className='bg-dark text-white fixed-bottom'>
                By Arshad with love<FaHeart style={{margin: "-3px 0 0 5px"}}/>
            </footer>
        </>
    )
}

export default Footer