import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const navItems = <>
    <li><Link to="/">home</Link></li>
    <li><Link to="/orders">orders</Link></li>

    </>
    return (
        <div>
            <div className="navbar -mb-12 fixed  text-neutral-content  h-10  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost hover:bg-red-600 lg:hidden">
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
                            className="menu menu-compact dropdown-content mt-3 p-2 hover:bg-orange-500 w-52">
                                {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="normal-case text-2xl font-bold text-amber-700">
                        Bikeatrist
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 hover:text-orange-500">
                        {navItems}
                       
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link className="rounded-s-lg bg-orange-900 p-3" to ='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
