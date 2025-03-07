import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const {user} = useContext(AuthContext);
    const {logOut} = useContext(AuthContext);
    const menus = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {
            user && <>
                <li><NavLink to="/orders">Orders</NavLink></li>
            </>
        }
        {/* {
            !user && <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Registration</NavLink></li>
            </>
        } */}
        
    </>
    const handleSignOut =()=>{
        logOut()
        .then(result=>{
            console.log("User logged out successfully", result);
        })
        .catch(error=>{
            console.error("Failed to log out user", error);
        })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                {" "}
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {menus}
            </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost text-xl">AuthProvider</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {menus}
            </ul>
        </div>
        <div className="navbar-end">
            {
                user ?
                <>
                    <p>{user?.email}</p>
                    <button className="btn" onClick={handleSignOut}>SignOut</button>
                </>
                :
                <>
                    <NavLink className="btn btn-primary me-2" to="/login">Login</NavLink>
                    <NavLink className="btn btn-primary" to="/register">Register</NavLink>
                </>
            }
        </div>
        </div>
    );
};

export default Navbar;
