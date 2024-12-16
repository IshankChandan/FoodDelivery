//Header Component 
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const[btnLogin, setBtnLogin] = useState("Login");
    const isOnline = useOnlineStatus();
    return (
        <div className="header bg-orange-400 flex items-center justify-between shadow-md">
            <div className="logo-container">
                <img alt="res-logo" className="w-28" src={LOGO_URL}></img>         
            </div>
            <div className="nav-items">
                <ul className="flex p-5">
                    <li className="m-2 text-white"> Online: {isOnline ? "🟢" : "❌"}</li>
                    <li className="m-2 font-medium"><Link to="/">Home</Link></li>
                    <li className="m-2 font-medium"><Link to="/about">About</Link></li>
                    <li className="m-2 font-medium"><Link to="/contact">Contact</Link></li>
                    <li className="m-2 font-medium"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-2 font-medium">Cart</li>
                    <button className="px-4 bg-slate-800 text-orange-200 rounded-md" onClick={()=>{btnLogin ==="Login"? setBtnLogin("Logout"):setBtnLogin("Login")}}>
                        {btnLogin}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;