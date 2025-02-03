import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-yellow-300					text-blue-800			">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        

                    <li className="mx-6"><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/courses'>Courses</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                       
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost text-xl">Web-Course</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold	text-lg	">
                    <li className="mx-6"><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                   
                </ul>
                
            </div>
        </div>
    );
};

export default Header;