import { useEffect } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {

    const navigate = useNavigate()

    useEffect( () => {
        const userid = sessionStorage.getItem("username")
        if(userid === '' || userid === null)
            navigate('/login')
    } , [] )

    const logoutHandle = () => {
        toast.success("You are logged out successfully")
    }

    return(
        <div className='px-3 bg-dark'>
            <h3 className='p-3 bg-dark text-white d-flex justify-content-between' style={{textAlign: "left", fontFamily: "Outfit"}}>Employee Management
            <Link to={'/login'}><span onClick={logoutHandle} style={{float: "right", color: "white", fontSize: "18px", marginTop: "5px"}} className="logout">Logout <RiLogoutBoxRLine style={{marginTop: "-3px"}}/></span></Link></h3>
        </div>
    )
}

export default Header