import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="w-full navbar flex  bg-base-300">
                        <div className="lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="hidden lg:block">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink>About</NavLink>
                        </div>
                        <div className="">
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
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