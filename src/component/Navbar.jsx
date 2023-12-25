import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success("logout successfull")
        return navigate("/");
    };

    const navLinks = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/courses'>Courses</NavLink>
        </li>

        {
            token &&
            <li>
                <NavLink to='/createCourses'>Add Courses</NavLink>
            </li>
        }



    </>



    return (
        <div className="sticky top-0 z-20 bg-success">
            <div className="navbar items-center w-[90%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="flex flex-col gap-4 dropdown-content mt-3 p-6 shadow rounded-box w-52 z-20 bg-[#3d7e34] text-white">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="font-title text-xl md:text-2xl text-title-color font-bold w-full">
                        <Link to='/'>
                            {/* <img className="hidden md:block w-[10%] object-cover" src={logo} alt="" /> */}
                            <h2 className="text-white text-2xl">Course Pro</h2>
                        </Link>
                    </div>
                </div>
                {/* <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 px-1 text-white">
                        {navLinks}
                    </ul>
                </div> */}
                <div className="navbar-end items-center space-x-3">
                    <ul className=" gap-6 px-1 text-white hidden lg:flex">
                        {navLinks}
                    </ul>
                    {
                        token ?
                            <button
                            onClick={handleLogout} 
                            className="btn btn-error text-white border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 text-base hover:bg-bg-primary capitalize hover:text-white ml-3">logout</button>
                            :
                            <Link to='/signIn'>
                                <button className="btn text-black border-0 h-fit min-h-fit px-4 py-2 md:px-6 md:py-2 text-base ml-3">login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;