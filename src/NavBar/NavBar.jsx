import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className=" navbar flex justify-around  bg-red-300">
                        <div className="lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="btn btn-wide">
                            <NavLink to='/'>TO DO </NavLink >
                        </div>
                        <div className="hidden text-2xl font-bold lg:block">
                            <NavLink to='/' className="px-12">Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                        </div>
                        <div className="">
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <Link to='signIn'>Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;