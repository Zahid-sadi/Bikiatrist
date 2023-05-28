import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const navItems = <>
    <li><Link to="">home</Link></li>
    <li><Link to="/orders">orders</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 mb-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="normal-case text-xl">
                        Bikiatrist
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                       
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link className="rounded-s-lg bg-lime-500 p-3" to ='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
