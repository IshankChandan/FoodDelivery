//Header Component 
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const[btnLogin, setBtnLogin] = useState("Login");
    const isOnline = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)

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
                    <li className="m-2 font-medium"> <Link to ="/cart">cart({cartItems.length})</Link></li>
                    <button className="px-4 bg-slate-800 text-orange-200 rounded-md" onClick={()=>{btnLogin ==="Login"? setBtnLogin("Logout"):setBtnLogin("Login")}}>
                        {btnLogin}
                    </button>
                    <li className="m-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;